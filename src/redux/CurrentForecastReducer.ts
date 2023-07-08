import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import {ICurrentForecast} from "../types";

const initialState: ICurrentForecast = null;

export const currentForecastSlice = createSlice({
	name: 'currentForecast',
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<ICurrentForecast['isLoading']>) => {
			return {
				...state,
				isLoading: action.payload,
			}
		},
		addForecast: (state, action: PayloadAction<ICurrentForecast>) => {
			return {
				...state,
				city: action.payload.city,
				list: action.payload.list,
			}
		},
		clearForecast: () => {
			return initialState;
		},
	}
});

export const { setIsLoading, addForecast, clearForecast } = currentForecastSlice.actions;
export const forecastSelector = (state: RootState) => state.currentForecast;
export default currentForecastSlice.reducer;