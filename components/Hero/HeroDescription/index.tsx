import React from 'react'
import Image from 'next/image';

const HeroDescription = () => {
	return (
		<div className="flex flex-col text-white items-start">
			<p className='mb-8'>Loocale merupakan platform digital untuk wisatawan yang ingin menemukan pengalaman wisata baru dan berbeda dari sebelumnya. Yuk jelajahi wisata Indonesia bersama Loocale!</p>
			<p className='mb-2'>Download <span className='font-bold'>Loocale</span> di</p>
			<Image src='/google-download.svg' alt='Download from google play store' width={163} height={48}></Image>
		</div>

	)
}

export default HeroDescription