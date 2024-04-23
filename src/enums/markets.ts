export enum GlobalFiltersEnum {
    OpenMarkets = 'OpenMarkets',
    PendingMarkets = 'PendingMarkets',
    ResolvedMarkets = 'ResolvedMarkets',
    Canceled = 'Canceled',
}

export enum SortDirection {
    NONE,
    ASC,
    DESC,
}

export enum SportFilterEnum {
    Live = 'Live',
    Favourites = 'Favourites',
    All = 'All',
    Soccer = 'Soccer',
    Football = 'Football',
    Basketball = 'Basketball',
    Baseball = 'Baseball',
    Hockey = 'Hockey',
    MMA = 'MMA',
    Tennis = 'Tennis',
    eSports = 'eSports',
    Cricket = 'Cricket',
    // Motosport = 'Motosport',
    Golf = 'Golf',
}

export enum OddsType {
    American = 'american-odds',
    Decimal = 'decimal-odds',
    AMM = 'normalized-implied-odds',
}

export enum ContractSGPOrder {
    MONEYLINETOTALS = 0,
    MONEYLINESPREAD = 1,
    SPREADTOTALS = 2,
}

export enum PositionName {
    home = 'home',
    away = 'away',
    draw = 'draw',
}

export enum Position {
    HOME = 0,
    AWAY = 1,
    DRAW = 2,
}

export enum DoubleChanceMarketType {
    HOME_TEAM_NOT_TO_LOSE = 'HomeTeamNotToLose',
    NO_DRAW = 'NoDraw',
    AWAY_TEAM_NOT_TO_LOSE = 'AwayTeamNotToLose',
}

export enum BetType {
    WINNER = 0,
    SPREAD = 10001,
    TOTAL = 10002,
    DOUBLE_CHANCE = 10003,
    WINNER_TOTAL = 10004,
    TOTAL_ODD_EVEN = 10005,
    HALFTIME_FULLTIME = 10006,
    GOALS = 10007,
    HALFTIME_FULLTIME_GOALS = 10008,
    SPREAD2 = 10013,
    TOTAL2 = 10014,
    PLAYER_PROPS_HOMERUNS = 11010,
    PLAYER_PROPS_STRIKEOUTS = 11019,
    PLAYER_PROPS_PASSING_YARDS = 11051,
    PLAYER_PROPS_PASSING_TOUCHDOWNS = 11052,
    PLAYER_PROPS_RUSHING_YARDS = 11053,
    PLAYER_PROPS_RECEIVING_YARDS = 11057,
    PLAYER_PROPS_TOUCHDOWNS = 11055,
    PLAYER_PROPS_FIELD_GOALS_MADE = 11060,
    PLAYER_PROPS_PITCHER_HITS_ALLOWED = 11047,
    PLAYER_PROPS_POINTS = 11029,
    PLAYER_PROPS_SHOTS = 11097,
    PLAYER_PROPS_GOALS = 11086,
    PLAYER_PROPS_HITS_RECORDED = 11012,
    PLAYER_PROPS_REBOUNDS = 11035,
    PLAYER_PROPS_ASSISTS = 11039,
    PLAYER_PROPS_DOUBLE_DOUBLE = 11087,
    PLAYER_PROPS_TRIPLE_DOUBLE = 11088,
    PLAYER_PROPS_RECEPTIONS = 11058,
    PLAYER_PROPS_FIRST_TOUCHDOWN = 11049,
    PLAYER_PROPS_LAST_TOUCHDOWN = 11056,
    PLAYER_PROPS_3PTS_MADE = 11038,

