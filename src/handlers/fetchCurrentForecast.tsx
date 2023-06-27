import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addForecast, ICurrentForecastList} from "../redux/CurrentForecastReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {ICurrentCity} from "../components/CurrentCitySearch/CurrentCitySearchResults/CurrentCitySearchResults";

export const fetchCurrentForecast = async (city: ICurrentCity, dispatch: Dispatch<Action>) => {
	return new Promise<object>(async (resolve) => {
		const linkToFetchCurrentForecast = `forecast?lat=${city.lat}&lon=${city.lon}`;

		const fetchedForecast = await fetchDataFromAPI(linkToFetchCurrentForecast);

		const latToFetchWeather = fetchedForecast.city.coord.lat;
		const lonToFetchWeather = fetchedForecast.city.coord.lon;
		const linkToFetchCurrentCityWeather = `weather?lat=${latToFetchWeather}&lon=${lonToFetchWeather}`;

		const fetchedCurrentCityWeather = await fetchDataFromAPI(linkToFetchCurrentCityWeather);

		const newForecast = {
			city: {
				id: fetchedForecast.city.id,
				name: fetchedForecast.city.name,
				country: fetchedForecast.city.country,
				sunrise: fetchedForecast.city.sunrise,
				sunset: fetchedForecast.city.sunset,
				temp: fetchedCurrentCityWeather.main.temp,
			},
			list: fetchedForecast.list.map((item: ICurrentForecastList) => {
				return {
					dt: item.dt,
					main: {
						feels_like: item.main.feels_like,
						humidity: item.main.humidity,
						pressure: item.main.pressure,
						temp: item.main.temp,
					},
					visibility: item.visibility,
					weather: [
						{
							id: item.weather[0].id,
							description: item.weather[0].description,
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