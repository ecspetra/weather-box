import FetchSrc from "../FetchSrc/FetchSrc";
import { DEFAULT_QUERY } from "../../apiConstants/apiConstants";
import WeatherList from "../WeatherList/WeatherList";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import {fetchCurrentForecast} from "../../handlers/fetchCurrentForecast";
import {fetchDefaultCitiesList} from "../../handlers/fetchDefaultCitiesList";
import './assets/index.scss';
import CurrentCitySearch from "../CurrentCitySearch/CurrentCitySearch";

const App = () => {
	// const CURRENT_FORECAST = 'forecast?lat=49.24966&lon=-123.119339';

	const defaultCity = {
		name: 'Vancouver',
		state: 'British Columbia',
		country: 'CA',
		lat: 49.24966,
		lon: -123.119339,
	}

	return (
		<div className="app">
			<CurrentCitySearch />
			<FetchSrc city={defaultCity} fetchFunction={fetchCurrentForecast}>
				<CurrentForecast />
			</FetchSrc>
			<FetchSrc city={DEFAULT_QUERY} fetchFunction={fetchDefaultCitiesList}>
				<WeatherList />
			</FetchSrc>
		</div>
	);
};

export default App;
