import type { NextPage } from "next";
import PropertyCardAction from "./property-card-action";
import PropertyCard from "./property-card";
import styles from "./properties-grid-container.module.css";
const PropertiesGridContainer: NextPage = () => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.cards}>
        <PropertyCardAction />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
          imageDimensionsText="/car1.svg"
          imageDimensionsText2="/bathtub1.svg"
          imageDimensionsText3="/arrowsout.svg"
          imageDimensionsText4="/ellipse-1@2x.png"
          imageDimensionsText5="/sharenetwork1.svg"
          imageDimensionsText6="/heart.svg"
          imageDimensionsText7="/plus1.svg"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
          imageDimensionsText="/car1.svg"
          imageDimensionsText2="/bathtub1.svg"
          imageDimensionsText3="/arrowsout1.svg"
          imageDimensionsText4="/ellipse-1@2x.png"
          imageDimensionsText5="/sharenetwork2.svg"
          imageDimensionsText6="/heart1.svg"
          imageDimensionsText7="/plus2.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
          imageDimensionsText="/car2.svg"
          imageDimensionsText2="/bathtub1.svg"
          imageDimensionsText3="/arrowsout1.svg"
          imageDimensionsText4="/ellipse-1@2x.png"
          imageDimensionsText5="/sharenetwork2.svg"
          imageDimensionsText6="/heart1.svg"
          imageDimensionsText7="/plus2.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          imageDimensionsText="/car2.svg"
          imageDimensionsText2="/bathtub1.svg"
          imageDimensionsText3="/arrowsout1.svg"
          imageDimensionsText4="/ellipse-1@2x.png"
          imageDimensionsText5="/sharenetwork2.svg"
          imageDimensionsText6="/heart1.svg"
          imageDimensionsText7="/plus2.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc4@2x.png"
          imageDimensionsText="/car3.svg"
          imageDimensionsText2="/bathtub2.svg"
          imageDimensionsText3="/arrowsout2.svg"
          imageDimensionsText4="/ellipse-11@2x.png"
          imageDimensionsText5="/sharenetwork3.svg"
          imageDimensionsText6="/heart2.svg"
          imageDimensionsText7="/plus3.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc5@2x.png"
          imageDimensionsText="/car3.svg"
          imageDimensionsText2="/bathtub2.svg"
          imageDimensionsText3="/arrowsout3.svg"
          imageDimensionsText4="/ellipse-11@2x.png"
          imageDimensionsText5="/sharenetwork4.svg"
          imageDimensionsText6="/heart3.svg"
          imageDimensionsText7="/plus4.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
        <PropertyCard
          imageDimensions="/unsplashrlwe8f8anoc6@2x.png"
          imageDimensionsText="/car4.svg"
          imageDimensionsText2="/bathtub2.svg"
          imageDimensionsText3="/arrowsout3.svg"
          imageDimensionsText4="/ellipse-11@2x.png"
          imageDimensionsText5="/sharenetwork4.svg"
          imageDimensionsText6="/heart3.svg"
          imageDimensionsText7="/plus4.svg"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
          propMaxWidth="unset"
        />
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
