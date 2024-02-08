import PositionSymbol from 'components/PositionSymbol';
import { oddToastOptions } from 'config/toast';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getIsMobile } from 'redux/modules/app';
import { getTicket, removeFromTicket, updateTicket } from 'redux/modules/ticket';
import { getOddsType } from 'redux/modules/ui';
import { SportMarketInfoV2, TicketPosition } from 'types/markets';
import { formatMarketOdds, getOddTooltipTextV2, getSymbolTextV2 } from 'utils/markets';

type OddProps = {
    market: SportMarketInfoV2;
    position: number;
};

const Odd: React.FC<OddProps> = ({ market, position }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const selectedOddsType = useSelector(getOddsType);
    const isMobile = useSelector(getIsMobile);
    const ticket = useSelector(getTicket);
    const addedToTicket = ticket.filter((position: any) => position.gameId == market.gameId)[0];

    const odd = market.odds[position];
    const isAddedToTicket = addedToTicket && addedToTicket.position == position;
    const noOdd = !odd || odd == 0;

    const oddTooltipText = getOddTooltipTextV2(position, market);

    const onClick = () => {
        if (noOdd) return;

        if (isAddedToTicket) {
            dispatch(removeFromTicket(market.gameId));
        } else {
            const ticket: TicketPosition = {
                gameId: market.gameId,
                leagueId: market.leagueId,
                typeId: market.typeId,
                playerPropsId: market.typeId,
                maturity: market.maturityDate.getTime(),
                status: market.status,
                line: market.total,
                playerId: market.playerProps.playerId,
                odds: market.odds,
                proof: market.proof,
                position: position,
            };
            dispatch(updateTicket(ticket));
            if (isMobile) {
                toast(oddTooltipText, oddToastOptions);
            }
        }
    };

    return (
        <PositionSymbol
            symbolAdditionalText={{
                text: formatMarketOdds(selectedOddsType, odd),
                tooltip: noOdd ? t('markets.zero-odds-tooltip') : undefined,
            }}
            disabled={noOdd}
            flexDirection="column"
            symbolText={getSymbolTextV2(position, market)}
            additionalStyle={market.isOneSideMarket ? { fontSize: 11 } : {}}
            onClick={onClick}
            selected={isAddedToTicket}
            tooltip={!isMobile && <>{oddTooltipText}</>}
        />
    );
};

export default Odd;
