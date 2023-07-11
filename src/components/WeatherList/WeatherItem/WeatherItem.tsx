import React, {FC, useEffect, useState} from 'react';
import {ICity} from "../../../types";
import {getForecastIcon} from "../../../handlers/getForecastIcon";

import './assets/index.scss';
import {Player} from "@lottiefiles/react-lottie-player";
import {getUnsplashImage} from "../../../handlers/getUnsplashImage";
import Loader from "../../Loader/Loader";

type WeatherItemPropTypes = {
	city: ICity;
}

const WeatherItem: FC<WeatherItemPropTypes> = ({ city }) => {
	const [imageSrc, setImageSrc] = useState<string>('');
	const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

	useEffect(() => {
		getUnsplashImage(city.name, true).then((data) => setImageSrc(data));
	}, []);

	return (
		<div className="weather-item">
			<div className="weather-item__background-image-wrap">
				{!isImageLoaded && <Loader />}
				<img className="weather-item__background-image" onLoad={() => setIsImageLoaded(true)} src={imageSrc} />
			</div>
			<div className="weather-item__general-info">
				<div className="weather-item__icon-wrap">
					<Player
						src={getForecastIcon(city.weather[0].icon)}
						className="player"
						loop
						autoplay
					/>
				</div>
				<div className="weather-item__text">
					<span className="weather-item__forecast-temp">
						{Math.round(city.main.temp)}
						<span className="weather-item__forecast-temp-unit">
							&#8451;
						</span>
					</span>
					<span className="weather-item__description">{city.weather[0].description}</span>
				</div>
			</div>
			<h2 className="weather-item__city">{city.name}
				<span className="weather-item__country">({city.sys.country})</span>
			</h2>
		</div>
	)
}

export default WeatherItem;