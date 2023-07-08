import React, { FC } from 'react';
import {ICity} from "../../../types";
import {getForecastIcon} from "../../../handlers/getForecastIcon";

import './assets/index.scss';

type WeatherItemPropTypes = {
	city: ICity;
}

const WeatherItem: FC<WeatherItemPropTypes> = ({ city }) => {
	return (
		<div className="weather-item">
			<div className="weather-item_general-info">
				<div className="weather-item__icon-wrap">
					<img className="weather-item__icon weather-icon" src={getForecastIcon(city.weather[0].icon)} alt="weather-img" />
				</div>
				<div className="weather-item__text">
					<p className="weather-item__temp">{city.main.temp}</p>
					<span className="weather-item__description">{city.weather[0].description}</span>
				</div>
			</div>
			<h2 className="weather-item__city">{city.name}
				<span className="weather-item__country">{city.sys.country}</span>
			</h2>
		</div>
	)
}

export default WeatherItem;