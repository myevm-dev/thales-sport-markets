import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from 'constants/storage';
import { ThemeMap } from 'constants/ui';
import { OddsType } from 'enums/markets';
import { Theme } from 'enums/ui';
import { uniqBy } from 'lodash';
import { localStore } from 'thales-utils';
import { TagInfo, Tags } from 'types/markets';
import { OverdropUIState } from 'types/overdrop';
import { LeagueMap } from '../../constants/sports';
import { League } from '../../enums/sports';
import { RootState } from '../rootReducer';

const sliceName = 'ui';

const getDefaultOddsType = (): OddsType => {
    const oddsType = localStore.get(LOCAL_STORAGE_KEYS.ODDS_TYPE);
    return (oddsType !== undefined ? oddsType : OddsType.DECIMAL) as OddsType;
};

export const getDefaultTheme = (): Theme => {
    const lsTheme = localStore.get(LOCAL_STORAGE_KEYS.UI_THEME);
    return (lsTheme !== undefined && ThemeMap[lsTheme as Theme] !== undefined ? lsTheme : Theme.DARK) as Theme;
};

const getDefaultStopPulsing = (): boolean => {
    const lsStopPulsing = localStore.get(LOCAL_STORAGE_KEYS.STOP_PULSING);
    return (lsStopPulsing !== undefined ? lsStopPulsing : false) as boolean;
};

const getDefaultFavouriteLeagues = (): Tags => {
    const lsFavouriteLeagues = localStore.get(LOCAL_STORAGE_KEYS.FAVOURITE_LEAGUES);
    return (lsFavouriteLeagues !== undefined ? uniqBy(lsFavouriteLeagues as Tags, 'id') : []) as Tags;
};

const getDefaultOverdropState = (): OverdropUIState[] => {
    const lsOverdropState = localStore.get(LOCAL_STORAGE_KEYS.OVERDROP_STATE);

    return lsOverdropState ? (lsOverdropState as OverdropUIState[]) : [];
};

type UISliceState = {
    theme: Theme;
    oddsType: OddsType;
    stopPulsing: boolean;
    favouriteLeagues: Tags;
    overdropState: OverdropUIState[];
};

const initialState: UISliceState = {
    theme: getDefaultTheme(),
    oddsType: getDefaultOddsType(),
    stopPulsing: getDefaultStopPulsing(),
    favouriteLeagues: getDefaultFavouriteLeagues(),
    overdropState: getDefaultOverdropState(),
};

const uiSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<number>) => {
            state.theme = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.UI_THEME, action.payload);
        },
        setOddsType: (state, action: PayloadAction<OddsType>) => {
            state.oddsType = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.ODDS_TYPE, action.payload);
        },
        setStopPulsing: (state, action: PayloadAction<boolean>) => {
            state.stopPulsing = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.STOP_PULSING, action.payload);
        },
        setFavouriteLeague: (state, action: PayloadAction<League>) => {
            const leagueInfo = LeagueMap[action.payload];
            const existingFavouriteIndex = state.favouriteLeagues.findIndex(
                (league: TagInfo) => league.id === action.payload
            );
            if (existingFavouriteIndex > -1) {
                state.favouriteLeagues = state.favouriteLeagues.filter(
                    (league: TagInfo) => league.id !== action.payload
                );
            } else {
                if (leagueInfo) {
                    state.favouriteLeagues.push({
                        id: leagueInfo.id,
                        label: leagueInfo.label,
                    });
                }
            }
            localStore.set(LOCAL_STORAGE_KEYS.FAVOURITE_LEAGUES, state.favouriteLeagues);
        },
        setOverdropState: (state, action: PayloadAction<OverdropUIState>) => {
            const overdropStateItemIndex = state.overdropState.findIndex(
                (item) => item.walletAddress == action.payload.walletAddress
            );

            if (overdropStateItemIndex !== -1) {
                state.overdropState[overdropStateItemIndex] = { ...action.payload };
                localStore.set(LOCAL_STORAGE_KEYS.OVERDROP_STATE, state.overdropState);
            }
        },
        setDefaultOverdropState: (state, action: PayloadAction<{ walletAddress: string }>) => {
            const existingOverdropStateItemIndex = state.overdropState.findIndex(
                (item) => item.walletAddress == action.payload.walletAddress
            );

            if (existingOverdropStateItemIndex == -1) {
                state.overdropState.push({
                    walletAddress: action.payload.walletAddress,
                    dailyMultiplier: 0,
                    currentLevel: 0,
                    welcomeModalFlag: false,
                    preventShowingDailyModal: false,
                });
                localStore.set(LOCAL_STORAGE_KEYS.OVERDROP_STATE, state.overdropState);
            }
        },
    },
});

export const {
    setTheme,
    setOddsType,
    setStopPulsing,
    setFavouriteLeague,
    setOverdropState,
    setDefaultOverdropState,
} = uiSlice.actions;

const getUIState = (state: RootState) => state[sliceName];
export const getTheme = (state: RootState) => getUIState(state).theme;
export const getOddsType = (state: RootState) => getUIState(state).oddsType;
export const getStopPulsing = (state: RootState) => getUIState(state).stopPulsing;
export const getFavouriteLeagues = (state: RootState) => getUIState(state).favouriteLeagues;
export const getOverdropUIState = (state: RootState) => getUIState(state).overdropState;

export default uiSlice.reducer;
