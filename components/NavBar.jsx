import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const HandleMenuOnClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}></div>
      {/* <div className={clicked? `${{styles.menu} ${styles["burger-clicked"]}}`:`${styles.menu}`}> */}
      <div
        className={
          clicked ? `${styles.menu} ${styles["burger-clicked"]}` : styles.menu
        }
      >
        <ul>
          <div>
            {/* <Link href="/properties"> */}
            PROPERTIES
            {/* </Link> */}
          </div>
          <div>
            {/* <Link href="/agents"> */}
            OUR AGENTS
            {/* </Link> */}
          </div>
          <div>
            <Link href="/blog">BLOG</Link>
          </div>
          <div>
            <Link href="/about">ABOUT US</Link>
          </div>
          {/* <li> */}
          <button>CONTACT US</button>
          {/* </li> */}
        </ul>
      </div>
      <div className={styles["burger-menu"]} onClick={HandleMenuOnClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </header>
  );
};

export default NavBar;
