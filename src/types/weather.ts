interface MainWeatherStatus {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
}

interface WeatherStatus {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface WindStatus {
	speed: number;
	deg: number;
	gust: number;
}

interface PhenomenonStatus {
	"1h": number;
	"3h": number;
}

export interface FutureWeatherListItem {
	dt: number;
	main: MainWeatherStatus;
	weather: Array<WeatherStatus>;
	clouds: {
		all: number;
	};
	wind: WindStatus;
	visibility: number;
	pop: number;
	rain: PhenomenonStatus;
	sys: {
		pod: string;
	};
	dt_txt: string;
}

export interface CurrentWeatherStatusResponseBody {
	coord: {
		lon: number;
		float: number;
	};
	weather: Array<WeatherStatus>;
	base: string;
	main: MainWeatherStatus;
	visibility: number;
	wind: WindStatus;
	rain: PhenomenonStatus;
	snow: PhenomenonStatus;
	dt: number;
	sys: {
		type: number;
		country: string;
		id: number;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface FutureWeatherResponseBody {
	cod: string;
	message: number;
	cnt: number;
	list: Array<FutureWeatherListItem>;
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
		country: string;
		population: number;
		timezone: number;
		sunrise: number;
		sunset: number;
	};
}
