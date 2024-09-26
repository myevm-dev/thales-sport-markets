import axios from 'axios';
import { generalConfig, noCacheConfig } from 'config/general';
import QUERY_KEYS from 'constants/queryKeys';
import { secondsToMilliseconds } from 'date-fns';
import { Network } from 'enums/network';
import { UseQueryOptions, useQuery } from 'react-query';
import { SportMarket, SportMarketError, SportMarkets } from 'types/markets';

// without this every request is treated as new even though it has the same response
const marketsCache = { live: [] as SportMarkets };

const useLiveSportsMarketsQuery = (
    networkId: Network,
    isLiveSelected: boolean,
    options?: UseQueryOptions<{ live: SportMarkets }>
) => {
    return useQuery<{ live: SportMarkets }>(
        QUERY_KEYS.LiveSportMarkets(networkId),
        async () => {
            try {
                const response = await axios.get<
                    undefined,
                    { data: { errors: SportMarketError[]; markets: SportMarkets } }
                >(`${generalConfig.API_URL}/overtime-v2/networks/${networkId}/live-markets`, noCacheConfig);

                const markets: SportMarkets = response?.data?.markets || marketsCache.live;
                const errors = response?.data?.errors;

                const marketsFlattened: SportMarkets = markets
                    .reduce((accumulator: SportMarkets, value) => accumulator.concat(value), [])
                    .map((game: SportMarket) => {
                        const gameErrors = errors.find((error) => error.gameId === game.gameId);
                        if (gameErrors) {
                            gameErrors.errorsDetails = gameErrors.errorsDetails.map((errorDetails) => ({
                                ...errorDetails,
                                errorTime: new Date(errorDetails.errorTime).getTime(),
                            }));
                        }

                        return {
                            ...game,
                            live: true,
                            maturityDate: new Date(game.maturityDate),
                            odds: game.odds.map((odd: any) => odd.normalizedImplied),
                            errors: gameErrors?.errorsDetails || [],
                        };
                    });
                marketsCache.live = marketsFlattened;
                return { live: marketsFlattened };
            } catch (e) {
                console.log(e);
            }

            return marketsCache;
        },
        {
            refetchInterval: secondsToMilliseconds(isLiveSelected ? 2 : 10),
            ...options,
        }
    );
};

export default useLiveSportsMarketsQuery;
