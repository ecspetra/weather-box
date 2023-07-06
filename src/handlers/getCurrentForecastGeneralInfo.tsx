import {ICurrentForecast} from "../types";

export const getCurrentForecastGeneralInfo = (selectedForecast: ICurrentForecast) => {
	const currentForecastGeneralInfo = {
		description: selectedForecast.city.weather,
		temp: selectedForecast.city.temp,
		icon: selectedForecast.city.icon,
		info: {
			humidity: selectedForecast.city.info.humidity,
			pressure: selectedForecast.city.info.pressure,
			windSpeed: selectedForecast.city.info.windSpeed,
		},
	}

	return currentForecastGeneralInfo;
}