import FetchSrc from "../FetchSrc/FetchSrc";
import { DEFAULT_QUERY } from "../../apiConstants/apiConstants";
import './assets/index.scss';

const App = () => {
	const CURRENT_FORECAST = 'forecast?lat=49.24966&lon=-123.119339';

	return (
		<div className="app">
			<FetchSrc src={CURRENT_FORECAST} isFetchForecast />
			<FetchSrc src={DEFAULT_QUERY} />
		</div>
	);
};

export default App;
