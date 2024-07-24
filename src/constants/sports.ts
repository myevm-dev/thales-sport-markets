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
        isDrawAvailable: true,
        priority: 401,
        hidden: false,
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
    },
    [League.UFC]: {
        sport: Sport.FIGHTING,
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
        priority: 140,
        hidden: false,
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
        priority: 120,
        hidden: false,
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
        priority: 124,
        hidden: false,
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
        priority: 123,
        hidden: false,
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
        priority: 121,
        hidden: false,
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
        priority: 122,
        hidden: false,
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
        priority: 103,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
        priority: 104,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
    },
    [League.FIFA_WC]: {
        sport: Sport.SOCCER,
        id: League.FIFA_WC,
        label: 'FIFA World Cup',
        logoClass: 'icon-homepage league--fifa-world-cup',
        provider: Provider.RUNDOWN,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 100,
        hidden: true,
        tooltipKey: 'common.fifa-tooltip',
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
        priority: 144,
        hidden: false,
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
        tooltipKey: 'common.iihf-tooltip',
    },
    [League.COPA_AMERICA]: {
        sport: Sport.SOCCER,
        id: League.COPA_AMERICA,
        label: 'Copa America 2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 102,
        hidden: false,
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
        priority: 107,
        hidden: false,
    },
    [League.UEFA_EURO]: {
        sport: Sport.SOCCER,
        id: League.UEFA_EURO,
        label: 'UEFA EURO 2024',
        logoClass: 'icon-homepage league--uefa',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 101,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
        priority: 141,
        hidden: false,
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
        priority: 142,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_SOCCER_WOMEN]: {
        sport: Sport.SOCCER,
        id: League.SUMMER_OLYMPICS_SOCCER_WOMEN,
        label: 'Olympic Games Soccer Women',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 102,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_SOCCER]: {
        sport: Sport.SOCCER,
        id: League.SUMMER_OLYMPICS_SOCCER,
        logoClass: 'icon-homepage league--paris2024',
        label: 'Olympic Games Soccer',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 102,
        hidden: false,
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
        priority: 112,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
        priority: 130,
        hidden: false,
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
        priority: 134,
        hidden: false,
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
        priority: 131,
        hidden: false,
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
        priority: 132,
        hidden: false,
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
        isDrawAvailable: false,
        priority: 701,
        hidden: false,
        tooltipKey: 'common.tennis-tooltip',
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
        isDrawAvailable: false,
        priority: 702,
        hidden: false,
        tooltipKey: 'common.tennis-tooltip',
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
        priority: 133,
        hidden: false,
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
        priority: 143,
        hidden: false,
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
        priority: 111,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
        priority: 110,
        hidden: false,
        tooltipKey: 'common.fifa-tooltip',
    },
    [League.SUMMER_OLYMPICS_HANDBALL_WOMEN]: {
        sport: Sport.HANDBALL,
        id: League.SUMMER_OLYMPICS_HANDBALL_WOMEN,
        label: 'Olympic Games Handball Women',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 1402,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_HANDBALL]: {
        sport: Sport.HANDBALL,
        id: League.SUMMER_OLYMPICS_HANDBALL,
        label: 'Olympic Games Handball',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 1401,
        hidden: false,
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
    },
    [League.SUMMER_OLYMPICS_BASKETBALL]: {
        sport: Sport.BASKETBALL,
        id: League.SUMMER_OLYMPICS_BASKETBALL,
        label: 'Olympic Games Basketball',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 305,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_BASKETBALL_WOMEN]: {
        sport: Sport.BASKETBALL,
        id: League.SUMMER_OLYMPICS_BASKETBALL_WOMEN,
        label: 'Olympic Games Basketball Women',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 305,
        hidden: false,
    },
    [League.FIBA_WORLD_CUP]: {
        sport: Sport.BASKETBALL,
        id: League.FIBA_WORLD_CUP,
        label: 'FIBA World Cup',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 300,
        hidden: false,
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
        priority: 1001,
        hidden: false,
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
        priority: 1002,
        hidden: false,
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
        priority: 145,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_WATERPOLO]: {
        sport: Sport.WATERPOLO,
        id: League.SUMMER_OLYMPICS_WATERPOLO,
        label: 'Olympic Games Water Polo',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: true,
        priority: 1501,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_VOLEYBALL_WOMEN]: {
        sport: Sport.VOLLEYBALL,
        id: League.SUMMER_OLYMPICS_VOLEYBALL_WOMEN,
        label: 'Olympic Games Voleyball Women',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.SETS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.SET,
        isDrawAvailable: false,
        priority: 1302,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_VOLEYBALL]: {
        sport: Sport.VOLLEYBALL,
        id: League.SUMMER_OLYMPICS_VOLEYBALL,
        label: 'Olympic Games Voleyball',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.SETS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.SET,
        isDrawAvailable: false,
        priority: 1301,
        hidden: false,
    },
    [League.BOXING]: {
        sport: Sport.FIGHTING,
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
    },
    [League.SUMMER_OLYMPICS_RUGBY]: {
        sport: Sport.RUGBY,
        id: League.SUMMER_OLYMPICS_RUGBY,
        label: 'Olympic Games Rugby',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 1201,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_RUGBY_WOMEN]: {
        sport: Sport.RUGBY,
        id: League.SUMMER_OLYMPICS_RUGBY_WOMEN,
        label: 'Olympic Games Rugby Women',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 1202,
        hidden: false,
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
        priority: 106,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
        priority: 108,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
    },
    [League.SUMMER_OLYMPICS_BASKETBALL_3X3]: {
        sport: Sport.BASKETBALL,
        id: League.SUMMER_OLYMPICS_BASKETBALL_3X3,
        label: 'Olympic Games 3x3',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 306,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_BASKETBALL_3X3_WOMEN]: {
        sport: Sport.BASKETBALL,
        id: League.SUMMER_OLYMPICS_BASKETBALL_3X3_WOMEN,
        label: 'Olympic Games 3x3 Women',
        logoClass: 'icon-homepage league--paris2024',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 306,
        hidden: false,
    },
    [League.SUMMER_OLYMPICS_QUALIFICATION]: {
        sport: Sport.BASKETBALL,
        id: League.SUMMER_OLYMPICS_QUALIFICATION,
        label: 'Summer Olympics Qualification',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.POINTS,
        matchResolveType: MatchResolveType.OVERTIME,
        periodType: PeriodType.QUARTER,
        isDrawAvailable: false,
        priority: 305,
        hidden: true,
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
        priority: 109,
        hidden: false,
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
        priority: 105,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
    },
    [League.NON_TITLE_BOXING]: {
        sport: Sport.FIGHTING,
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
    },
    [League.UEFA_CHAMPIONS_LEAGUE_QUALIFICATION]: {
        sport: Sport.SOCCER,
        id: League.UEFA_CHAMPIONS_LEAGUE_QUALIFICATION,
        label: 'UEFA Champions League Qualification',
        logo: `/logos/leagueLogos/ucl-white.webp`,
        logoClass: 'icon-homepage league--ucl',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 103,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
    },
    [League.UEFA_EUROPA_LEAGUE_QUALIFICATION]: {
        sport: Sport.SOCCER,
        id: League.UEFA_EUROPA_LEAGUE_QUALIFICATION,
        label: 'UEFA Europa League Qualification',
        logoClass: 'icon-homepage league--uel',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 104,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
    },
    [League.UEFA_CONFERENCE_LEAGUE_QUALIFICATION]: {
        sport: Sport.SOCCER,
        id: League.UEFA_CONFERENCE_LEAGUE_QUALIFICATION,
        label: 'UEFA Conference League Qualification',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 105,
        hidden: false,
        tooltipKey: 'common.football-tooltip',
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
        priority: 1101,
        hidden: false,
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
        priority: 1102,
        hidden: false,
    },
    [League.LIGA_MX]: {
        sport: Sport.SOCCER,
        id: League.LIGA_MX,
        label: 'Liga MX',
        provider: Provider.ENETPULSE,
        scoringType: ScoringType.GOALS,
        matchResolveType: MatchResolveType.REGULAR,
        periodType: PeriodType.HALF,
        isDrawAvailable: true,
        priority: 150,
        hidden: false,
    },
};

