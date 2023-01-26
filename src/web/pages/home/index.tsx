import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CurrentWeatherStatusResponseBody, FutureWeatherListItem, FutureWeatherResponseBody } from "types/weather";
import { FutureWeatherCard } from "web/components/future-weather-card";
import { HighlightCard } from "web/components/highlight-card";
import { TemperatureScaleSelector } from "web/components/temperature-scale-selector";
import { WeatherStats } from "web/components/weather-stats";

interface HomeProps {
	current?: CurrentWeatherStatusResponseBody;
	future?: Array<FutureWeatherListItem>
}

export const Home: NextPage<HomeProps> = ({ current, future }) => {
	// 0 for Celsius and 1 for Fahrenheit
	const [temperatureScale, setTemperatureScale] = useState(0);
	const router = useRouter();

	useEffect(() => {
		if (!current) {
			router.push("/?city=New%20York")
		}
		console.log(future)
	});

	const currentDay = new Date().getDate()

	return (
		<main className="flex flex-col xl:flex-row">
			<WeatherStats />
			<div className="mt-5 flex flex-col items-center px-10 gap-10">
				<div className="flex items-end justify-end w-full">
					<TemperatureScaleSelector scale={temperatureScale} toggleScale={setTemperatureScale} />
				</div>
				<div className="flex gap-[1rem] flex-wrap items-center justify-center w-full xl:items-start xl:justify-start">
					{future?.map((element) => (
						<FutureWeatherCard key={element.dt} currentDay={currentDay} dayData={element} />
					))}
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
