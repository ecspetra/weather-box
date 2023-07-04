import React, { FC } from 'react';
import moment from 'moment';

import {ICurrentFiveDaysForecastItem} from "../../../types";
import './assest/index.scss';

type CurrentForecastItemPropTypes = {
	forecastItem: ICurrentFiveDaysForecastItem;
}

const CurrentFiveDaysForecastItem: FC<CurrentForecastItemPropTypes> = ({ forecastItem }) => {
	return (
		<div className="current-five-days-forecast-item">
			<span className="current-five-days-forecast-item__date">{moment(forecastItem.date * 1000).format("MMM Do")}</span>
			{forecastItem.day && (
				<div className="current-five-days-forecast-item__info-wrap">
					<div className="current-five-days-forecast-item__general">
						<img className="current-five-days-forecast-item__icon weather-icon" src={forecastItem.day.icon} alt="weather-img" />
						<div className="current-five-days-forecast-item__general-text">
							<span className="current-five-days-forecast-item__forecast-temp">{forecastItem.day.temp.toFixed(0)}&#8451;<span className="current-five-days-forecast-item__label">day</span></span>
							<span className="current-five-days-forecast-item__description">{forecastItem.day.description}</span>
						</div>
					</div>
					<span className="current-five-days-forecast-item__humidity"><span className="current-five-days-forecast-item__text">Humidity</span>{`${forecastItem.day.humidity}%`}</span>
					<span className="current-five-days-forecast-item__visibility"><span className="current-five-days-forecast-item__text">Visibility</span>{`${Math.round(forecastItem.day.visibility / 1000)} km`}</span>
					<span className="current-five-days-forecast-item__pressure"><span className="current-five-days-forecast-item__text">Pressure</span>{`${Math.round(forecastItem.day.pressure / 10)} kPa`}</span>
					<span className="current-five-days-forecast-item__wind-speed"><span className="current-five-days-forecast-item__text">Wind speed</span>{`${Math.round(forecastItem.day.windSpeed * 3.6)} km/h`}</span>
				</div>
			)}
			{forecastItem.night && (
				<div className="current-five-days-forecast-item__info-wrap current-five-days-forecast-item__info-wrap--night">
					<div className="current-five-days-forecast-item__general">
						<img className="current-five-days-forecast-item__icon weather-icon" src={forecastItem.night.icon} alt="weather-img" />
						<div className="current-five-days-forecast-item__general-text">
							<span className="current-five-days-forecast-item__forecast-temp">{forecastItem.night.temp.toFixed(0)}&#8451;<span className="current-five-days-forecast-item__label">night</span></span>
							<span className="current-five-days-forecast-item__description">{forecastItem.night.description}</span>
						</div>
					</div>
					<span className="current-five-days-forecast-item__humidity"><span className="current-five-days-forecast-item__text">Humidity</span>{`${forecastItem.night.humidity}%`}</span>
					<span className="current-five-days-forecast-item__visibility"><span className="current-five-days-forecast-item__text">Visibility</span>{`${Math.round(forecastItem.night.visibility / 1000)} km`}</span>
					<span className="current-five-days-forecast-item__pressure"><span className="current-five-days-forecast-item__text">Pressure</span>{`${Math.round(forecastItem.night.pressure / 10)} kPa`}</span>
					<span className="current-five-days-forecast-item__wind-speed"><span className="current-five-days-forecast-item__text">Wind speed</span>{`${Math.round(forecastItem.night.windSpeed * 3.6)} km/h`}</span>
				</div>
			)}
		</div>
	)
}

export default CurrentFiveDaysForecastItem;