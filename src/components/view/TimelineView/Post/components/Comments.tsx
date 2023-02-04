import Image from 'next/image'
import React from 'react'

const Comments = () => {
	return (
		<div className='flex gap-2 mb-2'>
			<Image src={"/image_fakhri.jpg"} alt={"profile pic"} width={40} height={40} className={"rounded-full"}/>
			<div className="bg-grayscale-50 pl-4 pr-3 pt-[2px] pb-[10px] w-[224px]">
				<div className="flex justify-between text-[9px]">
					<p className='font-bold text-primary-800'>@FakhrDwi</p>
					<p className='font-light text-grayscale-400'>1 jam</p>
				</div>
				<p className='text-[9px] font-light'>Mantap mang erik!</p>
			</div>
		</div>
	)
}

export default Comments