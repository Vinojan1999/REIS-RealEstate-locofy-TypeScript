import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property-card.module.css";

type PropertyCardType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsText2?: string;
  imageDimensionsText3?: string;
  imageDimensionsText4?: string;
  imageDimensionsText5?: string;
  imageDimensionsText6?: string;
  imageDimensionsText7?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propMaxWidth?: CSSProperties["maxWidth"];
};

const PropertyCard: NextPage<PropertyCardType> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensionsText6,
  imageDimensionsText7,
  propWidth,
  propFlex,
  propMinWidth,
  propMaxWidth,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      maxWidth: propMaxWidth,
    };
  }, [propWidth, propFlex, propMinWidth, propMaxWidth]);

  return (
    <div className={styles.card2} style={card2Style}>
      <img className={styles.propertyImageIcon} alt="" src={imageDimensions} />
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
          <img className={styles.carIcon} alt="" src={imageDimensionsText} />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src={imageDimensionsText2} />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src={imageDimensionsText3} />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.userChild} alt="" src={imageDimensionsText4} />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
        </div>
        <div className={styles.ctas}>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src={imageDimensionsText5}
            />
          </div>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src={imageDimensionsText6}
            />
          </div>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src={imageDimensionsText7}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
