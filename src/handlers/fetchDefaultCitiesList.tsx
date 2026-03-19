import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addCity} from "../redux/CitiesReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {ICity} from "../types";
import { API_KEY, DEFAULT_QUERY } from "../apiConstants/apiConstants";

export const fetchDefaultCitiesList = async (dispatch: Dispatch<Action>) => {
	try {
		const requests = DEFAULT_QUERY.split(",").map((id) =>
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${API_KEY}`
			).then((res) => {
				if (!res.ok) throw new Error(`City ${id} failed`);
				return res.json();
			})
		);

		const results = await Promise.all(requests);

		results.forEach((item) => {
			const newCity = {
				id: item.id,
				name: item.name,
				main: {
					humidity: item.main.humidity,
					pressure: item.main.pressure,
					temp: item.main.temp,
				},
				sys: {
					country: item.sys.country,
					sunrise: item.sys.sunrise,
					sunset: item.sys.sunset,
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
				},
			};

			dispatch(addCity(newCity));
		});

		return results;
	} catch (e) {
		console.error(e);
		return null;
	}
};