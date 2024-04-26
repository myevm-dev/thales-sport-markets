import { COLLATERALS, CRYPTO_CURRENCY_MAP, STABLE_COINS } from 'constants/currency';
import { SupportedNetwork } from 'types/network';
import { Coins } from 'types/tokens';
import multipleCollateral from './contracts/multipleCollateralContract';

export const getDefaultCollateral = (networkId: SupportedNetwork) => COLLATERALS[networkId][0];

export const getCollateral = (networkId: SupportedNetwork, index: number) => COLLATERALS[networkId][index];

export const getCollaterals = (networkId: SupportedNetwork) => COLLATERALS[networkId];

export const getCollateralIndex = (networkId: SupportedNetwork, currencyKey: Coins) =>
    COLLATERALS[networkId].indexOf(currencyKey);

export const getCollateralAddress = (networkId: SupportedNetwork, index: number) =>
    multipleCollateral[getCollateral(networkId, index)]?.addresses[networkId];

export const getCollateralByAddress = (collateralAddress: string, networkId: SupportedNetwork) => {
    let collateral = getDefaultCollateral(networkId);
    Object.keys(multipleCollateral).forEach((collateralKey: string) => {
        Object.values(multipleCollateral[collateralKey as Coins].addresses).forEach((address: string) => {
            if (collateralAddress.toLowerCase() === address.toLowerCase()) {
                collateral = collateralKey as Coins;
            }
        });
    });

    return collateral;
};

export const isStableCurrency = (currencyKey: Coins) => {
    return STABLE_COINS.includes(currencyKey);
};

// TODO: for OP Sepolia, add generic logic per network
export const isLpSupported = (currencyKey: Coins) => {
    return (
        currencyKey === CRYPTO_CURRENCY_MAP.USDC || currencyKey === CRYPTO_CURRENCY_MAP.WETH || CRYPTO_CURRENCY_MAP.ETH
    );
};
