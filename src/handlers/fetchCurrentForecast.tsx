import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addForecast, clearForecast, setIsLoading} from "../redux/CurrentForecastReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {getUnsplashImage} from "./getUnsplashImage";
import {ICurrentCity, ICurrentForecastList} from "../types";

export const fetchCurrentForecast = async (city: ICurrentCity, dispatch: Dispatch<Action>) => {
	await dispatch(clearForecast());
	await dispatch(setIsLoading(true));

	return new Promise<object>(async (resolve) => {
		const linkToFetchCurrentForecast = `forecast?lat=${city.lat}&lon=${city.lon}`;
		const fetchedForecast = await fetchDataFromAPI(linkToFetchCurrentForecast);
		const latToFetch = fetchedForecast.city.coord.lat;
		const lonToFetch = fetchedForecast.city.coord.lon;
		const linkToFetchCurrentCityWeather = `weather?lat=${latToFetch}&lon=${lonToFetch}`;
		const linkToFetchCurrentAirQuality = `air_pollution?lat=${latToFetch}&lon=${lonToFetch}`;

		const unsplashImage = await getUnsplashImage(fetchedForecast.city.name, false);

		const fetchedCurrentCityWeather = await fetchDataFromAPI(linkToFetchCurrentCityWeather);
		const fetchedCurrentCityAirQuality = await fetchDataFromAPI(linkToFetchCurrentAirQuality);
		const newForecast = {
			city: {
				id: fetchedForecast.city.id,
				date: fetchedCurrentCityWeather.dt,
				name: fetchedForecast.city.name,
				country: fetchedForecast.city.country,
				weather: fetchedCurrentCityWeather.weather[0].description,
				sunrise: fetchedForecast.city.sunrise,
				sunset: fetchedForecast.city.sunset,
				temp: fetchedCurrentCityWeather.main.temp,
				cityImage: unsplashImage,
				icon: fetchedCurrentCityWeather.weather[0].icon,
				timezone: fetchedForecast.city.timezone,
				airQuality: fetchedCurrentCityAirQuality.list[0].main.aqi,
				info: {
					humidity: fetchedCurrentCityWeather.main.humidity,
					pressure: fetchedCurrentCityWeather.main.pressure,
					windSpeed: fetchedCurrentCityWeather.wind.speed,
				},
			},
			list: fetchedForecast.list.map((item: ICurrentForecastList) => {
				return {
					dt: item.dt,
					main: {
						humidity: item.main.humidity,
						pressure: item.main.pressure,
						temp: item.main.temp,
					},
					weather: [
						{
							id: item.weather[0].id,
							description: item.weather[0].description,
							icon: item.weather[0].icon,
						},
					],
					wind: {
						speed: item.wind.speed,
					}
				}
			})
		}

		dispatch(addForecast(newForecast));
		dispatch(setIsLoading(false));
		resolve(fetchedForecast);
	});
}