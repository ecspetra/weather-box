import {UNITS_OF_MEASUREMENT} from "../apiConstants/unitsOfMeasurement";

export const getKeyName = (key: string) => {
	return UNITS_OF_MEASUREMENT.map((item) => {
		if ((Object.keys(item)).toString().replace(/\s+/g, '').toUpperCase().includes(key.toUpperCase())) return Object.keys(item);
	})
}
