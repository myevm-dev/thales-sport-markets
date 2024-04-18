import Button from 'components/Button';
import Logo from 'components/Logo';
import NavMenu from 'components/NavMenu';
import NavMenuMobile from 'components/NavMenuMobile';
import NetworkSwitcher from 'components/NetworkSwitcher';
import SPAAnchor from 'components/SPAAnchor';
import Search from 'components/Search';
import WalletInfo from 'components/WalletInfo';
import ROUTES from 'constants/routes';
import useInterval from 'hooks/useInterval';
import useClaimablePositionCountV2Query from 'queries/markets/useClaimablePositionCountV2Query';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getIsMobile } from 'redux/modules/app';
import { getMarketSearch, setMarketSearch } from 'redux/modules/market';
import { getStopPulsing, setStopPulsing } from 'redux/modules/ui';
import {
    getIsWalletConnected,
    getNetworkId,
    getWalletAddress,
    setWalletConnectModalVisibility,
} from 'redux/modules/wallet';
import { RootState } from 'redux/rootReducer';
import { useTheme } from 'styled-components';
import { FlexDivCentered } from 'styles/common';
import { ThemeInterface } from 'types/ui';
import { buildHref } from 'utils/routes';
import ProfileItem from './components/ProfileItem';
import TimeFilters from './components/TimeFilters';
import TopUp from './components/TopUp';
import {
    Container,
    Count,
    HeaderIcon,
    HeaderLabel,
    IconWrapper,
    LeftContainer,
    LogoContainer,
    MenuIcon,
    MenuIconContainer,
    MiddleContainer,
    MobileButtonWrapper,
    NotificationCount,
    ReferAndEarn,
    RightContainer,
    SearchContainer,
    SearchIcon,
    SearchIconContainer,
    WrapperMobile,
} from './styled-components';

const PULSING_COUNT = 10;

const customModalStyles = {
    content: {
        top: '85px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        background: 'transparent',
        border: 'none',
        width: '100%',
        height: '40px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '5',
    },
};

