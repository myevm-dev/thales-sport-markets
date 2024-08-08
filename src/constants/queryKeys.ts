import { Position, StatusFilter } from 'enums/markets';
import { Network } from 'enums/network';

const QUERY_KEYS = {
    ParlayMarkets: (networkId: Network, account: string, minTimestamp?: number, maxTimestamp?: number) => [
        'parlayMarkets',
        networkId,
        account,
        minTimestamp,
        maxTimestamp,
    ],
    MarketParlays: (networkId: Network, marketAddress: string) => ['marketParlays', networkId, marketAddress],
    Ticket: (networkId: Network, ticketAddress: string) => ['gameTickets', networkId, ticketAddress],
    GameTickets: (networkId: Network, gameId: string) => ['gameTickets', networkId, gameId],
    UserTickets: (networkId: Network, user: string) => ['userTickets', networkId, user],
    ParlayLeaderboard: (networkId: Network, period: number) => ['parlayLeaderboard', period, networkId],
    SportMarkets: (statusFilter: StatusFilter, networkId: Network) => ['sportMarkets', statusFilter, networkId],
    SportMarketsV2: (statusFilter: StatusFilter, networkId: Network) => ['sportMarketsV2', statusFilter, networkId],
    LiveSportMarkets: (networkId: Network) => ['liveSportMarkets', networkId],
    SportMarket: (address: string, networkId: Network) => ['sportMarket', address, networkId],
    SportMarketV2: (address: string, networkId: Network) => ['sportMarketV2', address, networkId],
    ParlayAmmData: (networkId: Network) => ['parlayAmmData', networkId],
    SportsAmmData: (networkId: Network) => ['sportsAmmData', networkId],
    TicketLiquidity: (
        gameIds: string,
        typeIds: string,
        playerIds: string,
        lines: string,
        positions: string,
        lives: string,
        networkId: Network
    ) => ['ticketLiquidity', gameIds, typeIds, playerIds, lines, positions, lives, networkId],
    LiveTradingProcessorData: (networkId: Network) => ['liveTradingProcessorData', networkId],
    LiveScore: (gameId: string) => ['liveScore', gameId],
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
        FreeBetBalance: (walletAddress: string, networkId: Network) => ['freeBetBalance', walletAddress, networkId],
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
        Data: (address: string, networkId: Network) => ['liquidityPool', 'data', address, networkId],
        ParlayData: (networkId: Network) => ['liquidityPool', 'parlayData', networkId],
        UserData: (address: string, walletAddress: string, networkId: Network) => [
            'liquidityPool',
            'data',
            address,
            walletAddress,
            networkId,
        ],
        ParlayUserData: (walletAddress: string, networkId: Network) => [
            'liquidityPool',
            'parlayLPData',
            walletAddress,
            networkId,
        ],
        PnL: (networkId: Network, liquidityPoolAddress: string) => [
            'liquidityPool',
            'pnl',
            liquidityPoolAddress,
            networkId,
        ],
        Return: (networkId: Network, liquidityPoolAddress: string) => [
            'liquidityPool',
            'return',
            liquidityPoolAddress,
            networkId,
        ],
        UserTransactions: (networkId: Network, liquidityPoolAddress: string) => [
            'liquidityPool',
            'userTransactions',
            liquidityPoolAddress,
            networkId,
        ],
    },
    CheckPausedAMM: (networkId: Network) => ['checkPausedAMM', networkId],
    Rates: {
        ExchangeRates: (networkId: Network) => ['rates', 'exchangeRates', networkId],
    },
    Promotions: (branchName: string) => [branchName, 'promotions'],
    Overdrop: {
        Leaderboard: () => ['leaderboard'],
        UserMultipliers: (walletAddress: string) => ['userMultipliers', walletAddress],
        UserData: (walletAddress: string) => ['userData', walletAddress],
        UserXPHistory: (walletAddress: string) => ['userXPHistory', walletAddress],
    },
};

export default QUERY_KEYS;
