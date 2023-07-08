import React, {FC} from 'react';
import {fetchCurrentForecast} from "../../../handlers/fetchCurrentForecast";
import {useAppDispatch} from "../../../hooks/hooks";

import './assest/index.scss';
import {ICurrentCity} from "../../../types";
import Loader from "../../Loader/Loader";

type CurrentCitySearchResultsPropTypes = {
	citiesList: Array<ICurrentCity>;
	isLoading: boolean;
	[rest: string]: any;
}

const CurrentCitySearchResults: FC<CurrentCitySearchResultsPropTypes> = ({ citiesList, isLoading, handleCloseModal }) => {
	const dispatch = useAppDispatch();

	const handleSetCurrentCity = (city: ICurrentCity) => {
		fetchCurrentForecast(city, dispatch);
		handleCloseModal(false);
	}

	if (isLoading === true) {
		return <div className="current-city-search-results"><Loader/></div>
	} else if (!citiesList.length && isLoading === false) return <div className="current-city-search-results"><span className="current-city-search-results__text">No cities found</span></div>

	return (
		<div className="current-city-search-results">
			{citiesList.map((item, idx) => {
				return (
					<button className="current-city-search-results__button" key={idx} onClick={() => handleSetCurrentCity(item)}>
						<span className="current-city-search-results__button-text">{`${item.name}, `}</span>
						{item.state && <span className="current-city-search-results__button-text">{`${item.state}, `}</span>}
						<span className="current-city-search-results__button-text">{item.country}</span>
					</button>
				)
			})}
		</div>
	)
}

export default CurrentCitySearchResults;