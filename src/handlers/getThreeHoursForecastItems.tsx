import {ICurrentForecast, ICurrentForecastList, ICurrentThreeHoursForecastItem} from "../types";
import {Dispatch, SetStateAction} from "react";
import moment from "moment";
import {getForecastIcon} from "./getForecastIcon";

export const getThreeHoursForecastItems = (selectedForecast: ICurrentForecast, cityTimezone: number, setThreeHoursForecastItems: Dispatch<SetStateAction<Array<ICurrentThreeHoursForecastItem>>>) => {
	selectedForecast.list.map((item: ICurrentForecastList) => {
		const searchedDay = moment(item.dt * 1000).utcOffset(cityTimezone).format("YYYY MM DD") === moment(new Date()).utcOffset(cityTimezone).format("YYYY MM DD");

		const forecastItem = {
			date: item.dt,
			icon: getForecastIcon(item.weather[0].icon),
			temp: item.main.temp,
		}

		if (searchedDay) {
			setThreeHoursForecastItems(prevState => [...prevState, forecastItem]);
		}
	});

}