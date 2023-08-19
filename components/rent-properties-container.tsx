import type { NextPage } from "next";
import PropertyCard from "./property-card";
import styles from "./rent-properties-container.module.css";
const RentPropertiesContainer: NextPage = () => {
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
        <div className={styles.cardsRow}>
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout4.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork5.svg"
            imageDimensionsText6="/heart4.svg"
            imageDimensionsText7="/plus5.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc8@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout4.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork5.svg"
            imageDimensionsText6="/heart4.svg"
            imageDimensionsText7="/plus5.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc9@2x.png"
            imageDimensionsText="/car6.svg"
            imageDimensionsText2="/bathtub3.svg"
            imageDimensionsText3="/arrowsout5.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork6.svg"
            imageDimensionsText6="/heart5.svg"
            imageDimensionsText7="/plus6.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc10@2x.png"
            imageDimensionsText="/car6.svg"
            imageDimensionsText2="/bathtub4.svg"
            imageDimensionsText3="/arrowsout5.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork7.svg"
            imageDimensionsText6="/heart6.svg"
            imageDimensionsText7="/plus7.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
        </div>
      </div>
      <button className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
