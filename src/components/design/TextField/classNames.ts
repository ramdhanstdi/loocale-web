import { TextFieldProps } from ".";

const createTextFieldInputClassNames = (props: TextFieldProps) => {
	let className = "focus:outline-none ";
	if (props.size == "sm") {
		className += "sm:h-[36px] sm:placeholder:text-xs sm:text-xs "
	} else {
		className += "h-[44px] sm:h-[48px] placeholder:text-xs text-xs sm:placeholder:text-base sm:text-base "
	}
	if (props.variant === "outlined") {
		className += "focus:outline-0 border-b-2 pl-1 pr-4 border-secondary-500 placeholder:text-xs "
	} else {
		className += `bg-grayscale-50 px-3  outline-0  transition-all `
		if (props.value) {
			className += "pb-3 pt-5 "
		}
	}
	if (props.className) {
		className += props.className
	}
	return className
}

export default createTextFieldInputClassNames;