export interface NumericRange {
	minimum: number;
	maximum: number;
}

export const isBetweenRange = ({ minimum, maximum }: NumericRange, x: number) => x >= minimum && x <= maximum
