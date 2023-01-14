import { isBetweenRange, NumericRange } from "./range";

export const convertDegreesToCardinal = (degrees: number) => {
	const degreesModule = Math.abs(degrees);

	const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
	const directionsWithDegrees = directions.map((direction, index) => {
		return {
			direction,
			degrees: 0 + 22.5 * index
		}
	})
	const quantityOfDirections = directions.length;

	let rightDirectionIndex = -1;

	directionsWithDegrees.forEach((element, index) => {
		const nextIndex = index + 1 === quantityOfDirections ? index : index + 1
		const directionRange: NumericRange = {
			minimum: element.degrees,
			maximum: directionsWithDegrees[nextIndex].degrees
		}

		if (isBetweenRange(directionRange, degreesModule)) {
			rightDirectionIndex = index;
		}
	})

	return directions[rightDirectionIndex];
}
