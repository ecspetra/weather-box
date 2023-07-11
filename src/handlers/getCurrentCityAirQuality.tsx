import {AIR_QUALITY_INDEX} from "../apiConstants/airQualityIndex";

export const getCurrentCityAirQuality = (index: number) => {
	return AIR_QUALITY_INDEX.map((item) => {
		if (Number(...Object.keys(item)) === index) return Object.values(item);
	})
}