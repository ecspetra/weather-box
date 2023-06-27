import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface ICurrentForecastCity {
	id: number;
	name: string;
	country: string;
	sunrise: number;
	sunset: number;
}

export interface ICurrentForecastList {
	dt: number;
	main: {
		feels_like: number,
		humidity: number,
		pressure: number,
		temp: number,
	},
	visibility: number;
	weather: {
		id: number,
		description: string,
	} [];
	wind: {
		speed: number,
	};
}

export interface ICurrentForecast {
	city: ICurrentForecastCity;
	list: Array<ICurrentForecastList>;
}

const initialState: ICurrentForecast = null;

export const currentForecastSlice = createSlice({
	name: 'currentForecast',
	initialState,
	reducers: {
		addForecast: (state, action: PayloadAction<ICurrentForecast>) => {
			return action.payload;
		}
	}
});

export const { addForecast } = currentForecastSlice.actions;
export const forecastSelector = (state: RootState) => state.currentForecast;
export default currentForecastSlice.reducer;