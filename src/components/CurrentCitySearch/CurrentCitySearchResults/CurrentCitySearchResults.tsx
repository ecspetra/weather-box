import React, {FC} from 'react';
import {fetchCurrentForecast} from "../../../handlers/fetchCurrentForecast";
import {useAppDispatch} from "../../../hooks/hooks";

import './assest/index.scss';

export interface ICurrentCity {
	name?: string;
	state?: string;
	country?: string;
	lat: number;
	lon: number;
}

type CurrentCitySearchResultsPropTypes = {
	citiesList: Array<ICurrentCity>;
}

const CurrentCitySearchResults: FC<CurrentCitySearchResultsPropTypes> = ({ citiesList }) => {
	const dispatch = useAppDispatch();

	const handleSetCurrentCity = (city: ICurrentCity) => {
		fetchCurrentForecast(city, dispatch);
	}

	return (
		<div className="current-city-search-results">
			{citiesList.map((item, idx) => {
				return (
					<button className="current-city-search-results__button" key={idx} onClick={() => handleSetCurrentCity(item)}>{`${item.name}, ${item.state}, ${item.country}`}</button>
				)
			})}
		</div>
	)
}

export default CurrentCitySearchResults;