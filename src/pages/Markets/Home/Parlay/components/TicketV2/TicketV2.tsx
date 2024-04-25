import ApprovalModal from 'components/ApprovalModal';
import Button from 'components/Button';
import CollateralSelector from 'components/CollateralSelector';
import Tooltip from 'components/Tooltip';
import Checkbox from 'components/fields/Checkbox';
import NumericInput from 'components/fields/NumericInput';
import { getErrorToastOptions, getSuccessToastOptions } from 'config/toast';
import { PLAUSIBLE, PLAUSIBLE_KEYS } from 'constants/analytics';
import { CRYPTO_CURRENCY_MAP, USD_SIGN } from 'constants/currency';
import {
    APPROVAL_BUFFER,
    MIN_COLLATERAL_MULTIPLIER,
    PARLAY_LEADERBOARD_MINIMUM_GAMES,
    PARLAY_LEADERBOARD_WEEKLY_START_DATE,
} from 'constants/markets';
import { ZERO_ADDRESS } from 'constants/network';
import { differenceInDays } from 'date-fns';
import { OddsType } from 'enums/markets';
import { Network } from 'enums/network';
import { BigNumber, ethers } from 'ethers';
import useAMMContractsPausedQuery from 'queries/markets/useAMMContractsPausedQuery';
import { useParlayLeaderboardQuery } from 'queries/markets/useParlayLeaderboardQuery';
import useSportsAmmDataQuery from 'queries/markets/useSportsAmmDataQuery';
import useExchangeRatesQuery, { Rates } from 'queries/rates/useExchangeRatesQuery';
import useMultipleCollateralBalanceQuery from 'queries/wallet/useMultipleCollateralBalanceQuery';
import useOvertimeVoucherQuery from 'queries/wallet/useOvertimeVoucherQuery';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getIsAppReady } from 'redux/modules/app';
import { getTicketPayment, removeAll, setPaymentAmountToBuy } from 'redux/modules/ticket';
import { getOddsType } from 'redux/modules/ui';
import {
    getIsAA,
    getIsConnectedViaParticle,
    getIsWalletConnected,
    getNetworkId,
    getWalletAddress,
    setWalletConnectModalVisibility,
} from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled, { useTheme } from 'styled-components';
import { FlexDiv, FlexDivCentered, FlexDivColumn, FlexDivRow } from 'styles/common';
import {
    bigNumberFormatter,
    ceilNumberToDecimals,
    coinFormatter,
    coinParser,
    formatCurrency,
    formatCurrencyWithKey,
    formatCurrencyWithSign,
    formatPercentage,
    getDefaultDecimalsForNetwork,
    getPrecision,
    roundNumberToDecimals,
} from 'thales-utils';
import { LeaderboardPoints, SportsAmmData, TicketMarket } from 'types/markets';
import { Coins } from 'types/tokens';
import { ThemeInterface } from 'types/ui';
import { executeBiconomyTransaction, getGasFeesForTx } from 'utils/biconomy';
import {
    getCollateral,
    getCollateralAddress,
    getCollateralIndex,
    getCollaterals,
    getDefaultCollateral,
    isStableCurrency,
} from 'utils/collaterals';
import { formatMarketOdds } from 'utils/markets';
import { getTradeData } from 'utils/marketsV2';
import { checkAllowance } from 'utils/network';
import networkConnector from 'utils/networkConnector';
import { refetchBalances } from 'utils/queryConnector';
import { getReferralId } from 'utils/referral';
import { getSportsAMMV2QuoteMethod, getSportsAMMV2Transaction } from 'utils/sportsAmmV2';
import { getKeepSelectionFromStorage, setKeepSelectionToStorage } from 'utils/ui';
import { getRewardsArray, getRewardsCurrency } from '../../../../../ParlayLeaderboard/ParlayLeaderboard';
import ShareTicketModalV2 from '../ShareTicketModalV2';
import { ShareTicketModalProps } from '../ShareTicketModalV2/ShareTicketModalV2';
import SuggestedAmount from '../SuggestedAmount';
import Voucher from '../Voucher';
import {
    AmountToBuyContainer,
    CheckboxContainer,
    GasSummary,
    HorizontalLine,
    InfoTooltip,
    InputContainer,
    RowContainer,
    RowSummary,
    ShareWrapper,
    SummaryLabel,
    SummaryValue,
    TwitterIcon,
    XButton,
    defaultButtonProps,
} from '../styled-components';

import { getLiveTradingProcessorTransaction } from 'utils/liveTradingProcessor';

type TicketProps = {
    markets: TicketMarket[];
    setMarketsOutOfLiquidity: (indexes: number[]) => void;
};

const TicketErrorMessage = {
    RISK_PER_COMB: 'RiskPerComb exceeded',
    SAME_TEAM_IN_PARLAY: 'SameTeamOnParlay',
};

