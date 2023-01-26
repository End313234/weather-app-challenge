import { FC, useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { SearchModal } from "./search-modal";

export const WeatherStats: FC = () => {
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

	const toggleIsSearchModalOpen = () => {
		setIsSearchModalOpen(!isSearchModalOpen);
	}

	return (
		<>
			<SearchModal isOpen={isSearchModalOpen} toggle={toggleIsSearchModalOpen} />
			<section className="bg-bluepurple-500 py-5 flex flex-col gap-10 w-screen xl:w-1/3">
				<header className="flex items-center justify-between px-3">
					<button onClick={toggleIsSearchModalOpen}>Search for places</button>
					<button className="rounded-full p-3">
						<MapPinIcon className="!text-opacity-100 icon" />
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
					<div className="flex flex-col gap-2 mt-10">
						<div className="flex">
							<h1 className="text-8xl font-normal">15</h1>
							<h3 className="flex items-end">°C</h3>
						</div>
						<h3 className="text-opacity-70 text-4xl">Shower</h3>
					</div>
				</main>
				<footer className="flex flex-col items-center mt-16 gap-3">
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
				<div className="flex items-end justify-end h-full">
					<p className="text-center">
						created by
						{" "}
						<a
							href="https://github.com/End313234"
							rel="noreferrer"
							target="_blank"
							className="underline font-bold font-credits"
						>End313234</a>
						{" "}
						- devChallenges.io
					</p>
				</div>
			</section>
		</>
	)
};
