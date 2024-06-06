import { DEFAULT_NETWORK, SUPPORTED_NETWORKS_PARAMS } from 'constants/network';
import { useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getIsWalletConnected, getNetworkId, switchToNetworkId } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled from 'styled-components';
import { changeNetwork } from 'thales-utils';
import { SupportedNetwork } from 'types/network';
import { useSwitchNetwork } from 'wagmi';

const NetworkSwitcher: React.FC = () => {
    const dispatch = useDispatch();
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));

    const { switchNetwork } = useSwitchNetwork();
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const selectedNetwork = useMemo(
        () => SUPPORTED_NETWORKS_PARAMS[networkId] || SUPPORTED_NETWORKS_PARAMS[DEFAULT_NETWORK.networkId],
        [networkId]
    );

    const supportedNetworks = Object.keys(SUPPORTED_NETWORKS_PARAMS);

    return (
        <OutsideClickHandler onOutsideClick={() => setDropDownOpen(false)}>
            <NetworkIconWrapper
                onClick={() => {
                    if (supportedNetworks.length > 1) setDropDownOpen(!dropDownOpen);
                }}
                isConnected={isWalletConnected}
                isMultiChain={supportedNetworks.length > 1}
            >
                <NetworkIcon className={selectedNetwork.iconClassName} isConnected={isWalletConnected} />
                {supportedNetworks.length > 1 && (
                    <DownIcon isConnected={isWalletConnected} className={`icon icon--arrow-down`} />
                )}
            </NetworkIconWrapper>
            {dropDownOpen && (
                <NetworkDropDown>
                    {Object.keys(SUPPORTED_NETWORKS_PARAMS)
                        .map((key) => {
                            return {
                                id: Number(key),
                                ...SUPPORTED_NETWORKS_PARAMS[Number(key)],
                            };
                        })
                        .sort((a, b) => a.order - b.order)
                        .map((network, index) => (
                            <NetworkWrapper
                                key={index}
                                onClick={async () => {
                                    setDropDownOpen(false);
                                    await changeNetwork(network, () => {
                                        switchNetwork?.(network.id);
                                        // Trigger App.js init
                                        // do not use updateNetworkSettings(networkId) as it will trigger queries before provider in App.js is initialized
                                        dispatch(
                                            switchToNetworkId({
                                                networkId: Number(network.id) as SupportedNetwork,
                                            })
                                        );
                                    });
                                }}
                            >
                                <NetworkIcon isConnected={true} className={network.iconClassName} />
                                <NetworkText>
                                    {networkId === network.id && <NetworkSelectedIndicator />}
                                    {network.shortChainName}
                                </NetworkText>
                            </NetworkWrapper>
                        ))}
                </NetworkDropDown>
            )}
        </OutsideClickHandler>
    );
};

const NetworkIconWrapper = styled.div<{ isConnected: boolean; isMultiChain: boolean }>`
    background: ${(props) => (props.isConnected ? props.theme.background.tertiary : 'transparent')};
    height: 28px;
    border-radius: 20px;
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.background.tertiary};
    display: flex;
    justify-content: center;
    gap: 4px;
    align-items: center;
    max-width: 65px;
    min-width: 65px;
    cursor: ${(props) => (props.isMultiChain ? 'pointer' : 'default')};
    margin-right: -1px;
`;

const NetworkText = styled.span`
    position: relative;
    font-weight: 800;
    font-size: 10.8px;
    line-height: 13px;
    cursor: pointer;
    color: ${(props) => props.theme.button.textColor.primary};
    text-align: left;
`;

const NetworkIcon = styled.i<{ isConnected: boolean }>`
    font-size: 24px;
    color: ${(props) => (props.isConnected ? props.theme.button.textColor.primary : props.theme.textColor.secondary)};
`;

const DownIcon = styled.i<{ isConnected: boolean }>`
    font-size: 12px;
    color: ${(props) => (props.isConnected ? props.theme.button.textColor.primary : props.theme.textColor.secondary)};
`;

const NetworkDropDown = styled.div`
    z-index: 1000;
    position: absolute;
    top: 30px;
    right: 0px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: ${(props) => props.theme.background.tertiary};
    width: 130px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const NetworkWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    width: 100%;
    margin-left: 32px;
`;

const NetworkSelectedIndicator = styled.div`
    position: absolute;
    background: ${(props) => props.theme.background.primary};
    border-radius: 20px;
    width: 6px;
    height: 6px;
    left: -45px;
    top: 3px;
`;

export default NetworkSwitcher;
