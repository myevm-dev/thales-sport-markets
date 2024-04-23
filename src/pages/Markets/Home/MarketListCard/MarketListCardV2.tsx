import TimeRemaining from 'components/TimeRemaining';
import Tooltip from 'components/Tooltip';
import { ENETPULSE_SPORTS, FIFA_WC_TAG, FIFA_WC_U20_TAG, JSON_ODDS_SPORTS, SPORTS_TAGS_MAP } from 'constants/tags';
import useEnetpulseAdditionalDataQuery from 'queries/markets/useEnetpulseAdditionalDataQuery';
import useJsonOddsAdditionalDataQuery from 'queries/markets/useJsonOddsAdditionalDataQuery';
import useSportMarketLiveResultQuery from 'queries/markets/useSportMarketLiveResultQuery';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAppReady } from 'redux/modules/app';
import { formatShortDateWithTime } from 'thales-utils';
import { SportMarketInfoV2, SportMarketLiveResult } from 'types/markets';
import { fixOneSideMarketCompetitorName } from 'utils/formatters/string';
import { getOnImageError, getTeamImageSource } from 'utils/images';
import { isFifaWCGame, isIIHFWCGame, isUEFAGame } from 'utils/markets';
import { isOddValid } from 'utils/marketsV2';
import web3 from 'web3';
import SPAAnchor from '../../../../components/SPAAnchor';
import { BetType } from '../../../../enums/markets';
import {
    getIsMarketSelected,
    getIsThreeWayView,
    getSelectedMarket,
    setSelectedMarket,
} from '../../../../redux/modules/market';
import { buildMarketLink } from '../../../../utils/routes';
import PositionsV2 from '../../Market/MarketDetailsV2/components/PositionsV2';
import MatchStatus from './components/MatchStatus';
import {
    Arrow,
    ClubLogo,
    ExternalArrow,
    MainContainer,
    MarketsCountWrapper,
    MatchInfo,
    MatchInfoConatiner,
    MatchInfoLabel,
    Result,
    ResultLabel,
    ResultWrapper,
    TeamLogosConatiner,
    TeamNameLabel,
    TeamNamesConatiner,
    TeamsInfoConatiner,
    Wrapper,
} from './styled-components';

type MarketRowCardProps = {
    market: SportMarketInfoV2;
    language: string;
};

