import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CellProps } from 'react-table';
import { formatTxTimestamp, formatCurrency, truncateAddress } from 'thales-utils';
import Table from 'components/Table';
import ViewEtherscanLink from 'components/ViewEtherscanLink';
import { LiquidityPoolUserTransaction, LiquidityPoolUserTransactions } from 'types/liquidityPool';

type UserTransactionsTableProps = {
    transactions: LiquidityPoolUserTransactions;
    noResultsMessage?: React.ReactNode;
    isLoading: boolean;
};

const UserTransactionsTable: FC<UserTransactionsTableProps> = memo(({ transactions, noResultsMessage, isLoading }) => {
    const { t } = useTranslation();
    // @ts-ignore
    return (
        <>
            <Table
                columns={[
                    {
                        Header: <>{t('market.table.date-time-col')}</>,
                        accessor: 'timestamp',
                        Cell: (
                            cellProps: CellProps<
                                LiquidityPoolUserTransaction,
                                LiquidityPoolUserTransaction['timestamp']
                            >
                        ) => <p>{formatTxTimestamp(cellProps.cell.value)}</p>,
                        width: 150,
                        sortable: true,
                    },
                    {
                        Header: <>{t('rewards.table.wallet-address')}</>,
                        accessor: 'account',
                        sortType: 'alphanumeric',
                        Cell: (
                            cellProps: CellProps<LiquidityPoolUserTransaction, LiquidityPoolUserTransaction['account']>
                        ) => <p>{truncateAddress(cellProps.cell.value, 5)}</p>,
                        width: 150,
                        sortable: true,
                    },
                    {
                        Header: <>{t('market.table.type-col')}</>,
                        accessor: 'type',
                        sortType: 'alphanumeric',
                        Cell: (
                            cellProps: CellProps<LiquidityPoolUserTransaction, LiquidityPoolUserTransaction['type']>
                        ) => <p>{t(`liquidity-pool.user-transactions.type.${cellProps.cell.value}`)}</p>,
                        width: 150,
                        sortable: true,
                    },
                    {
                        Header: <>{t('market.table.amount-col')}</>,
                        sortType: 'basic',
                        accessor: 'amount',
                        Cell: (
                            cellProps: CellProps<LiquidityPoolUserTransaction, LiquidityPoolUserTransaction['amount']>
                        ) => (
                            <>
                                <p>
                                    {cellProps.cell.row.original.type === 'withdrawalRequest'
                                        ? '-'
                                        : `$${formatCurrency(cellProps.cell.value)}`}
                                </p>
                            </>
                        ),
                        width: 150,
                        sortable: true,
                    },
                    {
                        Header: <>{t('market.table.tx-status-col')}</>,
                        accessor: 'hash',
                        Cell: (
                            cellProps: CellProps<LiquidityPoolUserTransaction, LiquidityPoolUserTransaction['hash']>
                        ) => <ViewEtherscanLink hash={cellProps.cell.value} />,
                        width: 150,
                    },
                ]}
                data={transactions}
                isLoading={isLoading}
                noResultsMessage={noResultsMessage}
                tableRowHeadStyles={{ minHeight: '35px' }}
                tableHeadCellStyles={{ fontSize: '14px' }}
                tableRowStyles={{ minHeight: '35px' }}
                tableRowCellStyles={{ fontSize: '13px' }}
            />
        </>
    );
});

export default UserTransactionsTable;