    FIRST_PERIOD_WINNER = 10021,
    SECOND_PERIOD_WINNER = 10022,
    THIRD_PERIOD_WINNER = 10023,
    FOURTH_PERIOD_WINNER = 10024,
    FIFTH_PERIOD_WINNER = 10025,
    SIXTH_PERIOD_WINNER = 10026,
    SEVENTH_PERIOD_WINNER = 10027,
    EIGHTH_PERIOD_WINNER = 10028,
    NINTH_PERIOD_WINNER = 10029,
    FIRST_PERIOD_TOTAL = 10031,
    SECOND_PERIOD_TOTAL = 10032,
    THIRD_PERIOD_TOTAL = 10033,
    FOURTH_PERIOD_TOTAL = 10034,
    FIFTH_PERIOD_TOTAL = 10035,
    SIXTH_PERIOD_TOTAL = 10036,
    SEVENTH_PERIOD_TOTAL = 10037,
    EIGHTH_PERIOD_TOTAL = 10038,
    NINTH_PERIOD_TOTAL = 10039,
    FIRST_PERIOD_SPREAD = 10041,
    SECOND_PERIOD_SPREAD = 10042,
    THIRD_PERIOD_SPREAD = 10043,
    FOURTH_PERIOD_SPREAD = 10044,
    FIFTH_PERIOD_SPREAD = 10045,
    SIXTH_PERIOD_SPREAD = 10046,
    SEVENTH_PERIOD_SPREAD = 10047,
    EIGHTH_PERIOD_SPREAD = 10048,
    NINTH_PERIOD_SPREAD = 10049,

    FIRST_PERIOD_WINNER2 = 10051,
    SECOND_PERIOD_WINNER2 = 10052,
    THIRD_PERIOD_WINNER2 = 10053,
    FOURTH_PERIOD_WINNER2 = 10054,
    FIFTH_PERIOD_WINNER2 = 10055,
    SIXTH_PERIOD_WINNER2 = 10056,
    SEVENTH_PERIOD_WINNER2 = 10057,
    EIGHTH_PERIOD_WINNER2 = 10058,
    NINTH_PERIOD_WINNER2 = 10059,
    FIRST_PERIOD_TOTAL2 = 10061,
    SECOND_PERIOD_TOTAL2 = 10062,
    THIRD_PERIOD_TOTAL2 = 10063,
    FOURTH_PERIOD_TOTAL2 = 10064,
    FIFTH_PERIOD_TOTAL2 = 10065,
    SIXTH_PERIOD_TOTAL2 = 10066,
    SEVENTH_PERIOD_TOTAL2 = 10067,
    EIGHTH_PERIOD_TOTAL2 = 10068,
    NINTH_PERIOD_TOTAL2 = 10069,
    FIRST_PERIOD_SPREAD2 = 10071,
    SECOND_PERIOD_SPREAD2 = 10072,
    THIRD_PERIOD_SPREAD2 = 10073,
    FOURTH_PERIOD_SPREAD2 = 10074,
    FIFTH_PERIOD_SPREAD2 = 10075,
    SIXTH_PERIOD_SPREAD2 = 10076,
    SEVENTH_PERIOD_SPREAD2 = 10077,
    EIGHTH_PERIOD_SPREAD2 = 10078,
    NINTH_PERIOD_SPREAD2 = 10079,

    FIRST_PERIOD_TOTAL_ODD_EVEN = 10081,
    SECOND_PERIOD_TOTAL_ODD_EVEN = 10082,
    THIRD_PERIOD_TOTAL_ODD_EVEN = 10083,
    FOURTH_PERIOD_TOTAL_ODD_EVEN = 10084,
    FIFTH_PERIOD_TOTAL_ODD_EVEN = 10085,
    SIXTH_PERIOD_TOTAL_ODD_EVEN = 10086,
    SEVENTH_PERIOD_TOTAL_ODD_EVEN = 10087,
    EIGHTH_PERIOD_TOTAL_ODD_EVEN = 10088,
    NINTH_PERIOD_TOTAL_ODD_EVEN = 10089,
    FIRST_PERIOD_TOTAL2_ODD_EVEN = 10091,
    SECOND_PERIOD_TOTAL2_ODD_EVEN = 10092,
    THIRD_PERIOD_TOTAL2_ODD_EVEN = 10093,
    FOURTH_PERIOD_TOTAL2_ODD_EVEN = 10094,
    FIFTH_PERIOD_TOTAL2_ODD_EVEN = 10095,
    SIXTH_PERIOD_TOTAL2_ODD_EVEN = 10096,
    SEVENTH_PERIOD_TOTAL2_ODD_EVEN = 10097,
    EIGHTH_PERIOD_TOTAL2_ODD_EVEN = 10098,
    NINTH_PERIOD_TOTAL2_ODD_EVEN = 10099,
}

