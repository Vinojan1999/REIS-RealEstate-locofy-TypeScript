import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./area-card.module.css";

type AreaCardType = {
  centerville?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propPadding?: CSSProperties["padding"];
  propBoxSizing?: CSSProperties["boxSizing"];
};

const AreaCard: NextPage<AreaCardType> = ({
  centerville,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propBackgroundImage, propPadding, propBoxSizing]);

  return (
    <Link className={styles.card1} href="/" style={card1Style}>
      <div className={styles.text}>
        <div className={styles.centerville}>{centerville}</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </Link>
  );
};

export default AreaCard;
