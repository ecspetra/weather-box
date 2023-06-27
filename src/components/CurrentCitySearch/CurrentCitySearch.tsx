import React, {useState} from 'react';

import FetchCities from "../FetchCities/FetchCities";

const CurrentCitySearch = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleSetCurrentCity = (event: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery((event.target as HTMLInputElement).value);
	}

	return (
		<div className="current-city-search">
			<input onInput={(event) => handleSetCurrentCity(event)} />
			<FetchCities src={searchQuery} />
		</div>
	)
}

export default CurrentCitySearch;