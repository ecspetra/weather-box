import {WEATHER_ICONS} from "../components/App/assets/icons/weatherIcons";

export const getForecastIcon = (iconCode: string) => {
	let icon;

	Object.entries(WEATHER_ICONS).map(([key, val]) => {
		if (key === iconCode) {
			icon = val;
		}
	});

	return icon;
}