import { GAS_ESTIMATION_BUFFER, ZERO_ADDRESS } from 'constants/network';
import { Network } from 'enums/network';
import { BigNumber, ethers } from 'ethers';
import { TradeData } from '../types/markets';
import { executeBiconomyTransaction } from './biconomy';

export const getSportsAMMV2Transaction: any = async (
    isVoucherSelected: boolean,
    voucherId: number,
    collateralAddress: string,
    isDefaultCollateral: boolean,
    isEth: boolean,
    networkId: Network,
    sportsAMMV2Contract: ethers.Contract,
    overtimeVoucherContract: ethers.Contract,
    tradeData: TradeData[],
    buyInAmount: BigNumber,
    expectedQuote: BigNumber,
    referral?: string | null,
    additionalSlippage?: BigNumber,
    isAA?: boolean
): Promise<any> => {
    let finalEstimation = null;
    const referralAddress = referral || ZERO_ADDRESS;

    if (isVoucherSelected) {
        if (isAA) {
            return executeBiconomyTransaction(collateralAddress, overtimeVoucherContract, 'tradeWithVoucher', [
                tradeData,
                buyInAmount,
                expectedQuote,
                additionalSlippage,
                voucherId,
            ]);
        } else {
            if (networkId === Network.OptimismMainnet) {
                const estimation = await overtimeVoucherContract.estimateGas.tradeWithVoucher(
                    tradeData,
                    buyInAmount,
                    additionalSlippage,
                    expectedQuote,
                    voucherId
                );

                finalEstimation = Math.ceil(Number(estimation) * GAS_ESTIMATION_BUFFER); // using Math.celi as gasLimit is accepting only integer.
            }

            return overtimeVoucherContract.buyFromParlayAMMWithVoucher(
                tradeData,
                buyInAmount,
                additionalSlippage,
                expectedQuote,
                voucherId,
                { gasLimit: finalEstimation }
            );
        }
    }

    if (isAA) {
        return executeBiconomyTransaction(collateralAddress, sportsAMMV2Contract, 'trade', [
            tradeData,
            buyInAmount,
            expectedQuote,
            additionalSlippage,
            referralAddress,
            collateralAddress,
            isEth,
        ]);
    } else {
        console.log(tradeData, buyInAmount.toString(), expectedQuote.toString());
        return sportsAMMV2Contract.trade(
            tradeData,
            buyInAmount,
            expectedQuote,
            additionalSlippage,
            referralAddress,
            isDefaultCollateral ? ZERO_ADDRESS : collateralAddress,
            isEth,
            { value: isEth ? buyInAmount : 0 }
        );
    }
};

export const getSportsAMMV2QuoteMethod: any = (
    collateralAddress: string,
    isDefaultCollateral: boolean,
    sportsAMMV2Contract: ethers.Contract,
    tradeData: TradeData[],
    buyInAmount: BigNumber
) => {
    return sportsAMMV2Contract.tradeQuote(
        tradeData,
        buyInAmount,
        isDefaultCollateral ? ZERO_ADDRESS : collateralAddress
    );
};
