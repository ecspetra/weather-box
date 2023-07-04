export interface ICity {
	id: number;
	name: string;
	main: {
		humidity: number,
		pressure: number,
		temp: number,
	};
	sys: {
		country: string,
		sunrise: number,
		sunset: number,
	};
	visibility: number;
	weather: {
		id: number,
		description: string,
		icon: string,
	} [];
	wind: {
		speed: number,
	};
}

export interface ICurrentForecastCity {
	id: number;
	date: number;
	name: string;
	country: string;
	weather: string;
	sunrise: number;
	sunset: number;
	temp: number;
	cityImage: string;
	icon: string;
	timezone: number;
}

export interface ICurrentForecastList {
	dt: number;
	main: {
		humidity: number,
		pressure: number,
		temp: number,
	},
	visibility: number;
	weather: {
		id: number,
		description: string,
		icon: string,
	} [];
	wind: {
		speed: number,
	};
}

export interface ICurrentForecast {
	city: ICurrentForecastCity;
	list: Array<ICurrentForecastList>;
}

export interface ICurrentFiveDaysForecastItem {
	date: number;
	day?: {
		description: string,
		humidity: number;
		visibility: number;
		pressure: number;
		temp: number;
		windSpeed: number;
		icon: string;
	};
	night?: {
		description: string,
		humidity: number;
		visibility: number;
		pressure: number;
		temp: number;
		windSpeed: number;
		icon: string;
	}
}

export interface ICurrentThreeHoursForecastItem {
	date: number;
	icon: string;
	temp: number;
}

export interface ICurrentCity {
	name?: string;
	state?: string;
	country?: string;
	lat: number;
	lon: number;
}