const DappHeader: React.FC = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const location = useLocation();
    const theme: ThemeInterface = useTheme();

    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const walletAddress = useSelector((state: RootState) => getWalletAddress(state)) || '';

    const isWalletConnected = useSelector((state: RootState) => getIsWalletConnected(state));
    const stopPulsing = useSelector((state: RootState) => getStopPulsing(state));
    const isMobile = useSelector((state: RootState) => getIsMobile(state));

    const [currentPulsingCount, setCurrentPulsingCount] = useState<number>(0);
    const [navMenuVisibility, setNavMenuVisibility] = useState<boolean | null>(null);
    const [showSearcHModal, setShowSearchModal] = useState<boolean>(false);

    const marketSearch = useSelector((state: RootState) => getMarketSearch(state));

    const isMarketsPage = location.pathname.includes('/markets') && !location.pathname.includes('/markets/');

    const claimablePositionsCountQuery = useClaimablePositionCountV2Query(walletAddress, networkId, {
        enabled: isWalletConnected,
    });

    const claimablePositionCount =
        claimablePositionsCountQuery.isSuccess && claimablePositionsCountQuery.data
            ? claimablePositionsCountQuery.data
            : null;

    useInterval(async () => {
        if (!stopPulsing) {
            setCurrentPulsingCount(currentPulsingCount + 1);
            if (currentPulsingCount >= PULSING_COUNT) {
                dispatch(setStopPulsing(true));
            }
        }
    }, 1000);

    const menuImageRef = useRef<HTMLImageElement>(null);

    const getGetStartedButton = () => (
        <SPAAnchor style={{ width: '100%', marginTop: '10px' }} href={buildHref(ROUTES.Wizard)}>
            <Button
                backgroundColor={theme.background.primary}
                textColor={theme.button.textColor.quaternary}
                borderColor={theme.button.borderColor.secondary}
                width="100%"
                fontWeight="400"
                additionalStyles={{
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '14px',
                    textTransform: 'capitalize',
                }}
                height="28px"
            >
                {t('get-started.get-started')}
            </Button>
        </SPAAnchor>
    );

    return (
        <>
            {!isMobile && (
                <Container>
                    <LeftContainer>
                        <Logo />
                    </LeftContainer>
                    <MiddleContainer>
                        <SPAAnchor href={buildHref(ROUTES.Referral)}>
                            <ReferAndEarn>{t('common.referral.header-label')}</ReferAndEarn>
                        </SPAAnchor>
                        {isWalletConnected && isMarketsPage && (
                            <SPAAnchor href={buildHref(ROUTES.Wizard)}>
                                <HeaderIcon className="icon icon--profile" />
                                <HeaderLabel>{t('get-started.start-tour')}</HeaderLabel>
                            </SPAAnchor>
                        )}
                        <TimeFilters />
                        {isWalletConnected && <ProfileItem />}
                        <SPAAnchor href={buildHref(ROUTES.Wizard)}>
                            <HeaderIcon className="icon icon--profile" />
                            <HeaderLabel>{t('common.settings')}</HeaderLabel>
                        </SPAAnchor>
                    </MiddleContainer>
                    <RightContainer>
                        {!isWalletConnected && (
                            <Button
                                backgroundColor={'transparent'}
                                textColor={theme.button.borderColor.quaternary}
                                borderColor={theme.button.borderColor.quaternary}
                                width="150px"
                                fontWeight="400"
                                additionalStyles={{
                                    borderRadius: '15.5px',
                                    fontWeight: '800',
                                    fontSize: '14px',
                                    marginRight: '10px',
                                }}
                                height="28px"
                                onClick={() =>
                                    dispatch(
                                        setWalletConnectModalVisibility({
                                            visibility: true,
                                        })
                                    )
                                }
                            >
                                {t('get-started.log-in')}
                            </Button>
                        )}
                        {!isWalletConnected && (
                            <Button
                                backgroundColor={theme.button.background.tertiary}
                                textColor={theme.button.textColor.primary}
                                borderColor={theme.button.borderColor.quinary}
                                fontWeight="400"
                                additionalStyles={{
                                    borderRadius: '15.5px',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    marginRight: '5px',
                                    padding: '3px 20px',
                                }}
                                width="150px"
                                height="28px"
                                onClick={() =>
                                    dispatch(
                                        setWalletConnectModalVisibility({
                                            visibility: true,
                                            origin: 'sign-up',
                                        })
                                    )
                                }
                            >
                                {t('get-started.sign-up')}
                            </Button>
                        )}
                        <TopUp />
                        <WalletInfo />
                        <MenuIcon ref={menuImageRef} onClick={() => setNavMenuVisibility(true)} />
                        <NavMenu
                            visibility={navMenuVisibility}
                            setNavMenuVisibility={(value: boolean | null) => setNavMenuVisibility(value)}
                            skipOutsideClickOnElement={menuImageRef}
                        />
                    </RightContainer>
                </Container>
            )}
            {isMobile && (
                <>
                    <WrapperMobile>
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
                        <SearchIconContainer>
                            <IconWrapper>
                                <SearchIcon onClick={() => setShowSearchModal(true)} />
                            </IconWrapper>
                            <ReactModal
                                isOpen={showSearcHModal}
                                onRequestClose={() => {
                                    setShowSearchModal(false);
                                }}
                                shouldCloseOnOverlayClick={true}
                                style={customModalStyles}
                            >
                                <SearchContainer>
                                    <Search
                                        text={marketSearch}
                                        handleChange={(value) => {
                                            dispatch(setMarketSearch(value));
                                        }}
                                        isModal
                                    />
                                </SearchContainer>
                            </ReactModal>
                        </SearchIconContainer>
                        <MenuIconContainer>
                            <MenuIcon onClick={() => setNavMenuVisibility(true)} />
                            {claimablePositionCount && (
                                <NotificationCount>
                                    <Count>{claimablePositionCount}</Count>
                                </NotificationCount>
                            )}
                            <NavMenuMobile
                                visibility={navMenuVisibility}
                                setNavMenuVisibility={(value: boolean | null) => setNavMenuVisibility(value)}
                            />
                        </MenuIconContainer>
                    </WrapperMobile>

                    {isWalletConnected && (
                        <FlexDivCentered>
                            <WalletInfo />
                        </FlexDivCentered>
                    )}

                    {!isWalletConnected ? (
                        <MobileButtonWrapper>
                            <Button
                                backgroundColor={'transparent'}
                                textColor={theme.button.textColor.quaternary}
                                borderColor={theme.button.borderColor.secondary}
                                width="100%"
                                fontWeight="400"
                                additionalStyles={{
                                    maxWidth: 400,
                                    borderRadius: '15.5px',
                                    fontWeight: '800',
                                    fontSize: '14px',
                                    textTransform: 'capitalize',
                                }}
                                height="28px"
                                onClick={() =>
                                    dispatch(
                                        setWalletConnectModalVisibility({
                                            visibility: true,
                                        })
                                    )
                                }
                            >
                                {t('get-started.log-in')}
                            </Button>

                            <Button
                                backgroundColor={theme.button.background.quaternary}
                                textColor={theme.button.textColor.primary}
                                borderColor={theme.button.borderColor.secondary}
                                fontWeight="400"
                                additionalStyles={{
                                    maxWidth: 400,
                                    borderRadius: '15.5px',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    textTransform: 'capitalize',
                                }}
                                width="100%"
                                height="28px"
                                onClick={() =>
                                    dispatch(
                                        setWalletConnectModalVisibility({
                                            visibility: true,
                                        })
                                    )
                                }
                            >
                                {t('get-started.sign-up')}
                            </Button>
                            {location.pathname !== ROUTES.Wizard && getGetStartedButton()}
                            <NetworkSwitcher />
                        </MobileButtonWrapper>
                    ) : (
                        <MobileButtonWrapper>
                            {location.pathname !== ROUTES.Wizard && getGetStartedButton()}
                            <TopUp />
                        </MobileButtonWrapper>
                    )}
                </>
            )}
        </>
    );
};

export default DappHeader;
