import React from 'react';
import WeatherItem from "./WeatherItem/WeatherItem";
import { citiesSelector } from "../../redux/CitiesReducer";
import { useAppSelector } from "../../hooks/hooks";
import {ICity} from "../../types";

const WeatherList = () => {
	const selectedCities = useAppSelector(citiesSelector);

	return (
		<div className="weather-list">
			{selectedCities.map((item: ICity, idx) => {
				return (
					<WeatherItem key={idx} city={item} />
				)
			})}
		</div>
	)
}

export default WeatherList;