import React, { FC } from 'react';

import {ICurrentForecastCity} from "../../../types";
import classNames from "classnames";

import {getUnitOfMeasurement} from "../../../handlers/getUnitOfMeasurement";
import {getKeyName} from "../../../handlers/getKeyName";
import './assest/index.scss';
import {getCurrentCityAirQuality} from "../../../handlers/getCurrentCityAirQuality";

type CurrentForecastItemPropTypes = {
	objectToRender: ICurrentForecastCity['info'];
	airQuality?: number;
}

const CurrentForecastDetailsItems: FC<CurrentForecastItemPropTypes> = ({ objectToRender, airQuality }) => {

	return (
		<>
			{Object.entries(objectToRender).map(([key, val]) => {
				return (
					<div key={key} className="current-forecast-details-items">
						<span className={classNames(`current-forecast-details-items__icon current-forecast-details-items__icon--${key}`)} />
						<div className="current-forecast-details-items__text-wrap">
							<span className="current-forecast-details-items__text">{getKeyName(key)}</span>
							<span className="current-forecast-details-items__value">
								{Math.round(Number(val))}
								<span className="current-forecast-details-items__unit">
									{getUnitOfMeasurement(key)}
								</span>
							</span>
						</div>
					</div>
				)
			})}
			{airQuality && (
				<div className="current-forecast-details-items">
					<span className={classNames(`current-forecast-details-items__icon current-forecast-details-items__icon--airQuality`)} />
					<div className="current-forecast-details-items__text-wrap">
						<span className="current-forecast-details-items__text">Air quality</span>
						<span className="current-forecast-details-items__value">
							{getCurrentCityAirQuality(airQuality)}
						</span>
					</div>
				</div>
			)}
		</>
	)
}

export default CurrentForecastDetailsItems;