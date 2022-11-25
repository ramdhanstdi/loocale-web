import React from 'react'

interface Props {
	onClick?: () => void;
	active?: boolean
}
const Dots:React.FC<Props> = (props) => {
	return (
		<div className={`w-3 h-3 rounded-full ${props.active ? 'bg-secondary-500' : 'bg-gray-300'} hover:cursor-pointer hover:bg-gray-500`} onClick={props.onClick}></div>
	)
}

export default Dots