import React, {useState} from 'react';

import FetchCities from "../FetchCities/FetchCities";

import './assest/index.scss';

const CurrentCitySearch = ({ ...rest }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleSetCurrentCity = (event: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery((event.target as HTMLInputElement).value);
	}
	return (
		<div className="current-city-search">
			<input className="current-city-search__input" onInput={(event) => handleSetCurrentCity(event)} />
			<FetchCities src={searchQuery} {...rest} />
		</div>
	)
}

export default CurrentCitySearch;