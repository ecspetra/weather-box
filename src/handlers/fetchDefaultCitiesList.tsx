import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addCity} from "../redux/CitiesReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {ICity} from "../types";
import { API_KEY } from "../apiConstants/apiConstants";

export const fetchDefaultCitiesList = async (
	src: string,
	dispatch: Dispatch<Action>
) => {
	try {
		const CITY_ID = 2643743; // Лондон

		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&units=metric&appid=${API_KEY}`
		);

		const item = await res.json();

		if (!res.ok || !item) {
			return null;
		}

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

		return item;
	} catch (e) {
		console.error(e);
		return null;
	}
};