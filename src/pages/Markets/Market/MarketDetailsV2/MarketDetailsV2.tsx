import { ReactComponent as ArbitrumLogo } from 'assets/images/arbitrum-logo.svg';
import { ReactComponent as OPLogo } from 'assets/images/optimism-logo.svg';
import FooterSidebarMobile from 'components/FooterSidebarMobile';
import Toggle from 'components/Toggle';
import Tooltip from 'components/Tooltip';
import {
    GameStatusKey,
    INCENTIVIZED_LEAGUE,
    INCENTIVIZED_MLB,
    INCENTIVIZED_NHL,
    INCENTIVIZED_UEFA,
} from 'constants/markets';
import ROUTES from 'constants/routes';
import { MarketType } from 'enums/marketTypes';
import { Network } from 'enums/network';
import { League, Sport } from 'enums/sports';
import { groupBy } from 'lodash';
import { ToggleContainer } from 'pages/LiquidityPool/styled-components';
import Parlay from 'pages/Markets/Home/Parlay';
import TicketMobileModal from 'pages/Markets/Home/Parlay/components/TicketMobileModal';
import BackToLink from 'pages/Markets/components/BackToLink';
import queryString from 'query-string';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getIsMobile } from 'redux/modules/app';
import { getNetworkId } from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import styled, { useTheme } from 'styled-components';
import { FlexDivCentered, FlexDivColumn, FlexDivColumnCentered, FlexDivRow } from 'styles/common';
import { NetworkId } from 'thales-utils';
import { SportMarket, TagInfo } from 'types/markets';
import { ThemeInterface } from 'types/ui';
import { buildHref, navigateTo } from 'utils/routes';
import { getLeaguePeriodType, getLeagueSport } from 'utils/sports';
import { getOrdinalNumberLabel } from 'utils/ui';
import useQueryParam from 'utils/useQueryParams';
import Button from '../../../../components/Button';
import { MarketTypeGroupsBySport } from '../../../../constants/marketTypes';
import { LeagueMap } from '../../../../constants/sports';
import { GameStatus } from '../../../../enums/markets';
import { getMarketTypeGroupFilter, setMarketTypeGroupFilter } from '../../../../redux/modules/market';
import { showGameScore, showLiveInfo } from '../../../../utils/marketsV2';
import Header from '../../Home/Header';
import MatchInfoV2 from './components/MatchInfoV2';
import PositionsV2 from './components/PositionsV2';
import TicketTransactions from './components/TicketTransactions';

type MarketDetailsPropType = {
    market: SportMarket;
};

