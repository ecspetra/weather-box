import React from 'react';
import WeatherItem from "./WeatherItem/WeatherItem";
import { citiesSelector } from "../../redux/CitiesReducer";
import { useAppSelector } from "../../hooks/hooks";
import {ICity} from "../../types";

import './assets/index.scss';

const WeatherList = () => {
	const selectedCities = useAppSelector(citiesSelector);

	return (
		<div className="weather-list container">
			{selectedCities.map((item: ICity, idx) => {
				return (
					<WeatherItem key={idx} city={item} />
				)
			})}
		</div>
	)
}

export default WeatherList;