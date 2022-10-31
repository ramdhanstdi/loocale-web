import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/HomeView/Hero";
import DiscoverHome from "@components/HomeView/DiscoverHome";
import ShareHome from "@components/HomeView/ShareHome";
import CommunityHome from "@components/HomeView/CommunityHome";
import CallToAction from "@components/HomeView/CallToAction";
import Footer from "@components/Footer";
import axios from "axios";
import { BE_URL } from "Config";
import { CommunityListInterface, DiscoverListInterface } from "models/Home";

interface HomeProps {
  discoverList: DiscoverListInterface[];
  communityList: CommunityListInterface[];
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiscoverHome discoverList={props.discoverList} />
      <ShareHome />
      <CommunityHome communityList={props.communityList} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const discover = await axios.get(BE_URL + "/loocale/discover");
    const community = await axios.get(BE_URL + "/loocale/connect");
    const discoverList = discover.data.data;
    const communityList = community.data.data;
    return {
      props: {
        discoverList,
        communityList,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
    };
  }
}

export default Home;
