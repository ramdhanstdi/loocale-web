import React from 'react'
import Carousel from './Carousel';
import Card from './Carousel/Card';

const DISCOVER_LIST = [
	{
		image: '/pulau-marabatua.jpg',
		location: 'Pulau Marabatua, Kab. Kotabaru'
	},
	{
		image: '/desa-batara.jpg',
		location: 'Desa Batara, Banten'
	},
	{
		image: '/kampung-warna.jpg',
		location: 'Kampung Warna, Malang'
	},
	{
		image: '/danau-situpatenggang.jpg',
		location: 'Danau Situpatenggang, Bandung'
	},
	{
		image: '/pecatu-badung.jpg',
		location: 'Pecatu, Badung'
	},
	{
		image: '/tumpak-sewu.jpg',
		location: 'Air Terjun Tumpak Sewu, Lumajang'
	},
	{
		image: '/stasiun-mrt.jpg',
		location: 'Stasiun MRT, Jakarta'
	},
	{
		image: '/masjid-baiturrahman.jpg',
		location: 'Masjid Baiturrahman'
	},
	{
		image: '/kawah-ijen.jpg',
		location: 'Kawah Ijen, Banyuwangi'
	},
	{
		image: '/pantai-klingking.jpg',
		location: 'Pantai Klingking, Kab. Klungkung'
	},
	{
		image: '/grand-luley.jpg',
		location: 'Grand Luley, Manado'
	},
	{
		image: '/lawang-sewu.jpg',
		location: 'Lawang Sewu, Semarang'
	},
	{
		image: '/situ-gunung.jpg',
		location: 'Situ Gunung, Sukabumi'
	},
	{
		image: '/gunung-bromo.jpg',
		location: 'Gunung Bromo, Pasuruan'
	},
	{
		image: '/jembrana.jpg',
		location: 'Jembrana, Bali'
	},
]

const DiscoverHome = () => {
	return (
		<section className='max-w-[1280px] mx-auto flex flex-col pt-[70px] px-16 text-center pb-[80px]'>
			<h1 className='font-bold text-primary-800 text-[68px] mb-3'>Discover</h1>
			<p className='text-[21px] mb-8'>New and Exciting Places From All Over Indonesia</p>
			<Carousel displayPerDot={3}>
				{DISCOVER_LIST.map((item) => (
					<Card image={item.image} location={item.location} key={item.location} className={'duration-500'}/>
				))}
			</Carousel>
		</section>
	)
}

export default DiscoverHome