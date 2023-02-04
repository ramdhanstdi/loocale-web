import { DurationObjectUnits } from "luxon";

export const getTimeDifferenceString = (differenceObject: DurationObjectUnits) => {
	if (differenceObject.years) {
		return `${differenceObject.years} tahun lalu`
	}
	if (differenceObject.months) {
		return `${differenceObject.months} bulan lalu`
	}
	if (differenceObject.days) {
		return `${differenceObject.days} hari lalu`
	}
	if (differenceObject.hours) {
		return `${differenceObject.hours} jam lalu`
	}
	if (differenceObject.minutes) {
		return `${differenceObject.minutes} menit lalu`
	}
	return ""
}