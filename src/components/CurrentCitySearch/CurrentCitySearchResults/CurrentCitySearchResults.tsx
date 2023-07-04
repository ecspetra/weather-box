import React, {FC} from 'react';
import {fetchCurrentForecast} from "../../../handlers/fetchCurrentForecast";
import {useAppDispatch} from "../../../hooks/hooks";

import './assest/index.scss';
import {ICurrentCity} from "../../../types";

type CurrentCitySearchResultsPropTypes = {
	citiesList: Array<ICurrentCity>;
	[rest: string]: any;
}

const CurrentCitySearchResults: FC<CurrentCitySearchResultsPropTypes> = ({ citiesList, handleCloseModal }) => {
	const dispatch = useAppDispatch();

	const handleSetCurrentCity = (city: ICurrentCity) => {
		fetchCurrentForecast(city, dispatch);
		handleCloseModal(false);
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