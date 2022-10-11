import React, { useState } from 'react'
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import Image from 'next/image';

const HERO_TEXT_AND_BG = [
	{
		text: 'Selamat Datang, Warga Loocal!',
		background: '/hero-bg-2.jpg'
	},
	{
		text: 'Wilujeng Sumping, Warga Loocal!',
		background: '/hero-bg-1.jpg'
	},
	{
		text: 'Onomi Fakhai, Warga Loocal!',
		background: '/hero-bg-3.jpg'
	},
	{
		text: 'Sugeng Rawuh, Warga Loocal!',
		background: '/hero-bg-4.jpg'
	},
	{
		text: 'Koe Pontam, Warga Loocal!',
		background: '/hero-bg-5.jpg'
	},
	{
		text: 'Salamaik Datang, Warga Loocal!',
		background: '/hero-bg-6.jpg'
	},
]
const Hero = () => {
	const [ activeHeroText, setActiveHeroText ] = useState(0);
	const handleNext = () => {
		if (activeHeroText < 5) {
			setActiveHeroText(activeHeroText + 1)
		}
	}
	const handlePrev = () => {
		if (activeHeroText > 0) {
			setActiveHeroText(activeHeroText - 1)
		}
	}

	return (
		<section className='min-h-[544px] duration-500' style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${HERO_TEXT_AND_BG[activeHeroText].background})`,
			backgroundRepeat: 'no-repeat',
			backgroundColor: '',
			backgroundPosition: 'center',
			backgroundSize: 'cover'
		}}>
			<div className="sm:max-w-[1280px] flex flex-col sm:flex-row items-center gap-4 sm:gap-10 mx-auto min-h-[544px] px-4 sm:px-16">
			<HeroTitle
				title={HERO_TEXT_AND_BG[activeHeroText].text}
				handleNext={handleNext}
				handlePrev={handlePrev}
				activeHeroText={activeHeroText}
			/>
			<HeroDescription></HeroDescription>
			</div>
			
		</section>
	)
}

export default Hero