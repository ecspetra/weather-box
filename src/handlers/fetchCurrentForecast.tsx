import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addForecast, clearForecast} from "../redux/CurrentForecastReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {getUnsplashImage} from "./getUnsplashImage";
import {ICurrentCity, ICurrentForecastList} from "../types";

export const fetchCurrentForecast = async (city: ICurrentCity, dispatch: Dispatch<Action>) => {
	await dispatch(clearForecast());

	return new Promise<object>(async (resolve) => {
		const linkToFetchCurrentForecast = `forecast?lat=${city.lat}&lon=${city.lon}`;
		const fetchedForecast = await fetchDataFromAPI(linkToFetchCurrentForecast);
		const latToFetchWeather = fetchedForecast.city.coord.lat;
		const lonToFetchWeather = fetchedForecast.city.coord.lon;
		const linkToFetchCurrentCityWeather = `weather?lat=${latToFetchWeather}&lon=${lonToFetchWeather}`;

		const unsplashImage = await getUnsplashImage(fetchedForecast.city.name);

		const fetchedCurrentCityWeather = await fetchDataFromAPI(linkToFetchCurrentCityWeather);

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
			},
			list: fetchedForecast.list.map((item: ICurrentForecastList) => {
				return {
					dt: item.dt,
					main: {
						humidity: item.main.humidity,
						pressure: item.main.pressure,
						temp: item.main.temp,
					},
					visibility: item.visibility,
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
		resolve(fetchedForecast);
	});
}