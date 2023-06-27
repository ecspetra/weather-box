import React from 'react';
import { useAppSelector } from "../../hooks/hooks";
import { forecastSelector } from "../../redux/CurrentForecastReducer";

import './assest/index.scss';

const CurrentForecast = () => {
	const selectedForecast = useAppSelector(forecastSelector);

	return (
		<div className="current-forecast">
			<h3 className="current-forecast__city">{selectedForecast.city.name}</h3>
			<p className="current-forecast__country">{selectedForecast.city.country}</p>
			<p className="current-forecast__country">{selectedForecast.city.sunrise}</p>
			<p className="current-forecast__country">{new Date(selectedForecast.city.sunset).toString()}</p>
			<div className="current-forecast__forecast">
				{selectedForecast.list.map((item, idx) => {
					return (
						<div key={idx} className="current-forecast__item">
							<span className="current-forecast__feels-like">{new Date(item.dt).toString()}</span>
							<span className="current-forecast__feels-like">{Math.round(item.main.feels_like)}&#8451;</span>
							<span className="current-forecast__humidity">{`${item.main.humidity}%`}</span>
							<span className="current-forecast__humidity">{`${Math.round(item.visibility / 1000)} km`}</span>
							<span className="current-forecast__pressure">{`${Math.round(item.main.pressure / 10)} kPa`}</span>
							<span className="current-forecast__temp">{item.main.temp.toFixed(0)}&#8451;</span>
							<span className="current-forecast__description">{item.weather[0].description}</span>
							<span className="current-forecast__wind-speed">{`${Math.round(item.wind.speed * 3.6)} km/h`}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CurrentForecast;