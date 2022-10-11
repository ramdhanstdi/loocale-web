import React from 'react'
import useWindowDimensions from 'utils/hooks';
import Carousel from './Carousel';
import Card from './Carousel/Card';
import ResponsiveCard from './ResponsiveCard';

const DISCOVER_LIST = [
	{
		image: '/pulau-marabatua.jpg',
		location: 'Pulau Marabatua, Kab. Kotabaru',
		href: '#'
	},
	{
		image: '/desa-batara.jpg',
		location: 'Desa Batara, Banten',
		href: '#'
	},
	{
		image: '/kampung-warna.jpg',
		location: 'Kampung Warna, Malang',
		href: '#'
	},
	{
		image: '/danau-situpatenggang.jpg',
		location: 'Danau Situpatenggang, Bandung',
		href: '#'
	},
	{
		image: '/pecatu-badung.jpg',
		location: 'Pecatu, Badung',
		href: '#'
	},
	{
		image: '/tumpak-sewu.jpg',
		location: 'Air Terjun Tumpak Sewu, Lumajang',
		href: '#'
	},
	{
		image: '/stasiun-mrt.jpg',
		location: 'Stasiun MRT, Jakarta',
		href: '#'
	},
	{
		image: '/masjid-baiturrahman.jpg',
		location: 'Masjid Baiturrahman',
		href: '#'
	},
	{
		image: '/kawah-ijen.jpg',
		location: 'Kawah Ijen, Banyuwangi',
		href: '#'
	},
	{
		image: '/pantai-klingking.jpg',
		location: 'Pantai Klingking, Kab. Klungkung',
		href: '#'
	},
	{
		image: '/grand-luley.jpg',
		location: 'Grand Luley, Manado',
		href: '#'
	},
	{
		image: '/lawang-sewu.jpg',
		location: 'Lawang Sewu, Semarang',
		href: '#'
	},
	{
		image: '/situ-gunung.jpg',
		location: 'Situ Gunung, Sukabumi',
		href: '#'
	},
	{
		image: '/gunung-bromo.jpg',
		location: 'Gunung Bromo, Pasuruan',
		href: '#'
	},
	{
		image: '/jembrana.jpg',
		location: 'Jembrana, Bali',
		href: '#'
	},
]

const DiscoverHome = () => {

	return (
		<section id='discover' className='max-w-[1280px] mx-auto flex flex-col pt-6 sm:pt-[70px] px-4 sm:px-16 text-center sm:pb-[80px]'>
			<h1 className='font-bold text-primary-800 sm:text-[68px] text-[38px] mb-3'>Discover</h1>
			<p className='sm:text-[21px] font-light mb-8'>New and Exciting Places From All Over Indonesia</p>
			<Carousel displayPerDot={3} className='hidden sm:flex'>
				{DISCOVER_LIST.map((item) => (
					<Card image={item.image} location={item.location} key={item.location} className={'duration-500'}/>
				))}
			</Carousel>
			<div className="flex flex-wrap gap-x-6 gap-y-4 sm:hidden justify-center">
			{DISCOVER_LIST.slice(0,4).map((item) => (
				<ResponsiveCard background={item.image} title={item.location} key={item.location}></ResponsiveCard>
			))}
			</div>
			
		</section>
	)
}

export default DiscoverHome