import React, { FC } from 'react';
import moment from 'moment';

import {ICurrentThreeHoursForecastItem} from "../../../types";
import './assest/index.scss';

type CurrentForecastItemPropTypes = {
	forecastItem: ICurrentThreeHoursForecastItem;
}

const CurrentThreeHoursForecastItem: FC<CurrentForecastItemPropTypes> = ({ forecastItem }) => {
	return (
		<div className="current-three-hours-forecast-item">
			<span className="current-three-hours-forecast-item__date">{moment(forecastItem.date * 1000).format("h:mm a")}</span>
			<img className="current-three-hours-forecast-item__icon weather-icon" src={forecastItem.icon} alt="weather-img" />
			<span className="current-three-hours-forecast-item__temp">{forecastItem.temp}</span>
		</div>
	)
}

export default CurrentThreeHoursForecastItem;