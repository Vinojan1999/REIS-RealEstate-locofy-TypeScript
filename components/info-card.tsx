import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./info-card.module.css";

type InfoCardType = {
  listingImageId?: string;
  homeActionText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const InfoCard: NextPage<InfoCardType> = ({
  listingImageId,
  homeActionText,
  propWidth,
}) => {
  const sellYourHomeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={listingImageId} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{homeActionText}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className={styles.readMore}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
