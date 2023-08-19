import type { NextPage } from "next";
import AreaCard from "./area-card";
import styles from "./area-container.module.css";
const AreaContainer: NextPage = () => {
  return (
    <div className={styles.propertiesByAreaImagesSect}>
      <div className={styles.description}>
        <div className={styles.propertiesByArea}>Properties by Area</div>
        <div className={styles.vestibulumAnteIpsum}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardwrapper}>
          <div className={styles.row1}>
            <AreaCard centerville="Centerville" />
            <AreaCard
              centerville="Centerville"
              propBackgroundImage="url('/card-2@3x.png')"
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              centerville="Centerville"
              propBackgroundImage="url('/card-3@3x.png')"
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className={styles.row2}>
            <AreaCard
              centerville="Arlington"
              propBackgroundImage="url('/card-4@3x.png')"
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <AreaCard
              centerville="Centerville"
              propBackgroundImage="url('/card-5@3x.png')"
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
