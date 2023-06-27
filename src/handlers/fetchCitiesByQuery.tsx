import {GEOCODING_API_URL} from "../apiConstants/apiConstants";

export const fetchCitiesByQuery = async (src: string) => {
	return new Promise<object>(async (resolve) => {
		const linkToFetch = GEOCODING_API_URL.replace('query', src);

		const response = await fetch(linkToFetch);
		const result = await response.json();

		resolve(result);
	});
}