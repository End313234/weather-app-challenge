import { FC } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const WeatherStats: FC = () => {
	return (
		<section className="w-1/3 bg-bluepurple-500 py-5 flex flex-col gap-10">
			<header className="flex items-center justify-between px-3">
				<button>Search for places</button>
				<button className="rounded-full p-3">
					<MapPinIcon className="icon" />
				</button>
			</header>
			<main className="w-full flex flex-col items-center justify-between px-0">
				<div className="bg-cloud-pattern w-full flex items-center justify-center py-10">
					<Image
						src="/thunderstorm.png"
						alt="Thunderstorm"
						width="150"
						height="150"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex">
						<h1>15</h1>
						<h3 className="flex items-end">°C</h3>
					</div>
					<h3>Shower</h3>
				</div>
			</main>
			<footer className="flex flex-col items-center mt-7 gap-3">
				<div className="flex gap-5">
					<p>Today</p>
					<p>•</p>
					<p>Fri, 5 Jun</p>
				</div>
				<div className="flex items-center gap-2">
					<MapPinIcon className="icon" />
					<p>Helsinki</p>
				</div>
			</footer>
		</section>
	)
};
