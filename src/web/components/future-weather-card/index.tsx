import Image from "next/image";
import { FC } from "react";
import { FutureWeatherListItem } from "types/weather";
import { getWeekDayFromDate } from "utils/week-day";

interface FutureWeatherCardProps {
	currentDay: number;
	dayData: FutureWeatherListItem;
}

export const FutureWeatherCard: FC<FutureWeatherCardProps> = ({ currentDay, dayData }) => {
	const dayOfTheMonth = new Date(dayData.dt_txt).getDate()

	return (
		<div className="bg-bluepurple-500 h-fit flex items-center flex-col px-7 rounded-sm py-3 transition-all hover:-translate-y-1">
			<h3>
				{currentDay + 1 === dayOfTheMonth ? "Tomorrow" : (getWeekDayFromDate(dayData.dt_txt))}
			</h3>
			<img
				src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`}
				alt="Weather"
				className="w-28 h-28"
			/>
			<div className="flex justify-center items-center gap-7">
				<h3>
					{Math.round(dayData.main.temp_max)}
					°C
				</h3>
				<h3 className="text-opacity-70">
					{Math.round(dayData.main.temp_max)}
					°C
				</h3>
			</div>
		</div>
	);
};
