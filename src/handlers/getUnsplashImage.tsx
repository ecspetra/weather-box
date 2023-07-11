import {UNSPLASH_API_URL} from "../apiConstants/apiConstants";
import imageBG from '../components/CurrentForecast/assest/images/image-bg.jpg';

export const getUnsplashImage = async (src: string, isSmallImg: boolean) => {
	let result;

	const linkToFetch = UNSPLASH_API_URL.replace('image', src);

	const fetchedImage = await fetch(linkToFetch);
	const response = await fetchedImage.json();

	if (response.results.length) {
		if (isSmallImg) {
			result = `${response.results[0].urls.raw}fm=jpg&w=600&fit=max`;
		} else result = `${response.results[0].urls.full}fm=jpg&w=1440&fit=max`;
	} else {
		result = imageBG;
	}

	return result;
}