const Ticket: React.FC<TicketProps> = ({ markets, setMarketsOutOfLiquidity }) => {
    const { t } = useTranslation();
    const theme: ThemeInterface = useTheme();

    const dispatch = useDispatch();

    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';
    const isAA = useSelector((state: RootState) => getIsAA(state));
    const isParticle = useSelector((state: RootState) => getIsConnectedViaParticle(state));
    const selectedOddsType = useSelector(getOddsType);
    const ticketPayment = useSelector(getTicketPayment);
    const selectedCollateralIndex = ticketPayment.selectedCollateralIndex;
    const isVoucherSelected = ticketPayment.isVoucherSelected;
    const collateralAmountValue = ticketPayment.amountToBuy;

    const [totalBuyAmount, setTotalBuyAmount] = useState(0);
    const [usdAmountValue, setUsdAmountValue] = useState<number>(0);
    const [minUsdAmountValue, setMinUsdAmountValue] = useState<number>(0);
    const [minCollateralAmountValue, setMinCollateralAmountValue] = useState<number>(0);
    const [totalQuote, setTotalQuote] = useState(0);
    const [finalQuotes, setFinalQuotes] = useState<number[]>([]);

    const [isAMMPaused, setIsAMMPaused] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [hasAllowance, setHasAllowance] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [isAllowing, setIsAllowing] = useState(false);
    const [isBuying, setIsBuying] = useState(false);
    const [tooltipTextCollateralAmount, setTooltipTextCollateralAmount] = useState<string>('');

    const [openApprovalModal, setOpenApprovalModal] = useState(false);
    const [showShareTicketModal, setShowShareTicketModal] = useState(false);
    const [shareTicketModalData, setShareTicketModalData] = useState<ShareTicketModalProps | undefined>(undefined);
    const [keepSelection, setKeepSelection] = useState<boolean>(getKeepSelectionFromStorage() || false);

    const [allowedLiveTrade, setAllowedLiveTrade] = useState(false);
    const [processingLiveTrade, setProcessingLiveTrade] = useState(false);

    const [gas, setGas] = useState(0);
    const [leaderboardPoints, setLeaderBoardPoints] = useState<LeaderboardPoints>({
        basicPoints: 0,
        points: 0,
        buyinBonus: 0,
        numberOfGamesBonus: 0,
    });
    const [currentLeaderboardRank, setCurrentLeaderboardRank] = useState<number>(0);

    const latestPeriodWeekly = Math.trunc(differenceInDays(new Date(), PARLAY_LEADERBOARD_WEEKLY_START_DATE) / 7);

    const query = useParlayLeaderboardQuery(networkId, latestPeriodWeekly, { enabled: isAppReady });

    const parlaysData = useMemo(() => {
        return query.isSuccess ? query.data : [];
    }, [query.isSuccess, query.data]);

    const rewards = getRewardsArray(networkId);
    const rewardsCurrency = getRewardsCurrency(networkId);

    const defaultCollateral = useMemo(() => getDefaultCollateral(networkId), [networkId]);
    const selectedCollateral = useMemo(() => getCollateral(networkId, selectedCollateralIndex), [
        networkId,
        selectedCollateralIndex,
    ]);
    const isEth = selectedCollateral === CRYPTO_CURRENCY_MAP.ETH;
    const collateralAddress = useMemo(
        () =>
            getCollateralAddress(
                networkId,
                isEth ? getCollateralIndex(networkId, CRYPTO_CURRENCY_MAP.WETH as Coins) : selectedCollateralIndex
            ),
        [networkId, selectedCollateralIndex, isEth]
    );
    const isDefaultCollateral = selectedCollateral === defaultCollateral;
    const isStableCollateral = isStableCurrency(selectedCollateral);

    const isMinimumParlayGames = markets.length >= PARLAY_LEADERBOARD_MINIMUM_GAMES;

    // Used for cancelling the subscription and asynchronous tasks in a useEffect
    const mountedRef = useRef(true);
    useEffect(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const ammContractsPaused = useAMMContractsPausedQuery(networkId, {
        enabled: isAppReady,
    });

    const ammContractsStatusData = useMemo(() => {
        if (ammContractsPaused.data && ammContractsPaused.isSuccess) {
            return ammContractsPaused.data;
        }
    }, [ammContractsPaused.data, ammContractsPaused.isSuccess]);

    useEffect(() => {
        if (ammContractsStatusData?.sportsAMM) {
            setIsAMMPaused(true);
        }
    }, [ammContractsStatusData]);

    const parlayAmmDataQuery = useSportsAmmDataQuery(networkId, {
        enabled: isAppReady,
    });
    const multipleCollateralBalances = useMultipleCollateralBalanceQuery(walletAddress, networkId, {
        enabled: isAppReady && isWalletConnected,
    });
    const overtimeVoucherQuery = useOvertimeVoucherQuery(walletAddress, networkId, {
        enabled: isAppReady && isWalletConnected,
    });

    const parlayAmmData: SportsAmmData | undefined = useMemo(() => {
        if (parlayAmmDataQuery.isSuccess && parlayAmmDataQuery.data) {
            return parlayAmmDataQuery.data;
        }
        return undefined;
    }, [parlayAmmDataQuery.isSuccess, parlayAmmDataQuery.data]);

    const overtimeVoucher = useMemo(() => {
        if (overtimeVoucherQuery.isSuccess && overtimeVoucherQuery.data) {
            return overtimeVoucherQuery.data;
        }
        return undefined;
    }, [overtimeVoucherQuery.isSuccess, overtimeVoucherQuery.data]);

    const paymentTokenBalance: number = useMemo(() => {
        if (overtimeVoucher && isVoucherSelected) {
            return overtimeVoucher.remainingAmount;
        }
        if (multipleCollateralBalances.data && multipleCollateralBalances.isSuccess) {
            return multipleCollateralBalances.data[selectedCollateral];
        }
        return 0;
    }, [
        multipleCollateralBalances.data,
        multipleCollateralBalances.isSuccess,
        selectedCollateral,
        overtimeVoucher,
        isVoucherSelected,
    ]);

    const exchangeRatesQuery = useExchangeRatesQuery(networkId, {
        enabled: isAppReady,
    });
    const exchangeRates: Rates | null =
        exchangeRatesQuery.isSuccess && exchangeRatesQuery.data ? exchangeRatesQuery.data : null;

    const rewardCurrencyRate = exchangeRates && exchangeRates !== null ? exchangeRates[rewardsCurrency] : 0;

    useEffect(() => {
        setMinUsdAmountValue(parlayAmmData?.minBuyInAmount || 0);
    }, [parlayAmmData?.minBuyInAmount]);

    // Clear Parlay when network is changed
    const isMounted = useRef(false);
    useEffect(() => {
        // skip first render
        if (isMounted.current) {
            dispatch(removeAll());
        } else {
            isMounted.current = true;
        }
    }, [dispatch, networkId]);

    const fetchParlayAmmQuote = useCallback(
        async (collateralAmountForQuote: number) => {
            if (Number(collateralAmountForQuote) <= 0) return;

            const { sportsAMMV2Contract, multiCollateralOnOffRampContract } = networkConnector;
            if (sportsAMMV2Contract && minUsdAmountValue) {
                const tradeData = getTradeData(markets);

                try {
                    const [minimumReceivedForCollateralAmount, minimumNeededForMinUsdAmountValue] = await Promise.all([
                        isDefaultCollateral
                            ? 0
                            : multiCollateralOnOffRampContract?.getMinimumReceived(
                                  collateralAddress,
                                  coinParser(collateralAmountForQuote.toString(), networkId, selectedCollateral)
                              ),
                        isDefaultCollateral
                            ? 0
                            : multiCollateralOnOffRampContract?.getMinimumNeeded(
                                  collateralAddress,
                                  coinParser(minUsdAmountValue.toString(), networkId)
                              ),
                    ]);

                    const usdPaid = isDefaultCollateral
                        ? coinParser(collateralAmountForQuote.toString(), networkId)
                        : minimumReceivedForCollateralAmount;

                    // const minUsdPaid = coinParser(minUsdAmountValue.toString(), networkId);

                    setUsdAmountValue(coinFormatter(usdPaid, networkId));
                    setMinCollateralAmountValue(
                        isDefaultCollateral
                            ? minUsdAmountValue
                            : coinFormatter(minimumNeededForMinUsdAmountValue, networkId, selectedCollateral) *
                                  MIN_COLLATERAL_MULTIPLIER
                    );

                    const [parlayAmmQuote /*, minParlayAmmQuote*/] = await Promise.all([
                        getSportsAMMV2QuoteMethod(
                            collateralAddress,
                            isDefaultCollateral,
                            sportsAMMV2Contract,
                            tradeData,
                            usdPaid
                        ),
                        // getParlayMarketsAMMQuoteMethod(
                        //     collateralAddress,
                        //     isDefaultCollateral,
                        //     sportsAMMV2Contract,
                        //     marketsAddresses,
                        //     selectedPositions,
                        //     minUsdPaid
                        // ),
                    ]);

                    return {
                        ...parlayAmmQuote,
                        usdPaid,
                        // minimumCollateralAmountTotalQuote: minParlayAmmQuote['totalQuote'],
                    };
                } catch (e: any) {
                    const errorMessage = e.error?.data?.message;
                    if (errorMessage) {
                        if (errorMessage.includes(TicketErrorMessage.RISK_PER_COMB)) {
                            return { error: TicketErrorMessage.RISK_PER_COMB };
                        } else if (errorMessage.includes(TicketErrorMessage.SAME_TEAM_IN_PARLAY)) {
                            return { error: TicketErrorMessage.SAME_TEAM_IN_PARLAY };
                        }
                    }
                    console.log(e);
                    return { error: errorMessage };
                }
            }
        },
        [networkId, markets, minUsdAmountValue, selectedCollateral, collateralAddress, isDefaultCollateral]
    );

    useEffect(() => {
        const { sportsAMMV2Contract, sUSDContract, signer, multipleCollateral } = networkConnector;
        if (sportsAMMV2Contract && multipleCollateral && signer) {
            const collateralContractWithSigner = isDefaultCollateral
                ? sUSDContract?.connect(signer)
                : multipleCollateral[selectedCollateral]?.connect(signer);

            const getAllowance = async () => {
                try {
                    const parsedTicketPrice = coinParser(
                        Number(collateralAmountValue).toString(),
                        networkId,
                        selectedCollateral
                    );
                    const allowance = await checkAllowance(
                        parsedTicketPrice,
                        collateralContractWithSigner,
                        walletAddress,
                        sportsAMMV2Contract.address
                    );
                    if (!mountedRef.current) return null;
                    setHasAllowance(allowance);
                } catch (e) {
                    console.log(e);
                }
            };
            if (isWalletConnected && collateralAmountValue) {
                isVoucherSelected || isEth ? setHasAllowance(true) : getAllowance();
            }
        }
    }, [
        walletAddress,
        isWalletConnected,
        hasAllowance,
        isAllowing,
        collateralAmountValue,
        selectedCollateralIndex,
        isVoucherSelected,
        networkId,
        selectedCollateral,
        isEth,
        isDefaultCollateral,
    ]);

    useEffect(() => {
        const { sportsAMMV2Contract, liveTradingProcessorContract } = networkConnector;
        if (sportsAMMV2Contract && liveTradingProcessorContract) {
            const setLiveTradingListeners = async () => {
                try {
                    liveTradingProcessorContract.removeAllListeners('LiveTradeFullfilled');
                    const filter = liveTradingProcessorContract.filters.LiveTradeFullfilled(walletAddress);
                    liveTradingProcessorContract.on(
                        filter,
                        (
                            recipient,
                            allow,
                            gameId,
                            sportId,
                            typeId,
                            position,
                            buyInAmount,
                            expectedPayout,
                            collateral
                        ) => {
                            if (isWalletConnected) {
                                if (allow) {
                                    setAllowedLiveTrade(true);
                                    setProcessingLiveTrade(false);
                                } else {
                                    setAllowedLiveTrade(false);
                                    setProcessingLiveTrade(false);
                                }
                                console.log('LiveTradeFulfilled event triggered:', {
                                    recipient: recipient,
                                    allow: allow,
                                    gameId: gameId,
                                    sportId: sportId,
                                    typeId: typeId,
                                    position: position,
                                    buyInAmount: buyInAmount,
                                    expectedPayout: expectedPayout,
                                    collateral: collateral,
                                });
                            }
                        }
                    );
                } catch (e) {
                    console.log(e);
                }
            };
            setLiveTradingListeners();
        }
    }, [walletAddress, isWalletConnected]);

    const handleAllowance = async (approveAmount: BigNumber) => {
        const { sportsAMMV2Contract, sUSDContract, signer, multipleCollateral } = networkConnector;
        if (sportsAMMV2Contract && multipleCollateral && signer) {
            setIsAllowing(true);
            const id = toast.loading(t('market.toast-message.transaction-pending'));
            try {
                const collateralContractWithSigner = isDefaultCollateral
                    ? sUSDContract?.connect(signer)
                    : multipleCollateral[selectedCollateral]?.connect(signer);

                const addressToApprove = sportsAMMV2Contract.address;
                let txResult;
                if (isAA) {
                    txResult = await executeBiconomyTransaction(
                        collateralContractWithSigner?.address ?? '',
                        collateralContractWithSigner,
                        'approve',
                        [addressToApprove, approveAmount]
                    );
                } else {
                    const tx = (await collateralContractWithSigner?.approve(
                        addressToApprove,
                        approveAmount
                    )) as ethers.ContractTransaction;
                    setOpenApprovalModal(false);
                    txResult = await tx.wait();
                }

                if (txResult && txResult.transactionHash) {
                    setIsAllowing(false);
                    toast.update(id, getSuccessToastOptions(t('market.toast-message.approve-success')));
                }
            } catch (e) {
                toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                console.log(e);
                setIsAllowing(false);
            }
        }
    };

    const handleSubmit = async () => {
        const {
            sportsAMMV2Contract,
            /*overtimeVoucherContract,*/ signer,
            liveTradingProcessorContract,
        } = networkConnector;
        if (sportsAMMV2Contract && /* overtimeVoucherContract && */ signer && liveTradingProcessorContract) {
            setIsBuying(true);
            const sportsAMMV2ContractWithSigner = sportsAMMV2Contract.connect(signer);
            // const overtimeVoucherContractWithSigner = overtimeVoucherContract.connect(signer);
            const liveTradingProcessorContractWithSigner = liveTradingProcessorContract.connect(signer);
            const id = toast.loading(t('market.toast-message.transaction-pending'));

            try {
                const referralId =
                    walletAddress && getReferralId()?.toLowerCase() !== walletAddress.toLowerCase()
                        ? getReferralId()
                        : null;

                const tradeData = getTradeData(markets);
                const collateralPaid = coinParser(collateralAmountValue.toString(), networkId, selectedCollateral);
                const usdPaid = coinParser(usdAmountValue.toString(), networkId);
                const expectedPayout = coinParser(totalBuyAmount.toString(), networkId);
                const additionalSlippage = ethers.utils.parseEther('0.02');

                let tx;
                if (tradeData[0].live) {
                    setProcessingLiveTrade(true);
                    tx = await getLiveTradingProcessorTransaction(
                        isVoucherSelected,
                        collateralAddress,
                        liveTradingProcessorContractWithSigner,
                        tradeData,
                        usdPaid,
                        expectedPayout,
                        referralId,
                        additionalSlippage,
                        isAA
                    );
                } else {
                    tx = await getSportsAMMV2Transaction(
                        isVoucherSelected,
                        overtimeVoucher ? overtimeVoucher.id : 0,
                        collateralAddress,
                        isDefaultCollateral,
                        isEth,
                        networkId,
                        sportsAMMV2ContractWithSigner,
                        sportsAMMV2ContractWithSigner,
                        // overtimeVoucherContractWithSigner,
                        tradeData,
                        usdPaid,
                        collateralPaid,
                        expectedPayout,
                        referralId,
                        additionalSlippage,
                        isAA
                    );
                }

                const txResult = isAA ? tx : await tx.wait();

                if (txResult && txResult.transactionHash) {
                    PLAUSIBLE.trackEvent(PLAUSIBLE_KEYS.parlayBuy, {
                        props: {
                            value: Number(collateralAmountValue),
                            collateral: selectedCollateral,
                            networkId,
                        },
                    });
                    if (tradeData[0].live) {
                        while (processingLiveTrade) {}
                        if (allowedLiveTrade) {
                            refetchBalances(walletAddress, networkId);
                            toast.update(id, getSuccessToastOptions(t('market.toast-message.buy-success')));
                            setIsBuying(false);
                            setCollateralAmount('');
                            if (!keepSelection) dispatch(removeAll());
                            setAllowedLiveTrade(false);
                        } else {
                            setIsBuying(false);
                            refetchBalances(walletAddress, networkId);
                            toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                        }
                    } else {
                        refetchBalances(walletAddress, networkId);
                        toast.update(id, getSuccessToastOptions(t('market.toast-message.buy-success')));
                        setIsBuying(false);
                        setCollateralAmount('');
                        if (!keepSelection) dispatch(removeAll());
                    }
                }
            } catch (e) {
                setIsBuying(false);
                refetchBalances(walletAddress, networkId);
                toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                console.log('Error ', e);
            }
        }
    };

    useEffect(() => {
        if (isAMMPaused) {
            setSubmitDisabled(true);
            return;
        }

        // Minimum of sUSD
        if (
            !Number(collateralAmountValue) ||
            Number(collateralAmountValue) < minCollateralAmountValue ||
            isBuying ||
            isAllowing
        ) {
            setSubmitDisabled(true);
            return;
        }

        // Enable Approve if it hasn't allowance
        if (!hasAllowance) {
            setSubmitDisabled(false);
            return;
        }

        // Validation message is present
        if (tooltipTextCollateralAmount) {
            setSubmitDisabled(true);
            return;
        }

        // Not enough funds
        setSubmitDisabled(!paymentTokenBalance || Number(collateralAmountValue) > paymentTokenBalance);
    }, [
        collateralAmountValue,
        isBuying,
        isAllowing,
        hasAllowance,
        paymentTokenBalance,
        totalQuote,
        tooltipTextCollateralAmount,
        minUsdAmountValue,
        isAMMPaused,
        minCollateralAmountValue,
    ]);

    const getSubmitButton = () => {
        if (isAMMPaused) {
            return (
                <Button disabled={submitDisabled} {...defaultButtonProps}>
                    {t('markets.parlay.validation.amm-contract-paused')}
                </Button>
            );
        }

        if (!isWalletConnected) {
            return (
                <Button
                    onClick={() =>
                        dispatch(
                            setWalletConnectModalVisibility({
                                visibility: true,
                            })
                        )
                    }
                    {...defaultButtonProps}
                >
                    {t('common.wallet.connect-your-wallet')}
                </Button>
            );
        }

        // Show Approve only on valid input buy amount
        if (!hasAllowance && collateralAmountValue && Number(collateralAmountValue) >= minCollateralAmountValue) {
            return (
                <Button
                    disabled={submitDisabled}
                    onClick={() =>
                        isParticle ? handleAllowance(ethers.constants.MaxUint256) : setOpenApprovalModal(true)
                    }
                    {...defaultButtonProps}
                >
                    {t('common.wallet.approve')}
                </Button>
            );
        }

        return (
            <Button disabled={submitDisabled} onClick={async () => handleSubmit()} {...defaultButtonProps}>
                {t(`common.buy-side`)}
            </Button>
        );
    };

    const isValidProfit: boolean = useMemo(() => {
        return (
            parlayAmmData?.maxSupportedAmount !== undefined &&
            totalBuyAmount - Number(usdAmountValue) > parlayAmmData?.maxSupportedAmount
        );
    }, [parlayAmmData?.maxSupportedAmount, totalBuyAmount, usdAmountValue]);

    const setTooltipTextMessageUsdAmount = useCallback(
        (value: string | number, quotes: number[], error?: string) => {
            if (error) {
                switch (error) {
                    case TicketErrorMessage.RISK_PER_COMB:
                        setTooltipTextCollateralAmount(t('markets.parlay.validation.risk-per-comb'));
                        return;
                    case TicketErrorMessage.SAME_TEAM_IN_PARLAY:
                        setTooltipTextCollateralAmount(t('markets.parlay.validation.same-team'));
                        return;
                    default:
                        setTooltipTextCollateralAmount(t('markets.parlay.validation.not-supported', { error }));
                }
            } else if (quotes.some((quote) => quote === 0)) {
                setTooltipTextCollateralAmount(t('markets.parlay.validation.availability'));
            } else if (value && Number(value) < minCollateralAmountValue) {
                const decimals = getPrecision(minCollateralAmountValue);
                setTooltipTextCollateralAmount(
                    t('markets.parlay.validation.min-amount', {
                        min: `${formatCurrencyWithKey(
                            selectedCollateral,
                            ceilNumberToDecimals(minCollateralAmountValue, decimals),
                            decimals
                        )}${
                            isDefaultCollateral
                                ? ''
                                : ` (${formatCurrencyWithSign(
                                      USD_SIGN,
                                      ceilNumberToDecimals(minUsdAmountValue * MIN_COLLATERAL_MULTIPLIER),
                                      2
                                  )})`
                        }`,
                    })
                );
            } else if (isValidProfit) {
                setTooltipTextCollateralAmount(
                    t('markets.parlay.validation.max-profit', {
                        max: formatCurrencyWithSign(USD_SIGN, parlayAmmData?.maxSupportedAmount || 0),
                    })
                );
            } else if (Number(value) > paymentTokenBalance) {
                setTooltipTextCollateralAmount(t('markets.parlay.validation.no-funds'));
            } else {
                setTooltipTextCollateralAmount('');
            }
        },
        [
            parlayAmmData?.maxSupportedAmount,
            minUsdAmountValue,
            t,
            paymentTokenBalance,
            isValidProfit,
            minCollateralAmountValue,
            selectedCollateral,
            isDefaultCollateral,
        ]
    );

    useEffect(() => {
        let isSubscribed = true; // Use for race condition

        const fetchData = async () => {
            setIsFetching(true);
            const { sportsAMMV2Contract } = networkConnector;
            if (sportsAMMV2Contract && Number(collateralAmountValue) >= 0 && minUsdAmountValue) {
                const parlayAmmQuote = await fetchParlayAmmQuote(Number(collateralAmountValue));

                if (!mountedRef.current || !isSubscribed || !parlayAmmQuote) return null;

                if (!parlayAmmQuote.error) {
                    // const parlayAmmTotalQuote = bigNumberFormatter(parlayAmmQuote['totalQuote']);
                    const parlayAmmTotalBuyAmount = bigNumberFormatter(
                        parlayAmmQuote['payout'],
                        getDefaultDecimalsForNetwork(networkId)
                    );

                    setTotalQuote(
                        1 /
                            (parlayAmmTotalBuyAmount /
                                (isStableCollateral ? Number(collateralAmountValue) : Number(usdAmountValue)))
                    );
                    setTotalBuyAmount(parlayAmmTotalBuyAmount);

                    const fetchedFinalQuotes: number[] = (parlayAmmQuote['finalQuotes'] || []).map((quote: BigNumber) =>
                        bigNumberFormatter(quote, getDefaultDecimalsForNetwork(networkId))
                    );
                    // Update markets (using order index) which are out of liquidity
                    const marketsOutOfLiquidity = fetchedFinalQuotes
                        .map((finalQuote, index) => (finalQuote === 0 ? index : -1))
                        .filter((index) => index !== -1);
                    setMarketsOutOfLiquidity(marketsOutOfLiquidity);

                    setFinalQuotes(fetchedFinalQuotes);

                    // const baseQuote = bigNumberFormatter(parlayAmmQuote['minimumCollateralAmountTotalQuote']);

                    setTooltipTextMessageUsdAmount(collateralAmountValue, fetchedFinalQuotes);
                } else {
                    setMarketsOutOfLiquidity([]);
                    setTotalQuote(0);
                    setTotalBuyAmount(0);
                    setTooltipTextMessageUsdAmount(0, [], parlayAmmQuote.error);
                }
            }
            setIsFetching(false);
        };
        fetchData().catch((e) => console.log(e));

        return () => {
            isSubscribed = false;
        };
    }, [
        collateralAmountValue,
        fetchParlayAmmQuote,
        setTooltipTextMessageUsdAmount,
        minUsdAmountValue,
        setMarketsOutOfLiquidity,
        markets,
        networkId,
        usdAmountValue,
        isStableCollateral,
    ]);

    useEffect(() => {
        setTooltipTextMessageUsdAmount(collateralAmountValue, finalQuotes);
    }, [isVoucherSelected, setTooltipTextMessageUsdAmount, collateralAmountValue, finalQuotes]);

    const setCollateralAmount = (value: string | number) => {
        dispatch(setPaymentAmountToBuy(value));
        setTooltipTextMessageUsdAmount(value, finalQuotes);
    };

    const inputRef = useRef<HTMLDivElement>(null);
    const inputRefVisible = !!inputRef?.current?.getBoundingClientRect().width;

    const getQuoteTooltipText = () => {
        return selectedOddsType === OddsType.AMM
            ? t('markets.parlay.info.min-quote', {
                  value: formatMarketOdds(selectedOddsType, parlayAmmData?.maxSupportedOdds),
              })
            : t('markets.parlay.info.max-quote', {
                  value: formatMarketOdds(selectedOddsType, parlayAmmData?.maxSupportedOdds),
              });
    };

    const hidePayout =
        Number(collateralAmountValue) <= 0 ||
        Number(collateralAmountValue) < minCollateralAmountValue ||
        totalBuyAmount === 0 ||
        // hide when validation tooltip exists except in case of invalid profit and not enough funds
        (tooltipTextCollateralAmount && !isValidProfit && Number(collateralAmountValue) < paymentTokenBalance) ||
        isFetching;

    const profitPercentage = (totalBuyAmount - Number(usdAmountValue)) / Number(usdAmountValue);

    const onModalClose = useCallback(() => {
        setShowShareTicketModal(false);
    }, []);

    const twitterShareDisabled = submitDisabled || !hasAllowance;
    const onTwitterIconClick = () => {
        //create data copy to avoid modal re-render while opened
        const modalData: ShareTicketModalProps = {
            markets: [...markets],
            multiSingle: false,
            paid: Number(usdAmountValue),
            payout: totalBuyAmount,
            onClose: onModalClose,
            isTicketLost: false,
            isTicketResolved: false,
        };
        setShareTicketModalData(modalData);
        setShowShareTicketModal(!twitterShareDisabled);
    };

    useEffect(() => {
        const setGasFee = async () => {
            const { sportsAMMV2Contract, sUSDContract, signer, multipleCollateral } = networkConnector;
            if (!signer) return;
            if (!multipleCollateral) return;
            if (!sportsAMMV2Contract) return;

            const tradeData = getTradeData(markets);
            const usdPaid = coinParser(usdAmountValue.toString(), networkId);
            const expectedPayout = ethers.utils.parseEther(roundNumberToDecimals(totalBuyAmount).toString());
            const additionalSlippage = ethers.utils.parseEther('0.02');

            if (!hasAllowance) {
                const collateralContractWithSigner = isDefaultCollateral
                    ? sUSDContract?.connect(signer)
                    : multipleCollateral[selectedCollateral]?.connect(signer);

                const addressToApprove = sportsAMMV2Contract.address;

                const gas = await getGasFeesForTx(
                    collateralContractWithSigner?.address ?? '',
                    collateralContractWithSigner,
                    'approve',
                    [addressToApprove, ethers.constants.MaxUint256]
                );

                setGas(gas as number);
            } else {
                const gas = await getGasFeesForTx(collateralAddress, sportsAMMV2Contract, 'buyFromParlay', [
                    tradeData,
                    usdPaid,
                    expectedPayout,
                    additionalSlippage,
                    ZERO_ADDRESS,
                    ZERO_ADDRESS,
                    ZERO_ADDRESS,
                    isDefaultCollateral ? collateralAddress : ZERO_ADDRESS,
                    isEth,
                ]);

                setGas(gas as number);
            }
        };
        if (isAA) setGasFee();
    }, [
        collateralAddress,
        markets,
        usdAmountValue,
        networkId,
        totalBuyAmount,
        isDefaultCollateral,
        isAA,
        hasAllowance,
        selectedCollateral,
        isEth,
    ]);
    useEffect(() => {
        if (usdAmountValue > 0 && totalQuote > 0 && false) {
            const buyInPow = Math.pow(usdAmountValue, 1 / 2);
            const minBuyInPow = 1;

            const basicPoints = 1 / totalQuote;
            const points = (1 / totalQuote) * (1 + 0.1 * markets.length) * buyInPow;
            const buyinBonus = buyInPow - minBuyInPow;
            const numberOfGamesBonus = 0.1 * markets.length;
            setLeaderBoardPoints({
                basicPoints,
                points,
                buyinBonus,
                numberOfGamesBonus,
            });

            const current = !!parlaysData ? parlaysData.findIndex((data) => data.points < points) : 0;
            if (parlaysData.length === 0) {
                setCurrentLeaderboardRank(1);
            } else {
                if (current === -1) {
                    setCurrentLeaderboardRank(parlaysData.length + 1);
                } else {
                    setCurrentLeaderboardRank(current + 1);
                }
            }
        }
    }, [usdAmountValue, totalQuote, markets.length, parlaysData]);

    const getPointsTooltip = () => (
        <TooltipContainer>
            <TooltipInfoContianer>
                <TooltipInfoLabel>{t(`parlay-leaderboard.ticket-info.basic-points-label`)}:</TooltipInfoLabel>
                <TooltipInfo>{formatCurrency(leaderboardPoints.basicPoints)}</TooltipInfo>
            </TooltipInfoContianer>
            <TooltipInfoContianer>
                <TooltipInfoLabel>{t(`parlay-leaderboard.ticket-info.buy-in-bonus-label`)}:</TooltipInfoLabel>
                <TooltipBonusInfo>{`+${formatPercentage(leaderboardPoints.buyinBonus, 0)}`}</TooltipBonusInfo>
            </TooltipInfoContianer>
            <TooltipInfoContianer>
                <TooltipInfoLabel>{t(`parlay-leaderboard.ticket-info.number-of-games-bonus-label`)}:</TooltipInfoLabel>
                <TooltipBonusInfo>{`+${formatPercentage(leaderboardPoints.numberOfGamesBonus, 0)}`}</TooltipBonusInfo>
            </TooltipInfoContianer>
            <TooltipFooter>
                <TooltipInfoContianer>
                    <TooltipInfoLabel>{t(`parlay-leaderboard.ticket-info.total-points-label`)}:</TooltipInfoLabel>
                    <TooltipInfo>{formatCurrency(leaderboardPoints.points)}</TooltipInfo>
                </TooltipInfoContianer>
            </TooltipFooter>
        </TooltipContainer>
    );

    return (
        <>
            <RowSummary columnDirection={true}>
                <RowContainer>
                    <SummaryLabel>{t('markets.parlay.total-quote')}:</SummaryLabel>
                    <InfoTooltip
                        open={inputRefVisible && totalQuote === parlayAmmData?.maxSupportedOdds}
                        title={getQuoteTooltipText()}
                        placement={'top'}
                        arrow={true}
                    >
                        <SummaryValue>{formatMarketOdds(selectedOddsType, totalQuote)}</SummaryValue>
                    </InfoTooltip>
                    <SummaryLabel alignRight={true}>{t('markets.parlay.clear')}:</SummaryLabel>
                    <XButton
                        margin={'0 0 4px 5px'}
                        onClick={() => dispatch(removeAll())}
                        className={`icon icon--cross-button-arrow`}
                    />
                </RowContainer>
            </RowSummary>
            <Voucher disabled={isAllowing || isBuying} />
            <SuggestedAmount
                insertedAmount={collateralAmountValue}
                exchangeRates={exchangeRates}
                collateralIndex={selectedCollateralIndex}
                changeAmount={(value) => setCollateralAmount(value)}
            />
            <RowSummary>
                <SummaryLabel>{t('markets.parlay.buy-in')}:</SummaryLabel>
            </RowSummary>
            <InputContainer ref={inputRef}>
                <AmountToBuyContainer>
                    <NumericInput
                        value={collateralAmountValue}
                        onChange={(e) => {
                            setCollateralAmount(e.target.value);
                        }}
                        showValidation={inputRefVisible && !!tooltipTextCollateralAmount && !openApprovalModal}
                        validationMessage={tooltipTextCollateralAmount}
                        inputFontSize="18px"
                        inputFontWeight="700"
                        inputPadding="5px 10px"
                        borderColor={theme.input.borderColor.tertiary}
                        disabled={isAllowing || isBuying}
                        currencyComponent={
                            <CollateralSelector
                                collateralArray={getCollaterals(networkId)}
                                selectedItem={selectedCollateralIndex}
                                onChangeCollateral={() => {
                                    setCollateralAmount('');
                                }}
                                disabled={isVoucherSelected}
                                isDetailedView
                                collateralBalances={multipleCollateralBalances.data}
                                exchangeRates={exchangeRates}
                                dropDownWidth={inputRef.current?.getBoundingClientRect().width + 'px'}
                            />
                        }
                        balance={formatCurrencyWithKey(selectedCollateral, paymentTokenBalance)}
                    />
                </AmountToBuyContainer>
            </InputContainer>
            {isAA && (
                <GasSummary>
                    <SummaryLabel>
                        {t('markets.parlay.total-gas')}:
                        <Tooltip overlay={<> {t('markets.parlay.gas-tooltip')}</>} iconFontSize={13} marginLeft={3} />
                    </SummaryLabel>
                    <SummaryValue isCollateralInfo={true}>
                        {gas === 0 ? '-' : formatCurrencyWithSign(USD_SIGN, gas as number, 2, true)}
                    </SummaryValue>
                </GasSummary>
            )}
            <RowSummary>
                <SummaryLabel>{t('markets.parlay.total-to-pay')}:</SummaryLabel>
                <SummaryValue isInfo={true}>
                    {hidePayout
                        ? '-'
                        : isDefaultCollateral
                        ? formatCurrencyWithSign(USD_SIGN, Number(collateralAmountValue) + gas)
                        : `${formatCurrencyWithKey(
                              selectedCollateral,
                              Number(collateralAmountValue) + gas
                          )} (${formatCurrencyWithSign(USD_SIGN, Number(usdAmountValue) + gas)})`}
                </SummaryValue>
            </RowSummary>
            <RowSummary>
                <SummaryLabel>{t('markets.parlay.payout')}:</SummaryLabel>
                <SummaryValue isInfo={true}>
                    {hidePayout ? '-' : formatCurrencyWithSign(USD_SIGN, totalBuyAmount, 2)}
                </SummaryValue>
            </RowSummary>
            <RowSummary>
                <SummaryLabel>{t('markets.parlay.potential-profit')}:</SummaryLabel>
                <SummaryValue isInfo={true}>
                    {hidePayout
                        ? '-'
                        : `${formatCurrencyWithSign(
                              USD_SIGN,
                              totalBuyAmount - Number(usdAmountValue) - gas,
                              2
                          )} (${formatPercentage(profitPercentage)})`}
                </SummaryValue>
            </RowSummary>
            {networkId !== Network.Base && networkId !== Network.OptimismSepolia && (
                <>
                    <HorizontalLine />
                    <RowSummary>
                        <SummaryLabel>{t(`parlay-leaderboard.ticket-info.title`)}:</SummaryLabel>
                    </RowSummary>
                    <RowSummary>
                        <SummaryLabel>
                            {t(`parlay-leaderboard.ticket-info.points-label`)}
                            <Tooltip
                                overlay={<>{t(`parlay-leaderboard.ticket-info.points-tooltip`)}</>}
                                iconFontSize={13}
                                marginLeft={3}
                            />
                            :
                        </SummaryLabel>
                        <SummaryValue isCollateralInfo={true}>
                            {hidePayout || !isMinimumParlayGames ? (
                                '-'
                            ) : (
                                <>
                                    {`${formatCurrency(leaderboardPoints.basicPoints)}`}
                                    <SummaryValue isInfo={true}>{` + ${formatPercentage(
                                        leaderboardPoints.buyinBonus,
                                        0
                                    )} + ${formatPercentage(leaderboardPoints.numberOfGamesBonus, 0)}`}</SummaryValue>
                                    {` = ${formatCurrency(leaderboardPoints.points)}`}
                                    <Tooltip overlay={getPointsTooltip()} iconFontSize={13} marginLeft={3} />
                                </>
                            )}
                        </SummaryValue>
                    </RowSummary>
                    <RowSummary>
                        <SummaryLabel>
                            {t(`parlay-leaderboard.ticket-info.rank-label`)}
                            <Tooltip
                                overlay={<>{t(`parlay-leaderboard.ticket-info.rank-tooltip`)}</>}
                                iconFontSize={13}
                                marginLeft={3}
                            />
                            :
                        </SummaryLabel>
                        <SummaryValue isCollateralInfo={true}>
                            {hidePayout || !isMinimumParlayGames ? '-' : <>{`${currentLeaderboardRank}.`}</>}
                        </SummaryValue>
                    </RowSummary>
                    <RowSummary>
                        <SummaryLabel>
                            {t(`parlay-leaderboard.ticket-info.rewards-label`)}
                            <Tooltip
                                overlay={<>{t(`parlay-leaderboard.ticket-info.rewards-tooltip`)}</>}
                                iconFontSize={13}
                                marginLeft={3}
                            />
                            :
                        </SummaryLabel>
                        <SummaryValue isCollateralInfo={true}>
                            {hidePayout || !isMinimumParlayGames ? (
                                '-'
                            ) : (
                                <>
                                    {`${
                                        rewards[currentLeaderboardRank - 1] || 0
                                    } ${rewardsCurrency} (${formatCurrencyWithSign(
                                        USD_SIGN,
                                        (rewards[currentLeaderboardRank - 1] || 0) * rewardCurrencyRate,
                                        0
                                    )})`}
                                </>
                            )}
                        </SummaryValue>
                    </RowSummary>
                </>
            )}
            <HorizontalLine />
            <RowSummary>
                <RowContainer>
                    <SummaryLabel>
                        {t('markets.parlay.persist-games')}
                        <Tooltip
                            overlay={<>{t(`markets.parlay.keep-selection-tooltip`)}</>}
                            iconFontSize={13}
                            marginLeft={3}
                        />
                    </SummaryLabel>
                    <CheckboxContainer>
                        <Checkbox
                            disabled={false}
                            checked={keepSelection}
                            value={keepSelection.toString()}
                            onChange={(e: any) => {
                                setKeepSelection(e.target.checked || false);
                                setKeepSelectionToStorage(e.target.checked || false);
                            }}
                        />
                    </CheckboxContainer>
                </RowContainer>
            </RowSummary>
            <FlexDivCentered>{getSubmitButton()}</FlexDivCentered>
            <ShareWrapper>
                <TwitterIcon disabled={twitterShareDisabled} onClick={onTwitterIconClick} />
            </ShareWrapper>
            {showShareTicketModal && shareTicketModalData && (
                <ShareTicketModalV2
                    markets={shareTicketModalData.markets}
                    multiSingle={false}
                    paid={shareTicketModalData.paid}
                    payout={shareTicketModalData.payout}
                    onClose={onModalClose}
                    isTicketLost={shareTicketModalData.isTicketLost}
                    isTicketResolved={shareTicketModalData.isTicketResolved}
                />
            )}
            {openApprovalModal && (
                <ApprovalModal
                    // ADDING 1% TO ENSURE TRANSACTIONS PASSES DUE TO CALCULATION DEVIATIONS
                    defaultAmount={Number(collateralAmountValue) * (1 + APPROVAL_BUFFER)}
                    collateralIndex={selectedCollateralIndex}
                    tokenSymbol={selectedCollateral}
                    isAllowing={isAllowing}
                    onSubmit={handleAllowance}
                    onClose={() => setOpenApprovalModal(false)}
                />
            )}
        </>
    );
};

const TooltipContainer = styled(FlexDivColumn)``;

const TooltipText = styled.span``;

const TooltipFooter = styled(FlexDivRow)`
    border-top: 1px solid ${(props) => props.theme.background.secondary};
    margin-top: 10px;
    padding-top: 8px;
`;

const TooltipInfoContianer = styled(FlexDiv)``;

const TooltipInfoLabel = styled(TooltipText)`
    margin-right: 4px;
`;

const TooltipInfo = styled(TooltipText)`
    font-weight: 600;
`;

const TooltipBonusInfo = styled(TooltipInfo)`
    color: ${(props) => props.theme.status.win};
`;

export default Ticket;
