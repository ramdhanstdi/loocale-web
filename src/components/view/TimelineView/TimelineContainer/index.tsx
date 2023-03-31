import React, { useEffect, useState } from 'react'

interface TimelineContainerProps {
	children?: React.ReactNode;
}
const TimelineContainer:React.FC<TimelineContainerProps> = (props) => {

	return (
		<div className='shadow-md rounded-lg mt-6'>
			{props.children}
		</div>
	)
}

export default TimelineContainer