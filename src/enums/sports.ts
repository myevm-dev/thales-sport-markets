export enum Sport {
    SOCCER = 'Soccer',
    FOOTBALL = 'Football',
    BASKETBALL = 'Basketball',
    BASEBALL = 'Baseball',
    HOCKEY = 'Hockey',
    FIGHTING_SPORTS = 'Fighting sports',
    TENNIS = 'Tennis',
    ESPORTS = 'eSports',
    CRICKET = 'Cricket',
    MOTOSPORT = 'Motosport',
    GOLF = 'Golf',
}

export enum League {
    NCAAF = 1,
    NFL = 2,
    MLB = 3,
    NBA = 4,
    NCAAB = 5,
    NHL = 6,
    UFC = 7,
    WNBA = 8,
    MLS = 10,
    EPL = 11,
    LIGUE_ONE = 12,
    BUNDESLIGA = 13,
    LA_LIGA = 14,
    SERIE_A = 15,
    UEFA_CL = 16,
    UEFA_EL = 17,
    FIFA_WC = 18,
    J1_LEAGUE = 19,
    IPL = 20,
    T20_BLAST = 21,
    IIHF_WORLD_CHAMPIONSHIP = 33,
    COPA_LIBERTADORES = 45,
    UEFA_EURO_QUALIFICATIONS = 50,
    EREDIVISIE = 57,
    PRIMEIRA_LIGA = 61,
    FIFA_WC_WOMEN = 76,
    ENGLAND_CUP = 132,
    FRANCE_CUP = 134,
    SPAIN_CUP = 138,
    ITALY_CUP = 141,
    TENNIS_GS = 153,
    TENNIS_MASTERS = 156,
    GERMANY_CUP = 209,
    BRAZIL_1 = 268,
    UEFA_EURO_U21 = 288,
    FIFA_WORLD_CUP_U20 = 296,
    EUROLEAGUE = 399,
    FIBA_WORLD_CUP = 409,
    FORMULA1 = 445,
    MOTOGP = 497,
    SAUDI_PROFESSIONAL_LEAGUE = 536,
    BOXING = 9196,
    UEFA_NATIONS_LEAGUE = 9806,
    CONCACAF_NATIONS_LEAGUE = 9821,
    CSGO = 9977,
    DOTA2 = 9983,
    LOL = 10138,
    CONMEBOL_WC_QUALIFICATIONS = 10199,
    UEFA_CONFERENCE_LEAGUE = 10216,
    NON_TITLE_BOXING = 10595,
    GOLF_H2H = 100021,
    GOLF_WINNER = 100121,
}

export enum ScoringType {
    POINTS = 'points',
    GOALS = 'goals',
    ROUNDS = 'rounds',
    SETS = 'sets',
    EMPTY = '',
}

export enum MatchResolveType {
    OVERTIME = 'overtime',
    REGULAR = 'regular',
    EMPTY = '',
}

export enum PeriodType {
    QUARTER = 'quarter',
    HALF = 'half',
    PERIOD = 'period',
    ROUND = 'round',
    INNING = 'inning',
    SET = 'set',
    EMPTY = '',
}

export enum Provider {
    RUNDOWN = 'rundown',
    ENETPULSE = 'enetpulse',
    JSONODDS = 'jsonOdds',
}
