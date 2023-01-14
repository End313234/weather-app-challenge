import { FC, useState } from "react";
import { FutureWeatherCard } from "web/components/future-weather-card";
import { TemperatureScaleSelector } from "web/components/temperature-scale-selector";
import { WeatherStats } from "./weather-stats";

export const Home: FC = () => {
	// 0 for Celsius and 1 for Fahrenheit
	const [temperatureScale, setTemperatureScale] = useState(0);

	return (
		<main className="flex">
			<WeatherStats />
			<div className="mt-5 flex flex-col items-center px-10">
				<div className="flex items-end justify-end w-full">
					<TemperatureScaleSelector scale={temperatureScale} toggleScale={setTemperatureScale} />
				</div>
				<div className="flex gap-4 mt-10">
					<FutureWeatherCard />
					<FutureWeatherCard />
					<FutureWeatherCard />
					<FutureWeatherCard />
					<FutureWeatherCard />
				</div>
			</div>
		</main>
	);
};