export enum ParlayErrorCode {
    NO_ERROS = 0,
    MAX_MATCHES = 1,
    SAME_TEAM_TWICE = 2,
    MAX_DOUBLE_CHANCES = 3,
    MAX_COMBINED_MARKETS = 4,
    MAX_NUMBER_OF_MARKETS_WITH_COMBINED_MARKETS = 5,
    SAME_EVENT_PARTICIPANT = 6,
    UNIQUE_TOURNAMENT_PLAYERS = 7,
    ADDING_PLAYER_PROPS_ALREADY_HAVE_POSITION_OF_SAME_MARKET = 8,
    SAME_GAME_OTHER_PLAYER_PROPS_TYPE = 9,
    COMBINE_REGULAR_WITH_COMBINED_POSITIONS = 10,
}

export enum CombinedPositionsMatchingCode {
    SAME_POSITIONS = 0,
    SAME_MARKETS = 1,
    SAME_MARKET_ADDRESSES_NOT_POSITIONS = 2,
    SAME_POSITIONS_DIFFERENT_ODDS = 3,
    NOTHING_COMMON = 4,
    SAME_PARENT_MARKET = 5,
}
export const PLAYER_PROPS_BET_TYPES = [
    BetType.PLAYER_PROPS_HOMERUNS,
    BetType.PLAYER_PROPS_STRIKEOUTS,
    BetType.PLAYER_PROPS_PASSING_YARDS,
    BetType.PLAYER_PROPS_PASSING_TOUCHDOWNS,
    BetType.PLAYER_PROPS_RUSHING_YARDS,
    BetType.PLAYER_PROPS_RECEIVING_YARDS,
    BetType.PLAYER_PROPS_TOUCHDOWNS,
    BetType.PLAYER_PROPS_FIELD_GOALS_MADE,
    BetType.PLAYER_PROPS_PITCHER_HITS_ALLOWED,
    BetType.PLAYER_PROPS_POINTS,
    BetType.PLAYER_PROPS_SHOTS,
    BetType.PLAYER_PROPS_GOALS,
    BetType.PLAYER_PROPS_HITS_RECORDED,
    BetType.PLAYER_PROPS_REBOUNDS,
    BetType.PLAYER_PROPS_ASSISTS,
    BetType.PLAYER_PROPS_DOUBLE_DOUBLE,
    BetType.PLAYER_PROPS_TRIPLE_DOUBLE,
    BetType.PLAYER_PROPS_RECEPTIONS,
    BetType.PLAYER_PROPS_FIRST_TOUCHDOWN,
    BetType.PLAYER_PROPS_LAST_TOUCHDOWN,
    BetType.PLAYER_PROPS_3PTS_MADE,
];

export const ONE_SIDER_PLAYER_PROPS_BET_TYPES = [
    BetType.PLAYER_PROPS_TOUCHDOWNS,
    BetType.PLAYER_PROPS_GOALS,
    BetType.PLAYER_PROPS_FIRST_TOUCHDOWN,
    BetType.PLAYER_PROPS_LAST_TOUCHDOWN,
];

export const SPECIAL_YES_NO_BET_TYPES = [BetType.PLAYER_PROPS_DOUBLE_DOUBLE, BetType.PLAYER_PROPS_TRIPLE_DOUBLE];

export const TOTAL_BET_TYPES = [BetType.TOTAL, BetType.TOTAL2];

export const TOTAL_ODD_EVEN_BET_TYPES = [BetType.TOTAL_ODD_EVEN];

export const SPREAD_BET_TYPES = [BetType.SPREAD, BetType.SPREAD2];

export const COMBINED_POSITIONS_BET_TYPES = [
    BetType.WINNER_TOTAL,
    BetType.HALFTIME_FULLTIME,
    BetType.GOALS,
    BetType.HALFTIME_FULLTIME_GOALS,
];

export const WINNER_BET_TYPES = [BetType.WINNER];
