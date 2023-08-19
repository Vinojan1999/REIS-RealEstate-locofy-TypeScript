import type { NextPage } from "next";
import InfoCard from "./info-card";
import styles from "./feature-container.module.css";
const FeatureContainer: NextPage = () => {
  return (
    <div className={styles.propertiesByAreaFeatureCar}>
      <div className={styles.areaContent}>
        <div className={styles.areaLabels}>
          <div className={styles.areaTitle}>Properties by Area</div>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.propertiesRow}>
          <InfoCard
            listingImageId="/icon.svg"
            homeActionText="Sell your home"
          />
          <InfoCard
            listingImageId="/icon1.svg"
            homeActionText="Rent your home"
            propWidth="312px"
          />
          <InfoCard
            listingImageId="/icon2.svg"
            homeActionText="Buy a home"
            propWidth="unset"
          />
          <InfoCard
            listingImageId="/icon3.svg"
            homeActionText="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
