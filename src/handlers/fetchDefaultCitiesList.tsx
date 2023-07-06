import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addCity} from "../redux/CitiesReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {ICity} from "../types";

export const fetchDefaultCitiesList = async (src: string, dispatch: Dispatch<Action>) => {
	return new Promise<object>(async (resolve) => {
		const fetchedData = await fetchDataFromAPI(src);

		fetchedData.list.map((item: ICity) => {
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
			}

			dispatch(addCity(newCity));
		});

		resolve(fetchedData);
	});
}