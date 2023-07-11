import {useEffect, useState} from "react";
import {ICurrentCity} from "../types";

export const useUserLocation = () => {
	const defaultGeolocation = {
		lat: 51.50853,
		lon: -0.12574,
	}
	const [currentGeolocation, setCurrentGeolocation] = useState<ICurrentCity>(null);
	const [geolocationMessage, setGeolocationMessage] = useState<string>('');

	const setUserLocation = (position: any) => {
		setCurrentGeolocation({
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		});
	}

	const setLocationError = (positionError: any) => {
		setCurrentGeolocation(defaultGeolocation);
		setGeolocationMessage(positionError.message);
	}

	const getUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(setUserLocation, setLocationError);
		} else setGeolocationMessage('Geolocation is not supported by this browser');
	}

	useEffect(() => {
		getUserLocation();
	}, []);

	return {currentGeolocation, geolocationMessage}
}