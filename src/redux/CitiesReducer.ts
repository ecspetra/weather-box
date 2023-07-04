import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import {ICity} from "../types";

const initialState: Array<ICity> = [];

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		addCity: (state, action: PayloadAction<ICity>) => {
			return [...state, action.payload];
		}
	}
});

export const { addCity } = citiesSlice.actions;
export const citiesSelector = (state: RootState) => state.cities;
export default citiesSlice.reducer;