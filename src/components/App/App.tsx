import FetchSrc from "../FetchSrc/FetchSrc";
import { DEFAULT_QUERY } from "../../apiConstants/apiConstants";
import './assets/index.scss';

const App = () => {
	const CURRENT_FORECAST = 'forecast?q=vancouver&cnt=7';

	return (
		<div className="app">
			<FetchSrc src={CURRENT_FORECAST} isFetchForecast />
			<FetchSrc src={DEFAULT_QUERY} />
		</div>
	);
};

export default App;
