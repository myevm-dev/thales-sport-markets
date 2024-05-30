import SPAAnchor from 'components/SPAAnchor';
import ShareTicketModalV2 from 'components/ShareTicketModalV2';
import { ShareTicketModalProps } from 'components/ShareTicketModalV2/ShareTicketModalV2';
import Table from 'components/Table';
import { OddsType } from 'enums/markets';
import i18n from 'i18n';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getIsMobile } from 'redux/modules/app';
import { getOddsType } from 'redux/modules/ui';
import { getNetworkId } from 'redux/modules/wallet';
import { useTheme } from 'styled-components';
import { formatCurrencyWithKey, formatTxTimestamp, getEtherscanAddressLink, truncateAddress } from 'thales-utils';
import { SportMarket, Ticket, TicketMarket } from 'types/markets';
import { ThemeInterface } from 'types/ui';
import { formatMarketOdds } from 'utils/markets';
import { getPositionTextV2, getTeamNameV2, getTitleText } from 'utils/marketsV2';
import { buildMarketLink } from 'utils/routes';
import { formatTicketOdds, getTicketMarketOdd, getTicketMarketStatus } from 'utils/tickets';
import {
    ExpandedRowWrapper,
    ExternalLink,
    FirstExpandedSection,
    LastExpandedSection,
    MarketStatus,
    MarketStatusIcon,
    MarketTypeInfo,
    Odd,
    PositionInfo,
    PositionText,
    QuoteLabel,
    QuoteText,
    QuoteWrapper,
    SelectionInfoContainer,
    StatusIcon,
    StatusWrapper,
    TableText,
    TeamNameLabel,
    TeamNamesContainer,
    TicketRow,
    TwitterIcon,
    TwitterWrapper,
    tableHeaderStyle,
    tableRowStyle,
} from './styled-components';

type TicketTransactionsTableProps = {
    ticketTransactions: Ticket[];
    market?: SportMarket;
    tableHeight?: string;
    isLoading: boolean;
};

const TicketTransactionsTable: React.FC<TicketTransactionsTableProps> = ({
    ticketTransactions,
    market,
    tableHeight,
    isLoading,
}) => {
    const { t } = useTranslation();
    const language = i18n.language;
    const theme: ThemeInterface = useTheme();
    const isMobile = useSelector(getIsMobile);
    const selectedOddsType = useSelector(getOddsType);
    const networkId = useSelector(getNetworkId);

    const [showShareTicketModal, setShowShareTicketModal] = useState(false);
    const [shareTicketModalData, setShareTicketModalData] = useState<ShareTicketModalProps | undefined>(undefined);

    const onTwitterIconClick = (ticket: Ticket) => {
        ticket.sportMarkets = ticket.sportMarkets.map((sportMarket) => {
            return {
                ...sportMarket,
                odd: getTicketMarketOdd(sportMarket),
            };
        });

        const modalData: ShareTicketModalProps = {
            markets: ticket.sportMarkets,
            multiSingle: false,
            paid: ticket.buyInAmount,
            payout: ticket.payout,
            onClose: () => setShowShareTicketModal(false),
            isTicketLost: ticket.isLost,
            isTicketResolved: !ticket.isOpen,
        };
        setShareTicketModalData(modalData);
        setShowShareTicketModal(true);
    };

    return (
        <>
            <Table
                tableHeight={tableHeight}
                tableHeadCellStyles={{
                    ...tableHeaderStyle,
                    color: theme.textColor.secondary,
                }}
                tableRowCellStyles={tableRowStyle}
                columnsDeps={[networkId]}
                columns={[
                    {
                        Header: <>{t('profile.table.time')}</>,
                        accessor: 'timestamp',
                        sortable: true,
                        Cell: (cellProps: any) => {
                            return <TableText>{formatTxTimestamp(cellProps.cell.value)}</TableText>;
                        },
                    },
                    {
                        Header: <>{t('profile.table.id')}</>,
                        accessor: 'id',
                        sortable: false,
                        Cell: (cellProps: any) => {
                            return (
                                <ExternalLink
                                    href={getEtherscanAddressLink(networkId, cellProps.cell.value)}
                                    target={'_blank'}
                                >
                                    <TableText>{truncateAddress(cellProps.cell.value)}</TableText>
                                </ExternalLink>
                            );
                        },
                    },
                    {
                        Header: <>{t('profile.table.games')}</>,
                        accessor: 'numOfMarkets',
                        sortable: true,
                        Cell: (cellProps: any) => {
                            return <TableText>{cellProps.cell.value}</TableText>;
                        },
                    },
                    {
                        Header: <>{t('profile.table.paid')}</>,
                        accessor: 'buyInAmount',
                        sortable: true,
                        Cell: (cellProps: any) => {
                            return (
                                <TableText>
                                    {formatCurrencyWithKey(cellProps.row.original.collateral, cellProps.cell.value)}
                                </TableText>
                            );
                        },
                    },
                    {
                        Header: <>{t('profile.table.payout')}</>,
                        accessor: 'payout',
                        sortable: true,
                        Cell: (cellProps: any) => {
                            return (
                                <TableText>
                                    {formatCurrencyWithKey(cellProps.row.original.collateral, cellProps.cell.value)}
                                </TableText>
                            );
                        },
                    },
                    {
                        Header: <>{t('profile.table.status')}</>,
                        accessor: 'status',
                        sortable: false,
                        Cell: (cellProps: any) => {
                            if (cellProps.row.original.isCancelled) {
                                return (
                                    <StatusWrapper color={theme.status.sold}>
                                        <StatusIcon className={`icon icon--lost`} />
                                        Canceled
                                    </StatusWrapper>
                                );
                            } else if (cellProps.row.original.isUserTheWinner) {
                                return (
                                    <StatusWrapper color={theme.status.win}>
                                        <StatusIcon className={`icon icon--ticket-win`} />
                                        Won
                                    </StatusWrapper>
                                );
                            } else {
                                return cellProps.row.original.isLost ? (
                                    <StatusWrapper color={theme.status.loss}>
                                        <StatusIcon className={`icon icon--ticket-loss`} />
                                        Loss
                                    </StatusWrapper>
                                ) : (
                                    <StatusWrapper color={theme.status.open}>
                                        <StatusIcon className={`icon icon--ticket-open`} />
                                        Open
                                    </StatusWrapper>
                                );
                            }
                        },
                    },
                ]}
                initialState={{
                    sortBy: [
                        {
                            id: 'timestamp',
                            desc: true,
                        },
                    ],
                }}
                isLoading={isLoading}
                data={ticketTransactions}
                noResultsMessage={t('market.table.no-results')}
                expandedRow={(row) => {
                    const ticketMarkets = getTicketMarkets(
                        row.original,
                        selectedOddsType,
                        language,
                        theme,
                        isMobile,
                        market
                    );

                    return (
                        <ExpandedRowWrapper>
                            <FirstExpandedSection>{ticketMarkets}</FirstExpandedSection>
                            <LastExpandedSection>
                                <QuoteWrapper>
                                    <QuoteLabel>{t('profile.table.total-quote')}:</QuoteLabel>
                                    <QuoteText>
                                        {formatTicketOdds(
                                            selectedOddsType,
                                            row.original.buyInAmount,
                                            row.original.payout
                                        )}
                                    </QuoteText>
                                </QuoteWrapper>
                                <TwitterWrapper>
                                    <TwitterIcon onClick={() => onTwitterIconClick(row.original)} />
                                </TwitterWrapper>
                            </LastExpandedSection>
                        </ExpandedRowWrapper>
                    );
                }}
            ></Table>
            {showShareTicketModal && shareTicketModalData && (
                <ShareTicketModalV2
                    markets={shareTicketModalData.markets}
                    multiSingle={false}
                    paid={shareTicketModalData.paid}
                    payout={shareTicketModalData.payout}
                    onClose={shareTicketModalData.onClose}
                    isTicketLost={shareTicketModalData.isTicketLost}
                    isTicketResolved={shareTicketModalData.isTicketResolved}
                />
            )}
        </>
    );
};

