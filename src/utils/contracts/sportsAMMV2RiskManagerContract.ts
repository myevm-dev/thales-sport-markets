import { Network } from 'enums/network';

const sportsAMMV2RiskManagerContract = {
    addresses: {
        [Network.OptimismMainnet]: '0x32077d9F7BF3994f3A0E905b3EefF34410eCA9A5',
        [Network.Arbitrum]: '0x10764f2787841E928E53e5Be1588a73E3c994EDe',
        [Network.Base]: '',
        [Network.OptimismSepolia]: '0x96F56752BDe1b9f6f86393658a79dec9f7095de3',
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
            inputs: [
                { indexed: false, internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                { indexed: false, internalType: 'uint16', name: 'typeId', type: 'uint16' },
                { indexed: false, internalType: 'uint24', name: 'playerId', type: 'uint24' },
                { indexed: false, internalType: 'int24', name: 'line', type: 'int24' },
                { indexed: false, internalType: 'uint256', name: 'cap', type: 'uint256' },
            ],
            name: 'SetCapPerMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'cap', type: 'uint256' },
            ],
            name: 'SetCapPerSport',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'typeId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'cap', type: 'uint256' },
            ],
            name: 'SetCapPerSportAndType',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'cap', type: 'uint256' },
            ],
            name: 'SetCapPerSportChild',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_sportID', type: 'uint256' },
                { indexed: false, internalType: 'bool', name: '_enabled', type: 'bool' },
            ],
            name: 'SetCombiningPerSportEnabled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'defaultCap', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'defaultRiskMultiplier', type: 'uint256' },
            ],
            name: 'SetDefaultCapAndDefaultRiskMultiplier',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'uint256', name: '_divider', type: 'uint256' }],
            name: 'SetDefaultLiveCapDivider',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'dynamicLiquidityCutoffTime', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'dynamicLiquidityCutoffDivider', type: 'uint256' },
            ],
            name: 'SetDynamicLiquidityParams',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_divider', type: 'uint256' },
            ],
            name: 'SetLiveCapDivider',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: '_sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_typeId', type: 'uint256' },
                { indexed: false, internalType: 'bool', name: '_enabled', type: 'bool' },
            ],
            name: 'SetLiveTradingPerSportAndTypeEnabled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'maxCap', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'maxRiskMultiplier', type: 'uint256' },
            ],
            name: 'SetMaxCapAndMaxRiskMultiplier',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'resultManager', type: 'address' }],
            name: 'SetResultManager',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                { indexed: false, internalType: 'uint256', name: 'riskMultiplier', type: 'uint256' },
            ],
            name: 'SetRiskMultiplierPerGame',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'sportId', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'riskMultiplier', type: 'uint256' },
            ],
            name: 'SetRiskMultiplierPerSport',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'sportsAMM', type: 'address' }],
            name: 'SetSportsAMM',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'manager', type: 'address' }],
            name: 'SetSportsManager',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'minBuyInAmount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'maxTicketSize', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'maxSupportedAmount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'maxSupportedOdds', type: 'uint256' },
            ],
            name: 'TicketParamsUpdated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'minimalTimeLeftToMaturity', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'expiryDuration', type: 'uint256' },
            ],
            name: 'TimesUpdated',
            type: 'event',
        },
        {
            inputs: [],
            name: 'DEFAULT_DYNAMIC_LIQUIDITY_CUTOFF_DIVIDER',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'bytes32', name: '_gameId', type: 'bytes32' },
                { internalType: 'uint16', name: '_sportId', type: 'uint16' },
                { internalType: 'uint16', name: '_typeId', type: 'uint16' },
                { internalType: 'uint24', name: '_playerId', type: 'uint24' },
                { internalType: 'int24', name: '_line', type: 'int24' },
                { internalType: 'uint256', name: '_maturity', type: 'uint256' },
                { internalType: 'bool', name: '_isLive', type: 'bool' },
            ],
            name: 'calculateCapToBeUsed',
            outputs: [{ internalType: 'uint256', name: 'cap', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32', name: '_gameId', type: 'bytes32' },
                { internalType: 'uint16', name: '_sportId', type: 'uint16' },
                { internalType: 'uint256', name: '_maturity', type: 'uint256' },
            ],
            name: 'calculateTotalRiskOnGame',
            outputs: [{ internalType: 'uint256', name: 'totalRisk', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32', name: '', type: 'bytes32' },
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'int256', name: '', type: 'int256' },
            ],
            name: 'capPerMarket',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'capPerSport',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            name: 'capPerSportAndType',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'capPerSportChild',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                        { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                        { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                        { internalType: 'uint8', name: 'status', type: 'uint8' },
                        { internalType: 'int24', name: 'line', type: 'int24' },
                        { internalType: 'uint24', name: 'playerId', type: 'uint24' },
                        { internalType: 'uint256[]', name: 'odds', type: 'uint256[]' },
                        { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                        {
                            components: [
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                            ],
                            internalType: 'struct ISportsAMMV2.CombinedPosition[][]',
                            name: 'combinedPositions',
                            type: 'tuple[][]',
                        },
                    ],
                    internalType: 'struct ISportsAMMV2.TradeData[]',
                    name: '_tradeData',
                    type: 'tuple[]',
                },
                { internalType: 'uint256', name: '_buyInAmount', type: 'uint256' },
                { internalType: 'bool', name: '_isLive', type: 'bool' },
            ],
            name: 'checkAndUpdateRisks',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_buyInAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_totalQuote', type: 'uint256' },
                { internalType: 'uint256', name: '_payout', type: 'uint256' },
                { internalType: 'uint256', name: '_expectedPayout', type: 'uint256' },
                { internalType: 'uint256', name: '_additionalSlippage', type: 'uint256' },
            ],
            name: 'checkLimits',
            outputs: [],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                        { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                        { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                        { internalType: 'uint8', name: 'status', type: 'uint8' },
                        { internalType: 'int24', name: 'line', type: 'int24' },
                        { internalType: 'uint24', name: 'playerId', type: 'uint24' },
                        { internalType: 'uint256[]', name: 'odds', type: 'uint256[]' },
                        { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                        {
                            components: [
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                            ],
                            internalType: 'struct ISportsAMMV2.CombinedPosition[][]',
                            name: 'combinedPositions',
                            type: 'tuple[][]',
                        },
                    ],
                    internalType: 'struct ISportsAMMV2.TradeData[]',
                    name: '_tradeData',
                    type: 'tuple[]',
                },
                { internalType: 'uint256', name: '_buyInAmount', type: 'uint256' },
                { internalType: 'bool', name: '_isLive', type: 'bool' },
            ],
            name: 'checkRisks',
            outputs: [
                { internalType: 'enum ISportsAMMV2RiskManager.RiskStatus', name: 'riskStatus', type: 'uint8' },
                { internalType: 'bool[]', name: 'isMarketOutOfLiquidity', type: 'bool[]' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'combiningPerSportEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'defaultCap',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'defaultLiveCapDivider',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'defaultRiskMultiplier',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'dynamicLiquidityCutoffDividerPerSport',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'dynamicLiquidityCutoffTimePerSport',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'expiryDuration',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_sportIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_typeIds', type: 'uint256[]' },
            ],
            name: 'getRiskData',
            outputs: [
                {
                    components: [
                        { internalType: 'uint256', name: 'sportId', type: 'uint256' },
                        {
                            components: [
                                { internalType: 'uint256', name: 'capPerSport', type: 'uint256' },
                                { internalType: 'uint256', name: 'capPerChild', type: 'uint256' },
                                {
                                    components: [
                                        { internalType: 'uint256', name: 'typeId', type: 'uint256' },
                                        { internalType: 'uint256', name: 'cap', type: 'uint256' },
                                    ],
                                    internalType: 'struct ISportsAMMV2RiskManager.TypeCap[]',
                                    name: 'capPerType',
                                    type: 'tuple[]',
                                },
                            ],
                            internalType: 'struct ISportsAMMV2RiskManager.CapData',
                            name: 'capData',
                            type: 'tuple',
                        },
                        { internalType: 'uint256', name: 'riskMultiplierPerSport', type: 'uint256' },
                        {
                            components: [
                                { internalType: 'uint256', name: 'cutoffTimePerSport', type: 'uint256' },
                                { internalType: 'uint256', name: 'cutoffDividerPerSport', type: 'uint256' },
                            ],
                            internalType: 'struct ISportsAMMV2RiskManager.DynamicLiquidityData',
                            name: 'dynamicLiquidityData',
                            type: 'tuple',
                        },
                    ],
                    internalType: 'struct ISportsAMMV2RiskManager.RiskData[]',
                    name: 'riskData',
                    type: 'tuple[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'initNonReentrant', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'contract ISportsAMMV2Manager', name: '_manager', type: 'address' },
                { internalType: 'contract ISportsAMMV2ResultManager', name: '_resultManager', type: 'address' },
                { internalType: 'uint256', name: '_defaultCap', type: 'uint256' },
                { internalType: 'uint256', name: '_defaultRiskMultiplier', type: 'uint256' },
                { internalType: 'uint256', name: '_maxCap', type: 'uint256' },
                { internalType: 'uint256', name: '_maxRiskMultiplier', type: 'uint256' },
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
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'liveCapDividerPerSport',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            name: 'liveTradingPerSportAndTypeEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'manager',
            outputs: [{ internalType: 'contract ISportsAMMV2Manager', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxCap',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxRiskMultiplier',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxSupportedAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxSupportedOdds',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxTicketSize',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'minBuyInAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'minimalTimeLeftToMaturity',
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
            name: 'resultManager',
            outputs: [{ internalType: 'contract ISportsAMMV2ResultManager', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            name: 'riskMultiplierPerGame',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'riskMultiplierPerSport',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32', name: '', type: 'bytes32' },
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            name: 'riskPerMarketTypeAndPosition',
            outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_sportIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_capsPerSport', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_sportIdsForChild', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_capsPerSportChild', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_sportIdsForType', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_typeIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_capsPerSportAndType', type: 'uint256[]' },
            ],
            name: 'setCaps',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32[]', name: '_gameIds', type: 'bytes32[]' },
                { internalType: 'uint16[]', name: '_typeIds', type: 'uint16[]' },
                { internalType: 'uint24[]', name: '_playerIds', type: 'uint24[]' },
                { internalType: 'int24[]', name: '_lines', type: 'int24[]' },
                { internalType: 'uint256[]', name: '_capsPerMarket', type: 'uint256[]' },
            ],
            name: 'setCapsPerMarket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_sportIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_capsPerSport', type: 'uint256[]' },
            ],
            name: 'setCapsPerSport',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_sportIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_typeIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_capsPerType', type: 'uint256[]' },
            ],
            name: 'setCapsPerSportAndType',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_sportIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_capsPerSportChild', type: 'uint256[]' },
            ],
            name: 'setCapsPerSportChild',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_sportID', type: 'uint256' },
                { internalType: 'bool', name: '_enabled', type: 'bool' },
            ],
            name: 'setCombiningPerSportEnabled',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_defaultCap', type: 'uint256' },
                { internalType: 'uint256', name: '_defaultRiskMultiplier', type: 'uint256' },
            ],
            name: 'setDefaultCapAndDefaultRiskMultiplier',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_divider', type: 'uint256' }],
            name: 'setDefaultLiveCapDivider',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_sportId', type: 'uint256' },
                { internalType: 'uint256', name: '_dynamicLiquidityCutoffTime', type: 'uint256' },
                { internalType: 'uint256', name: '_dynamicLiquidityCutoffDivider', type: 'uint256' },
            ],
            name: 'setDynamicLiquidityParamsPerSport',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_sportId', type: 'uint256' },
                { internalType: 'uint256', name: '_divider', type: 'uint256' },
            ],
            name: 'setLiveCapDivider',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_sportId', type: 'uint256' },
                { internalType: 'uint256', name: '_typeId', type: 'uint256' },
                { internalType: 'bool', name: '_enabled', type: 'bool' },
            ],
            name: 'setLiveTradingPerSportAndTypeEnabled',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_maxCap', type: 'uint256' },
                { internalType: 'uint256', name: '_maxRiskMultiplier', type: 'uint256' },
            ],
            name: 'setMaxCapAndMaxRiskMultiplier',
            outputs: [],
            stateMutability: 'nonpayable',
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
            inputs: [{ internalType: 'address', name: '_resultManager', type: 'address' }],
            name: 'setResultManager',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'bytes32[]', name: '_gameIds', type: 'bytes32[]' },
                { internalType: 'uint256[]', name: '_riskMultipliersPerGame', type: 'uint256[]' },
            ],
            name: 'setRiskMultipliersPerGame',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256[]', name: '_sportIds', type: 'uint256[]' },
                { internalType: 'uint256[]', name: '_riskMultipliersPerSport', type: 'uint256[]' },
            ],
            name: 'setRiskMultipliersPerSport',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_sportsAMM', type: 'address' }],
            name: 'setSportsAMM',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_manager', type: 'address' }],
            name: 'setSportsManager',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_minBuyInAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_maxTicketSize', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSupportedAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSupportedOdds', type: 'uint256' },
            ],
            name: 'setTicketParams',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_minimalTimeLeftToMaturity', type: 'uint256' },
                { internalType: 'uint256', name: '_expiryDuration', type: 'uint256' },
            ],
            name: 'setTimes',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            name: 'spentOnGame',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
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
        {
            inputs: [
                {
                    components: [
                        { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
                        { internalType: 'uint16', name: 'sportId', type: 'uint16' },
                        { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                        { internalType: 'uint256', name: 'maturity', type: 'uint256' },
                        { internalType: 'uint8', name: 'status', type: 'uint8' },
                        { internalType: 'int24', name: 'line', type: 'int24' },
                        { internalType: 'uint24', name: 'playerId', type: 'uint24' },
                        { internalType: 'uint256[]', name: 'odds', type: 'uint256[]' },
                        { internalType: 'bytes32[]', name: 'merkleProof', type: 'bytes32[]' },
                        { internalType: 'uint8', name: 'position', type: 'uint8' },
                        {
                            components: [
                                { internalType: 'uint16', name: 'typeId', type: 'uint16' },
                                { internalType: 'uint8', name: 'position', type: 'uint8' },
                                { internalType: 'int24', name: 'line', type: 'int24' },
                            ],
                            internalType: 'struct ISportsAMMV2.CombinedPosition[][]',
                            name: 'combinedPositions',
                            type: 'tuple[][]',
                        },
                    ],
                    internalType: 'struct ISportsAMMV2.TradeData',
                    name: '_marketTradeData',
                    type: 'tuple',
                },
                { internalType: 'bytes32', name: '_rootPerGame', type: 'bytes32' },
            ],
            name: 'verifyMerkleTree',
            outputs: [],
            stateMutability: 'pure',
            type: 'function',
        },
    ],
};

export default sportsAMMV2RiskManagerContract;
