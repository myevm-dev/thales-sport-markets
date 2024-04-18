import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from 'constants/storage';
import { GlobalFiltersEnum, SportFilterEnum } from 'enums/markets';
import { localStore } from 'thales-utils';
import { RootState } from '../rootReducer';

const sliceName = 'market';

const getDefaultMarketSearch = (): string => {
    const lsMarketSearch = localStore.get(LOCAL_STORAGE_KEYS.FILTER_MARKET_SEARCH);
    return lsMarketSearch !== undefined ? (lsMarketSearch as string) : '';
};

const getDefaultDateFilter = (): Date | number => {
    const lsDateFilter = localStore.get(LOCAL_STORAGE_KEYS.FILTER_DATE);
    const dateNumber = Number(lsDateFilter);
    return lsDateFilter !== undefined ? (isNaN(dateNumber) ? new Date(lsDateFilter as string) : dateNumber) : 0;
};

const getDefaultGlobalFilter = (): GlobalFiltersEnum => {
    const lsGlobalFilter = localStore.get(LOCAL_STORAGE_KEYS.FILTER_GLOBAL);
    return lsGlobalFilter !== undefined ? (lsGlobalFilter as GlobalFiltersEnum) : GlobalFiltersEnum.OpenMarkets;
};

const getDefaultSportFilter = (): SportFilterEnum => {
    const lsSportFilter = localStore.get(LOCAL_STORAGE_KEYS.FILTER_SPORT);
    return lsSportFilter !== undefined ? (lsSportFilter as SportFilterEnum) : SportFilterEnum.All;
};

type MarketSliceState = {
    marketSearch: string;
    dateFilter: Date | number;
    globalFilter: GlobalFiltersEnum;
    sportFilter: SportFilterEnum;
    selectedMarket: string;
    isThreeWayView: boolean;
};

const initialState: MarketSliceState = {
    marketSearch: getDefaultMarketSearch(),
    dateFilter: getDefaultDateFilter(),
    globalFilter: getDefaultGlobalFilter(),
    sportFilter: getDefaultSportFilter(),
    selectedMarket: '',
    isThreeWayView: false,
};

const marketSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        setMarketSearch: (state, action: PayloadAction<string>) => {
            state.marketSearch = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.FILTER_MARKET_SEARCH, action.payload);
        },
        setDateFilter: (state, action: PayloadAction<Date | number>) => {
            state.dateFilter = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.FILTER_DATE, action.payload);
        },
        setGlobalFilter: (state, action: PayloadAction<GlobalFiltersEnum>) => {
            state.globalFilter = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.FILTER_GLOBAL, action.payload);
        },
        setSportFilter: (state, action: PayloadAction<SportFilterEnum>) => {
            state.sportFilter = action.payload;
            localStore.set(LOCAL_STORAGE_KEYS.FILTER_SPORT, action.payload);
        },
        setSelectedMarket: (state, action: PayloadAction<string>) => {
            state.selectedMarket = action.payload;
        },
        setIsThreeWayView: (state, action: PayloadAction<boolean>) => {
            state.isThreeWayView = action.payload;
        },
    },
});

export const {
    setMarketSearch,
    setDateFilter,
    setGlobalFilter,
    setSportFilter,
    setSelectedMarket,
    setIsThreeWayView,
} = marketSlice.actions;

const getMarketState = (state: RootState) => state[sliceName];
export const getMarketSearch = (state: RootState) => getMarketState(state).marketSearch;
export const getDateFilter = (state: RootState) => getMarketState(state).dateFilter;
export const getGlobalFilter = (state: RootState) => getMarketState(state).globalFilter;
export const getSportFilter = (state: RootState) => getMarketState(state).sportFilter;
export const getSelectedMarket = (state: RootState) => getMarketState(state).selectedMarket;
export const getIsMarketSelected = (state: RootState) => getMarketState(state).selectedMarket !== '';
export const getIsThreeWayView = (state: RootState) => getMarketState(state).isThreeWayView;

export default marketSlice.reducer;
