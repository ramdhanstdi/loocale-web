import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/view/HomeView/Hero";
import DiscoverHome from "src/components/view/HomeView/DiscoverHome";
import ShareHome from "src/components/view/HomeView/ShareHome";
import CommunityHome from "src/components/view/HomeView/CommunityHome";
import CallToAction from "src/components/view/HomeView/CallToAction";
import Footer from "@components/layout/Footer";
import axios from "axios";
import { BE_URL } from "Config";
import { CommunityListInterface, DiscoverListInterface } from "src/models/Home";

interface HomeProps {
  discoverList: DiscoverListInterface[];
  communityList: CommunityListInterface[];
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Loocale</title>
      </Head>
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

export async function getServerSideProps() {
  try {
    const discover = await axios.get(BE_URL + "/discover");
    const community = await axios.get(BE_URL + "/connect");
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
