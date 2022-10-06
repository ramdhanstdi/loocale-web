import React, { useState } from 'react'
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';

const HERO_TEXT_AND_BG = [
	{
		text: 'Wilujeng Sumping, Warga Loocal!',
		background: '/hero-bg-1.jpg'
	},
	{
		text: 'Selamat Datang, Warga Loocal!',
		background: '/hero-bg-2.jpg'
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
		<div className='min-h-[544px] duration-500' style={{
			backgroundImage: `url(${HERO_TEXT_AND_BG[activeHeroText].background})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}}>
			<div className="max-w-[1280px] flex items-center gap-10 mx-auto min-h-[544px] px-16">
			<HeroTitle
				title={HERO_TEXT_AND_BG[activeHeroText].text}
				handleNext={handleNext}
				handlePrev={handlePrev}
				activeHeroText={activeHeroText}
			/>
			<HeroDescription></HeroDescription>
			</div>
			
		</div>
	)
}

export default Hero