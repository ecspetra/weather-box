import {useEffect, useState} from "react";
import {ICurrentCity} from "../types";

export const useUserLocation = () => {
	const [defaultCity, setDefaultCity] = useState<ICurrentCity>({
		lat: 49.24966,
		lon: -123.119339,
	});
	const [geolocationMessage, setGeolocationMessage] = useState<string>('');

	const setUserLocation = (position: any) => {
		setDefaultCity({
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		});
	}

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(setUserLocation);
		} else {
			setGeolocationMessage('Geolocation is not supported by this browser');
		}
	}, []);

	return [defaultCity, geolocationMessage];
}