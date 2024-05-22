import { GlobalFiltersEnum, Position } from 'enums/markets';
import { Network } from 'enums/network';
import { LiquidityPoolType } from 'types/liquidityPool';

const QUERY_KEYS = {
    ParlayMarkets: (networkId: Network, account: string, minTimestamp?: number, maxTimestamp?: number) => [
        'parlayMarkets',
        networkId,
        account,
        minTimestamp,
        maxTimestamp,
    ],
    MarketParlays: (networkId: Network, marketAddress: string) => ['marketParlays', networkId, marketAddress],
    GameTickets: (networkId: Network, gameId: string) => ['gameTickets', networkId, gameId],
    UserTickets: (networkId: Network, user: string) => ['userTickets', networkId, user],
    ParlayLeaderboard: (networkId: Network, period: number) => ['parlayLeaderboard', period, networkId],
    SportMarkets: (globalFilter: GlobalFiltersEnum, networkId: Network) => ['sportMarkets', globalFilter, networkId],
    SportMarketsV2: (globalFilter: GlobalFiltersEnum, networkId: Network) => [
        'sportMarketsV2',
        globalFilter,
        networkId,
    ],
    LiveSportMarkets: (networkId: Network) => ['liveSportMarkets', networkId],
    SportMarket: (address: string, networkId: Network) => ['sportMarket', address, networkId],
    SportMarketV2: (address: string, networkId: Network) => ['sportMarketV2', address, networkId],
    ParlayAmmData: (networkId: Network) => ['parlayAmmData', networkId],
    SportsAmmData: (networkId: Network) => ['sportsAmmData', networkId],
    LiveTradingProcessorData: (networkId: Network) => ['liveTradingProcessorData', networkId],
    LiveResult: (marketId: string) => ['liveResult', marketId],
    EnetpulseLiveResult: (marketId: string, gameDate: string, sportTag: number) => [
        'enetpulseLiveResult',
        marketId,
        gameDate,
        sportTag,
    ],
    JsonOddsData: (marketId: string, sportTag: number) => ['jsonOddsData', marketId, sportTag],
    PositionDetails: (
        marketAddress: string,
        position: Position,
        amount: number,
        selectedCollateral: string,
        networkId: Network
    ) => ['positionDetails', marketAddress, position, amount, selectedCollateral, networkId],
    PositionDetailsMulti: (marketAddresses: string, marketPositions: string, marketAmounts: string) => [
        'positionDetailsMulti',
        marketAddresses,
        marketPositions,
        marketAmounts,
    ],
    AvailablePerPosition: (marketAddress: string) => ['availablePerPosition', marketAddress],
    AvailablePerPositionMulti: (marketAddresses: string) => ['availablePerPositionMulti', marketAddresses],
    AvailablePerDoubleChancePosition: (marketAddress: string) => ['availablePerDoubleChancePosition', marketAddress],
    MarketTransactions: (marketAddress: string, networkId: Network, walletAddress?: string) => [
        'market',
        'transactions',
        marketAddress,
        networkId,
        walletAddress,
    ],
    MarketDuration: (networkId: Network) => ['marketDuration', networkId],
    UserTransactions: (walletAddress: string, networkId: Network) => ['user', 'transactions', walletAddress, networkId],
    WinningInfo: (walletAddress: string, networkId: Network) => ['user', 'winningInfo', walletAddress, networkId],
    ClaimTx: (market: string, networkId: Network) => ['claim', 'transactions', market, networkId],
    ClaimableCount: (walletAddress: string, networkId: Network) => ['claimable', 'count', walletAddress, networkId],
    ClaimableCountV2: (walletAddress: string, networkId: Network) => ['claimable', 'countV2', walletAddress, networkId],
    AccountPositions: (walletAddress: string, networkId: Network) => ['accountPosition', walletAddress, networkId],
    ReferralTransaction: (walletAddress: string, networkId: Network) => [
        'referralTransaction',
        walletAddress,
        networkId,
    ],
    ReferrerID: (walletAddress: string) => ['referrerId', walletAddress],
    Referrers: (networkId: Network) => ['referrers', networkId],
    ReferredTraders: (walletAddress: string, networkId: Network) => ['referredTraders', walletAddress, networkId],
    ReferralOverview: (walletAddress: string, networkId: Network) => ['referralOverview', walletAddress, networkId],
    Wallet: {
        GetsUSDWalletBalance: (walletAddress: string, networkId: Network) => [
            'sUsd',
            'balance',
            walletAddress,
            networkId,
        ],
        TokenBalance: (token: string, walletAddress: string, networkId: Network) => [
            'wallet',
            'tokenBalance',
            token,
            walletAddress,
            networkId,
        ],
        MultipleCollateral: (walletAddress: string, networkId: Network) => [
            'multipleCollateral',
            walletAddress,
            networkId,
        ],
        OvertimeVoucher: (walletAddress: string, networkId: Network) => [
            'wallet',
            'overtimeVoucher',
            walletAddress,
            networkId,
        ],
        OvertimeVoucherEscrow: (walletAddress: string, networkId: Network) => [
            'wallet',
            'overtimeVoucherEscrow',
            walletAddress,
            networkId,
        ],
        Stats: (networkId: Network, walletAddress: string) => ['wallet', 'stats', networkId, walletAddress],
        StatsV2: (networkId: Network, walletAddress: string) => ['wallet', 'statsV2', networkId, walletAddress],
        LiquidityPoolTransactions: (networkId: Network, walletAddress: string) => [
            'wallet',
            'liquidityPoolTransactions',
            networkId,
            walletAddress,
        ],
    },
    FavoriteTeam: (walletAddress: string, networkId: Network) => ['favoriteTeam', walletAddress, networkId],
    Bungee: {
        Tokens: () => ['bungee', 'tokens'],
    },
    Banners: (networkId: Network) => ['banners', networkId],
    LiquidityPool: {
        Data: (networkId: Network) => ['liquidityPool', 'data', networkId],
        ParlayData: (networkId: Network) => ['liquidityPool', 'parlayData', networkId],
        UserData: (walletAddress: string, networkId: Network) => ['liquidityPool', 'data', walletAddress, networkId],
        ParlayUserData: (walletAddress: string, networkId: Network) => [
            'liquidityPool',
            'parlayLPData',
            walletAddress,
            networkId,
        ],
        PnL: (networkId: Network, liquidityPoolType: LiquidityPoolType) => [
            'liquidityPool',
            'pnl',
            liquidityPoolType,
            networkId,
        ],
        Return: (networkId: Network, liquidityPoolType: LiquidityPoolType) => [
            'liquidityPool',
            'return',
            liquidityPoolType,
            networkId,
        ],
        UserTransactions: (networkId: Network, liquidityPoolType: LiquidityPoolType) => [
            'liquidityPool',
            'userTransactions',
            liquidityPoolType,
            networkId,
        ],
    },
    CheckPausedAMM: (networkId: Network) => ['checkPausedAMM', networkId],
    Rates: {
        ExchangeRates: (networkId: Network) => ['rates', 'exchangeRates', networkId],
    },
    Promotions: (branchName: string) => [branchName, 'promotions'],
};

export default QUERY_KEYS;
