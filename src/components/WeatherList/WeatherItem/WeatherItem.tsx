import React, { FC } from 'react';
import { City } from "../../../redux/CitiesReducer";

type WeatherItemPropTypes = {
	city: City;
}

const WeatherItem: FC<WeatherItemPropTypes> = ({ city }) => {
	return (
		<div className="weather-item">
			<h3>{city.name}</h3>
			<p>{city.main.temp}</p>
			<span>{city.main.feels_like}</span>
			<span>{city.sys.country}</span>
			<span>{city.sys.sunrise}</span>
			<span>{city.sys.sunset}</span>
			<span>{city.weather[0].description}</span>
			<span>{city.wind.deg}</span>
			<span>{city.wind.speed}</span>
		</div>
	)
}

export default WeatherItem;