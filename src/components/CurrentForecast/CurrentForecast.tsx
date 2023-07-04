import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {forecastSelector} from "../../redux/CurrentForecastReducer";
import moment from 'moment';
import Modal from "../Modal/Modal";
import CurrentCitySearch from "../CurrentCitySearch/CurrentCitySearch";
import {getForecastIcon} from "../../handlers/getForecastIcon";
import './assest/index.scss';
import {getForecastItems} from "../../handlers/getForecastItems";
import {ICurrentFiveDaysForecastItem, ICurrentThreeHoursForecastItem} from "../../types";
import CurrentFiveDaysForecastItem from "./CurrentFiveDaysForecastItem/CurrentFiveDaysForecastItem";
import {getThreeHoursForecastItems} from "../../handlers/getThreeHoursForecastItems";
import CurrentThreeHoursForecastItem from "./CurrentThreeHoursForecastItem/CurrentThreeHoursForecastItem";

const CurrentForecast = () => {
	const [forecastItems, setForecastItems] = useState<Array<ICurrentFiveDaysForecastItem>>([]);
	const [threeHoursForecastItems, setThreeHoursForecastItems] = useState<Array<ICurrentFiveDaysForecastItem>>([]);
	const [isShowModal, setIsShowModal] = useState<boolean>(false);
	const selectedForecast = useAppSelector(forecastSelector);
	const cityTimezone = selectedForecast && selectedForecast.city.timezone / 60;
	const sunriseTime = selectedForecast && moment(selectedForecast.city.sunrise * 1000).utcOffset(cityTimezone).format("h:mm a");
	const sunsetTime = selectedForecast && moment(selectedForecast.city.sunset * 1000).utcOffset(cityTimezone).format("h:mm a");

	useEffect(() => {
		if (selectedForecast) {
			setForecastItems([]);
			setThreeHoursForecastItems([]);
			getForecastItems(selectedForecast, cityTimezone, setForecastItems);
			getThreeHoursForecastItems(selectedForecast, cityTimezone, setThreeHoursForecastItems);
		}
	}, [selectedForecast]);

	if (!selectedForecast) return null;

	return (
		<div className="current-forecast" style={{backgroundImage: `url(${selectedForecast.city.cityImage})`}}>
			<div className="current-forecast__container container">
				<div className="current-forecast__city-info">
					<div className="current-forecast__info-wrap">
						<div className="current-forecast__title-wrap">
							<h2 className="current-forecast__date">{moment(new Date(selectedForecast.city.date * 1000)).format("MMM Do")}</h2>
							<h1 className="current-forecast__city">{selectedForecast.city.name} <span className="current-forecast__country">({selectedForecast.city.country})</span></h1>
							<button className="current-forecast__button" onClick={() => {setIsShowModal(true)}}>Select another city</button>
						</div>
						<div className="current-forecast__temp">
							{Math.round(selectedForecast.city.temp)}
							<span className="current-forecast__temp-symbol">&#8451;</span>
							<span className="current-forecast__weather">{selectedForecast.city.weather}</span>
							<img className="current-forecast__icon weather-icon" src={getForecastIcon(selectedForecast.city.icon)} alt="weather-img" />
							<span className="current-forecast__sun-time">Sunrise {sunriseTime}</span>
							<span className="current-forecast__sun-time">Sunset {sunsetTime}</span>
							<div className="current-forecast__three-hour-forecast">
								{threeHoursForecastItems.map((item: ICurrentThreeHoursForecastItem, idx: number) => {
									return <CurrentThreeHoursForecastItem forecastItem={item} key={idx} />
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="current-forecast__forecast-wrap">
					<h2 className="current-forecast__forecast-title">Daily forecast</h2>
					<div className="current-forecast__forecast">
						{forecastItems.map((item: ICurrentFiveDaysForecastItem, idx: number) => {
							return <CurrentFiveDaysForecastItem forecastItem={item} key={idx} />
						})}
					</div>
				</div>
				{isShowModal && (
					<Modal handleCloseModal={setIsShowModal} modalTitle="Select another city">
						<CurrentCitySearch />
					</Modal>
				)}
			</div>
		</div>
	)
}

export default CurrentForecast;