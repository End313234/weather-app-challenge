import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { convertDegreesToCardinal } from "utils/convert-degrees-to-cardinal";

interface HighlightCardProps {
	type: 0 | 1 | 2 | 3;
}

export const HighlightCard: FC<HighlightCardProps> = ({ type }) => {
	const cardTypes = [
		{
			type: "Wind status",
			scale: "m/s"
		},
		{
			type: "Humidity",
			scale: "%"
		},
		{
			type: "Visibility",
			scale: "km"
		},
		{
			type: "Air pressure",
			scale: "hPa"
		}
	]

	const cardType = cardTypes[type]

	return (
		<div className="bg-bluepurple-500 flex items-center gap-5 px-20 flex-1 min-w-full py-5 justify-center flex-col rounded-sm transition-all hover:-translate-y-1 xl:min-w-fit">
			<h3 className="text-xl">{cardType.type}</h3>
			<div className="flex">
				<h1 className="text-7xl">10</h1>
				<h2 className="flex justify-end items-end text-3xl font-medium text-opacity-70">{cardType.scale}</h2>
			</div>
			{type === 0 && (
				<div className="flex items-center gap-2">
					<div className="rounded-full bg-white bg-opacity-30 p-4">
						<PaperAirplaneIcon className="icon !text-opacity-100 rotate-[98deg]" />
					</div>
					<h2 className="font-medium text-xl">{convertDegreesToCardinal(-150)}</h2>
				</div>
			)}

			{type === 1 && (
				<div>
					<div className="text-zinc-200 text-opacity-70 flex justify-between m-0 p-0 translate-y-2">
						<span>0</span>
						<span>50</span>
						<span>100</span>
					</div>
					<progress
						value={74}
						max={100}
					/>
				</div>
			)}
		</div>
	)
};
