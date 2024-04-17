import axios from 'axios';
import { generalConfig } from 'config/general';
import QUERY_KEYS from 'constants/queryKeys';
import { Network } from 'enums/network';
import { orderBy } from 'lodash';
import { useQuery, UseQueryOptions } from 'react-query';
import { SportMarketInfoV2 } from 'types/markets';

const useSportMarketQuery = (
    marketAddress: string,
    onlyOpenChildMarkets: boolean,
    networkId: Network,
    options?: UseQueryOptions<SportMarketInfoV2 | undefined>
) => {
    return useQuery<SportMarketInfoV2 | undefined>(
        QUERY_KEYS.SportMarketV2(marketAddress, networkId),
        async () => {
            try {
                const response = await axios.get(`${generalConfig.API_URL}/overtime-v2/markets/${marketAddress}`);
                const market = response.data;

                return {
                    ...market,
                    maturityDate: new Date(market.maturityDate),
                    odds: market.odds.map((odd: any) => odd.normalizedImplied),
                    childMarkets: orderBy(
                        market.childMarkets
                            .filter(
                                (childMarket: any) =>
                                    (onlyOpenChildMarkets && childMarket.isOpen) || !onlyOpenChildMarkets
                            )
                            .map((childMarket: any) => {
                                return {
                                    ...childMarket,
                                    maturityDate: new Date(childMarket.maturityDate),
                                    odds: childMarket.odds.map((odd: any) => odd.normalizedImplied),
                                };
                            }),
                        ['typeId'],
                        ['asc']
                    ),
                };
            } catch (e) {
                console.log(e);
                return undefined;
            }
        },
        {
            ...options,
        }
    );
};

export default useSportMarketQuery;
