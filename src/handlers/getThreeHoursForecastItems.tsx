import {ICurrentForecast, ICurrentForecastList, ICurrentThreeHoursForecastItem} from "../types";
import {Dispatch, SetStateAction} from "react";
import moment from "moment";
import {getForecastIcon} from "./getForecastIcon";

export const getThreeHoursForecastItems = (selectedForecast: ICurrentForecast, cityTimezone: number, setThreeHoursForecastItems: Dispatch<SetStateAction<Array<ICurrentThreeHoursForecastItem>>>) => {
	const isForecastForTodayExists = selectedForecast.list.find(timeItem => moment(timeItem.dt * 1000).utcOffset(cityTimezone).format("YYYY MM DD") === moment(new Date()).utcOffset(cityTimezone).format("YYYY MM DD"));

	selectedForecast.list.map((item: ICurrentForecastList) => {
		const searchedForecastForToday = moment(item.dt * 1000).utcOffset(cityTimezone).format("YYYY MM DD") === moment(new Date()).utcOffset(cityTimezone).format("YYYY MM DD");
		const searchedForecastForNextDay = moment(item.dt * 1000).utcOffset(cityTimezone).format("YYYY MM DD") === moment(new Date().setDate(new Date().getDate()+1)).utcOffset(cityTimezone).format("YYYY MM DD");

		const forecastItem = {
			date: item.dt,
			icon: getForecastIcon(item.weather[0].icon),
			temp: item.main.temp,
		}

		if (isForecastForTodayExists) {
			if (searchedForecastForToday) setThreeHoursForecastItems(prevState => [...prevState, forecastItem]);
		} else {
			if (searchedForecastForNextDay) setThreeHoursForecastItems(prevState => [...prevState, forecastItem]);
		}
	});

}