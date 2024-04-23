import Scroll from 'components/Scroll';
import { BetType } from 'enums/markets';
import { groupBy } from 'lodash';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getBetTypeFilter } from 'redux/modules/market';
import { SportMarketInfoV2 } from 'types/markets';
import { isOddValid } from 'utils/marketsV2';
import PositionsV2 from '../../Market/MarketDetailsV2/components/PositionsV2';
import { Wrapper } from './styled-components';

type SelectedMarketProps = {
    market: SportMarketInfoV2;
};

const SelectedMarket: React.FC<SelectedMarketProps> = ({ market }) => {
    const isGameStarted = market.maturityDate < new Date();
    const isGameOpen = market.isOpen && !isGameStarted;
    const betTypeFilter = useSelector(getBetTypeFilter);

    const groupedChildMarkets = useMemo(() => {
        if (betTypeFilter === undefined) {
            return groupBy(market.childMarkets, (childMarket: SportMarketInfoV2) => childMarket.typeId);
        } else {
            return groupBy(
                market.childMarkets.filter((childMarket) => childMarket.typeId === betTypeFilter),
                (childMarket: SportMarketInfoV2) => childMarket.typeId
            );
        }
    }, [market.childMarkets, betTypeFilter]);

    const areChildMarketsOddsValid = market.childMarkets.some((childMarket) =>
        childMarket.odds.some((odd) => isOddValid(odd))
    );

    const areOddsValid = market.odds.some((odd) => isOddValid(odd));

    const hideGame = isGameOpen && !areOddsValid && !areChildMarketsOddsValid;

    return (
        <Scroll height="calc(100vh - 178px)">
            <Wrapper hideGame={hideGame}>
                {(betTypeFilter === undefined || betTypeFilter === BetType.WINNER) && (
                    <PositionsV2 markets={[market]} betType={BetType.WINNER} isGameOpen={false} />
                )}
                {Object.keys(groupedChildMarkets).map((key, index) => {
                    const typeId = Number(key);
                    const childMarkets = groupedChildMarkets[typeId];
                    return <PositionsV2 key={index} markets={childMarkets} betType={typeId} isGameOpen={false} />;
                })}
            </Wrapper>
        </Scroll>
    );
};

export default SelectedMarket;
