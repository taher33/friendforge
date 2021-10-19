import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>landing page</title>
        <meta name="description" content="home page" />
      </Head>
      <main className={styles.mainPage}>
        <section className={styles.heroSection}>
          <div className={styles.textWrapper}>
            <h1>Be Inspired. Get Involved.</h1>
            <p>
              A creative community that keeps artists and craft enthusiasts
              inspired and connected
            </p>
            <Button primary>get started</Button>
            <Button>Learn More</Button>
          </div>
          <div className={styles.imgWrapper}>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="./hero.png" alt="conncted peopel" />
            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
