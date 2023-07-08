import {Dispatch, SetStateAction} from 'react';
import moment from "moment";
import {ICurrentFiveDaysForecastItem, ICurrentForecast, ICurrentForecastList} from "../types";

export const getForecastItems = (selectedForecast: ICurrentForecast, cityTimezone: number, setForecastItems: Dispatch<SetStateAction<Array<ICurrentFiveDaysForecastItem>>>) => {
	const days: Array<ICurrentForecastList> = [];
	const nights: Array<ICurrentForecastList> = [];
	selectedForecast.list.map((item: ICurrentForecastList) => {
		const searchedTime = moment(item.dt * 1000).utcOffset(cityTimezone).format("HH:MM:SS");
		const expectedDayTime = searchedTime >= '13:00:00' && searchedTime <= '16:00:00';
		const expectedNightTime = searchedTime >= '01:00:00' && searchedTime <= '04:00:00 am';

		if (expectedDayTime) {
			days.push(item);
		} else if (expectedNightTime) {
			nights.push(item);
		}
	});

	const sortedDays = days.sort((a, b) => a.dt > b.dt ? 1 : -1);
	const sortedNights = nights.sort((a, b) => a.dt > b.dt ? 1 : -1);

	const generateForecastItem = (day: ICurrentForecastList, night: ICurrentForecastList) => {
		const generatedForecastItem = {
			date: day.dt,
			day: {
				description: day.weather[0].description,
				temp: day.main.temp,
				icon: day.weather[0].icon,
				info: {
					humidity: day.main.humidity,
					pressure: day.main.pressure,
					windSpeed: day.wind.speed,
				},
			},
			night: {
				description: night.weather[0].description,
				temp: night.main.temp,
				icon: night.weather[0].icon,
				info: {
					humidity: night.main.humidity,
					pressure: night.main.pressure,
					windSpeed: night.wind.speed,
				},
			}
		}

		return generatedForecastItem;
	}

	sortedDays.map((day, idx: number) => {
		const generatedForecastData = generateForecastItem(day, sortedNights[idx]);
		setForecastItems(prevState => [...prevState, generatedForecastData]);
	});
};