import Cookies from "js-cookie";
import { DurationObjectUnits } from "luxon";
import jwtDecode from "jwt-decode";
import { UserDataInterface } from "src/models/Timeline";

export const getTimeDifferenceString = (differenceObject: DurationObjectUnits) => {
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

export const getCurrentUser = () => {
	const token = Cookies.get("token");
	if (!token) {
		return null
	}
	const res = jwtDecode(token);
	return res as UserDataInterface
}