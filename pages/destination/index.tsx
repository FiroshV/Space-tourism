import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Destination.module.css";
import { IData } from "../../lib/Data.model";
import { useEffect, useState } from "react";

enum Planet {
  MOON = "Moon",
  MARS = "Mars",
  EUROPA = "Europa",
  TITAN = "Titan",
}

const Destination: NextPage = ({ data }: any) => {
  const [planet, setPlanet] = useState<Planet>(Planet.MOON);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [travel, setTravel] = useState<string>("");

  useEffect(() => {
    let _tempData: IData = data;

    _tempData.destinations.forEach((destination: any) => {
      if (destination.name === planet) {
        setImage(destination.images.png);
        setDescription(destination.description);
        setDistance(destination.distance);
        setTravel(destination.travel);
      }
    });
  }, []);

  const updateContent = (_planet: Planet) => {
    let _tempData: IData = data;

    _tempData.destinations.forEach((destination: any) => {
      if (destination.name === _planet) {
        setPlanet(_planet);
        setImage(destination.images.png);
        setDescription(destination.description);
        setDistance(destination.distance);
        setTravel(destination.travel);
      }
    });
  };

  const destNav = (_planet: Planet): boolean => {
    if (planet === _planet) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={styles["destination-bg"]}>
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
            <div className={styles["nav-link-box"]}>
              <Link href="/">
                <a>
                  <span className={styles["nav-link-num"]}>00</span>
                  <span className={styles["nav-link-name"]}>Home</span>
                </a>
              </Link>
            </div>
            <div className={styles["nav-link-box"]} aria-selected={true}>
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
          <div>
            <div className={styles.header}>
              <span className={styles["header-num"]}>01</span>
              <span className={`${styles["header-title"]} uppercase`}>
                Pick your destination
              </span>
            </div>
            <div className={styles["destination-img"]}>
              <picture>
                <img src={image} />
              </picture>
            </div>
          </div>
          <div className={styles.info}>
            <div className={`${styles["destination-nav-links"]} uppercase`}>
              <div
                className={styles["destination-nav-link-box"]}
                aria-selected={destNav(Planet.MOON)}
                onClick={() => updateContent(Planet.MOON)}
              >
                <span className={styles["nav-link-name"]}>Moon</span>
              </div>
              <div
                className={styles["destination-nav-link-box"]}
                aria-selected={destNav(Planet.MARS)}
                onClick={() => updateContent(Planet.MARS)}
              >
                <span className={styles["nav-link-name"]}>Mars</span>
              </div>
              <div
                className={styles["destination-nav-link-box"]}
                aria-selected={destNav(Planet.EUROPA)}
                onClick={() => updateContent(Planet.EUROPA)}
              >
                <span className={styles["nav-link-name"]}>Europa</span>
              </div>
              <div
                className={styles["destination-nav-link-box"]}
                aria-selected={destNav(Planet.TITAN)}
                onClick={() => updateContent(Planet.TITAN)}
              >
                <span className={styles["nav-link-name"]}>Titan</span>
              </div>
            </div>
            <h1
              className={`ff-sans-cond text-white fs-900 fw-400 d-block uppercase`}
            >
              {planet}
            </h1>
            <p
              className={`${styles["mt-10"]} ff-sans-normal text-white fs-500 fw-400 `}
            >
              {description}
            </p>
            <div className={styles.separator}></div>
            <div className={`${styles["fact"]} flex`}>
              <div className={`${styles.distance} uppercase`}>
                <div className={styles.title}>AVG. DISTANCE</div>
                <div className={styles.value}>{distance}</div>
              </div>
              <div className={`${styles.time} uppercase`}>
                <div className={styles.title}>Est. travel time</div>
                <div className={styles.value}>{travel}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Destination;
