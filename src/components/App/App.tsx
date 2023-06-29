import FetchSrc from "../FetchSrc/FetchSrc";
import { DEFAULT_QUERY } from "../../apiConstants/apiConstants";
import WeatherList from "../WeatherList/WeatherList";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import {fetchCurrentForecast} from "../../handlers/fetchCurrentForecast";
import {fetchDefaultCitiesList} from "../../handlers/fetchDefaultCitiesList";
import CurrentCitySearch from "../CurrentCitySearch/CurrentCitySearch";
import {useUserLocation} from "../../hooks/useUserLocation";
import './assets/index.scss';

const App = () => {
	const [defaultCity, geolocationMessage] = useUserLocation();

	return (
		<div className="app">
			<>{geolocationMessage}</>
			<div className="app__current-city-weather">
				<CurrentCitySearch />
				<FetchSrc city={defaultCity} fetchFunction={fetchCurrentForecast}>
					<CurrentForecast />
				</FetchSrc>
			</div>
			<FetchSrc city={DEFAULT_QUERY} fetchFunction={fetchDefaultCitiesList}>
				<WeatherList />
			</FetchSrc>
		</div>
	);
};

export default App;
