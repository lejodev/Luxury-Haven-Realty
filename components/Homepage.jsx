import React from "react";
import styles from "../styles/Homepage.module.scss";
import Image from "next/image";
import house from "../public/images/housebanner.jpg";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.banner}>
        {/* This image will be hosted on wordpress */}
        <div className={styles["img-container"]}>
          <Image
            className={styles.image}
            src={house}
            alt="house"
            // objectFit="cover"
          />
        </div>
        <div className={styles["sellingpoint-container"]}>
          <p className={styles.sellingpoint}>
            "Discover your dream home with Luxury Haven Realty - your gateway to
            exclusive, luxurious properties in the most coveted locations."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
