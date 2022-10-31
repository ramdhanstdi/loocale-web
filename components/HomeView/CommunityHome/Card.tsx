import React from 'react'

interface Props {
	background: string
	title: string
}
const Card:React.FC<Props> = (props) => {
	return (
		<div className='flex items-center justify-center w-[260px] font-bold text-[21px] px-auto py-11 text-white rounded-2xl whitespace-nowrap' style={{
			backgroundImage: `url(${props.background})`,
			textShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
		}}>{props.title}</div>
	)
}

export default Card