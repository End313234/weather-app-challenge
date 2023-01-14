import Image from "next/image";
import { FC } from "react";

export const FutureWeatherCard: FC = () => {
	return (
		<div className="bg-bluepurple-500 h-fit flex items-center flex-col px-7 rounded-sm py-3 transition-all hover:-translate-y-1">
			<h3>Tomorrow</h3>
			<Image
				src="https://openweathermap.org/img/wn/10n@2x.png"
				alt="Weather"
				width={100}
				height={100}
				quality={100}
			/>
			<div className="flex justify-center items-center gap-7">
				<h3>16°C</h3>
				<h3 className="text-opacity-70">11°C</h3>
			</div>
		</div>
	);
};
