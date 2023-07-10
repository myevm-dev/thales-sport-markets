import { Bridge } from '@socket.tech/plugin';
import { COLLATERAL_INDEX_TO_COLLATERAL } from 'constants/currency';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAppReady, getIsMobile } from 'redux/modules/app';
import { getNetworkId } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled, { useTheme } from 'styled-components';
import { getDefaultCollateralIndexForNetworkId } from 'utils/network';
import networkConnector from 'utils/networkConnector';
import useAllSourceTokensQuery, { SOURCE_NETWORK_IDS } from './queries/useAllSourceTokensQuery';
import { Network } from 'enums/network';
import { mainnet } from 'wagmi';
import { ThemeInterface } from 'types/ui';
import { hexToRGB } from 'utils/style';

type CustomizationProps = {
    width?: number;
    responsiveWidth?: boolean;
    borderRadius?: number;
    accent?: string;
    onAccent?: string;
    primary?: string;
    secondary?: string;
    text?: string;
    secondaryText?: string;
    interactive?: string;
    onInteractive?: string;
    outline?: string;
};

const SUPPORTED_DESTINATION_NETWORKS = [Network.OptimismMainnet, Network.ArbitrumOne];

const BungeePlugin: React.FC = () => {
    const theme: ThemeInterface = useTheme();
    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const isMobile = useSelector((state: RootState) => getIsMobile(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));

    const apiKey = process.env.REACT_APP_BUNGEE_API_KEY || '';
    if (!apiKey) {
        console.error('Bungee API_KEY not found!');
    }

    const defaultSourceNetwork = mainnet.id;

    const destinationNetworks = SUPPORTED_DESTINATION_NETWORKS.includes(networkId)
        ? SUPPORTED_DESTINATION_NETWORKS.filter((id: number) => id === networkId)
        : SUPPORTED_DESTINATION_NETWORKS;
    const defaultDestNetwork = destinationNetworks[0];

    const allSourceTokensQuery = useAllSourceTokensQuery(apiKey, defaultDestNetwork, { enabled: isAppReady });
    const allTokens = allSourceTokensQuery.isSuccess && allSourceTokensQuery.data ? allSourceTokensQuery.data : [];

    const defaultSrcToken = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'; // native token
    const defaultDestinationToken = allTokens.filter(
        (token) =>
            token.chainId === defaultDestNetwork &&
            token.symbol ===
                COLLATERAL_INDEX_TO_COLLATERAL[
                    getDefaultCollateralIndexForNetworkId(defaultDestNetwork as Network)
                ].toUpperCase() // SUSD is symbol on Bungee instead of sUSD
    )[0]?.address;

    // All colors should stricktly be in RGB format
    const customize: CustomizationProps = {
        width: isMobile ? 360 : 386, // 360 is min-width
        responsiveWidth: false,
        accent: hexToRGB(theme.button.background.primary), // button
        onAccent: hexToRGB(theme.button.textColor.secondary), // button text
        primary: hexToRGB(theme.background.primary), // background
        secondary: hexToRGB(theme.button.background.tertiary), // main button wrapper
        text: hexToRGB(theme.textColor.primary),
        secondaryText: hexToRGB(theme.textColor.primary),
        interactive: hexToRGB(theme.background.primary), // dropdown
        onInteractive: hexToRGB(theme.textColor.primary), // dropdown text
        outline: hexToRGB(theme.button.background.primary),
    };

    return (
        <BungeeWrapper>
            <Bridge
                provider={networkConnector.signer?.provider}
                API_KEY={apiKey}
                sourceNetworks={SOURCE_NETWORK_IDS}
                defaultSourceNetwork={defaultSourceNetwork}
                destNetworks={destinationNetworks}
                defaultDestNetwork={defaultDestNetwork}
                tokenList={allTokens}
                defaultSourceToken={defaultSrcToken}
                defaultDestToken={defaultDestinationToken}
                customize={customize}
            />
        </BungeeWrapper>
    );
};

const BungeeWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 386px;
    height: 463px;
    margin: auto;
    background: ${(props) => props.theme.background.primary};
    border-radius: 15px;
    outline: none;
    @media (max-width: 950px) {
        width: 360px;
    }
`;

export default BungeePlugin;
