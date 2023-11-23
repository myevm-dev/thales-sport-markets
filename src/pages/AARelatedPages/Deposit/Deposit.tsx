import NumericInput from 'components/fields/NumericInput';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FlexDiv } from 'styles/common';
import { ThemeInterface } from 'types/ui';
import { useTheme } from 'styled-components';
import CollateralSelector from 'components/CollateralSelector';
import { getCollaterals } from 'utils/collaterals';
import { useSelector } from 'react-redux';
import { getIsWalletConnected, getNetworkId, getWalletAddress } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import useMultipleCollateralBalanceQuery from 'queries/wallet/useMultipleCollateralBalanceQuery';
import { getIsAppReady, getIsMobile } from 'redux/modules/app';
import useExchangeRatesQuery, { Rates } from 'queries/rates/useExchangeRatesQuery';
import { formatCurrencyWithKey } from 'utils/formatters/number';
import { getNetworkNameByNetworkId } from 'utils/network';
import { toast } from 'react-toastify';
import { getErrorToastOptions, getInfoToastOptions } from 'config/toast';
import QRCodeModal from './components/QRCodeModal';
import BalanceDetails from './components/BalanceDetails';
import {
    BalanceSection,
    FormContainer,
    InputContainer,
    InputLabel,
    PrimaryHeading,
    WarningContainer,
    WarningIcon,
    Wrapper,
} from '../styled-components';
import useQueryParam, { getQueryStringVal } from 'utils/useQueryParams';
import visa from 'assets/images/onramper/visa.svg';
import master from 'assets/images/onramper/master.svg';
import applepay from 'assets/images/onramper/applepay.svg';
import gpay from 'assets/images/onramper/gpay.svg';

