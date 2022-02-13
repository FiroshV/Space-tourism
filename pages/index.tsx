import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles["home-bg"]}>
      <Head>
        <title>Space Tourism</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <div className={styles["flex-center"]}>
          <div className={styles.logo}>
            <picture>
              <img src="/shared/logo.svg" />
            </picture>
          </div>
          <div className={styles["nav-line"]}></div>
          <div className={`${styles["nav-links"]} uppercase`}>
            <div className={styles["nav-link-box"]}  aria-selected={true}>
              <Link href="/" aria-selected={true}>
                <a>
                  <span className={styles["nav-link-num"]}>00</span>
                  <span className={styles["nav-link-name"]}>Home</span>
                </a>
              </Link>
            </div>
            <div className={styles["nav-link-box"]}>
              <Link href="/destination">
                <a>
                  <span className={styles["nav-link-num"]}>01</span>
                  <span className={styles["nav-link-name"]}>Destination</span>
                </a>
              </Link>
            </div>
            <div className={styles["nav-link-box"]}>
              <Link href="/crew">
                <a>
                  <span className={styles["nav-link-num"]}>02</span>
                  <span className={styles["nav-link-name"]}>Crew</span>
                </a>
              </Link>
            </div>
            <div className={styles["nav-link-box"]}>
              <Link href="/technology">
                <a>
                  <span className={styles["nav-link-num"]}>03</span>
                  <span className={styles["nav-link-name"]}>Technology</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={`grid ${styles.content}`}>
          <div className={styles.info}>
            <h1 className={`ff-sans-cond text-white fs-700 fw-400 `}>
              SO, YOU WANT TO TRAVEL TO{" "}
              <span className={`d-block fs-900`}>SPACE</span>
            </h1>
            <p
              className={`${styles["mt-10"]} ff-sans-normal text-white fs-500 fw-400 `}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={`${styles["large-button"]} bg-white uppercase`}>
            Explore
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
