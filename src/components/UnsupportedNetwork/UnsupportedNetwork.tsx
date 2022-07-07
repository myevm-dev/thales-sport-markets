import Button from 'components/Button';
import { OPTIMISM_NETWORKS } from 'constants/network';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FlexDivCentered, FlexDivColumnCentered } from 'styles/common';

const UnsupportedNetwork: React.FC = () => {
    const { t } = useTranslation();

    const switchOrAddOptimismNetwork = async () => {
        const optimismNetworkParms = OPTIMISM_NETWORKS[10];

        if (typeof window.ethereum !== 'undefined') {
            console.log('proslo');
            try {
                await (window.ethereum as any).request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: optimismNetworkParms.chainId }],
                });
                location.reload();
            } catch (switchError: any) {
                if (switchError.code === 4902) {
                    try {
                        await (window.ethereum as any).request({
                            method: 'wallet_addEthereumChain',
                            params: [optimismNetworkParms],
                        });
                        await (window.ethereum as any).request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: optimismNetworkParms.chainId }],
                        });
                        location.reload();
                    } catch (addError) {
                        console.log(addError);
                    }
                } else {
                    console.log(switchError);
                }
            }
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>{t(`common.unsupported-network.title`)}</Title>
                <Description>{t(`common.unsupported-network.description`)}</Description>
                <ButtonContainer>
                    <Button onClick={switchOrAddOptimismNetwork}>
                        {t(`common.unsupported-network.button.optimism`)}
                    </Button>
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
};

const Container = styled(FlexDivCentered)`
    position: fixed;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.background.primary};
`;

const Wrapper = styled(FlexDivColumnCentered)`
    max-width: 600px;
    padding: 20px;
    text-align: center;
`;

const Title = styled.p`
    color: ${(props) => props.theme.textColor.primary};
    letter-spacing: 0.25px;
    font-size: 32px;
    line-height: 48px;
`;

const Description = styled.p`
    color: ${(props) => props.theme.textColor.primary};
    letter-spacing: 0.25px;
    font-size: 16px;
    line-height: 32px;
    margin-top: 45px;
`;

const ButtonContainer = styled.div`
    margin: 80px 0px;
`;

export default UnsupportedNetwork;
