import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
			<Navbar></Navbar>
			<Hero></Hero>
    </div>
  )
}

export default Home
