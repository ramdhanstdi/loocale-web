import { DurationObjectUnits } from "luxon";

export const getTimeDifferenceString = (differenceObject: DurationObjectUnits) => {
	console.log(differenceObject)
	if ((differenceObject.years)) {
		return `${Math.floor(differenceObject.years)} tahun lalu`
	}
	if (differenceObject.months) {
		return `${Math.floor(differenceObject.months)} bulan lalu`
	}
	if (differenceObject.days) {
		return `${Math.floor(differenceObject.days)} hari lalu`
	}
	if (differenceObject.hours) {
		return `${Math.floor(differenceObject.hours)} jam lalu`
	}
	if (differenceObject.minutes) {
		return `${Math.floor(differenceObject.minutes)} menit lalu`
	}
	return "Baru saja"
}