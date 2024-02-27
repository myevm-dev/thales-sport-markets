import { BracketMatch, MarchMadTeam } from 'types/marchMadness';

export const NUMBER_OF_MATCHES = 63;
export const NUMBER_OF_TEAMS = 64;
export const NUMBER_OF_ROUNDS = 6;

export const FIRST_ROUND_SOUTH_MATCH_IDS = [0, 1, 2, 3, 4, 5, 6, 7];
export const FIRST_ROUND_EAST_MATCH_IDS = [8, 9, 10, 11, 12, 13, 14, 15];
export const FIRST_ROUND_MIDWEST_MATCH_IDS = [16, 17, 18, 19, 20, 21, 22, 23];
export const FIRST_ROUND_WEST_MATCH_IDS = [24, 25, 26, 27, 28, 29, 30, 31];
export const FIRST_ROUND_MATCH_IDS = [
    ...FIRST_ROUND_EAST_MATCH_IDS,
    ...FIRST_ROUND_WEST_MATCH_IDS,
    ...FIRST_ROUND_SOUTH_MATCH_IDS,
    ...FIRST_ROUND_MIDWEST_MATCH_IDS,
];

export const SECOND_ROUND_SOUTH_MATCH_IDS = [32, 33, 34, 35];
export const SECOND_ROUND_EAST_MATCH_IDS = [36, 37, 38, 39];
export const SECOND_ROUND_MIDWEST_MATCH_IDS = [40, 41, 42, 43];
export const SECOND_ROUND_WEST_MATCH_IDS = [44, 45, 46, 47];
export const SECOND_ROUND_MATCH_IDS = [
    ...SECOND_ROUND_EAST_MATCH_IDS,
    ...SECOND_ROUND_WEST_MATCH_IDS,
    ...SECOND_ROUND_SOUTH_MATCH_IDS,
    ...SECOND_ROUND_MIDWEST_MATCH_IDS,
];

export const SWEET16_ROUND_SOUTH_MATCH_IDS = [48, 49];
export const SWEET16_ROUND_EAST_MATCH_IDS = [50, 51];
export const SWEET16_ROUND_MIDWEST_MATCH_IDS = [52, 53];
export const SWEET16_ROUND_WEST_MATCH_IDS = [54, 55];
export const SWEET16_ROUND_MATCH_IDS = [
    ...SWEET16_ROUND_EAST_MATCH_IDS,
    ...SWEET16_ROUND_WEST_MATCH_IDS,
    ...SWEET16_ROUND_SOUTH_MATCH_IDS,
    ...SWEET16_ROUND_MIDWEST_MATCH_IDS,
];

export const ELITE8_ROUND_SOUTH_MATCH_ID = 56;
export const ELITE8_ROUND_EAST_MATCH_ID = 57;
export const ELITE8_ROUND_MIDWEST_MATCH_ID = 58;
export const ELITE8_ROUND_WEST_MATCH_ID = 59;
export const ELITE8_ROUND_MATCH_IDS = [
    ELITE8_ROUND_EAST_MATCH_ID,
    ELITE8_ROUND_WEST_MATCH_ID,
    ELITE8_ROUND_SOUTH_MATCH_ID,
    ELITE8_ROUND_MIDWEST_MATCH_ID,
];

export const SEMI_FINAL_SOUTH_EAST_MATCH_ID = 60;
export const SEMI_FINAL_MIDWEST_WEST_MATCH_ID = 61;
export const SEMI_FINAL_MATCH_IDS = [SEMI_FINAL_SOUTH_EAST_MATCH_ID, SEMI_FINAL_MIDWEST_WEST_MATCH_ID];

export const FINAL_MATCH_ID = 62;

