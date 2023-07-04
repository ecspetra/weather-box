import {UNSPLASH_API_URL} from "../apiConstants/apiConstants";
import imageBG from '../components/CurrentForecast/assest/images/image-bg.jpg';

export const getUnsplashImage = async (src: string) => {
	let result;

	const linkToFetch = UNSPLASH_API_URL.replace('image', src);

	const fetchedImage = await fetch(linkToFetch);
	const response = await fetchedImage.json();

	if (response.results.length) {
		result = response.results[0].urls.full;
	} else {
		result = imageBG;
	}

	return result;
}