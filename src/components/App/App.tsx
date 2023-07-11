import FetchSrc from "../FetchSrc/FetchSrc";
import { DEFAULT_QUERY } from "../../apiConstants/apiConstants";
import WeatherList from "../WeatherList/WeatherList";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import {fetchCurrentForecast} from "../../handlers/fetchCurrentForecast";
import {fetchDefaultCitiesList} from "../../handlers/fetchDefaultCitiesList";
import {useUserLocation} from "../../hooks/useUserLocation";
import GeolocationMessage from "../GeolocationMessage/GeolocationMessage";
import './assets/index.scss';

const App = () => {
	const {currentGeolocation, geolocationMessage} = useUserLocation();

	return (
		<div className="app">
			{geolocationMessage && <GeolocationMessage geolocationMessage={geolocationMessage} />}
			<div className="app__current-city-weather">
				<FetchSrc city={currentGeolocation} fetchFunction={fetchCurrentForecast}>
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
