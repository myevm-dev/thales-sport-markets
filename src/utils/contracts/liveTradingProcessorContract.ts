import { Network } from 'enums/network';

const liquidityPoolDataContract = {
    addresses: {
        [Network.OptimismMainnet]: '',
        [Network.Arbitrum]: '',
        [Network.Base]: '',
        [Network.OptimismSepolia]: '',
    },
    abi: [
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_link',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_oracle',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_sportsAMM',
                    type: 'address',
                },
                {
                    internalType: 'bytes32',
                    name: '_jobSpecId',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '_paymentAmount',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [],
            name: 'EnforcedPause',
            type: 'error',
        },
        {
            inputs: [],
            name: 'ExpectedPause',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
            ],
            name: 'OwnableInvalidOwner',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'OwnableUnauthorizedAccount',
            type: 'error',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'id',
                    type: 'bytes32',
                },
            ],
            name: 'ChainlinkCancelled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'id',
                    type: 'bytes32',
                },
            ],
            name: 'ChainlinkFulfilled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'bytes32',
                    name: 'id',
                    type: 'bytes32',
                },
            ],
            name: 'ChainlinkRequested',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_link',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_oracle',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_sportsAMM',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_jobSpecId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_paymentAmount',
                    type: 'uint256',
                },
            ],
            name: 'ContextReset',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'requester',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'requestId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'bool',
                    name: '_allow',
                    type: 'bool',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint16',
                    name: '_sportId',
                    type: 'uint16',
                },
                {
                    indexed: false,
                    internalType: 'uint16',
                    name: '_typeId',
                    type: 'uint16',
                },
                {
                    indexed: false,
                    internalType: 'int24',
                    name: '_line',
                    type: 'int24',
                },
                {
                    indexed: false,
                    internalType: 'uint8',
                    name: '_position',
                    type: 'uint8',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_buyInAmount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_expectedQuote',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_collateral',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'timestamp',
                    type: 'uint256',
                },
            ],
            name: 'LiveTradeFulfilled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'requester',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'requestCounter',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'requestId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint16',
                    name: '_sportId',
                    type: 'uint16',
                },
                {
                    indexed: false,
                    internalType: 'uint16',
                    name: '_typeId',
                    type: 'uint16',
                },
                {
                    indexed: false,
                    internalType: 'int24',
                    name: '_line',
                    type: 'int24',
                },
                {
                    indexed: false,
                    internalType: 'uint8',
                    name: '_position',
                    type: 'uint8',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_buyInAmount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_expectedQuote',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_collateral',
                    type: 'address',
                },
            ],
            name: 'LiveTradeRequested',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: '_freeBetsHolder',
                    type: 'address',
                },
            ],
            name: 'SetFreeBetsHolder',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: '_maxAllowedExecutionDelay',
                    type: 'uint256',
                },
            ],
            name: 'SetMaxAllowedExecutionDelay',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'Unpaused',
            type: 'event',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'counterToRequestId',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '_requestId',
                    type: 'bytes32',
                },
                {
                    internalType: 'bool',
                    name: '_allow',
                    type: 'bool',
                },
                {
                    internalType: 'uint256',
                    name: '_approvedQuote',
                    type: 'uint256',
                },
            ],
            name: 'fulfillLiveTrade',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'jobSpecId',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxAllowedExecutionDelay',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paymentAmount',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'requestCounter',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'requestIdFulfilled',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'requestIdToFulfillAllowed',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'requestIdToRequester',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'requestIdToTradeData',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '_gameId',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint16',
                    name: '_sportId',
                    type: 'uint16',
                },
                {
                    internalType: 'uint16',
                    name: '_typeId',
                    type: 'uint16',
                },
                {
                    internalType: 'int24',
                    name: '_line',
                    type: 'int24',
                },
                {
                    internalType: 'uint8',
                    name: '_position',
                    type: 'uint8',
                },
                {
                    internalType: 'uint256',
                    name: '_buyInAmount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_expectedQuote',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_additionalSlippage',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: '_referrer',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_collateral',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        {
                            internalType: 'bytes32',
                            name: '_gameId',
                            type: 'bytes32',
                        },
                        {
                            internalType: 'uint16',
                            name: '_sportId',
                            type: 'uint16',
                        },
                        {
                            internalType: 'uint16',
                            name: '_typeId',
                            type: 'uint16',
                        },
                        {
                            internalType: 'int24',
                            name: '_line',
                            type: 'int24',
                        },
                        {
                            internalType: 'uint8',
                            name: '_position',
                            type: 'uint8',
                        },
                        {
                            internalType: 'uint256',
                            name: '_buyInAmount',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: '_expectedQuote',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: '_additionalSlippage',
                            type: 'uint256',
                        },
                        {
                            internalType: 'address',
                            name: '_referrer',
                            type: 'address',
                        },
                        {
                            internalType: 'address',
                            name: '_collateral',
                            type: 'address',
                        },
                    ],
                    internalType: 'struct ILiveTradingProcessor.LiveTradeData',
                    name: '_liveTradeData',
                    type: 'tuple',
                },
            ],
            name: 'requestLiveTrade',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: 'requestId',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_link',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_oracle',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_sportsAMM',
                    type: 'address',
                },
                {
                    internalType: 'bytes32',
                    name: '_jobSpecId',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '_paymentAmount',
                    type: 'uint256',
                },
            ],
            name: 'setConfiguration',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_freeBetsHolder',
                    type: 'address',
                },
            ],
            name: 'setFreeBetsHolder',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '_maxAllowedExecutionDelay',
                    type: 'uint256',
                },
            ],
            name: 'setMaxAllowedExecutionDelay',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bool',
                    name: '_setPausing',
                    type: 'bool',
                },
            ],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsAMM',
            outputs: [
                {
                    internalType: 'contract ISportsAMMV2',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'timestampPerRequest',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default liquidityPoolDataContract;
