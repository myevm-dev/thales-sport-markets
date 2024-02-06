import { NAV_MENU } from 'constants/ui';
import { NavMenuItem, PromotionCardStatus, PromotionStatus } from 'types/ui';

export const getOrdinalNumberLabel = (num: number): string => {
    switch (num) {
        case 1:
            return '1st';
        case 2:
            return '2nd';
        case 3:
            return '3rd';
        default:
            return num + 'th';
    }
};

export const getNavItemFromRoute = (route: string): NavMenuItem | null => {
    const navItem = NAV_MENU.find((item) => item.route == route);
    if (navItem) return navItem;
    return null;
};

export const getPromotionStatus = (startDate: number, endDate: number): PromotionCardStatus => {
    if (endDate > Date.now() / 1000 && Date.now() / 1000 > startDate) return PromotionStatus.ONGOING;
    return PromotionStatus.FINISHED;
};