export const initialBracketsData: BracketMatch[] = [
    {
        id: 0,
        homeTeamId: 1,
        awayTeamId: 16,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 1,
        homeTeamId: 8,
        awayTeamId: 9,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 2,
        homeTeamId: 5,
        awayTeamId: 12,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 3,
        homeTeamId: 4,
        awayTeamId: 13,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 4,
        homeTeamId: 6,
        awayTeamId: 11,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 5,
        homeTeamId: 3,
        awayTeamId: 14,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 6,
        homeTeamId: 7,
        awayTeamId: 10,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 7,
        homeTeamId: 2,
        awayTeamId: 15,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'South',
        round: 'First',
    },
    {
        id: 8,
        homeTeamId: 17,
        awayTeamId: 32,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 9,
        homeTeamId: 24,
        awayTeamId: 25,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 10,
        homeTeamId: 21,
        awayTeamId: 28,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 11,
        homeTeamId: 20,
        awayTeamId: 29,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 12,
        homeTeamId: 22,
        awayTeamId: 27,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 13,
        homeTeamId: 19,
        awayTeamId: 30,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 14,
        homeTeamId: 23,
        awayTeamId: 26,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 15,
        homeTeamId: 18,
        awayTeamId: 31,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'East',
        round: 'First',
    },
    {
        id: 16,
        homeTeamId: 33,
        awayTeamId: 48,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 17,
        homeTeamId: 40,
        awayTeamId: 41,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 18,
        homeTeamId: 37,
        awayTeamId: 44,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 19,
        homeTeamId: 36,
        awayTeamId: 45,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 20,
        homeTeamId: 38,
        awayTeamId: 43,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 21,
        homeTeamId: 35,
        awayTeamId: 46,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 22,
        homeTeamId: 39,
        awayTeamId: 42,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 23,
        homeTeamId: 34,
        awayTeamId: 47,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'Midwest',
        round: 'First',
    },
    {
        id: 24,
        homeTeamId: 49,
        awayTeamId: 64,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 25,
        homeTeamId: 56,
        awayTeamId: 57,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 26,
        homeTeamId: 53,
        awayTeamId: 60,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 27,
        homeTeamId: 52,
        awayTeamId: 61,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 28,
        homeTeamId: 54,
        awayTeamId: 59,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 29,
        homeTeamId: 51,
        awayTeamId: 62,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 30,
        homeTeamId: 55,
        awayTeamId: 58,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 31,
        homeTeamId: 50,
        awayTeamId: 63,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: undefined,
        awayTeamParentMatchId: undefined,
        region: 'West',
        round: 'First',
    },
    {
        id: 32,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 0,
        awayTeamParentMatchId: 1,
        region: 'South',
        round: 'Second',
    },
    {
        id: 33,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 2,
        awayTeamParentMatchId: 3,
        region: 'South',
        round: 'Second',
    },
    {
        id: 34,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 4,
        awayTeamParentMatchId: 5,
        region: 'South',
        round: 'Second',
    },
    {
        id: 35,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 6,
        awayTeamParentMatchId: 7,
        region: 'South',
        round: 'Second',
    },
    {
        id: 36,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 8,
        awayTeamParentMatchId: 9,
        region: 'East',
        round: 'Second',
    },
    {
        id: 37,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 10,
        awayTeamParentMatchId: 11,
        region: 'East',
        round: 'Second',
    },
    {
        id: 38,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 12,
        awayTeamParentMatchId: 13,
        region: 'East',
        round: 'Second',
    },
    {
        id: 39,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 14,
        awayTeamParentMatchId: 15,
        region: 'East',
        round: 'Second',
    },
    {
        id: 40,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 16,
        awayTeamParentMatchId: 17,
        region: 'Midwest',
        round: 'Second',
    },
    {
        id: 41,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 18,
        awayTeamParentMatchId: 19,
        region: 'Midwest',
        round: 'Second',
    },
    {
        id: 42,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 20,
        awayTeamParentMatchId: 21,
        region: 'Midwest',
        round: 'Second',
    },
    {
        id: 43,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 22,
        awayTeamParentMatchId: 23,
        region: 'Midwest',
        round: 'Second',
    },
    {
        id: 44,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 24,
        awayTeamParentMatchId: 25,
        region: 'West',
        round: 'Second',
    },
    {
        id: 45,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 26,
        awayTeamParentMatchId: 27,
        region: 'West',
        round: 'Second',
    },
    {
        id: 46,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 28,
        awayTeamParentMatchId: 29,
        region: 'West',
        round: 'Second',
    },
    {
        id: 47,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 30,
        awayTeamParentMatchId: 31,
        region: 'West',
        round: 'Second',
    },
    {
        id: 48,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 32,
        awayTeamParentMatchId: 33,
        region: 'South',
        round: 'Sweet16',
    },
    {
        id: 49,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 34,
        awayTeamParentMatchId: 35,
        region: 'South',
        round: 'Sweet16',
    },
    {
        id: 50,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 36,
        awayTeamParentMatchId: 37,
        region: 'East',
        round: 'Sweet16',
    },
    {
        id: 51,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 38,
        awayTeamParentMatchId: 39,
        region: 'East',
        round: 'Sweet16',
    },
    {
        id: 52,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 40,
        awayTeamParentMatchId: 41,
        region: 'Midwest',
        round: 'Sweet16',
    },
    {
        id: 53,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 42,
        awayTeamParentMatchId: 43,
        region: 'Midwest',
        round: 'Sweet16',
    },
    {
        id: 54,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 44,
        awayTeamParentMatchId: 45,
        region: 'West',
        round: 'Sweet16',
    },
    {
        id: 55,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 46,
        awayTeamParentMatchId: 47,
        region: 'West',
        round: 'Sweet16',
    },
    {
        id: 56,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 48,
        awayTeamParentMatchId: 49,
        region: 'South',
        round: 'Elite8',
    },
    {
        id: 57,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 50,
        awayTeamParentMatchId: 51,
        region: 'East',
        round: 'Elite8',
    },
    {
        id: 58,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 52,
        awayTeamParentMatchId: 53,
        region: 'Midwest',
        round: 'Elite8',
    },
    {
        id: 59,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 54,
        awayTeamParentMatchId: 55,
        region: 'West',
        round: 'Elite8',
    },
    {
        id: 60,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 56,
        awayTeamParentMatchId: 57,
        region: 'South-East',
        round: 'SemiFinal',
    },
    {
        id: 61,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 58,
        awayTeamParentMatchId: 59,
        region: 'Midwest-West',
        round: 'SemiFinal',
    },
    {
        id: 62,
        homeTeamId: undefined,
        awayTeamId: undefined,
        isHomeTeamSelected: undefined,
        homeTeamParentMatchId: 60,
        awayTeamParentMatchId: 61,
        region: 'South-East-Midwest-West',
        round: 'Final',
    },
];

