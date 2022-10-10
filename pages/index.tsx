import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import DiscoverHome from '@components/DiscoverHome'
import ShareHome from '@components/ShareHome'

const Home: NextPage = () => {
  return (
    <div>
			<Navbar/>
			<Hero/>
			<DiscoverHome/>
			<ShareHome/>
    </div>
  )
}

export default Home
