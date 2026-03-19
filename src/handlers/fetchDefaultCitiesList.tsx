import {fetchDataFromAPI} from "./fetchDataFromAPI";
import {addCity} from "../redux/CitiesReducer";
import {Dispatch} from "react";
import {Action} from "redux";
import {ICity} from "../types";

export const fetchDefaultCitiesList = async (
	src: string,
	dispatch: Dispatch<Action>
) => {
	console.log("src:",src);
	return new Promise<object | null>(async (resolve) => {
		try {
			const fetchedData = await fetchDataFromAPI(src);

			if (!fetchedData?.list) {
				resolve(null);
				return;
			}

			fetchedData.list.forEach((item: ICity) => {
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

			resolve(fetchedData);
		} catch (e) {
			console.error(e);
			resolve(null);
		}
	});
};