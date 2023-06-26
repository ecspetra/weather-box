import { configureStore } from "@reduxjs/toolkit";
import CitiesReducer from "./CitiesReducer";
import CurrentForecastReducer from "./CurrentForecastReducer";

export const store = configureStore({
	reducer: {
		cities: CitiesReducer,
		currentForecast: CurrentForecastReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