const MarketListCard: React.FC<MarketRowCardProps> = ({ market, language }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAppReady = useSelector(getIsAppReady);
    const isMarketSelected = useSelector(getIsMarketSelected);
    const isThreeWayView = useSelector(getIsThreeWayView);
    const selectedMarket = useSelector(getSelectedMarket);
    // const isMobile = useSelector((state: RootState) => getIsMobile(state));
    // const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [homeLogoSrc, setHomeLogoSrc] = useState(getTeamImageSource(market.homeTeam, market.leagueId));
    const [awayLogoSrc, setAwayLogoSrc] = useState(getTeamImageSource(market.awayTeam, market.leagueId));

    const [liveResultInfo, setLiveResultInfo] = useState<SportMarketLiveResult | undefined>(undefined);

    useEffect(() => {
        setHomeLogoSrc(getTeamImageSource(market.homeTeam, market.leagueId));
        setAwayLogoSrc(getTeamImageSource(market.awayTeam, market.leagueId));
    }, [market.homeTeam, market.awayTeam, market.leagueId]);

    const isGameStarted = market.maturityDate < new Date();
    const isGameOpen = market.isOpen && !isGameStarted;
    const isGameResolved = market.isResolved || market.isCanceled;
    const isGameRegularlyResolved = market.isResolved && !market.isCanceled;
    const isPendingResolution = isGameStarted && !isGameResolved;
    const isLiveMarket = market.live && isGameStarted;
    const isEnetpulseSport = ENETPULSE_SPORTS.includes(Number(market.leagueId));
    const isJsonOddsSport = JSON_ODDS_SPORTS.includes(Number(market.leagueId));
    const gameIdString = web3.utils.hexToAscii(market.gameId);
    const gameDate = new Date(market.maturityDate).toISOString().split('T')[0];

    const firstSpreadMarket = market.childMarkets.find((childMarket) => childMarket.typeId === BetType.SPREAD);
    const firstTotalMarket = market.childMarkets.find((childMarket) => childMarket.typeId === BetType.TOTAL);

    const useLiveResultQuery = useSportMarketLiveResultQuery(gameIdString, {
        enabled: isAppReady && isPendingResolution && !isEnetpulseSport && !isJsonOddsSport,
    });

    const useEnetpulseLiveResultQuery = useEnetpulseAdditionalDataQuery(gameIdString, gameDate, market.leagueId, {
        enabled: isAppReady && isEnetpulseSport && (isPendingResolution || !localStorage.getItem(market.gameId)),
    });

    const useJsonDataAdditionalInfoQuery = useJsonOddsAdditionalDataQuery(gameIdString, market.leagueId, {
        enabled: isAppReady && isJsonOddsSport && (isPendingResolution || !localStorage.getItem(market.gameId)),
    });

    useEffect(() => {
        if (isEnetpulseSport) {
            if (useEnetpulseLiveResultQuery.isSuccess && useEnetpulseLiveResultQuery.data) {
                setLiveResultInfo(useEnetpulseLiveResultQuery.data);
                const tournamentName = useEnetpulseLiveResultQuery.data.tournamentName
                    ? market.isOneSideMarket
                        ? useEnetpulseLiveResultQuery.data.tournamentName
                        : ' | ' + useEnetpulseLiveResultQuery.data.tournamentName
                    : '';
                const tournamentRound = useEnetpulseLiveResultQuery.data.tournamentRound
                    ? ' | ' + useEnetpulseLiveResultQuery.data.tournamentRound
                    : '';
                localStorage.setItem(market.gameId, tournamentName + tournamentRound);
            }
        } else if (isJsonOddsSport) {
            if (useJsonDataAdditionalInfoQuery.isSuccess && useJsonDataAdditionalInfoQuery.data) {
                const tournamentName = useJsonDataAdditionalInfoQuery.data;
                localStorage.setItem(market.gameId, tournamentName);
            }
        } else {
            if (useLiveResultQuery.isSuccess && useLiveResultQuery.data) {
                setLiveResultInfo(useLiveResultQuery.data);
            }
        }
    }, [
        useLiveResultQuery,
        useLiveResultQuery.data,
        useEnetpulseLiveResultQuery,
        useEnetpulseLiveResultQuery.data,
        isEnetpulseSport,
        market.isOneSideMarket,
        market.gameId,
        useJsonDataAdditionalInfoQuery,
        useJsonDataAdditionalInfoQuery.data,
        isJsonOddsSport,
    ]);

    const areChildMarketsOddsValid = market.childMarkets.some((childMarket) =>
        childMarket.odds.some((odd) => isOddValid(odd))
    );

    const areOddsValid = market.odds.some((odd) => isOddValid(odd));

    const hideGame = isGameOpen && !areOddsValid && !areChildMarketsOddsValid;
    const isColumnView = isThreeWayView && !isMarketSelected && isGameOpen;
    const isTwoPositionalMarket = market.odds.length === 2;
    const selected = selectedMarket == market.gameId;

    let marketsCount = market.childMarkets.length;
    if (isThreeWayView) {
        if (firstSpreadMarket) {
            marketsCount -= 1;
        }
        if (firstTotalMarket) {
            marketsCount -= 1;
        }
    }

    const getMainContainerContent = () => (
        <MainContainer isGameOpen={isGameOpen}>
            <MatchInfoConatiner onClick={() => (isGameOpen ? dispatch(setSelectedMarket(market.gameId)) : {})}>
                <MatchInfo selected={selected}>
                    <Tooltip
                        overlay={
                            <>
                                {t(`markets.market-card.starts-in`)}:{' '}
                                <TimeRemaining end={market.maturityDate} fontSize={11} />
                            </>
                        }
                        component={<MatchInfoLabel>{formatShortDateWithTime(market.maturityDate)} </MatchInfoLabel>}
                    />
                    {isFifaWCGame(market.leagueId) && (
                        <Tooltip overlay={t(`common.fifa-tooltip`)} iconFontSize={12} marginLeft={2} />
                    )}
                    {isIIHFWCGame(market.leagueId) && (
                        <Tooltip overlay={t(`common.iihf-tooltip`)} iconFontSize={12} marginLeft={2} />
                    )}
                    {isUEFAGame(market.leagueId) && (
                        <Tooltip overlay={t(`common.football-tooltip`)} iconFontSize={12} marginLeft={2} />
                    )}
                    <MatchInfoLabel>
                        {(isEnetpulseSport || isJsonOddsSport) &&
                        !isFifaWCGame(market.leagueId) &&
                        !isUEFAGame(market.leagueId) &&
                        (liveResultInfo || localStorage.getItem(market.gameId)) &&
                        !isThreeWayView &&
                        !isMarketSelected ? (
                            <>
                                {localStorage.getItem(market.gameId)}
                                {SPORTS_TAGS_MAP['Tennis'].includes(market.leagueId) && (
                                    <Tooltip overlay={t(`common.tennis-tooltip`)} iconFontSize={12} marginLeft={2} />
                                )}
                            </>
                        ) : (
                            ''
                        )}
                    </MatchInfoLabel>
                </MatchInfo>
                <TeamsInfoConatiner>
                    <TeamLogosConatiner isColumnView={isColumnView} isTwoPositionalMarket={isTwoPositionalMarket}>
                        <ClubLogo
                            height={market.leagueId == FIFA_WC_TAG || market.leagueId == FIFA_WC_U20_TAG ? '17px' : ''}
                            width={market.leagueId == FIFA_WC_TAG || market.leagueId == FIFA_WC_U20_TAG ? '27px' : ''}
                            alt="Home team logo"
                            src={homeLogoSrc}
                            onError={getOnImageError(setHomeLogoSrc, market.leagueId)}
                            isColumnView={isColumnView}
                        />
                        {!market.isOneSideMarket && (
                            <>
                                <ClubLogo
                                    height={
                                        market.leagueId == FIFA_WC_TAG || market.leagueId == FIFA_WC_U20_TAG
                                            ? '17px'
                                            : ''
                                    }
                                    width={
                                        market.leagueId == FIFA_WC_TAG || market.leagueId == FIFA_WC_U20_TAG
                                            ? '27px'
                                            : ''
                                    }
                                    alt="Away team logo"
                                    src={awayLogoSrc}
                                    onError={getOnImageError(setAwayLogoSrc, market.leagueId)}
                                    awayTeam={true}
                                    isColumnView={isColumnView}
                                />
                            </>
                        )}
                    </TeamLogosConatiner>
                    <TeamNamesConatiner isColumnView={isColumnView} isTwoPositionalMarket={isTwoPositionalMarket}>
                        <TeamNameLabel isColumnView={isColumnView} isMarketSelected={isMarketSelected}>
                            {market.isOneSideMarket ? fixOneSideMarketCompetitorName(market.homeTeam) : market.homeTeam}
                        </TeamNameLabel>
                        {!market.isOneSideMarket && (
                            <TeamNameLabel isColumnView={isColumnView} isMarketSelected={isMarketSelected}>
                                {market.awayTeam}
                            </TeamNameLabel>
                        )}
                    </TeamNamesConatiner>
                </TeamsInfoConatiner>
            </MatchInfoConatiner>
            {!isMarketSelected && (
                <>
                    {isGameOpen ? (
                        <>
                            <PositionsV2
                                markets={[market]}
                                betType={BetType.WINNER}
                                isGameOpen={isGameOpen}
                                isMainPageView
                                isColumnView={isColumnView}
                            />
                            {isColumnView && firstSpreadMarket && (
                                <PositionsV2
                                    markets={[firstSpreadMarket]}
                                    betType={BetType.SPREAD}
                                    isGameOpen={isGameOpen}
                                    isMainPageView
                                    isColumnView={isColumnView}
                                />
                            )}
                            {isColumnView && firstTotalMarket && (
                                <PositionsV2
                                    markets={[firstTotalMarket]}
                                    betType={BetType.TOTAL}
                                    isGameOpen={isGameOpen}
                                    isMainPageView
                                    isColumnView={isColumnView}
                                />
                            )}
                            {marketsCount > 0 && (
                                <MarketsCountWrapper onClick={() => dispatch(setSelectedMarket(market.gameId))}>
                                    {`+${marketsCount}`}
                                    <Arrow className={'icon icon--arrow-down'} />
                                </MarketsCountWrapper>
                            )}

                            <SPAAnchor
                                href={buildMarketLink(
                                    market.gameId,
                                    language,
                                    false,
                                    encodeURIComponent(`${market.homeTeam} vs ${market.awayTeam}`)
                                )}
                            >
                                <Tooltip
                                    overlay="Open market page"
                                    component={<ExternalArrow className={'icon icon--arrow-external'} />}
                                />
                            </SPAAnchor>
                        </>
                    ) : (
                        <>
                            {isGameRegularlyResolved ? (
                                <ResultWrapper>
                                    <ResultLabel>
                                        {!market.isOneSideMarket ? `${t('markets.market-card.result')}:` : ''}
                                    </ResultLabel>
                                    <Result>
                                        {market.isOneSideMarket
                                            ? market.homeScore == 1
                                                ? t('markets.market-card.race-winner')
                                                : t('markets.market-card.no-win')
                                            : Number(market.leagueId) != 9007
                                            ? `${market.homeScore} - ${market.awayScore}`
                                            : ''}
                                        {Number(market.leagueId) == 9007 ? (
                                            <>
                                                {Number(market.homeScore) > 0
                                                    ? `W - L (R${market.homeScore})`
                                                    : `L - W (R${market.awayScore})`}
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </Result>
                                </ResultWrapper>
                            ) : (
                                <MatchStatus
                                    isPendingResolution={isPendingResolution}
                                    liveResultInfo={liveResultInfo}
                                    isCanceled={market.isCanceled}
                                    isPaused={market.isPaused}
                                    isEnetpulseSport={isEnetpulseSport}
                                    isJsonOddsSport={isJsonOddsSport}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </MainContainer>
    );

    return (
        <Wrapper
            hideGame={hideGame}
            isResolved={isGameRegularlyResolved}
            selected={selected}
            isMarketSelected={isMarketSelected}
        >
            {isGameOpen ? (
                <>{getMainContainerContent()}</>
            ) : (
                <SPAAnchor
                    href={buildMarketLink(
                        market.gameId,
                        language,
                        false,
                        encodeURIComponent(`${market.homeTeam} vs ${market.awayTeam}`)
                    )}
                >
                    {getMainContainerContent()}
                </SPAAnchor>
            )}
        </Wrapper>
    );
};

export default MarketListCard;
