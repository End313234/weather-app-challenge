import { Dispatch, FC, SetStateAction } from "react";

interface TemperatureScaleSelectorProps {
	scale: number;
	toggleScale: Dispatch<SetStateAction<number>>;
}

export const TemperatureScaleSelector: FC<TemperatureScaleSelectorProps> = ({ scale, toggleScale }) => {
	const toggler = (id: number) => () => {
		toggleScale(id)
	}
	return (
		<div className="flex gap-4">
			<button
				onClick={toggler(0)}
				className={`rounded-full px-4 h-fit font-bold ${scale ? "bg-blurple-500" : "bg-zinc-200 text-bluepurple-500"}`}
			>
				°C
			</button>
			<button
				onClick={toggler(1)}
				className={`rounded-full px-4 h-fit font-bold ${scale ? "bg-zinc-200 text-bluepurple-500" : "bg-blurple-500"}`}
			>
				°F
			</button>
		</div>
	)
};
