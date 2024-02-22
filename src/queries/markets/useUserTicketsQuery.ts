import QUERY_KEYS from 'constants/queryKeys';
import { Network } from 'enums/network';
import { orderBy } from 'lodash';
import { useQuery, UseQueryOptions } from 'react-query';
import { bigNumberFormatter, coinFormatter } from 'thales-utils';
import { Ticket } from 'types/markets';
import { BetTypeMap, SPORTS_MAP } from '../../constants/tags';
import { BetType } from '../../enums/markets';
import {
    getIsOneSideMarket,
    isOneSidePlayerProps,
    isPlayerProps,
    isSpecialYesNoProp,
    updateTotalQuoteAndPayout,
} from '../../utils/markets';
import networkConnector from '../../utils/networkConnector';

export const useUserTicketsQuery = (
    user: string,
    networkId: Network,
    options?: UseQueryOptions<Ticket[] | undefined>
) => {
    return useQuery<Ticket[] | undefined>(
        QUERY_KEYS.UserTickets(networkId, user),
        async () => {
            try {
                const { sportsAMMDataContract } = networkConnector;
                if (sportsAMMDataContract) {
                    const [activeTickets, resolvedTickets] = await Promise.all([
                        sportsAMMDataContract.getActiveTicketsDataPerUser(user),
                        sportsAMMDataContract.getResolvedTicketsDataPerUser(user),
                    ]);

                    const tickets = [...activeTickets, ...resolvedTickets];

                    const mappedTickets: Ticket[] = tickets.map((ticket: any) => {
                        return {
                            id: ticket.id,
                            txHash: '',
                            timestamp: Number(ticket.createdAt) * 1000,
                            account: ticket.ticketOwner,
                            buyInAmount: coinFormatter(ticket.buyInAmount, networkId),
                            buyInAmountAfterFees: coinFormatter(ticket.buyInAmountAfterFees, networkId),
                            totalQuote: bigNumberFormatter(ticket.totalQuote),
                            payout:
                                coinFormatter(ticket.buyInAmountAfterFees, networkId) /
                                bigNumberFormatter(ticket.totalQuote),
                            numOfGames: Number(ticket.numOfGames),
                            expiry: Number(ticket.expiry) * 1000,
                            isResolved: ticket.resolved,
                            isPaused: ticket.paused,
                            isCancelled: ticket.gamesStatus.every(
                                (gameStatus) => gameStatus.isResolved && gameStatus.isCancelled
                            ),
                            isLost: ticket.isLost,
                            isUserTheWinner: ticket.isUserTheWinner,
                            isExercisable: ticket.isExercisable,
                            isClaimable: ticket.isUserTheWinner && !ticket.resolved,
                            isOpen: !ticket.isResolved && !ticket.isExercisable,

                            sportMarkets: ticket.gamesData.map((market: any, index: number) => {
                                const leagueId = Number(market.sportId);
                                // const isEnetpulseSport = ENETPULSE_SPORTS.includes(leagueId);
                                const isPlayerPropsMarket = isPlayerProps(Number(market.playerPropsId));
                                const typeId = Number(isPlayerPropsMarket ? market.playerPropsId : market.childId);
                                const type = BetTypeMap[typeId as BetType];
                                const line = Number(market.line);

                                return {
                                    gameId: market.gameId,
                                    sport: SPORTS_MAP[leagueId],
                                    leagueId: leagueId,
                                    // leagueName: getLeagueNameById(leagueId),
                                    leagueName: '',
                                    childId: Number(market.childId),
                                    playerPropsId: Number(market.playerPropsId),
                                    typeId: typeId,
                                    type: type,
                                    maturity: Number(market.maturity) * 1000,
                                    maturityDate: new Date(market.maturity * 1000),
                                    homeTeam: 'Home Team',
                                    awayTeam: 'Away Team',
                                    homeScore: Number(ticket.gamesStatus[index].score.homeScore),
                                    awayScore: Number(ticket.gamesStatus[index].score.awayScore),
                                    finalResult: Number(ticket.gamesStatus[index].result),
                                    status: 0,
                                    isOpen:
                                        !ticket.gamesStatus[index].isResolved && !ticket.gamesStatus[index].isCanceled,
                                    isResolved: ticket.gamesStatus[index].isResolved,
                                    isCanceled: ticket.gamesStatus[index].isCancelled,
                                    isPaused: false,
                                    isOneSideMarket: getIsOneSideMarket(leagueId),
                                    spread: line / 100,
                                    total: line / 100,
                                    line: line / 100,
                                    isPlayerPropsMarket: isPlayerPropsMarket,
                                    isOneSidePlayerPropsMarket: isOneSidePlayerProps(market.playerPropsId),
                                    isYesNoPlayerPropsMarket: isSpecialYesNoProp(market.playerPropsId),
                                    playerProps: {
                                        playerId: Number(market.playerId),
                                        playerName: 'Player Name',
                                        line: line / 100,
                                        outcome: isPlayerPropsMarket ? Number(ticket.gamesStatus[index].result) : 0,
                                        score: isPlayerPropsMarket
                                            ? Number(ticket.gamesStatus[index].score.homeScore)
                                            : 0,
                                    },
                                    combinedPositions: [],
                                    odds: [],
                                    proof: [],

                                    position: Number(market.position),
                                    odd: bigNumberFormatter(market.odd),
                                };
                            }),
                        };
                    });

                    return orderBy(updateTotalQuoteAndPayout(mappedTickets), ['timestamp'], ['desc']);
                }
                return undefined;
            } catch (e) {
                console.log('E ', e);
            }
        },
        {
            ...options,
        }
    );
};
