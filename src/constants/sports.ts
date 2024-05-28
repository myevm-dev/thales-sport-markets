import { League, MatchResolveType, PeriodType, Provider, ScoringType, Sport } from 'enums/sports';
import { LeagueInfo } from 'types/sports';

export const LeagueMap: Record<League, LeagueInfo> = {
    [League.NCAAF]: {
        sport: Sport.FOOTBALL,
        id: League.NCAAF,
        label: 'NCAA Football',
        logo: `/logos/leagueLogos/ncaa.webp`,
        logoClass: 'icon-homepage league--ncaa',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 202,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.NFL]: {
        sport: Sport.FOOTBALL,
        id: League.NFL,
        label: 'NFL',
        logo: `/logos/leagueLogos/nfl.webp`,
        logoClass: 'icon-homepage league--nfl',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 201,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.MLB]: {
        sport: Sport.BASEBALL,
        id: League.MLB,
        label: 'MLB',
        logo: `/logos/leagueLogos/mlb.webp`,
        logoClass: 'icon-homepage league--mlb',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.INNING,
        isDrawAvailable: false,
        priority: 401,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.NBA]: {
        sport: Sport.BASKETBALL,
        id: League.NBA,
        label: 'NBA',
        logo: `/logos/leagueLogos/nba.webp`,
        logoClass: 'icon-homepage league--nba',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 301,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.NCAAB]: {
        sport: Sport.BASKETBALL,
        id: League.NCAAB,
        label: 'NCAA Basketball',
        logoClass: 'icon-homepage league--ncaa',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 302,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.NHL]: {
        sport: Sport.HOCKEY,
        id: League.NHL,
        label: 'NHL',
        logo: `/logos/leagueLogos/nhl.webp`,
        logoClass: 'icon-homepage league--nhl',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.PERIOD,
        isDrawAvailable: false,
        priority: 501,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.UFC]: {
        sport: Sport.FIGHTING_SPORTS,
        id: League.UFC,
        label: 'UFC',
        logo: '/logos/leagueLogos/ufc.webp',
        logoClass: 'icon-homepage league--ufc',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.ROUNDS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.ROUND,
        isDrawAvailable: false,
        priority: 601,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.WNBA]: {
        sport: Sport.BASKETBALL,
        id: League.WNBA,
        label: 'WNBA',
        logoClass: 'icon-homepage league--wnba',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 304,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.MLS]: {
        sport: Sport.SOCCER,
        id: League.MLS,
        label: 'MLS',
        logo: `/logos/leagueLogos/mls.webp`,
        logoClass: 'icon-homepage league--mls',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 106,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.EPL]: {
        sport: Sport.SOCCER,
        id: League.EPL,
        label: 'EPL',
        logo: `/logos/leagueLogos/EPL.webp`,
        logoClass: 'icon-homepage league--epl',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 101,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.LIGUE_ONE]: {
        sport: Sport.SOCCER,
        id: League.LIGUE_ONE,
        label: 'Ligue 1',
        logo: `/logos/leagueLogos/Ligue1.webp`,
        logoClass: 'icon-homepage league--ligue1',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 105,
        hidden: false,
        favourite: false,
        live: true,
    },

    [League.BUNDESLIGA]: {
        sport: Sport.SOCCER,
        id: League.BUNDESLIGA,
        label: 'Bundesliga',
        logo: '/logos/leagueLogos/bundesliga.webp',
        logoClass: 'icon-homepage league--bundesliga',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 104,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.LA_LIGA]: {
        sport: Sport.SOCCER,
        id: League.LA_LIGA,
        label: 'La Liga',
        logo: `/logos/leagueLogos/LaLiga.webp`,
        logoClass: 'icon-homepage league--la-liga',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 102,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.SERIE_A]: {
        sport: Sport.SOCCER,
        id: League.SERIE_A,
        label: 'Serie A',
        logo: `/logos/leagueLogos/seriea.webp`,
        logoClass: 'icon-homepage league--serie-a',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 103,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.UEFA_CL]: {
        sport: Sport.SOCCER,
        id: League.UEFA_CL,
        label: 'UEFA Champions League',
        logo: `/logos/leagueLogos/ucl-white.webp`,
        logoClass: 'icon-homepage league--ucl',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 110,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.UEFA_EL]: {
        sport: Sport.SOCCER,
        id: League.UEFA_EL,
        label: 'UEFA Europa League',
        logoClass: 'icon-homepage league--uel',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 111,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.FIFA_WC]: {
        sport: Sport.SOCCER,
        id: League.FIFA_WC,
        label: 'FIFA World Cup',
        logoClass: 'icon-homepage league--fifa-world-cup',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 0,
        hidden: true,
        favourite: false,
        live: false,
    },
    [League.J1_LEAGUE]: {
        sport: Sport.SOCCER,
        id: League.J1_LEAGUE,
        label: 'J1 League',
        logoClass: 'icon-homepage league--j1',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 109,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.IPL]: {
        sport: Sport.CRICKET,
        id: League.IPL,
        label: 'Indian Premier League',
        logoClass: 'icon-homepage league--ipl',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.INNING,
        isDrawAvailable: false,
        priority: 901,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.T20_BLAST]: {
        sport: Sport.CRICKET,
        id: League.T20_BLAST,
        label: 'T20 Blast',
        logoClass: 'icon-homepage league--t20',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.INNING,
        isDrawAvailable: false,
        priority: 902,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.IIHF_WORLD_CHAMPIONSHIP]: {
        sport: Sport.HOCKEY,
        id: League.IIHF_WORLD_CHAMPIONSHIP,
        label: 'IIHF World Championship',
        logoClass: 'icon-homepage league--iihf',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.PERIOD,
        isDrawAvailable: true,
        priority: 502,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.COPA_LIBERTADORES]: {
        sport: Sport.SOCCER,
        id: League.COPA_LIBERTADORES,
        label: 'Copa Libertadores',
        logoClass: 'icon-homepage league--copa-libertadores',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 112,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.UEFA_EURO_QUALIFICATIONS]: {
        sport: Sport.SOCCER,
        id: League.UEFA_EURO_QUALIFICATIONS,
        label: 'UEFA EURO 2024',
        logoClass: 'icon-homepage league--uefa',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 113,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.EREDIVISIE]: {
        sport: Sport.SOCCER,
        id: League.EREDIVISIE,
        label: 'Eredivisie',
        logoClass: 'icon-homepage league--eredivisie',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 107,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.PRIMEIRA_LIGA]: {
        sport: Sport.SOCCER,
        id: League.PRIMEIRA_LIGA,
        label: 'Primeira Liga',
        logoClass: 'icon-homepage league--portugal',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 108,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.FIFA_WC_WOMEN]: {
        sport: Sport.SOCCER,
        id: League.FIFA_WC_WOMEN,
        label: 'FIFA World Cup Women',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 119,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.ENGLAND_CUP]: {
        sport: Sport.SOCCER,
        id: League.ENGLAND_CUP,
        label: 'FA Cup',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 122,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.FRANCE_CUP]: {
        sport: Sport.SOCCER,
        id: League.FRANCE_CUP,
        label: 'Coupe de France',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 124,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.SPAIN_CUP]: {
        sport: Sport.SOCCER,
        id: League.SPAIN_CUP,
        label: 'Copa del Rey',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 123,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.ITALY_CUP]: {
        sport: Sport.SOCCER,
        id: League.ITALY_CUP,
        label: 'Coppa Italia',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 126,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.TENNIS_GS]: {
        sport: Sport.TENNIS,
        id: League.TENNIS_GS,
        label: 'Grand Slam',
        logo: `/logos/Tennis/atp.webp`,
        logoClass: 'icon-homepage league--atp',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.SETS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.SET,
        isDrawAvailable: true,
        priority: 602,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.TENNIS_MASTERS]: {
        sport: Sport.TENNIS,
        id: League.TENNIS_MASTERS,
        label: 'ATP Events',
        logo: `/logos/Tennis/atp.webp`,
        logoClass: 'icon-homepage league--atp',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.SETS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.SET,
        isDrawAvailable: true,
        priority: 603,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.GERMANY_CUP]: {
        sport: Sport.SOCCER,
        id: League.GERMANY_CUP,
        label: 'DFB Pokal',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 125,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.BRAZIL_1]: {
        sport: Sport.SOCCER,
        id: League.BRAZIL_1,
        label: 'Serie A',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 109,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.UEFA_EURO_U21]: {
        sport: Sport.SOCCER,
        id: League.UEFA_EURO_U21,
        label: 'UEFA EURO U21',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 120,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.FIFA_WORLD_CUP_U20]: {
        sport: Sport.SOCCER,
        id: League.FIFA_WORLD_CUP_U20,
        label: 'FIFA World Cup U20',
        logoClass: 'icon-homepage league--fifa-world-cup-u20',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 121,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.EUROLEAGUE]: {
        sport: Sport.BASKETBALL,
        id: League.EUROLEAGUE,
        label: 'Euroleague',
        logoClass: 'icon-homepage league--euroleague',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 303,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.FIBA_WORLD_CUP]: {
        sport: Sport.SOCCER,
        id: League.FIBA_WORLD_CUP,
        label: 'FIBA World Cup',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 303,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.FORMULA1]: {
        sport: Sport.MOTOSPORT,
        id: League.FORMULA1,
        label: 'Formula 1',
        logo: '/logos/leagueLogos/f1.webp',
        logoClass: 'icon-homepage league--f1',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.EMPTY,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.EMPTY,
        isDrawAvailable: false,
        priority: 701,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.MOTOGP]: {
        sport: Sport.MOTOSPORT,
        id: League.MOTOGP,
        label: 'MotoGP',
        logo: `/logos/leagueLogos/motogp.webp`,
        logoClass: 'icon-homepage league--motogp',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.EMPTY,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.EMPTY,
        isDrawAvailable: false,
        priority: 702,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.SAUDI_PROFESSIONAL_LEAGUE]: {
        sport: Sport.SOCCER,
        id: League.SAUDI_PROFESSIONAL_LEAGUE,
        label: 'Saudi Professional League',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 109,
        hidden: false,
        favourite: false,
        live: true,
    },

    [League.BOXING]: {
        sport: Sport.FIGHTING_SPORTS,
        id: League.BOXING,
        label: 'Boxing',
        logoClass: 'icon-homepage league--boxing',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.ROUNDS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.ROUND,
        isDrawAvailable: false,
        priority: 602,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.UEFA_NATIONS_LEAGUE]: {
        sport: Sport.SOCCER,
        id: League.UEFA_NATIONS_LEAGUE,
        label: 'UEFA Nations League',
        logoClass: 'icon-homepage league--uefa-nations',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 114,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.CONCACAF_NATIONS_LEAGUE]: {
        sport: Sport.SOCCER,
        id: League.CONCACAF_NATIONS_LEAGUE,
        label: 'CONCACAF Nations League',
        logoClass: 'icon-homepage league--concacaf-nations',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 115,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.CSGO]: {
        sport: Sport.ESPORTS,
        id: League.CSGO,
        label: 'CS GO',
        logoClass: 'icon-homepage league--csgo',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.ROUNDS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.ROUND,
        isDrawAvailable: false,
        priority: 801,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.DOTA2]: {
        sport: Sport.ESPORTS,
        id: League.DOTA2,
        label: 'DOTA 2',
        logoClass: 'icon-homepage league--dota2',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.ROUNDS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.ROUND,
        isDrawAvailable: false,
        priority: 802,
        hidden: false,
        favourite: false,
        live: true,
    },
    [League.LOL]: {
        sport: Sport.ESPORTS,
        id: League.LOL,
        label: 'LOL',
        logoClass: 'icon-homepage league--lol',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.ROUNDS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.ROUND,
        isDrawAvailable: false,
        priority: 803,
        hidden: false,
        favourite: false,
        live: true,
    },

    [League.CONMEBOL_WC_QUALIFICATIONS]: {
        sport: Sport.SOCCER,
        id: League.CONMEBOL_WC_QUALIFICATIONS,
        label: 'CONMEBOL WC Qualification',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 110,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.UEFA_CONFERENCE_LEAGUE]: {
        sport: Sport.SOCCER,
        id: League.UEFA_CONFERENCE_LEAGUE,
        label: 'UEFA Conference League',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 118,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.NON_TITLE_BOXING]: {
        sport: Sport.FIGHTING_SPORTS,
        id: League.NON_TITLE_BOXING,
        label: 'Boxing',
        logoClass: 'icon-homepage league--boxing',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.ROUNDS,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.ROUND,
        isDrawAvailable: false,
        priority: 603,
        hidden: false,
        favourite: false,
        live: false,
    },

    [League.GOLF_H2H]: {
        sport: Sport.GOLF,
        id: League.GOLF_H2H,
        label: 'Golf head-to-head',
        logoClass: 'icon-homepage league--pga',
        provider: Provider.JSONODDS,
        scoringType: ScoringType.EMPTY,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.EMPTY,
        isDrawAvailable: false,
        priority: 1001,
        hidden: false,
        favourite: false,
        live: false,
    },
    [League.GOLF_WINNER]: {
        sport: Sport.GOLF,
        id: League.GOLF_WINNER,
        label: 'Golf Tournament Winner',
        logoClass: 'icon-homepage league--pga',
        provider: Provider.JSONODDS,
        scoringType: ScoringType.EMPTY,
        matchResolveType: MatchResolveType.EMPTY,
        periodType: PeriodType.EMPTY,
        isDrawAvailable: false,
        priority: 1002,
        hidden: false,
        favourite: false,
        live: false,
    },
};

