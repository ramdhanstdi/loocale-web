import React from 'react';
import useWindowDimensions from 'utils/hooks';
import Card from './Card'

const COMMUNITY_LIST = [
	{
		background: '/bike_touring.png',
		title: 'Bike Touring'
	},
	{
		background: '/hiking.png',
		title: 'Hiking'
	},
	{
		background: '/camping.png',
		title: 'Camping'
	},
	{
		background: '/temple.png',
		title: 'Temple Admirer'
	},
	{
		background: '/architecture.png',
		title: 'Architecture'
	},
	{
		background: '/spicy.png',
		title: 'Spicy Culinary'
	},
	{
		background: '/traditional.png',
		title: 'Traditional Culinary'
	},
	{
		background: '/vegan.png',
		title: 'Vegan On Look'
	},
	{
		background: '/chicken.png',
		title: 'Chicken Lovers'
	},
	{
		background: '/meat.png',
		title: 'Meat No. 1'
	},
	{
		background: '/coffee.png',
		title: 'Coffee Experts'
	},
]

const CommunityHome = () => {
	const { height, width } = useWindowDimensions();
	const shownCommunity = width && (width < 702) ? COMMUNITY_LIST.slice(0, 3) : COMMUNITY_LIST;
	return (
		<section id='community' className='max-w-[1280px] mx-auto flex flex-col pt-6 sm:pt-[70px] px-8 sm:px-16 text-center pb-[48px]'>
			<h1 className='font-bold text-primary-800 text-[38px] sm:text-[68px] mb-3'>Connect</h1>
			<p className='font-light sm:text-[21px] mb-8'>with Communities of Your Interest!</p>
			<div className="flex flex-wrap gap-x-9 gap-y-5 justify-center">
				{shownCommunity.map((item) => (
					<Card background={item.background} title={item.title} key={item.title}></Card>
				))}
				<div className="w-[260px] sm:border-4 sm:border-secondary-500 rounded-2xl flex items-center justify-center sm:font-bold text-secondary-500 sm:text-[21px]">
				{'Selengkapnya >'}
				</div>
			</div>
			
			
		</section>
	)
}

export default CommunityHome