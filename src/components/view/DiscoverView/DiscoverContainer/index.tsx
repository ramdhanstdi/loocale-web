import React, { useEffect, useState } from 'react'

interface DiscoverContainerProps {
	children?: React.ReactNode;
}
const DiscoverContainer:React.FC<DiscoverContainerProps> = (props) => {

	return (
		<div className='left-[180px] right-[381px] top-[290px] shadow-md rounded-lg fixed overflow-y-auto'>
			{props.children}
		</div>
	)
}

export default DiscoverContainer