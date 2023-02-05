import React, { useEffect, useState } from 'react'
import getPosts from 'src/services/Timeline';

interface TimelineContainerProps {
	children?: React.ReactNode;
}
const TimelineContainer:React.FC<TimelineContainerProps> = (props) => {

	return (
		<div className='left-[180px] right-[381px] top-[152px] shadow-md rounded-lg fixed'>
			{props.children}
		</div>
	)
}

export default TimelineContainer