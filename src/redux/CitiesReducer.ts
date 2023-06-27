import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface ICity {
	id: number;
	name: string;
	main: {
		feels_like: number,
		humidity: number,
		pressure: number,
		temp: number,
	};
	sys: {
		country: string,
		sunrise: number,
		sunset: number,
	};
	visibility: number;
	weather: {
		id: number,
		description: string,
	} [];
	wind: {
		speed: number,
	};
}

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