const MarketDetails: React.FC<MarketDetailsPropType> = ({ market }) => {
    const { t } = useTranslation();
    const theme: ThemeInterface = useTheme();
    const dispatch = useDispatch();
    const isMobile = useSelector((state: RootState) => getIsMobile(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const marketTypeGroupFilter = useSelector(getMarketTypeGroupFilter);
    const queryParams: { title?: string } = queryString.parse(location.search);

    const [metaTitle, setMetaTitle] = useQueryParam('title', queryParams?.title ? queryParams?.title : '');
    const [showTicketMobileModal, setShowTicketMobileModal] = useState(false);
    const [hidePausedMarkets, setHidePausedMarkets] = useState(true);

    const marketTypesFilter = useMemo(
        () => (marketTypeGroupFilter ? MarketTypeGroupsBySport[market.sport][marketTypeGroupFilter] || [] : []),
        [market.sport, marketTypeGroupFilter]
    );

    const groupedChildMarkets = useMemo(
        () =>
            groupBy(
                market.childMarkets.filter(
                    (childMarket) =>
                        (!marketTypesFilter.length || marketTypesFilter.includes(childMarket.typeId)) &&
                        (hidePausedMarkets && market.isOpen && market.maturityDate > new Date()
                            ? !childMarket.isPaused
                            : true)
                ),
                (childMarket) => childMarket.typeId
            ),
        [market.childMarkets, market.isOpen, market.maturityDate, hidePausedMarkets, marketTypesFilter]
    );

    const numberOfMarkets = useMemo(() => {
        let num = !marketTypesFilter.length || marketTypesFilter.includes(MarketType.WINNER) ? 1 : 0;
        Object.keys(groupedChildMarkets).forEach((key) => {
            const typeId = Number(key);
            const childMarkets = groupedChildMarkets[typeId];
            num += childMarkets.length;
        });
        return num;
    }, [groupedChildMarkets, marketTypesFilter]);

    useEffect(() => {
        if (!metaTitle) {
            setMetaTitle(`${market.homeTeam} vs ${market.awayTeam}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [market.awayTeam, market.homeTeam]);

    const isMounted = useRef(false);
    useEffect(() => {
        // skip first render
        if (isMounted.current) {
            navigateTo(ROUTES.Markets.Home);
        } else {
            isMounted.current = true;
        }
    }, [networkId]);

    const isGameStarted = market.maturityDate < new Date();
    const isGameOpen = market.isOpen && !isGameStarted;

    const leagueName = Object.values(LeagueMap).find((t: TagInfo) => t.id == market.leagueId)?.label;
    const isGameResolved = market.isResolved || market.isCancelled;
    const isPendingResolution = isGameStarted && !isGameResolved;
    const showStatus = !market.isOpen || isGameStarted;
    const liveScore = market.liveScore;

    const leagueSport = getLeagueSport(market.leagueId);

    return (
        <RowContainer>
            <MainContainer isGameOpen={isGameOpen}>
                <HeaderWrapper>
                    <BackToLink
                        link={buildHref(ROUTES.Markets.Home)}
                        text={t('market.back')}
                        customStylingContainer={{ position: 'absolute', left: 0, top: 0, marginTop: 0 }}
                    />
                    {INCENTIVIZED_LEAGUE.ids.includes(Number(market.leagueId)) &&
                        new Date(market.maturityDate) > INCENTIVIZED_LEAGUE.startDate &&
                        new Date(market.maturityDate) < INCENTIVIZED_LEAGUE.endDate && (
                            <Tooltip
                                overlay={
                                    <Trans
                                        i18nKey="markets.incentivized-tooltip"
                                        components={{
                                            detailsLink: (
                                                <a href={INCENTIVIZED_LEAGUE.link} target="_blank" rel="noreferrer" />
                                            ),
                                        }}
                                        values={{
                                            rewards:
                                                networkId == Network.OptimismMainnet
                                                    ? INCENTIVIZED_LEAGUE.opRewards
                                                    : networkId == Network.Arbitrum
                                                    ? INCENTIVIZED_LEAGUE.thalesRewards
                                                    : '',
                                        }}
                                    />
                                }
                                component={
                                    <IncentivizedLeague>
                                        {networkId !== Network.Base ? (
                                            <IncentivizedTitle>{t('market.incentivized-market')}</IncentivizedTitle>
                                        ) : (
                                            ''
                                        )}
                                        {getNetworkLogo(networkId)}
                                    </IncentivizedLeague>
                                }
                            ></Tooltip>
                        )}
                    {INCENTIVIZED_UEFA.ids.includes(Number(market.leagueId)) &&
                        new Date() > INCENTIVIZED_UEFA.startDate &&
                        new Date() < INCENTIVIZED_UEFA.endDate && (
                            <Tooltip
                                overlay={
                                    <Trans
                                        i18nKey="markets.incentivized-tooltip-uefa"
                                        components={{
                                            detailsLink: (
                                                <a href={INCENTIVIZED_UEFA.link} target="_blank" rel="noreferrer" />
                                            ),
                                        }}
                                        values={{
                                            rewards: INCENTIVIZED_UEFA.arbRewards,
                                        }}
                                    />
                                }
                                component={
                                    <IncentivizedLeague>
                                        <IncentivizedTitle>{t('market.incentivized-market')}</IncentivizedTitle>
                                        {getNetworkLogo(NetworkId.Arbitrum)}
                                    </IncentivizedLeague>
                                }
                            ></Tooltip>
                        )}
                    {INCENTIVIZED_NHL.ids.includes(Number(market.leagueId)) &&
                        new Date() > INCENTIVIZED_NHL.startDate &&
                        new Date() < INCENTIVIZED_NHL.endDate && (
                            <Tooltip
                                overlay={
                                    <Trans
                                        i18nKey="markets.incentivized-tooltip-nhl-mlb"
                                        components={{
                                            detailsLink: (
                                                <a href={INCENTIVIZED_NHL.link} target="_blank" rel="noreferrer" />
                                            ),
                                        }}
                                        values={{
                                            league: leagueName,
                                            rewards: INCENTIVIZED_NHL.arbRewards,
                                        }}
                                    />
                                }
                                component={
                                    <IncentivizedLeague>
                                        <IncentivizedTitle>{t('market.incentivized-market')}</IncentivizedTitle>
                                        {getNetworkLogo(NetworkId.Arbitrum)}
                                    </IncentivizedLeague>
                                }
                            ></Tooltip>
                        )}
                    {INCENTIVIZED_MLB.ids.includes(Number(market.leagueId)) &&
                        new Date() > INCENTIVIZED_MLB.startDate &&
                        new Date() < INCENTIVIZED_MLB.endDate && (
                            <Tooltip
                                overlay={
                                    <Trans
                                        i18nKey="markets.incentivized-tooltip-nhl-mlb"
                                        components={{
                                            detailsLink: (
                                                <a href={INCENTIVIZED_MLB.link} target="_blank" rel="noreferrer" />
                                            ),
                                        }}
                                        values={{
                                            league: leagueName,
                                            rewards: INCENTIVIZED_MLB.arbRewards,
                                        }}
                                    />
                                }
                                component={
                                    <IncentivizedLeague>
                                        <IncentivizedTitle>{t('market.incentivized-market')}</IncentivizedTitle>
                                        {getNetworkLogo(NetworkId.Arbitrum)}
                                    </IncentivizedLeague>
                                }
                            ></Tooltip>
                        )}
                </HeaderWrapper>
                <MatchInfoV2 market={market} />
                {showStatus && (
                    <Status backgroundColor={market.isCancelled ? theme.status.canceled : theme.background.secondary}>
                        {market.isCancelled ? (
                            t('markets.market-card.canceled')
                        ) : market.isResolved || market.isGameFinished ? (
                            showGameScore(market.gameStatus) || !market.gameStatus ? (
                                <ResultContainer>
                                    <ResultLabel>
                                        {market.isOneSideMarket ? (
                                            market.homeScore == 1 ? (
                                                t('markets.market-card.race-winner')
                                            ) : (
                                                t('markets.market-card.no-win')
                                            )
                                        ) : market.leagueId === League.UFC ? (
                                            <>
                                                {Number(market.homeScore) > 0 ? 'W - L' : 'L - W'}
                                                <InfoLabel className="ufc">
                                                    {`(${t('market.number-of-rounds')}: ` +
                                                        `${
                                                            Number(market.homeScore) > 0
                                                                ? market.homeScore
                                                                : market.awayScore
                                                        }` +
                                                        ')'}
                                                </InfoLabel>
                                            </>
                                        ) : (
                                            `${market.homeScore} - ${market.awayScore}`
                                        )}
                                        {leagueSport === Sport.SOCCER &&
                                            market.homeScoreByPeriod.length > 0 &&
                                            market.awayScoreByPeriod.length > 0 && (
                                                <InfoLabel className="football">
                                                    {' (' +
                                                        market.homeScoreByPeriod[0] +
                                                        ' - ' +
                                                        market.awayScoreByPeriod[0] +
                                                        ')'}
                                                </InfoLabel>
                                            )}
                                    </ResultLabel>
                                    {leagueSport !== Sport.SOCCER && leagueSport !== Sport.ESPORTS && (
                                        <PeriodsContainer directionRow={true}>
                                            {market.homeScoreByPeriod.map((_, index) => {
                                                return (
                                                    <PeriodContainer key={index}>
                                                        <InfoLabel className="gray">{index + 1}</InfoLabel>
                                                        <InfoLabel>{market.homeScoreByPeriod[index]}</InfoLabel>
                                                        <InfoLabel>{market.awayScoreByPeriod[index]}</InfoLabel>
                                                    </PeriodContainer>
                                                );
                                            })}
                                            {leagueSport !== Sport.TENNIS && (
                                                <PeriodContainer>
                                                    <InfoLabel className="gray">T</InfoLabel>
                                                    <InfoLabel>{market.homeScore}</InfoLabel>
                                                    <InfoLabel>{market.awayScore}</InfoLabel>
                                                </PeriodContainer>
                                            )}
                                        </PeriodsContainer>
                                    )}
                                </ResultContainer>
                            ) : (
                                t(`markets.market-card.${GameStatusKey[market.gameStatus]}`)
                            )
                        ) : isPendingResolution ? (
                            liveScore ? (
                                showGameScore(liveScore.gameStatus) || !liveScore.gameStatus ? (
                                    <ResultContainer>
                                        <ResultLabel>
                                            {liveScore.homeScore + ' - ' + liveScore.awayScore}{' '}
                                            {leagueSport === Sport.SOCCER && liveScore.period == 2 && (
                                                <InfoLabel className="football">
                                                    {' (' +
                                                        liveScore.homeScoreByPeriod[0] +
                                                        ' - ' +
                                                        liveScore.awayScoreByPeriod[0] +
                                                        ')'}
                                                </InfoLabel>
                                            )}
                                        </ResultLabel>
                                        {showLiveInfo(liveScore.gameStatus) && (
                                            <PeriodsContainer>
                                                {liveScore.gameStatus == GameStatus.RUNDOWN_HALF_TIME ? (
                                                    <InfoLabel>{t('markets.market-card.half-time')}</InfoLabel>
                                                ) : (
                                                    <>
                                                        <InfoLabel>
                                                            {` ${getOrdinalNumberLabel(Number(liveScore.period))} ${t(
                                                                `markets.market-card.${getLeaguePeriodType(
                                                                    market.leagueId
                                                                )}`
                                                            )}`}
                                                        </InfoLabel>
                                                        <InfoLabel className="red">
                                                            {liveScore.displayClock?.replaceAll("'", '')}
                                                            <InfoLabel className="blink">&prime;</InfoLabel>
                                                        </InfoLabel>
                                                    </>
                                                )}
                                            </PeriodsContainer>
                                        )}
                                        {leagueSport !== Sport.SOCCER && leagueSport !== Sport.ESPORTS && (
                                            <FlexDivRow>
                                                {liveScore.homeScoreByPeriod.map((_, index) => {
                                                    return (
                                                        <PeriodContainer key={index}>
                                                            <InfoLabel className="gray">{index + 1}</InfoLabel>
                                                            <InfoLabel>{liveScore.homeScoreByPeriod[index]}</InfoLabel>
                                                            <InfoLabel>{liveScore.awayScoreByPeriod[index]}</InfoLabel>
                                                        </PeriodContainer>
                                                    );
                                                })}
                                            </FlexDivRow>
                                        )}
                                    </ResultContainer>
                                ) : (
                                    t(`markets.market-card.${GameStatusKey[liveScore.gameStatus]}`)
                                )
                            ) : (
                                t('markets.market-card.pending')
                            )
                        ) : market.isPaused ? (
                            t('markets.market-card.paused')
                        ) : (
                            <></>
                        )}
                    </Status>
                )}
                <>
                    {isGameOpen && (
                        <ToggleContainer>
                            <Toggle
                                label={{
                                    firstLabel: t('markets.market-card.toggle.hide-paused-markets'),
                                    secondLabel: t('markets.market-card.toggle.show-paused-markets'),
                                }}
                                active={!hidePausedMarkets}
                                dotSize="18px"
                                dotBackground={theme.background.secondary}
                                dotBorder={`3px solid ${theme.borderColor.quaternary}`}
                                handleClick={() => {
                                    setHidePausedMarkets(!hidePausedMarkets);
                                }}
                            />
                        </ToggleContainer>
                    )}
                    <Header market={market} hideSwitch />
                    <PositionsContainer>
                        {numberOfMarkets === 0 ? (
                            <NoMarketsContainer>
                                <NoMarketsLabel>{`${t(
                                    'market.no-markets-found'
                                )} ${marketTypeGroupFilter}`}</NoMarketsLabel>
                                <Button
                                    onClick={() => dispatch(setMarketTypeGroupFilter(undefined))}
                                    backgroundColor={theme.button.background.secondary}
                                    textColor={theme.button.textColor.quaternary}
                                    borderColor={theme.button.borderColor.secondary}
                                    height="24px"
                                    fontSize="12px"
                                >
                                    {t('market.view-all-markets')}
                                </Button>
                            </NoMarketsContainer>
                        ) : (
                            <>
                                {(!marketTypesFilter.length || marketTypesFilter.includes(MarketType.WINNER)) && (
                                    <PositionsV2
                                        markets={[market]}
                                        marketType={MarketType.WINNER}
                                        isGameOpen={isGameOpen}
                                        showInvalid={!hidePausedMarkets}
                                    />
                                )}
                                {Object.keys(groupedChildMarkets).map((key, index) => {
                                    const typeId = Number(key);
                                    const childMarkets = groupedChildMarkets[typeId];
                                    return (
                                        <PositionsV2
                                            key={index}
                                            markets={childMarkets}
                                            marketType={typeId}
                                            isGameOpen={isGameOpen}
                                            showInvalid={!hidePausedMarkets}
                                        />
                                    );
                                })}
                            </>
                        )}
                    </PositionsContainer>
                </>
                {/* <Transactions market={market} /> */}
                <TicketTransactions market={market} />
            </MainContainer>
            {isGameOpen && (
                <SidebarContainer>
                    <Parlay />
                </SidebarContainer>
            )}
            {isMobile && showTicketMobileModal && <TicketMobileModal onClose={() => setShowTicketMobileModal(false)} />}
            {isMobile && <FooterSidebarMobile setParlayMobileVisibility={setShowTicketMobileModal} />}
        </RowContainer>
    );
};

const PositionsContainer = styled(FlexDivColumn)`
    position: relative;
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    padding: 10px 10px 10px 10px;
    background-color: ${(props) => props.theme.oddsContainerBackground.secondary};
    flex: initial;
`;

const getNetworkLogo = (networkId: number) => {
    switch (networkId) {
        case Network.OptimismMainnet:
            return <OPLogo />;
        case Network.Arbitrum:
            return <ArbitrumLogo />;
        default:
            return <></>;
    }
};

const RowContainer = styled(FlexDivRow)`
    margin-top: 40px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 575px) {
        margin-top: 30px;
    }
`;

const MainContainer = styled(FlexDivColumn)<{ isGameOpen: boolean }>`
    width: 100%;
    max-width: 806px;
    margin-right: ${(props) => (props.isGameOpen ? 10 : 0)}px;
    @media (max-width: 575px) {
        margin-right: 0;
    }
    flex: initial;
`;

const SidebarContainer = styled(FlexDivColumn)`
    max-width: 360px;
    @media (max-width: 1299px) {
        max-width: 320px;
    }
    @media (max-width: 950px) {
        display: none;
    }
`;

const HeaderWrapper = styled(FlexDivRow)`
    width: 100%;
    position: relative;
    align-items: center;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

const IncentivizedLeague = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
    right: 0;
    top: 0;
    @media (max-width: 950px) {
        position: static;
        margin-top: 20px;
    }
    svg {
        height: 25px;
    }
`;

const IncentivizedTitle = styled.span`
    font-size: 15px;
    padding-right: 5px;
`;

const Status = styled(FlexDivCentered)<{ backgroundColor?: string }>`
    width: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor || props.theme.background.secondary};
    padding: 10px 50px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 21px;
    line-height: 110%;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor.primary};
`;

const ResultContainer = styled(FlexDivColumnCentered)`
    align-items: center;
`;

const InfoLabel = styled.label`
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    &.gray {
        color: ${(props) => props.theme.textColor.secondary};
    }

    &.red {
        color: ${(props) => props.theme.status.loss};
    }

    &.football {
        color: ${(props) => props.theme.textColor.secondary};
        font-size: 21px;
        font-weight: 700;
    }
    &.ufc {
        display: flex;
        color: ${(props) => props.theme.textColor.secondary};
        font-size: 14px;
        font-weight: 700;
    }

    &.blink {
        color: ${(props) => props.theme.status.loss};
        font-weight: 700;
        animation: blinker 1.5s step-start infinite;
    }

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
`;

const ResultLabel = styled.label`
    text-align: center;
`;

const PeriodContainer = styled(FlexDivColumn)`
    margin: 0px 10px;
    font-size: 18px;
`;

const PeriodsContainer = styled(FlexDivColumn)<{ directionRow?: boolean }>`
    margin-top: 10px;
    flex-direction: ${(props) => (props.directionRow ? 'row' : 'column')};
`;

const NoMarketsContainer = styled(FlexDivColumnCentered)`
    min-height: 200px;
    align-items: center;
    justify-content: start;
    margin-top: 100px;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 100%;
`;

const NoMarketsLabel = styled.span`
    margin-bottom: 15px;
    text-align: center;
    font-size: 16px;
`;

export default MarketDetails;
