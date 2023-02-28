export type BracketMatch = {
    id: number;
    homeTeamId: number | undefined;
    awayTeamId: number | undefined;
    isHomeTeamSelected: boolean | undefined;
    homeTeamParentMatchId: number | undefined;
    awayTeamParentMatchId: number | undefined;
};

export type MarchMadTeam = {
    id: number;
    name: string;
    displayName: string;
    region: string;
    position: number;
};
