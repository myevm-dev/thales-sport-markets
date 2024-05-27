import { Network } from 'enums/network';

const sportsAMMDataContract = {
    addresses: {
        [Network.OptimismMainnet]: '0x71CE219942FFD9C1d8B67d6C35C39Ae04C4F647B',
        [Network.Arbitrum]: '',
        [Network.Base]: '',
        [Network.OptimismSepolia]: '0xe4d8d605874443f952fBdc03Dd1C69761230A7f0',
    },
    abi: [
        { inputs: [], name: 'InvalidInitialization', type: 'error' },
        { inputs: [], name: 'NotInitializing', type: 'error' },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint64', name: 'version', type: 'uint64' }],
            name: 'Initialized',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' },
                { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: 'isPaused', type: 'bool' }],
            name: 'PauseChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'riskManager', type: 'address' }],
            name: 'RiskManagerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'sportsAMM', type: 'address' }],
            name: 'SportAMMChanged',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'bytes32[]', name: '_gameIds', type: 'bytes32[]' },
                { internalType: 'uint16[]', name: '_typeIds', type: 'uint16[]' },
                { internalType: 'uint16[]', name: '_playerIds', type: 'uint16[]' },
            ],
            name: 'areMarketsResolved',
            outputs: [{ internalType: 'bool[]', name: 'resolvedMarkets', type: 'bool[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
            name: 'getActiveTicketsDataPerUser',
            outputs: [
                {
                    components: [
                        { internalType: 'address', name: 'id', type: 'address' },
                        {
                            components: [
                                { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                                { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                                { internalType: 'uint16', name: 'playerId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'uint256', name: 'odd', type: 'uint256' },
                                {
                                    components: [
                                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                                        { internalType: 'int24', name: 'line', type: 'int24' },
                                    ],
                                    internalType: 'struct ISportsAMMV2.CombinedPosition[]',
                                    name: 'combinedPositions',
                                    type: 'tuple[]',
                                },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketData[]',
                            name: 'marketsData',
                            type: 'tuple[]',
                        },
                        {
                            components: [
                                {
                                    internalType: 'enum ISportsAMMV2ResultManager.MarketPositionStatus',
                                    name: 'status',
                                    type: 'uint8',
                                },
                                { internalType: 'int24[]', name: 'results', type: 'int24[]' },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketResult[]',
                            name: 'marketsResult',
                            type: 'tuple[]',
                        },
                        { internalType: 'address', name: 'collateral', type: 'address' },
                        { internalType: 'address', name: 'ticketOwner', type: 'address' },
                        { internalType: 'uint256', name: 'buyInAmount', type: 'uint256' },
                        { internalType: 'uint256', name: 'fees', type: 'uint256' },
                        { internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
                        { internalType: 'uint256', name: 'numOfMarkets', type: 'uint256' },
                        { internalType: 'uint256', name: 'expiry', type: 'uint256' },
                        { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
                        { internalType: 'bool', name: 'resolved', type: 'bool' },
                        { internalType: 'bool', name: 'paused', type: 'bool' },
                        { internalType: 'bool', name: 'cancelled', type: 'bool' },
                        { internalType: 'bool', name: 'isLost', type: 'bool' },
                        { internalType: 'bool', name: 'isUserTheWinner', type: 'bool' },
                        { internalType: 'bool', name: 'isExercisable', type: 'bool' },
                        { internalType: 'uint256', name: 'finalPayout', type: 'uint256' },
                        { internalType: 'bool', name: 'isLive', type: 'bool' },
                    ],
                    internalType: 'struct SportsAMMV2Data.TicketData[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32[]', name: '_gameIds', type: 'bytes32[]' }],
            name: 'getOnlyActiveGameIdsAndTicketsOf',
            outputs: [
                { internalType: 'bytes32[]', name: 'activeGameIds', type: 'bytes32[]' },
                { internalType: 'uint256[]', name: 'numOfTicketsPerGameId', type: 'uint256[]' },
                { internalType: 'address[][]', name: 'ticketsPerGameId', type: 'address[][]' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
            name: 'getResolvedTicketsDataPerUser',
            outputs: [
                {
                    components: [
                        { internalType: 'address', name: 'id', type: 'address' },
                        {
                            components: [
                                { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                                { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                                { internalType: 'uint16', name: 'playerId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'uint256', name: 'odd', type: 'uint256' },
                                {
                                    components: [
                                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                                        { internalType: 'int24', name: 'line', type: 'int24' },
                                    ],
                                    internalType: 'struct ISportsAMMV2.CombinedPosition[]',
                                    name: 'combinedPositions',
                                    type: 'tuple[]',
                                },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketData[]',
                            name: 'marketsData',
                            type: 'tuple[]',
                        },
                        {
                            components: [
                                {
                                    internalType: 'enum ISportsAMMV2ResultManager.MarketPositionStatus',
                                    name: 'status',
                                    type: 'uint8',
                                },
                                { internalType: 'int24[]', name: 'results', type: 'int24[]' },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketResult[]',
                            name: 'marketsResult',
                            type: 'tuple[]',
                        },
                        { internalType: 'address', name: 'collateral', type: 'address' },
                        { internalType: 'address', name: 'ticketOwner', type: 'address' },
                        { internalType: 'uint256', name: 'buyInAmount', type: 'uint256' },
                        { internalType: 'uint256', name: 'fees', type: 'uint256' },
                        { internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
                        { internalType: 'uint256', name: 'numOfMarkets', type: 'uint256' },
                        { internalType: 'uint256', name: 'expiry', type: 'uint256' },
                        { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
                        { internalType: 'bool', name: 'resolved', type: 'bool' },
                        { internalType: 'bool', name: 'paused', type: 'bool' },
                        { internalType: 'bool', name: 'cancelled', type: 'bool' },
                        { internalType: 'bool', name: 'isLost', type: 'bool' },
                        { internalType: 'bool', name: 'isUserTheWinner', type: 'bool' },
                        { internalType: 'bool', name: 'isExercisable', type: 'bool' },
                        { internalType: 'uint256', name: 'finalPayout', type: 'uint256' },
                        { internalType: 'bool', name: 'isLive', type: 'bool' },
                    ],
                    internalType: 'struct SportsAMMV2Data.TicketData[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32[]', name: '_gameIds', type: 'bytes32[]' },
                { internalType: 'uint16[]', name: '_typeIds', type: 'uint16[]' },
                { internalType: 'uint16[]', name: '_playerIds', type: 'uint16[]' },
            ],
            name: 'getResultsForMarkets',
            outputs: [{ internalType: 'int24[][]', name: 'resultsForMarkets', type: 'int24[][]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getSportsAMMParameters',
            outputs: [
                {
                    components: [
                        { internalType: 'uint256', name: 'minBuyInAmount', type: 'uint256' },
                        { internalType: 'uint256', name: 'maxTicketSize', type: 'uint256' },
                        { internalType: 'uint256', name: 'maxSupportedAmount', type: 'uint256' },
                        { internalType: 'uint256', name: 'maxSupportedOdds', type: 'uint256' },
                        { internalType: 'uint256', name: 'safeBoxFee', type: 'uint256' },
                        { internalType: 'bool', name: 'paused', type: 'bool' },
                    ],
                    internalType: 'struct SportsAMMV2Data.SportsAMMParameters',
                    name: '',
                    type: 'tuple',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address[]', name: 'ticketsArray', type: 'address[]' }],
            name: 'getTicketsData',
            outputs: [
                {
                    components: [
                        { internalType: 'address', name: 'id', type: 'address' },
                        {
                            components: [
                                { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                                { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                                { internalType: 'uint16', name: 'playerId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'uint256', name: 'odd', type: 'uint256' },
                                {
                                    components: [
                                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                                        { internalType: 'int24', name: 'line', type: 'int24' },
                                    ],
                                    internalType: 'struct ISportsAMMV2.CombinedPosition[]',
                                    name: 'combinedPositions',
                                    type: 'tuple[]',
                                },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketData[]',
                            name: 'marketsData',
                            type: 'tuple[]',
                        },
                        {
                            components: [
                                {
                                    internalType: 'enum ISportsAMMV2ResultManager.MarketPositionStatus',
                                    name: 'status',
                                    type: 'uint8',
                                },
                                { internalType: 'int24[]', name: 'results', type: 'int24[]' },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketResult[]',
                            name: 'marketsResult',
                            type: 'tuple[]',
                        },
                        { internalType: 'address', name: 'collateral', type: 'address' },
                        { internalType: 'address', name: 'ticketOwner', type: 'address' },
                        { internalType: 'uint256', name: 'buyInAmount', type: 'uint256' },
                        { internalType: 'uint256', name: 'fees', type: 'uint256' },
                        { internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
                        { internalType: 'uint256', name: 'numOfMarkets', type: 'uint256' },
                        { internalType: 'uint256', name: 'expiry', type: 'uint256' },
                        { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
                        { internalType: 'bool', name: 'resolved', type: 'bool' },
                        { internalType: 'bool', name: 'paused', type: 'bool' },
                        { internalType: 'bool', name: 'cancelled', type: 'bool' },
                        { internalType: 'bool', name: 'isLost', type: 'bool' },
                        { internalType: 'bool', name: 'isUserTheWinner', type: 'bool' },
                        { internalType: 'bool', name: 'isExercisable', type: 'bool' },
                        { internalType: 'uint256', name: 'finalPayout', type: 'uint256' },
                        { internalType: 'bool', name: 'isLive', type: 'bool' },
                    ],
                    internalType: 'struct SportsAMMV2Data.TicketData[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32', name: 'gameId', type: 'bytes32' }],
            name: 'getTicketsDataPerGame',
            outputs: [
                {
                    components: [
                        { internalType: 'address', name: 'id', type: 'address' },
                        {
                            components: [
                                { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                                { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                                { internalType: 'uint16', name: 'playerId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'uint256', name: 'odd', type: 'uint256' },
                                {
                                    components: [
                                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                                        { internalType: 'int24', name: 'line', type: 'int24' },
                                    ],
                                    internalType: 'struct ISportsAMMV2.CombinedPosition[]',
                                    name: 'combinedPositions',
                                    type: 'tuple[]',
                                },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketData[]',
                            name: 'marketsData',
                            type: 'tuple[]',
                        },
                        {
                            components: [
                                {
                                    internalType: 'enum ISportsAMMV2ResultManager.MarketPositionStatus',
                                    name: 'status',
                                    type: 'uint8',
                                },
                                { internalType: 'int24[]', name: 'results', type: 'int24[]' },
                            ],
                            internalType: 'struct SportsAMMV2Data.MarketResult[]',
                            name: 'marketsResult',
                            type: 'tuple[]',
                        },
                        { internalType: 'address', name: 'collateral', type: 'address' },
                        { internalType: 'address', name: 'ticketOwner', type: 'address' },
                        { internalType: 'uint256', name: 'buyInAmount', type: 'uint256' },
                        { internalType: 'uint256', name: 'fees', type: 'uint256' },
                        { internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
                        { internalType: 'uint256', name: 'numOfMarkets', type: 'uint256' },
                        { internalType: 'uint256', name: 'expiry', type: 'uint256' },
                        { internalType: 'uint256', name: 'createdAt', type: 'uint256' },
                        { internalType: 'bool', name: 'resolved', type: 'bool' },
                        { internalType: 'bool', name: 'paused', type: 'bool' },
                        { internalType: 'bool', name: 'cancelled', type: 'bool' },
                        { internalType: 'bool', name: 'isLost', type: 'bool' },
                        { internalType: 'bool', name: 'isUserTheWinner', type: 'bool' },
                        { internalType: 'bool', name: 'isExercisable', type: 'bool' },
                        { internalType: 'uint256', name: 'finalPayout', type: 'uint256' },
                        { internalType: 'bool', name: 'isLive', type: 'bool' },
                    ],
                    internalType: 'struct SportsAMMV2Data.TicketData[]',
                    name: '',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'contract ISportsAMMV2', name: '_sportsAMM', type: 'address' },
                { internalType: 'contract ISportsAMMV2RiskManager', name: '_riskManager', type: 'address' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastPauseTime',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'riskManager',
            outputs: [{ internalType: 'contract ISportsAMMV2RiskManager', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_paused', type: 'bool' }],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'contract ISportsAMMV2RiskManager', name: '_riskManager', type: 'address' }],
            name: 'setRiskManager',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'contract ISportsAMMV2', name: '_sportsAMM', type: 'address' }],
            name: 'setSportsAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsAMM',
            outputs: [{ internalType: 'contract ISportsAMMV2', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'proxyAddress', type: 'address' }],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default sportsAMMDataContract;
