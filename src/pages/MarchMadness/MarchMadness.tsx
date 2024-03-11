import backgrounBall from 'assets/images/march-madness/background-marchmadness-ball.png';
import Loader from 'components/Loader';
import { DEFAULT_BRACKET_ID } from 'constants/marchMadness';
import ROUTES from 'constants/routes';
import { Theme } from 'enums/ui';
import BackToLink from 'pages/Markets/components/BackToLink';
import useMarchMadnessDataQuery from 'queries/marchMadness/useMarchMadnessDataQuery';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getIsAppReady, getIsMobile } from 'redux/modules/app';
import { setTheme } from 'redux/modules/ui';
import { getIsWalletConnected, getNetworkId, getWalletAddress } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled from 'styled-components';
import { FlexDivColumn } from 'styles/common';
import { localStore } from 'thales-utils';
import { getLocalStorageKey } from 'utils/marchMadness';
import { buildHref, history } from 'utils/routes';
import Brackets from './components/Brackets';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Tabs from './components/Tabs';
import { MarchMadTabs } from './components/Tabs/Tabs';

const MarchMadness: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();

    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';
    const isMobile = useSelector((state: RootState) => getIsMobile(state));

    const queryParamTab: MarchMadTabs = queryString.parse(location.search).tab as MarchMadTabs;
    const isTabAvailable = Object.values(MarchMadTabs).includes(queryParamTab);
    const lsBrackets = localStore.get(getLocalStorageKey(DEFAULT_BRACKET_ID, networkId, walletAddress));

    const marchMadnessDataQuery = useMarchMadnessDataQuery(walletAddress, networkId, {
        enabled: isAppReady,
    });
    const marchMadnessData =
        marchMadnessDataQuery.isSuccess && marchMadnessDataQuery.data ? marchMadnessDataQuery.data : null;

    const defaultTab = isTabAvailable
        ? queryParamTab
        : lsBrackets !== undefined || marchMadnessData?.bracketsIds.length
        ? MarchMadTabs.BRACKETS
        : MarchMadTabs.HOME;

    const [selectedTab, setSelectedTab] = useState(defaultTab);

    useEffect(() => {
        if (!isWalletConnected && queryParamTab === MarchMadTabs.BRACKETS) {
            const queryParams = queryString.parse(location.search);
            if (queryParams.tab) {
                delete queryParams.tab;
                history.push({ search: queryString.stringify({ ...queryParams }) });
            }
            setSelectedTab(MarchMadTabs.HOME);
            return;
        }
        const lsBrackets = localStore.get(getLocalStorageKey(DEFAULT_BRACKET_ID, networkId, walletAddress));
        if (queryParamTab === undefined) {
            if (lsBrackets !== undefined || marchMadnessData?.bracketsIds.length) {
                setSelectedTab(MarchMadTabs.BRACKETS);
            } else {
                setSelectedTab(MarchMadTabs.HOME);
            }
        }
    }, [
        walletAddress,
        marchMadnessData?.bracketsIds.length,
        networkId,
        queryParamTab,
        isWalletConnected,
        location.search,
    ]);

    useEffect(() => {
        dispatch(setTheme(Theme.MARCH_MADNESS));
    }, [dispatch]);

    return (
        <Container showBackground={selectedTab !== MarchMadTabs.BRACKETS}>
            {isMobile ? (
                <TextWrapper>
                    <Text>{t('march-madness.mobile-message')}</Text>
                </TextWrapper>
            ) : marchMadnessDataQuery.isLoading ? (
                <Loader />
            ) : (
                <>
                    <BackToLink
                        link={buildHref(ROUTES.Markets.Home)}
                        text={t('march-madness.back-to-markets')}
                        customStylingContainer={{
                            position: 'absolute',
                            marginTop: '20px',
                            textTransform: 'uppercase',
                            fontFamily: 'Oswald',
                            lineHeight: '24px',
                        }}
                        useArrow={true}
                    />
                    <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    {selectedTab === MarchMadTabs.HOME && <Home setSelectedTab={setSelectedTab} />}
                    {selectedTab === MarchMadTabs.BRACKETS && <Brackets />}
                    {selectedTab === MarchMadTabs.LEADERBOARD && <Leaderboard />}
                </>
            )}
        </Container>
    );
};

const Container = styled.div<{ showBackground: boolean }>`
    width: 100%;
    ${(props) => (props.showBackground ? `background-image: url('${backgrounBall}');` : '')}
    ${(props) => (props.showBackground ? 'background-size: 1900px;' : '')}
    ${(props) => (props.showBackground ? 'background-position: -277px -58px;' : '')}
    ${(props) => (props.showBackground ? 'background-repeat: no-repeat;' : '')}
`;

const TextWrapper = styled(FlexDivColumn)`
    background: ${(props) => props.theme.marchMadness.background.quinary};
    border: 2px solid ${(props) => props.theme.marchMadness.borderColor.quinary};
    padding: 6px 12px;
    margin-top: 10px;
`;

const Text = styled.span`
    font-family: 'Oswald' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.marchMadness.textColor.primary};
`;

export default MarchMadness;
