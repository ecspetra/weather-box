import React, { FC } from 'react';
import './assest/index.scss';

type GeolocationMessage = {
	geolocationMessage: string;
}

const GeolocationMessage: FC<GeolocationMessage> = ({ geolocationMessage }) => {
	return (
		<div className="geolocation-message">{geolocationMessage}</div>
	);
};

export default GeolocationMessage;
