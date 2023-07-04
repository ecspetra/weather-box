import React, { FC } from 'react';
import moment from 'moment';

import {ICurrentFiveDaysForecastItem} from "../../../types";
import './assest/index.scss';
import classNames from "classnames";

type CurrentForecastItemPropTypes = {
	forecastItem: ICurrentFiveDaysForecastItem;
}

const CurrentFiveDaysForecastItem: FC<CurrentForecastItemPropTypes> = ({ forecastItem }) => {
	const unitsOfMeasurement = [
		{'humidity': '%'},
		{'visibility': 'km'},
		{'pressure': 'kPa'},
		{'wind speed': 'km/h'},
	];

	const getUnitOfMeasurement = (key: string) => {
		return unitsOfMeasurement.map((item) => {
			if (Object.keys(item).includes(key)) return Object.values(item);
		})
	}

	const getKeyName = (key: string) => {
		return unitsOfMeasurement.map((item) => {
			if ((Object.keys(item)).toString().replace(/\s+/g, '').toUpperCase().includes(key.toUpperCase())) return Object.keys(item);
		})
	}

	const handleRenderDayOrNightItem = (objectKey: string, objectValue: any) => {
		return (
			<div className={classNames(`current-five-days-forecast-item__info-wrap current-five-days-forecast-item__info-wrap--${objectKey}`)}>
				<div className="current-five-days-forecast-item__general">
					<img className="current-five-days-forecast-item__icon weather-icon" src={objectValue.icon} alt="weather-img" />
					<div className="current-five-days-forecast-item__general-text">
						<span className="current-five-days-forecast-item__forecast-temp">{objectValue.temp.toFixed(0)}&#8451;<span className="current-five-days-forecast-item__label">{objectKey}</span></span>
						<span className="current-five-days-forecast-item__description">{objectValue.description}</span>
					</div>
				</div>
				{Object.entries(objectValue.info).map(([key, val]) => {
					return (
						<div className="current-five-days-forecast-item__details">
							<span className={classNames(`current-five-days-forecast-item__details-icon current-five-days-forecast-item__details-icon--${key}`)} />
							<div className="current-five-days-forecast-item__details-text">
								<span className="current-five-days-forecast-item__text">{getKeyName(key)}</span>
								<span className="current-five-days-forecast-item__value">{`${val}`}<span className="current-five-days-forecast-item__unit">{getUnitOfMeasurement(key)}</span></span>
							</div>
						</div>
					)
				})}
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