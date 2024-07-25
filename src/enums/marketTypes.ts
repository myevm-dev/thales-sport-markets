export enum MarketType {
    // Winner
    WINNER = 0,
    // Winner without draw
    DRAW_NO_BET = 10010,
    // Winner with draw - for hockey
    WINNER2 = 10011,
    // Winner (placeholder)
    WINNER3 = 10012,
    // Who will score first
    FIRST_SCORE = 10019,
    // Who will score last
    LAST_SCORE = 10020,
    // Clean sheet per team
    CLEAN_SHEET_HOME_TEAM = 10141,
    CLEAN_SHEET_AWAY_TEAM = 10142,
    // Winner period - half for soccer, quarter for basketball
    FIRST_PERIOD_WINNER = 10021,
    SECOND_PERIOD_WINNER = 10022,
    THIRD_PERIOD_WINNER = 10023,
    FOURTH_PERIOD_WINNER = 10024,
    FIFTH_PERIOD_WINNER = 10025,
    SIXTH_PERIOD_WINNER = 10026,
    SEVENTH_PERIOD_WINNER = 10027,
    EIGHTH_PERIOD_WINNER = 10028,
    NINTH_PERIOD_WINNER = 10029,
    // Winner period - half for basketball
    FIRST_PERIOD_WINNER2 = 10051,
    SECOND_PERIOD_WINNER2 = 10052,
    THIRD_PERIOD_WINNER2 = 10053,
    FOURTH_PERIOD_WINNER2 = 10054,
    FIFTH_PERIOD_WINNER2 = 10055,
    SIXTH_PERIOD_WINNER2 = 10056,
    SEVENTH_PERIOD_WINNER2 = 10057,
    EIGHTH_PERIOD_WINNER2 = 10058,
    NINTH_PERIOD_WINNER2 = 10059,
    // Winner without draw period - half for soccer, quarter for basketball
    FIRST_PERIOD_DRAW_NO_BET = 10121,
    SECOND_PERIOD_DRAW_NO_BET = 10122,
    THIRD_PERIOD_DRAW_NO_BET = 10123,
    FOURTH_PERIOD_DRAW_NO_BET = 10124,

    // Spread (handicap)
    SPREAD = 10001,
    // Spread (handicap) - sets for tennis
    SPREAD2 = 10013,
    // Spread period - half for soccer, quarter for basketball
    FIRST_PERIOD_SPREAD = 10041,
    SECOND_PERIOD_SPREAD = 10042,
    THIRD_PERIOD_SPREAD = 10043,
    FOURTH_PERIOD_SPREAD = 10044,
    FIFTH_PERIOD_SPREAD = 10045,
    SIXTH_PERIOD_SPREAD = 10046,
    SEVENTH_PERIOD_SPREAD = 10047,
    EIGHTH_PERIOD_SPREAD = 10048,
    NINTH_PERIOD_SPREAD = 10049,
    // Spread period - half for basketball
    FIRST_PERIOD_SPREAD2 = 10071,
    SECOND_PERIOD_SPREAD2 = 10072,
    THIRD_PERIOD_SPREAD2 = 10073,
    FOURTH_PERIOD_SPREAD2 = 10074,
    FIFTH_PERIOD_SPREAD2 = 10075,
    SIXTH_PERIOD_SPREAD2 = 10076,
    SEVENTH_PERIOD_SPREAD2 = 10077,
    EIGHTH_PERIOD_SPREAD2 = 10078,
    NINTH_PERIOD_SPREAD2 = 10079,

    // Total
    TOTAL = 10002,
    // Total - sets for tennis
    TOTAL2 = 10014,
    // Total period - half for soccer, quarter for basketball
    FIRST_PERIOD_TOTAL = 10031,
    SECOND_PERIOD_TOTAL = 10032,
    THIRD_PERIOD_TOTAL = 10033,
    FOURTH_PERIOD_TOTAL = 10034,
    FIFTH_PERIOD_TOTAL = 10035,
    SIXTH_PERIOD_TOTAL = 10036,
    SEVENTH_PERIOD_TOTAL = 10037,
    EIGHTH_PERIOD_TOTAL = 10038,
    NINTH_PERIOD_TOTAL = 10039,
    // Total period - half for basketball
    FIRST_PERIOD_TOTAL2 = 10061,
    SECOND_PERIOD_TOTAL2 = 10062,
    THIRD_PERIOD_TOTAL2 = 10063,
    FOURTH_PERIOD_TOTAL2 = 10064,
    FIFTH_PERIOD_TOTAL2 = 10065,
    SIXTH_PERIOD_TOTAL2 = 10066,
    SEVENTH_PERIOD_TOTAL2 = 10067,
    EIGHTH_PERIOD_TOTAL2 = 10068,
    NINTH_PERIOD_TOTAL2 = 10069,
    // Total per team
    TOTAL_HOME_TEAM = 10017,
    TOTAL_AWAY_TEAM = 10018,
    // Total per team period - half for soccer
    FIRST_PERIOD_TOTAL_HOME_TEAM = 10111,
    FIRST_PERIOD_TOTAL_AWAY_TEAM = 10112,
    SECOND_PERIOD_TOTAL_HOME_TEAM = 10211,
    SECOND_PERIOD_TOTAL_AWAY_TEAM = 10212,

    // Total odd/even
    TOTAL_ODD_EVEN = 10005,
    // Total odd/even period - half for soccer, quarter for basketball
    FIRST_PERIOD_TOTAL_ODD_EVEN = 10081,
    SECOND_PERIOD_TOTAL_ODD_EVEN = 10082,
    THIRD_PERIOD_TOTAL_ODD_EVEN = 10083,
    FOURTH_PERIOD_TOTAL_ODD_EVEN = 10084,
    FIFTH_PERIOD_TOTAL_ODD_EVEN = 10085,
    SIXTH_PERIOD_TOTAL_ODD_EVEN = 10086,
    SEVENTH_PERIOD_TOTAL_ODD_EVEN = 10087,
    EIGHTH_PERIOD_TOTAL_ODD_EVEN = 10088,
    NINTH_PERIOD_TOTAL_ODD_EVEN = 10089,
    // Total odd/even period - half for basketball
    FIRST_PERIOD_TOTAL2_ODD_EVEN = 10091,
    SECOND_PERIOD_TOTAL2_ODD_EVEN = 10092,
    THIRD_PERIOD_TOTAL2_ODD_EVEN = 10093,
    FOURTH_PERIOD_TOTAL2_ODD_EVEN = 10094,
    FIFTH_PERIOD_TOTAL2_ODD_EVEN = 10095,
    SIXTH_PERIOD_TOTAL2_ODD_EVEN = 10096,
    SEVENTH_PERIOD_TOTAL2_ODD_EVEN = 10097,
    EIGHTH_PERIOD_TOTAL2_ODD_EVEN = 10098,
    NINTH_PERIOD_TOTAL2_ODD_EVEN = 10099,

    // Double chance
    DOUBLE_CHANCE = 10003,
    // Double chance period - half for soccer
    FIRST_PERIOD_DOUBLE_CHANCE = 10015,
    SECOND_PERIOD_DOUBLE_CHANCE = 10016,

    // Both teams to score
    BOTH_TEAMS_TO_SCORE = 10009,
    // Both teams to score period - half for soccer
    FIRST_PERIOD_BOTH_TEAMS_TO_SCORE = 10101,
    SECOND_PERIOD_BOTH_TEAMS_TO_SCORE = 10102,
    THIRD_PERIOD_BOTH_TEAMS_TO_SCORE = 10103,
    FOURTH_PERIOD_BOTH_TEAMS_TO_SCORE = 10104,
    FIFTH_PERIOD_BOTH_TEAMS_TO_SCORE = 10105,
    SIXTH_PERIOD_BOTH_TEAMS_TO_SCORE = 10106,
    SEVENTH_PERIOD_BOTH_TEAMS_TO_SCORE = 10107,
    EIGHTH_PERIOD_BOTH_TEAMS_TO_SCORE = 10108,
    NINTH_PERIOD_BOTH_TEAMS_TO_SCORE = 10109,

    // Combined positions
    WINNER_TOTAL = 10004,
    HALFTIME_FULLTIME = 10006,
    GOALS = 10007,
    HALFTIME_FULLTIME_GOALS = 10008,

    // Who will qualify for the next round
    WHO_WILL_QUALIFY = 10130,
    // Will there be overtime in the game
    WILL_THERE_BE_OVERTIME = 10131,
    // No runs in the first inning
    FIRST_INNING_NO_RUNS = 10132,

    // Player props
    PLAYER_PROPS_HOMERUNS = 11010,
    PLAYER_PROPS_BASES = 11011,
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
    PLAYER_PROPS_BLOCKS = 11098,
}

