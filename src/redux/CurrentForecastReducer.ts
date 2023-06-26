import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface CurrentForecast {
	city: {
		id: number;
		name: string;
		country: string;
	};
	list: [
		{
			dt: number,
			main: {
				feels_like: number,
				humidity: number,
				pressure: number,
				temp: number,
				temp_max: number,
				temp_min: number,
			},
			visibility: number,
			weather: [
				{
					id: number,
					main: string,
					description: string,
					icon: string,
				},
			],
			wind: {
				deg: number,
				speed: number,
			},
		}
	]
}

const initialState: CurrentForecast = null;

export const currentForecastSlice = createSlice({
	name: 'currentForecast',
	initialState,
	reducers: {
		addForecast: (state, action: PayloadAction<CurrentForecast>) => {
			return action.payload;
			// console.log(action.payload)
			// state.city = action.payload.city;
			// state.list = action.payload.list;
		}
	}
});

export const { addForecast } = currentForecastSlice.actions;
export const forecastSelector = (state: RootState) => state.currentForecast;
export default currentForecastSlice.reducer;