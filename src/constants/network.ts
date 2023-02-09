export const GWEI_UNIT = 1000000000;
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export type NetworkMapper = Record<number, number>;

export const L1_TO_L2_NETWORK_MAPPER: NetworkMapper = {
    1: 10,
    42: 69,
};

export const L2_TO_L1_NETWORK_MAPPER: NetworkMapper = {
    10: 1,
    69: 42,
};

export const SUPPORTED_NETWORKS = [
    {
        chainId: 10,
        chainName: 'Optimism Mainnet',
        iconClassName: 'icon icon--op',
        supportsVaults: true,
    },
    {
        chainId: 42161,
        chainName: 'Arbitrum One',
        iconClassName: 'icon icon--arb',
        supportsVaults: false,
    },
    {
        chainId: 420,
        chainName: 'Optimism Goerli Testnet',
        iconClassName: 'icon icon--op',
        supportsVaults: true,
    },
];

export type OptimismNetwork = {
    chainId: string;
    chainName: string;
    rpcUrls: string[];
    blockExplorerUrls: string[];
    iconUrls: string[];
    fraudProofWindow?: number;
    nativeCurrency: {
        symbol: string;
        decimals: number;
    };
};

export const OPTIMISM_NETWORKS: Record<number, OptimismNetwork> = {
    10: {
        chainId: '0xA',
        chainName: 'Optimism',
        rpcUrls: ['https://mainnet.optimism.io'],
        blockExplorerUrls: ['https://optimistic.etherscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
    69: {
        chainId: '0x45',
        chainName: 'Optimism Kovan',
        rpcUrls: ['https://kovan.optimism.io'],
        blockExplorerUrls: ['https://kovan-optimistic.etherscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
    420: {
        chainId: '0x420',
        chainName: 'Optimism Goerli',
        rpcUrls: ['https://goerli.optimism.io/'],
        blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
        iconUrls: ['https://optimism.io/images/metamask_icon.svg', 'https://optimism.io/images/metamask_icon.png'],
        nativeCurrency: {
            symbol: 'ETH',
            decimals: 18,
        },
    },
};

export const OPTIMISM_OPTIONS = [
    {
        label: 'optimism.optimistic-gateway',
        link: 'https://gateway.optimism.io/',
    },
    {
        label: 'optimism.optimistic-etherscan',
        link: 'https://optimistic.etherscan.io/',
    },
    {
        label: 'optimism.learn-more',
        link: 'https://www.optimism.io/',
    },
];

export const MAX_GAS_LIMIT = 15000000;
export const MAX_GAS_LIMIT_ARB = 20000000;
