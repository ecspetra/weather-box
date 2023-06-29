import React, {useEffect, useState} from 'react';
import { useAppSelector } from "../../hooks/hooks";
import { forecastSelector } from "../../redux/CurrentForecastReducer";
import moment from 'moment';

import CurrentForecastItem, {ICurrentForecastItem} from "./CurrentForecastItem/CurrentForecastItem";
import './assest/index.scss';

const CurrentForecast = () => {
	const [forecastItems, setForecastItems] = useState<Array<ICurrentForecastItem>>([]);
	const selectedForecast = useAppSelector(forecastSelector);
	const sunriseTime = moment(new Date(selectedForecast.city.sunrise * 1000)).format("h:mm a");
	const sunsetTime = moment(new Date(selectedForecast.city.sunset * 1000)).format("h:mm a");

	const getForecastItems = () => {
		selectedForecast.list.map((item) => {
			if (moment(new Date(item.dt * 1000)).format("h:mm a") === '11:00 am') {
				const forecastItem = {
					date: item.dt,
					description: item.weather[0].description,
					feelsLike: item.main.feels_like,
					humidity: item.main.humidity,
					visibility: item.visibility,
					pressure: item.main.pressure,
					temp: item.main.temp,
					windSpeed: item.wind.speed,
				}
				setForecastItems(prevState => [...prevState, forecastItem]);
			}
		})
	};

	useEffect(() => {
		getForecastItems();
	}, []);

	return (
		<div className="current-forecast">
			<div className="current-forecast__container container">
				<div className="current-forecast__city-info">
					<h2 className="current-forecast__city">{selectedForecast.city.name} <span className="current-forecast__country">({selectedForecast.city.country})</span></h2>
					<span className="current-forecast__temp">{Math.round(selectedForecast.city.temp)}&#8451;</span>
					<div className="current-forecast__sun-time-wrap">
						<span className="current-forecast__sun-time">Sunrise {sunriseTime}</span>
						<span className="current-forecast__sun-time">Sunset {sunsetTime}</span>
					</div>
				</div>
				<button onClick={() => {}}>Select another city</button>
				<div className="current-forecast__forecast">
					{forecastItems.map((item: ICurrentForecastItem, idx: number) => {
						return <CurrentForecastItem forecastItem={item} key={idx} />
					})}
				</div>
			</div>
		</div>
	)
}

export default CurrentForecast;