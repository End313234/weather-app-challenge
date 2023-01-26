import axios, { AxiosResponse } from "axios";
import { GeoLocationAPIResponseBody } from "types/geo";
import { CurrentWeatherStatusResponseBody, FutureWeatherResponseBody } from "types/weather";
import { Home } from "web/pages/home";

Home.getInitialProps = async (ctx) => {
	const { query } = ctx;
	const { lat, lon } = query;

	if (!lat || !lon) {
		return {}
	}

	const { data: currentWeatherData } = await axios.get<any, AxiosResponse<CurrentWeatherStatusResponseBody>>(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_TOKEN}`
	);
	const { data: futureWeatherData } = await axios.get<any, AxiosResponse<FutureWeatherResponseBody>>(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=43&appid=${process.env.NEXT_PUBLIC_API_TOKEN}`
	)

	let iterator = new Date().getUTCDate()

	const filteredFutureWeatherList = futureWeatherData.list.filter((element, index) => {
		if (new Date(element.dt_txt).getUTCDate() === iterator) {
			iterator += 1
			return element;
		}
	})

	return {
		current: currentWeatherData,
		future: filteredFutureWeatherList.slice(1),
	}
}

export default Home;
