import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import {ICurrentForecast} from "../types";

const initialState: ICurrentForecast = null;

export const currentForecastSlice = createSlice({
	name: 'currentForecast',
	initialState,
	reducers: {
		addForecast: (state, action: PayloadAction<ICurrentForecast>) => {
			return action.payload;
		},
		clearForecast: () => {
			return initialState;
		},
	}
});

export const { addForecast, clearForecast } = currentForecastSlice.actions;
export const forecastSelector = (state: RootState) => state.currentForecast;
export default currentForecastSlice.reducer;