const getTicketMarketStatusIcon = (market: TicketMarket) => {
    return market.isOpen || market.isCancelled ? (
        <MarketStatusIcon className={`icon icon--ticket-open`} />
    ) : market.isWinning ? (
        <MarketStatusIcon className={`icon icon--ticket-win`} />
    ) : (
        <MarketStatusIcon className={`icon icon--ticket-loss`} />
    );
};

const getOpacity = (market: TicketMarket) => (market.isResolved && !market.isWinning ? 0.5 : 1);

export const getTicketMarkets = (
    ticket: Ticket,
    selectedOddsType: OddsType,
    language: string,
    theme: ThemeInterface,
    isMobile: boolean,
    market?: SportMarket
) => {
    return ticket.sportMarkets.map((ticketMarket, index) => {
        return (
            <TicketRow
                highlighted={market && ticketMarket.gameId === market.gameId}
                style={{ opacity: getOpacity(ticketMarket) }}
                key={`m-${index}`}
            >
                <SPAAnchor href={buildMarketLink(ticketMarket.gameId, language)}>
                    <TeamNamesContainer>
                        <TeamNameLabel>{getTeamNameV2(ticketMarket, 0)}</TeamNameLabel>
                        {!ticketMarket.isOneSideMarket && !ticketMarket.isPlayerPropsMarket && (
                            <>
                                {!isMobile && <TeamNameLabel>&nbsp;-&nbsp;</TeamNameLabel>}
                                <TeamNameLabel>{getTeamNameV2(ticketMarket, 1)}</TeamNameLabel>
                            </>
                        )}
                    </TeamNamesContainer>
                </SPAAnchor>
                <SelectionInfoContainer>
                    <MarketTypeInfo>{getTitleText(ticketMarket)}</MarketTypeInfo>
                    <PositionInfo>
                        <PositionText>{getPositionTextV2(ticketMarket, ticketMarket.position, true)}</PositionText>
                        <Odd>{formatMarketOdds(selectedOddsType, getTicketMarketOdd(ticketMarket))}</Odd>
                    </PositionInfo>
                </SelectionInfoContainer>
                <MarketStatus
                    color={
                        ticketMarket.isOpen || ticketMarket.isCancelled
                            ? theme.status.open
                            : ticketMarket.isWinning
                            ? theme.status.win
                            : theme.status.loss
                    }
                >
                    {getTicketMarketStatusIcon(ticketMarket)}
                    {getTicketMarketStatus(ticketMarket)}
                </MarketStatus>
            </TicketRow>
        );
    });
};

export default TicketTransactionsTable;