export const teamsData: MarchMadTeam[] = [
    {
        id: 1,
        name: 'Alabama Crimson Tide',
        displayName: 'Alabama',
        region: 'South',
        position: 1,
    },
    {
        id: 2,
        name: 'Arizona Wildcats',
        displayName: 'Arizona',
        region: 'South',
        position: 2,
    },
    {
        id: 3,
        name: 'Baylor Bears',
        displayName: 'Baylor',
        region: 'South',
        position: 3,
    },
    {
        id: 4,
        name: 'Virginia Cavaliers',
        displayName: 'Virginia',
        region: 'South',
        position: 4,
    },
    {
        id: 5,
        name: 'San Diego State Aztecs',
        displayName: 'San Diego St.',
        region: 'South',
        position: 5,
    },
    {
        id: 6,
        name: 'Creighton Blue Jays',
        displayName: 'Creighton',
        region: 'South',
        position: 6,
    },
    {
        id: 7,
        name: 'Missouri Tigers',
        displayName: 'Missouri',
        region: 'South',
        position: 7,
    },
    {
        id: 8,
        name: 'Maryland Terrapins',
        displayName: 'Maryland',
        region: 'South',
        position: 8,
    },
    {
        id: 9,
        name: 'West Virginia Mountaineers',
        displayName: 'West Virginia',
        region: 'South',
        position: 9,
    },
    {
        id: 10,
        name: 'Utah State Aggies',
        displayName: 'Utah State',
        region: 'South',
        position: 10,
    },
    {
        id: 11,
        name: 'NC State Wolfpack',
        displayName: 'NC State',
        region: 'South',
        position: 11,
    },
    {
        id: 12,
        name: 'Charleston Cougars',
        displayName: 'Charleston',
        region: 'South',
        position: 12,
    },
    {
        id: 13,
        name: 'Furman Paladins',
        displayName: 'Furman',
        region: 'South',
        position: 13,
    },
    {
        id: 14,
        name: 'UC Santa Barbara Gauchos',
        displayName: 'UCSB',
        region: 'South',
        position: 14,
    },
    {
        id: 15,
        name: 'Princeton Tigers',
        displayName: 'Princeton',
        region: 'South',
        position: 15,
    },
    {
        id: 16,
        name: 'Texas A&M-CC Islanders',
        displayName: 'Texas A&M-CC',
        region: 'South',
        position: 16,
    },
    {
        id: 17,
        name: 'Purdue Boilermakers',
        displayName: 'Purdue',
        region: 'East',
        position: 1,
    },
    {
        id: 18,
        name: 'Marquette Golden Eagles',
        displayName: 'Marquette',
        region: 'East',
        position: 2,
    },
    {
        id: 19,
        name: 'Kansas State Wildcats',
        displayName: 'Kansas St.',
        region: 'East',
        position: 3,
    },
    {
        id: 20,
        name: 'Tennessee Volunteers',
        displayName: 'Tennessee',
        region: 'East',
        position: 4,
    },
    {
        id: 21,
        name: 'Duke Blue Devils',
        displayName: 'Duke',
        region: 'East',
        position: 5,
    },
    {
        id: 22,
        name: 'Kentucky Wildcats',
        displayName: 'Kentucky',
        region: 'East',
        position: 6,
    },
    {
        id: 23,
        name: 'Michigan State Spartans',
        displayName: 'Michigan St.',
        region: 'East',
        position: 7,
    },
    {
        id: 24,
        name: 'Memphis Tigers',
        displayName: 'Memphis',
        region: 'East',
        position: 8,
    },
    {
        id: 25,
        name: 'Florida Atlantic Owls',
        displayName: 'FAU',
        region: 'East',
        position: 9,
    },
    {
        id: 26,
        name: 'USC Trojans',
        displayName: 'USC',
        region: 'East',
        position: 10,
    },
    {
        id: 27,
        name: 'Providence Friars',
        displayName: 'Providence',
        region: 'East',
        position: 11,
    },
    {
        id: 28,
        name: 'Oral Roberts Golden Eagles',
        displayName: 'Oral Roberts',
        region: 'East',
        position: 12,
    },
    {
        id: 29,
        name: "Louisiana Ragin' Cajuns",
        displayName: 'Louisiana',
        region: 'East',
        position: 13,
    },
    {
        id: 30,
        name: 'Montana State Bobcats',
        displayName: 'Montana St.',
        region: 'East',
        position: 14,
    },
    {
        id: 31,
        name: 'Vermont Catamounts',
        displayName: 'Vermont',
        region: 'East',
        position: 15,
    },
    {
        id: 32,
        name: 'Fairleigh Dickinson Knights',
        displayName: 'F. Dickinson',
        region: 'East',
        position: 16,
    },
    {
        id: 33,
        name: 'Houston Cougars',
        displayName: 'Houston',
        region: 'Midwest',
        position: 1,
    },
    {
        id: 34,
        name: 'Texas Longhorns',
        displayName: 'Texas',
        region: 'Midwest',
        position: 2,
    },
    {
        id: 35,
        name: 'Xavier Muskateers',
        displayName: 'Xavier',
        region: 'Midwest',
        position: 3,
    },
    {
        id: 36,
        name: 'Indiana Hoosiers',
        displayName: 'Indiana',
        region: 'Midwest',
        position: 4,
    },
    {
        id: 37,
        name: 'Miami (fl) Hurricanes',
        displayName: 'Miami (FL)',
        region: 'Midwest',
        position: 5,
    },
    {
        id: 38,
        name: 'Iowa State Cyclones',
        displayName: 'Iowa State',
        region: 'Midwest',
        position: 6,
    },
    {
        id: 39,
        name: 'Texas A&M Aggies',
        displayName: 'Texas A&M',
        region: 'Midwest',
        position: 7,
    },
    {
        id: 40,
        name: 'Iowa Hawkeyes',
        displayName: 'Iowa',
        region: 'Midwest',
        position: 8,
    },
    {
        id: 41,
        name: 'Auburn Tigers',
        displayName: 'Auburn',
        region: 'Midwest',
        position: 9,
    },
    {
        id: 42,
        name: 'Penn State Nittany Lions',
        displayName: 'Penn State',
        region: 'Midwest',
        position: 10,
    },
    {
        id: 43,
        name: 'Pittsburgh Panthers',
        displayName: 'Pittsburgh',
        region: 'Midwest',
        position: 11,
    },
    {
        id: 44,
        name: 'Drake Bulldogs',
        displayName: 'Drake',
        region: 'Midwest',
        position: 12,
    },
    {
        id: 45,
        name: 'Kent State Golden Flashes',
        displayName: 'Kent State',
        region: 'Midwest',
        position: 13,
    },
    {
        id: 46,
        name: 'Kennesaw State Owls',
        displayName: 'Kennesaw St.',
        region: 'Midwest',
        position: 14,
    },
    {
        id: 47,
        name: 'Colgate Raiders',
        displayName: 'Colgate',
        region: 'Midwest',
        position: 15,
    },
    {
        id: 48,
        name: 'Northern Kentucky Norse',
        displayName: 'N Kentucky',
        region: 'Midwest',
        position: 16,
    },
    {
        id: 49,
        name: 'Kansas Jayhawks',
        displayName: 'Kansas',
        region: 'West',
        position: 1,
    },
    {
        id: 50,
        name: 'UCLA Bruins',
        displayName: 'UCLA',
        region: 'West',
        position: 2,
    },
    {
        id: 51,
        name: 'Gonzaga Bulldogs',
        displayName: 'Gonzaga',
        region: 'West',
        position: 3,
    },
    {
        id: 52,
        name: 'UConn Huskies',
        displayName: 'UConn',
        region: 'West',
        position: 4,
    },
    {
        id: 53,
        name: "St. Mary's Gaels",
        displayName: "Saint Mary's",
        region: 'West',
        position: 5,
    },
    {
        id: 54,
        name: 'TCU Horned Frogs',
        displayName: 'TCU',
        region: 'West',
        position: 6,
    },
    {
        id: 55,
        name: 'Northwestern Wildcats',
        displayName: 'Northwestern',
        region: 'West',
        position: 7,
    },
    {
        id: 56,
        name: 'Arkansas Razorbacks',
        displayName: 'Arkansas',
        region: 'West',
        position: 8,
    },
    {
        id: 57,
        name: 'Illinois Fighting Illini',
        displayName: 'Illinois',
        region: 'West',
        position: 9,
    },
    {
        id: 58,
        name: 'Boise State Broncos',
        displayName: 'Boise State',
        region: 'West',
        position: 10,
    },
    {
        id: 59,
        name: 'Arizona State Sun Devils',
        displayName: 'Arizona St.',
        region: 'West',
        position: 11,
    },
    {
        id: 60,
        name: 'VCU Rams',
        displayName: 'VCU',
        region: 'West',
        position: 12,
    },
    {
        id: 61,
        name: 'Iona Gaels',
        displayName: 'Iona',
        region: 'West',
        position: 13,
    },
    {
        id: 62,
        name: 'Grand Canyon Lopes',
        displayName: 'Grand Canyon',
        region: 'West',
        position: 14,
    },
    {
        id: 63,
        name: 'UNC Asheville Bulldogs',
        displayName: 'UNC Asheville',
        region: 'West',
        position: 15,
    },
    {
        id: 64,
        name: 'Howard Bison',
        displayName: 'Howard',
        region: 'West',
        position: 16,
    },
];

