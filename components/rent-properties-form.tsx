import type { NextPage } from "next";
import PropertyRentCard from "./property-rent-card";
import styles from "./rent-properties-form.module.css";
const RentPropertiesForm: NextPage = () => {
  return (
    <div className={styles.latestPropertiesOfRentCard}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <div className={styles.latestPropertiesOf}>
            Latest Properties of Rent
          </div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cardRow}>
          <PropertyRentCard />
          <PropertyRentCard propBackgroundImage="url('/card-21@3x.png')" />
          <PropertyRentCard propBackgroundImage="url('/card-31@3x.png')" />
          <PropertyRentCard propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <button className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </button>
    </div>
  );
};

export default RentPropertiesForm;
