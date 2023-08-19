import type { NextPage } from "next";
import Link from "next/link";
import styles from "./header.module.css";
const Header: NextPage = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <a className={styles.logo}>
          <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
          <div className={styles.name}>
            <div className={styles.reis}>REIS</div>
            <div className={styles.realState}>Real State</div>
          </div>
        </a>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <a className={styles.home}>HOME</a>
            <a className={styles.aboutUs}>ABOUT US</a>
            <Link className={styles.properties} href="/">
              PROPERTIES
            </Link>
            <a className={styles.aboutUs}>GALLERY</a>
            <a className={styles.aboutUs}>BLOG</a>
            <a className={styles.aboutUs}>CONTACT US</a>
            <a className={styles.aboutUs}>SEARCH</a>
          </div>
          <button className={styles.hamburger}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
