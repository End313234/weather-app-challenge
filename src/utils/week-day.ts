export const getWeekDayFromDate = (date: string) => {
	const weekDay = new Date(date).toLocaleString("en-us", { weekday: "long" });

	return weekDay.slice(0, 3);
};
