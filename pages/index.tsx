import type { NextPage } from "next";
import Head from "next/head";
import Homepage from "../modules/homepage";
import Layout from "../modules/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Restaurant Management</title>
                <meta name="description" content="In deployment" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Homepage />
            </Layout>
        </div>
    );
};

export default Home;
