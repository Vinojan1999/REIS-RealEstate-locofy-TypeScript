import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./hero.module.css";
const Hero: NextPage = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionContents}>
        <div className={styles.text}>
          <div className={styles.findYourDream}>Find Your Dream Home</div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.rentsale}>
          <div className={styles.tabs}>
            <button className={styles.rent}>
              <div className={styles.search}>Rent</div>
            </button>
            <button className={styles.sale}>
              <div className={styles.sale1}>Sale</div>
            </button>
          </div>
          <div className={styles.formwrapper}>
            <div className={styles.formcontainer}>
              <div className={styles.locations}>
                <div className={styles.locations1}>Locations</div>
                <Dropdown
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "Colombo" },
                          { value: "Jaffna" },
                          { value: "Kandy" },
                        ] as any
                      ).map((option: any, index: number) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className={styles.propertyType}>
                <div className={styles.propertyType1}>Property Type</div>
                <Dropdown
                  className={styles.dropdownlink}
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ] as any
                      ).map((option: any, index: number) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className={styles.rentRange}>
                <div className={styles.propertyType1}>Rent Range</div>
                <Dropdown
                  className={styles.dropdownlink}
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ] as any
                      ).map((option: any, index: number) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button className={styles.searchCta}>
                <div className={styles.search}>Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
