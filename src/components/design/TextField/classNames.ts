import { TextFieldProps } from ".";

const createTextFieldInputClassNames = (props: TextFieldProps) => {
	let className = "";
	if (props.fullWidth) {
		className += "w-full "
	}
	if (props.size == "sm") {
		className += "sm:h-[36px] sm:placeholder:text-xs sm:text-xs "
	}
	if (props.variant === "outlined") {
		className += "focus:outline-0 border-b-2 pl-1 pr-4 border-secondary-500 placeholder:text-xs "
	} else {
		className += `bg-grayscale-50 rounded-md px-3 h-[44px] outline-0 sm:h-[48px] placeholder:text-xs text-xs sm:placeholder:text-base sm:text-base transition-all `
		if (props.value) {
			className += "pb-3 pt-5 "
		}
	}
	return className
}

export default createTextFieldInputClassNames;