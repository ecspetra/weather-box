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
	info: {
		humidity: number,
		pressure: number,
		windSpeed: number,
	};
}

export interface ICurrentForecastList {
	dt: number;
	main: {
		humidity: number,
		pressure: number,
		temp: number,
	},
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
	isLoading?: boolean;
	city: ICurrentForecastCity;
	list: Array<ICurrentForecastList>;
}

export interface ICurrentFiveDaysForecastItem {
	date: number;
	day: {
		description: string,
		temp: number;
		icon: string;
		info: {
			humidity: number;
			pressure: number;
			windSpeed: number;
		};
	};
	night: {
		description: string,
		temp: number;
		icon: string;
		info: {
			humidity: number;
			pressure: number;
			windSpeed: number;
		};
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