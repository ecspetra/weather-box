import React, { FC } from 'react';

import {ICurrentFiveDaysForecastItem} from "../../../types";

import {getForecastIcon} from "../../../handlers/getForecastIcon";
import './assest/index.scss';
import {Player} from "@lottiefiles/react-lottie-player";

type CurrentForecastItemPropTypes = {
	objectToRender: ICurrentFiveDaysForecastItem['day'];
	sunTime?: {
		sunriseTime: string,
		sunsetTime: string,
	};
	label?: string;
}

const CurrentForecastGeneralInfo: FC<CurrentForecastItemPropTypes> = ({ objectToRender, sunTime, label }) => {
	return (
		<div className="current-forecast-general-info">
			<div className="current-forecast-general-info__info-wrap">
				<div className="current-forecast-general-info__icon-wrap">
					<Player
						src={getForecastIcon(objectToRender.icon)}
						className="player"
						loop
						autoplay
					/>
				</div>
				<div className="current-forecast-general-info__info">
					<div className="current-forecast-general-info__forecast-temp-wrap">
					<span className="current-forecast-general-info__forecast-temp">
						{Math.round(objectToRender.temp)}
						<span className="current-forecast-general-info__forecast-temp-unit">
							&#8451;
						</span>
					</span>
						{label && <span className="current-forecast-general-info__label">{label}</span>}
					</div>
					<span className="current-forecast-general-info__description">{objectToRender.description}</span>
				</div>
			</div>
			{sunTime && (
				<div className="current-forecast-general-info__sun-time-wrap">
					<span className="current-forecast-general-info__sun-time">Sunrise {sunTime.sunriseTime}</span>
					<span className="current-forecast-general-info__sun-time current-forecast-general-info__sun-time--sunset">Sunset {sunTime.sunsetTime}</span>
				</div>
			)}
		</div>
	)
}

export default CurrentForecastGeneralInfo;