import React, { FC } from 'react';
import moment from 'moment';

import {ICurrentThreeHoursForecastItem} from "../../../types";
import './assest/index.scss';

type CurrentForecastItemPropTypes = {
	forecastItem: ICurrentThreeHoursForecastItem;
	cityTimezone: number;
}

const CurrentThreeHoursForecastItem: FC<CurrentForecastItemPropTypes> = ({ forecastItem, cityTimezone }) => {
	return (
		<div className="current-three-hours-forecast-item">
			<span className="current-three-hours-forecast-item__date">{moment(forecastItem.date * 1000).utcOffset(cityTimezone).format("h:mm a")}</span>
			<span className="current-three-hours-forecast-item__temp">
				{Math.round(forecastItem.temp)}
				<span className="current-three-hours-forecast-item__temp-unit">&#8451;</span>
			</span>
		</div>
	)
}

export default CurrentThreeHoursForecastItem;