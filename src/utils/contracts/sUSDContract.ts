export const erc20Contract = {
    addresses: {
        5: '0x2851715A8d25e176413A77b495762435D5dDBd0d',
        10: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
        42: '0x5d7e13023a6f2245D7Af1eaE97dFF2EF1057F5b9',
        69: '0xaA5068dC2B3AADE533d3e52C6eeaadC6a8154c57',
        420: '0xE1ceaa829525a08C1d39A5CEBe4b42aF58d77198',
    },
    abi: [
        { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
                { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'authorizer', type: 'address' },
                { indexed: true, internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            ],
            name: 'AuthorizationCanceled',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'authorizer', type: 'address' },
                { indexed: true, internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            ],
            name: 'AuthorizationUsed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: '_account', type: 'address' }],
            name: 'Blacklisted',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: 'newBlacklister', type: 'address' }],
            name: 'BlacklisterChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: 'newChildChainManager', type: 'address' }],
            name: 'ChildChangeManagerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'userAddress', type: 'address' },
                { indexed: false, internalType: 'address payable', name: 'relayerAddress', type: 'address' },
                { indexed: false, internalType: 'bytes', name: 'functionSignature', type: 'bytes' },
            ],
            name: 'MetaTransactionExecuted',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'previousOwner', type: 'address' },
                { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: 'newAddress', type: 'address' }],
            name: 'PauserChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: 'newRescuer', type: 'address' }],
            name: 'RescuerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: 'address', name: 'from', type: 'address' },
                { indexed: true, internalType: 'address', name: 'to', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: true, internalType: 'address', name: '_account', type: 'address' }],
            name: 'UnBlacklisted',
            type: 'event',
        },
        { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
        {
            inputs: [],
            name: 'APPROVE_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'BURN_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'CANCEL_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'CLAIM_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'DOMAIN_SEPARATOR',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'META_TRANSACTION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'PERMIT_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
            outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
            ],
            name: 'allowance',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'approve',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'approveWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'authorizer', type: 'address' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            ],
            name: 'authorizationState',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'balanceOf',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'blacklist',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'blacklister',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'burnWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'canClaim',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'authorizer', type: 'address' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'cancelAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { inputs: [], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'claimWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'currency',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
            ],
            name: 'decreaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'decrement', type: 'uint256' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'decreaseAllowanceWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'user', type: 'address' },
                { internalType: 'bytes', name: 'depositData', type: 'bytes' },
            ],
            name: 'deposit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'userAddress', type: 'address' },
                { internalType: 'bytes', name: 'functionSignature', type: 'bytes' },
                { internalType: 'bytes32', name: 'sigR', type: 'bytes32' },
                { internalType: 'bytes32', name: 'sigS', type: 'bytes32' },
                { internalType: 'uint8', name: 'sigV', type: 'uint8' },
            ],
            name: 'executeMetaTransaction',
            outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
            ],
            name: 'increaseAllowance',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'increment', type: 'uint256' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'increaseAllowanceWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'isBlacklisted',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
            name: 'lastClaimedAt',
            outputs: [{ internalType: 'uint256', name: 'time', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
            name: 'nonces',
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
        { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'pauser',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'owner', type: 'address' },
                { internalType: 'address', name: 'spender', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'uint256', name: 'deadline', type: 'uint256' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'permit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'receiveWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'contract IERC20', name: 'tokenContract', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'rescueERC20',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'rescuer',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transfer',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'sender', type: 'address' },
                { internalType: 'address', name: 'recipient', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferFrom',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'from', type: 'address' },
                { internalType: 'address', name: 'to', type: 'address' },
                { internalType: 'uint256', name: 'value', type: 'uint256' },
                { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
                { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
                { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
                { internalType: 'uint8', name: 'v', type: 'uint8' },
                { internalType: 'bytes32', name: 'r', type: 'bytes32' },
                { internalType: 'bytes32', name: 's', type: 'bytes32' },
            ],
            name: 'transferWithAuthorization',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
            name: 'unBlacklist',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [{ internalType: 'address', name: 'newBlacklister', type: 'address' }],
            name: 'updateBlacklister',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newChildChainManager', type: 'address' }],
            name: 'updateChildChainManager',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: 'newName', type: 'string' },
                { internalType: 'string', name: 'newSymbol', type: 'string' },
            ],
            name: 'updateMetadata',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newPauser', type: 'address' }],
            name: 'updatePauser',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'newRescuer', type: 'address' }],
            name: 'updateRescuer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
            name: 'withdraw',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
};

export default erc20Contract;