export const BOXING_LEAGUES = [League.BOXING, League.NON_TITLE_BOXING];

export const INTERNATIONAL_LEAGUES = [
    League.FIFA_WC,
    League.IIHF_WORLD_CHAMPIONSHIP,
    League.UEFA_EURO,
    League.FIFA_WC_WOMEN,
    League.UEFA_EURO_U21,
    League.FIFA_WORLD_CUP_U20,
    League.FIBA_WORLD_CUP,
    League.UEFA_NATIONS_LEAGUE,
    League.CONCACAF_NATIONS_LEAGUE,
    League.CONMEBOL_WC_QUALIFICATIONS,
    League.COPA_AMERICA,
    League.SUMMER_OLYMPICS_QUALIFICATION,
    League.SUMMER_OLYMPICS_BASKETBALL,
    League.SUMMER_OLYMPICS_BASKETBALL_WOMEN,
    League.SUMMER_OLYMPICS_BASKETBALL_3X3,
    League.SUMMER_OLYMPICS_BASKETBALL_3X3_WOMEN,
    League.SUMMER_OLYMPICS_SOCCER,
    League.SUMMER_OLYMPICS_SOCCER_WOMEN,
    League.SUMMER_OLYMPICS_RUGBY,
    League.SUMMER_OLYMPICS_RUGBY_WOMEN,
    League.SUMMER_OLYMPICS_VOLEYBALL,
    League.SUMMER_OLYMPICS_VOLEYBALL_WOMEN,
    League.SUMMER_OLYMPICS_HANDBALL,
    League.SUMMER_OLYMPICS_HANDBALL_WOMEN,
    League.SUMMER_OLYMPICS_WATERPOLO,
];

export const PLAYER_PROPS_COMBINING_ENABLED_LEAGUES = [League.NBA];
