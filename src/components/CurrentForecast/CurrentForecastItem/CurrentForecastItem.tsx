import React, { FC } from 'react';
import moment from 'moment';

import './assest/index.scss';

export interface ICurrentForecastItem {
	date: number;
	description: string,
	feelsLike: number;
	humidity: number;
	visibility: number;
	pressure: number;
	temp: number;
	windSpeed: number;
}

type CurrentForecastItemPropTypes = {
	forecastItem: ICurrentForecastItem;
}

const CurrentForecastItem: FC<CurrentForecastItemPropTypes> = ({ forecastItem }) => {

	return (
		<div  className="current-forecast-item">
			<span className="current-forecast-item__date"><span className="current-forecast-item__text">Date</span>{moment(new Date(forecastItem.date * 1000)).format("MMM Do")}</span>
			<span className="current-forecast-item__description">{forecastItem.description}</span>
			<span className="current-forecast-item__feels-like"><span className="current-forecast-item__text">Feels like</span>{Math.round(forecastItem.feelsLike)}&#8451;</span>
			<span className="current-forecast-item__humidity"><span className="current-forecast-item__text">Humidity</span>{`${forecastItem.humidity}%`}</span>
			<span className="current-forecast-item__visibility"><span className="current-forecast-item__text">Visibility</span>{`${Math.round(forecastItem.visibility / 1000)} km`}</span>
			<span className="current-forecast-item__pressure"><span className="current-forecast-item__text">Pressure</span>{`${Math.round(forecastItem.pressure / 10)} kPa`}</span>
			<span className="current-forecast-item__forecast-temp"><span className="current-forecast-item__text">Temperature</span>{forecastItem.temp.toFixed(0)}&#8451;</span>
			<span className="current-forecast-item__wind-speed"><span className="current-forecast-item__text">Wind speed</span>{`${Math.round(forecastItem.windSpeed * 3.6)} km/h`}</span>
		</div>
	)
}

export default CurrentForecastItem;