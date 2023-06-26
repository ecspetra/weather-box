import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface City {
	id: number;
	name: string;
	main: {
		feels_like: number,
		humidity: number,
		pressure: number,
		temp: number,
		temp_max: number,
		temp_min: number,
	};
	sys: {
		country: string,
		sunrise: number,
		sunset: number,
		timezone: number,
	};
	visibility: number;
	weather: [
		{
			id: number,
			main: string,
			description: string,
			icon: string,
		},
	];
	wind: {
		deg: number,
		speed: number,
	};
}

export interface Cities {
	list: Array<City>
}

const initialState: Array<City> = [];

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		addCity: (state, action: PayloadAction<City>) => {
			return [...state, action.payload];
		}
	}
});

export const { addCity } = citiesSlice.actions;
export const citiesSelector = (state: RootState) => state.cities;
export default citiesSlice.reducer;