export enum MarketTypeGroup {
    WINNER = 'Winner',
    TOTALS = 'Totals',
    HANDICAP = 'Handicap',
    DOUBLE_CHANCE = 'Double chance',
    DRAW_NO_BET = 'Draw no bet',
    BOTH_TEAMS_TO_SCORE = 'Both teams to score',
    FIRST_HALF = '1st half',
    SECOND_HALF = '2nd half',
    FIRST_SET = '1st set',
    SECOND_SET = '2nd set',
    THIRD_SET = '3rd set',
    SETS = 'Sets',
    GAMES = 'Games',
    SGP = 'SGP',
    PLAYER_PROPS = 'All player props',
    PLAYER_POINTS = 'Player points',
    PLAYER_REBOUNDS = 'Player rebounds',
    PLAYER_ASSISTS = 'Player assists',
    PLAYER_THRESS = 'Player threes',
    PLAYER_BLOCKS = 'Player blocks',
    PLAYER_DOUBLE_DOUBLE = 'Player double double',
    PLAYER_TRIPLE_DOUBLE = 'Player triple double',
    PLAYER_GOALS = 'Goalscorer',
    PLAYER_SHOTS = 'Shots on goal',
    PLAYER_HITS_RECORDED = 'Hits recorded',
    PLAYER_STRIKEOUTS = 'Strikeouts',
    POINTS = 'Points',
    QUARTERS = 'Quarters',
    FIRST_QUARTER = '1st quarter',
    SECOND_QUARTER = '2nd quarter',
    THIRD_QUARTER = '3rd quarter',
    FOURTH_QUARTER = '4th quarter',
    Halves = 'Halves',
}
