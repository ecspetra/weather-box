import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addCity, ICity} from "../redux/CitiesReducer";
import {Dispatch} from "react";
import {Action} from "redux";

export const fetchDefaultCitiesList = async (src: string, dispatch: Dispatch<Action>) => {
	return new Promise<object>(async (resolve) => {
		const fetchedData = await fetchDataFromAPI(src);

		fetchedData.list.map((item: ICity) => {
			const newCity = {
				id: item.id,
				name: item.name,
				main: {
					feels_like: item.main.feels_like,
					humidity: item.main.humidity,
					pressure: item.main.pressure,
					temp: item.main.temp,
				},
				sys: {
					country: item.sys.country,
					sunrise: item.sys.sunrise,
					sunset: item.sys.sunset,
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
				},
			}

			dispatch(addCity(newCity));
		});

		resolve(fetchedData);
	});
}