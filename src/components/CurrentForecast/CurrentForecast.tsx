import React from 'react';
import { useAppSelector } from "../../hooks/hooks";
import { forecastSelector } from "../../redux/CurrentForecastReducer";

const CurrentForecast = () => {
	const selectedForecast = useAppSelector(forecastSelector);

	console.log(selectedForecast)

	return (
		<div className="current-forecast">
			{/*<h3>{city.name}</h3>*/}
			{/*<p>{city.main.temp}</p>*/}
			{/*<span>{city.main.feels_like}</span>*/}
			{/*<span>{city.sys.country}</span>*/}
			{/*<span>{city.sys.sunrise}</span>*/}
			{/*<span>{city.sys.sunset}</span>*/}
			{/*<span>{city.weather[0].description}</span>*/}
			{/*<span>{city.wind.deg}</span>*/}
			{/*<span>{city.wind.speed}</span>*/}
		</div>
	)
}

export default CurrentForecast;