const Deposit: React.FC = () => {
    const { t } = useTranslation();
    const theme: ThemeInterface = useTheme();
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const isMobile = useSelector((state: RootState) => getIsMobile(state));

    const [selectedToken, setSelectedToken] = useState<number>(0);
    const [showQRModal, setShowQRModal] = useState<boolean>(false);

    const selectedTokenFromUrl = getQueryStringVal('coin-index');

    const [, setSelectedTokenFromQuery] = useQueryParam(
        'coin-index',
        selectedTokenFromUrl ? selectedTokenFromUrl : '0'
    );

    useEffect(() => {
        if (selectedTokenFromUrl != selectedToken.toString()) {
            setSelectedToken(Number(selectedTokenFromUrl));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTokenFromUrl]);

    const multipleCollateralBalances = useMultipleCollateralBalanceQuery(walletAddress, networkId, {
        enabled: isAppReady && isWalletConnected,
    });

    const paymentTokenBalance: number = useMemo(() => {
        if (multipleCollateralBalances.data && multipleCollateralBalances.isSuccess) {
            return multipleCollateralBalances.data[getCollaterals(networkId, true)[selectedToken]];
        }
        return 0;
    }, [multipleCollateralBalances.data, multipleCollateralBalances.isSuccess, networkId, selectedToken]);

    const exchangeRatesQuery = useExchangeRatesQuery(networkId, {
        enabled: isAppReady,
    });
    const exchangeRates: Rates | null =
        exchangeRatesQuery.isSuccess && exchangeRatesQuery.data ? exchangeRatesQuery.data : null;

    const inputRef = useRef<HTMLDivElement>(null);

    const walletAddressInputRef = useRef<HTMLInputElement>(null);

    const handleCopy = () => {
        const id = toast.loading(t('deposit.copying-address'));
        try {
            walletAddressInputRef.current?.value && navigator.clipboard.writeText(walletAddressInputRef.current?.value);
            toast.update(id, getInfoToastOptions(t('deposit.copied')));
        } catch (e) {
            toast.update(id, getErrorToastOptions('Error'));
        }
    };

    const handleChangeCollateral = (index: number) => {
        setSelectedToken(index);
        setSelectedTokenFromQuery(index.toString());
    };

    const apiKey = process.env.REACT_APP_ONRAMPER_KEY || '';

    const onramperUrl = useMemo(() => {
        return `https://buy.onramper.com?apiKey=${apiKey}&mode=buy&onlyCryptos=${
            getCollaterals(networkId, true)[selectedToken]
        }_${getNetworkNameByNetworkId(networkId, true)}&networkWallets=${getNetworkNameByNetworkId(
            networkId,
            true
        )}:${walletAddress}`;
    }, [walletAddress, networkId, apiKey, selectedToken]);

    console.log();

    return (
        <>
            {isMobile && <PrimaryHeading>{t('deposit.deposit-crypto')}</PrimaryHeading>}
            <Wrapper>
                <FormContainer>
                    {!isMobile && <PrimaryHeading>{t('deposit.deposit-crypto')}</PrimaryHeading>}
                    <InputLabel>{t('deposit.select-token')}</InputLabel>
                    <InputContainer ref={inputRef}>
                        <NumericInput
                            value={getCollaterals(networkId, true)[selectedToken]}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            inputFontSize="18px"
                            inputFontWeight="700"
                            inputPadding="5px 10px"
                            borderColor={theme.input.borderColor.tertiary}
                            disabled={false}
                            readonly={true}
                            inputType="text"
                            currencyComponent={
                                <CollateralSelector
                                    collateralArray={getCollaterals(networkId, true)}
                                    selectedItem={selectedToken}
                                    onChangeCollateral={(index) => handleChangeCollateral(index)}
                                    disabled={false}
                                    isDetailedView
                                    collateralBalances={[multipleCollateralBalances.data]}
                                    exchangeRates={exchangeRates}
                                    dropDownWidth={inputRef.current?.getBoundingClientRect().width + 'px'}
                                    hideCollateralNameOnInput={true}
                                    hideBalance={true}
                                />
                            }
                            balance={formatCurrencyWithKey(
                                getCollaterals(networkId, true)[selectedToken],
                                paymentTokenBalance
                            )}
                            enableCurrencyComponentOnly={true}
                        />
                    </InputContainer>
                    <DepositAddressFormContainer>
                        <InputLabel>
                            {t('deposit.address-input-label', {
                                token: getCollaterals(networkId, true)[selectedToken],
                                network: getNetworkNameByNetworkId(networkId),
                            })}
                        </InputLabel>
                        <WalletAddressInputWrapper>
                            <InputContainer>
                                <WalletAddressInput
                                    type={'text'}
                                    value={walletAddress}
                                    readOnly
                                    ref={walletAddressInputRef}
                                />
                                <QRIcon
                                    onClick={() => {
                                        setShowQRModal(!showQRModal);
                                    }}
                                    className="social-icon icon--qr-code"
                                />
                            </InputContainer>
                            <CopyButton onClick={() => handleCopy()}>{'Copy'}</CopyButton>
                        </WalletAddressInputWrapper>
                        <WarningContainer>
                            <WarningIcon className={'icon icon--warning'} />
                            {t('deposit.send', {
                                token: getCollaterals(networkId, true)[selectedToken],
                                network: getNetworkNameByNetworkId(networkId),
                            })}
                        </WarningContainer>
                    </DepositAddressFormContainer>
                    <BuyWithText>Or buy with</BuyWithText>
                    <OnramperDiv
                        onClick={() => {
                            window.open(onramperUrl, '_blank');
                        }}
                    >
                        <img src={visa} />
                        <img src={master} />
                        <img src={applepay} />
                        <img src={gpay} />
                    </OnramperDiv>
                </FormContainer>
                <BalanceSection>
                    <BalanceDetails />
                    <TutorialLinksContainer>
                        <SectionLabel>{'Tutorials'}</SectionLabel>
                        <Link href={'#'}>{'Coinbase'}</Link>
                        <Link href={'#'}>{'Coinbase'}</Link>
                        <Link href={'#'}>{'Coinbase'}</Link>
                        <Link href={'#'}>{'Coinbase'}</Link>
                    </TutorialLinksContainer>
                </BalanceSection>
            </Wrapper>
            {showQRModal && (
                <QRCodeModal
                    onClose={() => setShowQRModal(false)}
                    walletAddress={walletAddress}
                    title={t('deposit.qr-modal-title', {
                        token: getCollaterals(networkId, true)[selectedToken],
                        network: getNetworkNameByNetworkId(networkId),
                    })}
                />
            )}
        </>
    );
};

const DepositAddressFormContainer = styled(FlexDiv)`
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

const BuyWithText = styled.span`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 60px;
`;

const WalletAddressInputWrapper = styled(FlexDiv)`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const OnramperDiv = styled(FlexDiv)`
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
`;

const WalletAddressInput = styled.input`
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    padding: 5px;
    opacity: 0.5;
    border-radius: 5px;
    color: ${(props) => props.theme.input.textColor.secondary};
    background-color: ${(props) => props.theme.input.background.secondary};
    border: ${(props) => `1px ${props.theme.input.borderColor.tertiary} solid`};
`;

const QRIcon = styled.i`
    font-size: 24px;
    position: absolute;
    cursor: pointer;
    right: 5px;
    top: 5px;
    color: ${(props) => props.theme.input.textColor.secondary};
`;

const CopyButton = styled(FlexDiv)`
    font-size: 18px;
    border-radius: 5px;
    font-weight: 700;
    padding: 7px 20px;
    height: auto;
    cursor: pointer;
    text-transform: uppercase;
    line-height: 18px;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.button.textColor.primary};
    background-color: ${(props) => props.theme.button.background.quaternary};
`;

const SectionLabel = styled.span`
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 3px;
    margin-bottom: 13px;
`;

const TutorialLinksContainer = styled(FlexDiv)`
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 13px;
    padding: 19px;
    border: 1px ${(props) => props.theme.borderColor.primary} solid;
`;

const Link = styled.a`
    width: fit-content;
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
    text-transform: capitalize;
    padding-bottom: 15px;
    :visited {
        color: ${(props) => props.theme.textColor.primary};
    }
`;
export default Deposit;
