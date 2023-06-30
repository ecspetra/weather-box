import React, { FC } from 'react';
import { ICity } from "../../../redux/CitiesReducer";

type WeatherItemPropTypes = {
	city: ICity;
}

const WeatherItem: FC<WeatherItemPropTypes> = ({ city }) => {
	return (
		<div className="weather-item">
			<h2 className="weather-item__city">{city.name}</h2>
			<p className="weather-item__temp">{city.main.temp}</p>
			<span className="weather-item__feels-like">{city.main.feels_like}</span>
			<span className="weather-item__country">{city.sys.country}</span>
			<span className="weather-item__description">{city.weather[0].description}</span>
			<span className="weather-item__wind-speed">{city.wind.speed}</span>
		</div>
	)
}

export default WeatherItem;