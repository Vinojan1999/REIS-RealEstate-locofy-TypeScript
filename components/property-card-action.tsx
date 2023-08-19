import type { NextPage } from "next";
import styles from "./property-card-action.module.css";
const PropertyCardAction: NextPage = () => {
  return (
    <div className={styles.card1}>
      <img
        className={styles.propertyImageIcon}
        alt=""
        src="/unsplashrlwe8f8anoc@2x.png"
      />
      <div className={styles.propertyName}>
        <div className={styles.alliumPlaceOrlando}>
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.div}>$ 590,693</div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/car.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/bathtub.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.userChild} alt="" src="/ellipse-1@2x.png" />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
        </div>
        <div className={styles.ctas}>
          <button className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src="/sharenetwork.svg"
            />
          </button>
          <button className={styles.share}>
            <img className={styles.sharenetworkIcon} alt="" src="/heart.svg" />
          </button>
          <button className={styles.share}>
            <img className={styles.sharenetworkIcon} alt="" src="/plus.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardAction;
