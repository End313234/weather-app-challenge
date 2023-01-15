import { FC, useState } from "react";
import { FutureWeatherCard } from "web/components/future-weather-card";
import { HighlightCard } from "web/components/highlight-card";
import { TemperatureScaleSelector } from "web/components/temperature-scale-selector";
import { WeatherStats } from "web/components/weather-stats";

export const Home: FC = () => {
	// 0 for Celsius and 1 for Fahrenheit
	const [temperatureScale, setTemperatureScale] = useState(0);

	return (
		<main className="flex flex-col xl:flex-row">
			<WeatherStats />
			<div className="mt-5 flex flex-col items-center px-10 gap-10">
				<div className="flex items-end justify-end w-full">
					<TemperatureScaleSelector scale={temperatureScale} toggleScale={setTemperatureScale} />
				</div>
				<div className="flex gap-4 flex-wrap items-center justify-center w-full xl:items-start xl:justify-start">
					<FutureWeatherCard />
					<FutureWeatherCard />
					<FutureWeatherCard />
					<FutureWeatherCard />
					<FutureWeatherCard />
				</div>
				<div className="flex flex-col items-start justify-start w-full">
					<h1>Today's highlights</h1>
					<div className="flex justify-between w-full gap-10 flex-wrap my-10">
						<HighlightCard type={0} />
						<HighlightCard type={1} />
						<HighlightCard type={2} />
						<HighlightCard type={3} />
					</div>
				</div>
			</div>
		</main>
	);
};
