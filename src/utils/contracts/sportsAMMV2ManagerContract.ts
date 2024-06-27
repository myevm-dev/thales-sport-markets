import { Network } from 'enums/network';

const sportsAMMV2ManagerContract = {
    addresses: {
        [Network.OptimismMainnet]: '0x2367FB44C4C2c4E5aAC62d78A55876E01F251605',
        [Network.Arbitrum]: '',
        [Network.Base]: '',
        [Network.OptimismSepolia]: '0xd38b97CE51dF4778F2c1ae7Fedf650935B9f6b3d',
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
            inputs: [{ indexed: false, internalType: 'address', name: 'sportsAMM', type: 'address' }],
            name: 'SportAMMChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'whitelistedAddresses', type: 'address' },
                { indexed: false, internalType: 'enum ISportsAMMV2Manager.Role', name: 'role', type: 'uint8' },
                { indexed: false, internalType: 'bool', name: 'flag', type: 'bool' },
            ],
            name: 'WhitelistStatusChanged',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
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
                { internalType: 'address', name: '_ticket', type: 'address' },
                { internalType: 'address', name: '_user', type: 'address' },
            ],
            name: 'addNewKnownTicket',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_index', type: 'uint256' },
                { internalType: 'uint256', name: '_pageSize', type: 'uint256' },
            ],
            name: 'getActiveTickets',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_index', type: 'uint256' },
                { internalType: 'uint256', name: '_pageSize', type: 'uint256' },
                { internalType: 'address', name: '_user', type: 'address' },
            ],
            name: 'getActiveTicketsPerUser',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_index', type: 'uint256' },
                { internalType: 'uint256', name: '_pageSize', type: 'uint256' },
                { internalType: 'address', name: '_user', type: 'address' },
            ],
            name: 'getResolvedTicketsPerUser',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_index', type: 'uint256' },
                { internalType: 'uint256', name: '_pageSize', type: 'uint256' },
                { internalType: 'bytes32', name: '_gameId', type: 'bytes32' },
            ],
            name: 'getTicketsPerGame',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_ticket', type: 'address' }],
            name: 'isActiveTicket',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_ticket', type: 'address' }],
            name: 'isKnownTicket',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_address', type: 'address' },
                { internalType: 'enum ISportsAMMV2Manager.Role', name: '_role', type: 'uint8' },
            ],
            name: 'isWhitelistedAddress',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
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
            name: 'numOfActiveTickets',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
            name: 'numOfActiveTicketsPerUser',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
            name: 'numOfResolvedTicketsPerUser',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32', name: '_gameId', type: 'bytes32' }],
            name: 'numOfTicketsPerGame',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
            inputs: [
                { internalType: 'address', name: '_ticket', type: 'address' },
                { internalType: 'address', name: '_user', type: 'address' },
            ],
            name: 'resolveKnownTicket',
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
            inputs: [
                { internalType: 'address[]', name: '_tickets', type: 'address[]' },
                { internalType: 'bool', name: '_paused', type: 'bool' },
            ],
            name: 'setPausedTickets',
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
            inputs: [
                { internalType: 'address[]', name: '_whitelistedAddresses', type: 'address[]' },
                { internalType: 'enum ISportsAMMV2Manager.Role', name: '_role', type: 'uint8' },
                { internalType: 'bool', name: '_flag', type: 'bool' },
            ],
            name: 'setWhitelistedAddresses',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsAMM',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
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
                { internalType: 'address', name: '', type: 'address' },
                { internalType: 'enum ISportsAMMV2Manager.Role', name: '', type: 'uint8' },
            ],
            name: 'whitelistedAddresses',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default sportsAMMV2ManagerContract;
