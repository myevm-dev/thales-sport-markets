import {
    FIFA_WC_TAG,
    FIFA_WC_U20_TAG,
    GOLF_TAGS,
    GOLF_TOURNAMENT_WINNER_TAG,
    IIHF_WC_TAG,
    INTERNATIONAL_SPORTS,
    MOTOSPORT_TAGS,
    SPORTS_TAGS_MAP,
    TAGS_OF_MARKETS_WITHOUT_DRAW_ODDS,
    UEFA_TAGS,
} from 'constants/tags';
import { OddsType } from 'enums/markets';
import { formatCurrency } from 'thales-utils';
import { MarketTypeMap } from '../constants/marketTypes';
import {
    BOTH_TEAMS_TO_SCORE_MARKET_TYPES,
    COMBINED_POSITIONS_MARKET_TYPES,
    DOUBLE_CHANCE_MARKET_TYPES,
    MarketType,
    ONE_SIDE_PLAYER_PROPS_MARKET_TYPES,
    PLAYER_PROPS_MARKET_TYPES,
    SPREAD_MARKET_TYPES,
    TOTAL_MARKET_TYPES,
    TOTAL_ODD_EVEN_MARKET_TYPES,
    WINNER_MARKET_TYPES,
    YES_NO_PLAYER_PROPS_MARKET_TYPES,
} from '../enums/marketTypes';

export const formatMarketOdds = (oddsType: OddsType, odds: number | undefined) => {
    if (!odds) {
        return '0';
    }
    switch (oddsType) {
        case OddsType.Decimal:
            return `${formatCurrency(1 / odds, 2)}`;
        case OddsType.American:
            const decimal = 1 / odds;
            if (decimal >= 2) {
                return `+${formatCurrency((decimal - 1) * 100, 0)}`;
            } else {
                return `-${formatCurrency(100 / (decimal - 1), 0)}`;
            }
        case OddsType.AMM:
        default:
            return `${formatCurrency(odds, odds < 0.1 ? 4 : 2)}`;
    }
};

export const isFifaWCGame = (tag: number) => Number(tag) === FIFA_WC_TAG || Number(tag) === FIFA_WC_U20_TAG;

export const isIIHFWCGame = (tag: number) => Number(tag) === IIHF_WC_TAG;

export const isUEFAGame = (tag: number) => UEFA_TAGS.includes(tag);

export const isInternationalGame = (tag: number) => INTERNATIONAL_SPORTS.includes(tag);

export const isMotosport = (tag: number) => MOTOSPORT_TAGS.includes(tag);

export const isGolf = (tag: number) => GOLF_TAGS.includes(tag);

export const getIsOneSideMarket = (tag: number) =>
    SPORTS_TAGS_MAP['Motosport'].includes(Number(tag)) || Number(tag) == GOLF_TOURNAMENT_WINNER_TAG;

export const getIsPlayerPropsMarket = (marketType: MarketType) => {
    return PLAYER_PROPS_MARKET_TYPES.includes(marketType);
};

export const getIsOneSidePlayerPropsMarket = (marketType: MarketType) => {
    return ONE_SIDE_PLAYER_PROPS_MARKET_TYPES.includes(marketType);
};

export const getIsYesNoPlayerPropsMarket = (marketType: MarketType) => {
    return YES_NO_PLAYER_PROPS_MARKET_TYPES.includes(marketType);
};

export const getIsWinnerMarket = (marketType: MarketType) => {
    return WINNER_MARKET_TYPES.includes(marketType);
};

export const getIsTotalMarket = (marketType: MarketType) => {
    return TOTAL_MARKET_TYPES.includes(marketType);
};

export const getIsTotalOddEvenMarket = (marketType: MarketType) => {
    return TOTAL_ODD_EVEN_MARKET_TYPES.includes(marketType);
};

export const getIsSpreadMarket = (marketType: MarketType) => {
    return SPREAD_MARKET_TYPES.includes(marketType);
};

export const getIsCombinedPositionsMarket = (marketType: MarketType) => {
    return COMBINED_POSITIONS_MARKET_TYPES.includes(marketType);
};

export const getIsBothsTeamsToScoreMarket = (marketType: MarketType) => {
    return BOTH_TEAMS_TO_SCORE_MARKET_TYPES.includes(marketType);
};

export const getIsDoubleChanceMarket = (marketType: MarketType) => {
    return DOUBLE_CHANCE_MARKET_TYPES.includes(marketType);
};

export const getIsPeriodMarket = (marketType: MarketType) => {
    return (
        marketType === MarketType.FIRST_PERIOD_DOUBLE_CHANCE ||
        marketType === MarketType.SECOND_PERIOD_DOUBLE_CHANCE ||
        `${marketType}`.startsWith('1002') ||
        `${marketType}`.startsWith('1003') ||
        `${marketType}`.startsWith('1004') ||
        `${marketType}`.startsWith('1008') ||
        `${marketType}`.startsWith('1010') ||
        `${marketType}`.startsWith('1011') ||
        `${marketType}`.startsWith('1012')
    );
};

export const getIsPeriod2Market = (marketType: MarketType) => {
    return (
        `${marketType}`.startsWith('1005') ||
        `${marketType}`.startsWith('1006') ||
        `${marketType}`.startsWith('1007') ||
        `${marketType}`.startsWith('1009')
    );
};

export const getIsDrawAvailable = (leagueId: number, marketType: MarketType) =>
    !TAGS_OF_MARKETS_WITHOUT_DRAW_ODDS.includes(leagueId) && getIsWinnerMarket(marketType);

export const getPositionOrder = (leagueId: number, marketType: MarketType, position: number) =>
    getIsDrawAvailable(leagueId, marketType) ? `${position == 0 ? 1 : position == 1 ? 3 : 2}` : undefined;

export const getMarketTypeName = (marketType: MarketType) => {
    const marketTypeInfo = MarketTypeMap[marketType];
    return marketTypeInfo ? marketTypeInfo.name : marketType;
};