export const FIFA_WC_TAG = 18;
export const FIFA_WC_U20_TAG = 296;
export const IIHF_WC_TAG = 33;
export const UEFA_TAGS = [16, 17, 9806, 9821, 288, 42, 10216, 76, 73];
export const MOTOSPORT_TAGS = [445, 497];
export const GOLF_TAGS = [100021, 100121];
export const GOLF_TOURNAMENT_WINNER_TAG = 100121;
export const EUROPA_LEAGUE_TAGS = [17, 73];
export const INTERNATIONAL_SPORTS = [9821, 10199, 409, 33, 50, 288, 9806, 18, 296, 76];
export const BOXING_TAGS = [9196, 10595];

export const SPORT_ID_MAP_ENETPULSE: Record<number, number> = {
    320: 18, // Hockey Norway
    24: 6, // NHL
    33: 33, // Hockey World Championship
    16: 42, // Champions League
    45: 45, // Copa Libertadores
    11: 47, // EPL
    50: 50, // EURO Qualification
    12: 53, // France League 1
    13: 54, // Bundesliga
    15: 55, // Seria A
    57: 57, // Netherlands League 1
    61: 61, // Portugal League 1
    17: 73, // Europa League
    76: 76, // World Cup Woman
    14: 87, // La Liga
    153: 153, // Tennis GS
    156: 156, // Tennis Masters 1000
    132: 132, // FA Cup
    134: 134, // Coupe de France
    138: 138, // Copa del Rey
    141: 141, // Coppa Italia
    209: 209, // DFB Pokal
    268: 268, // Brazil Football League
    288: 288, // EURO U21
    296: 296, // FIFA WC U20
    310: 310, // Hockey Czech
    319: 319, // Hockey Finland
    322: 322, // Hockey Germany
    327: 327, // Hockey Switzerland
    399: 399, // EuroLeague
    409: 409, // FIBA World Cup
    445: 445, // F1
    497: 497, // Moto GP
    536: 536, // Saudi Arabia Football League
    9196: 9196, // Boxing
    9806: 9806, // UEFA League of Nations
    9821: 9821, // CONCACAF League of Nations
    9977: 9977, // CsGo
    9983: 9983, // Dota
    10138: 10138, // LOL
    10199: 10199, // World Cup Qualifications CONMBOL
    10216: 10216, // Europa Conference League
    10595: 10595, // Non-Title Boxing
};
