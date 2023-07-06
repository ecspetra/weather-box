import React, { FC } from 'react';
import moment from 'moment';

import {ICurrentFiveDaysForecastItem} from "../../../types";
import classNames from "classnames";

import './assest/index.scss';
import CurrentForecastDetailsItems from "../CurrentForecastDetailsItem/CurrentForecastDetailsItems";
import CurrentForecastGeneralInfo from "../CurrentForecastGeneralInfo/CurrentForecastGeneralInfo";

type CurrentForecastItemPropTypes = {
	forecastItem: ICurrentFiveDaysForecastItem;
}

const CurrentFiveDaysForecastItem: FC<CurrentForecastItemPropTypes> = ({ forecastItem }) => {
	const handleRenderDayOrNightItem = (objectKey: string, objectValue: any) => {
		return (
			<div key={objectKey} className={classNames(`current-five-days-forecast-item__info-wrap current-five-days-forecast-item__info-wrap--${objectKey}`)}>
				<CurrentForecastGeneralInfo objectToRender={objectValue} label={objectKey} />
				<CurrentForecastDetailsItems objectToRender={objectValue.info} />
			</div>
		);
	}

	return (
		<div className="current-five-days-forecast-item">
			<span className="current-five-days-forecast-item__date">{moment(forecastItem.date * 1000).format("MMM Do")}</span>
			{Object.entries(forecastItem).map(([key, val]) => {
				if (key !== 'date') return handleRenderDayOrNightItem(key, val);
			})}
		</div>
	)
}

export default CurrentFiveDaysForecastItem;