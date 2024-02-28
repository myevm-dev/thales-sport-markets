import { Network } from 'enums/network';
import theme from 'styles/themes/dark';

export type ThemeInterface = typeof theme;

export type NavMenuItem = {
    i18label: string;
    iconClass: string;
    name: string;
    route: string;
    supportedNetworks: Network[];
};

export type PromotionCardData = {
    title: string;
    description: string;
    startDate: number;
    endDate: number;
    displayCountdown?: boolean;
    promotionId: string;
    promotionUrl: string;
    backgroundImageUrl: string;
    callToActionButton?: string;
    branchName?: string;
    availableOnNetworks: [Network];
};

export type PromotionArticle = {
    coverImageUrl: string;
    headerHtml: string;
    ctaSection: {
        sectionHtml: string;
        ctaButtonLink: string;
        ctaButtonLabel: string;
        forceChangeNetworkOnClick?: string;
    };
    contentHtml: string;
};

export type PromotionItem = PromotionCardData & {
    article: PromotionArticle;
};

export enum PromotionStatus {
    ONGOING = 'ongoing',
    FINISHED = 'finished',
    COMING_SOON = 'coming-soon',
}

export type PromotionCardStatus = PromotionStatus;