export const wildCardTeams: MarchMadTeam[] = [
    {
        id: 1,
        name: 'Texas A&M-CC Islanders',
        displayName: 'Texas A&M-CC',
        region: 'South',
        position: 5,
    },
    {
        id: 2,
        name: 'SE Missouri State Redhawks',
        displayName: 'SE Missouri St.',
        region: 'South',
        position: 6,
    },
    {
        id: 3,
        name: 'Texas Southern Tigers',
        displayName: 'Texas Southern',
        region: 'East',
        position: 1,
    },
    {
        id: 4,
        name: 'Fairleigh Dickinson Knights',
        displayName: 'F. Dickinson',
        region: 'East',
        position: 2,
    },
    {
        id: 5,
        name: 'Mississippi State Bulldogs',
        displayName: 'Mississippi St.',
        region: 'Midwest',
        position: 7,
    },
    {
        id: 6,
        name: 'Pittsburgh Panthers',
        displayName: 'Pittsburgh',
        region: 'Midwest',
        position: 8,
    },
    {
        id: 7,
        name: 'Arizona State Sun Devils',
        displayName: 'Arizona St.',
        region: 'West',
        position: 3,
    },
    {
        id: 8,
        name: 'Nevada Wolf Pack',
        displayName: 'Nevada',
        region: 'West',
        position: 4,
    },
];
