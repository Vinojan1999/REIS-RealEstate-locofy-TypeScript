import type { NextPage } from "next";
import Head from "next/head";
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
import Link from "next/link";
import PropertiesGridContainer from "../components/properties-grid-container";
import styles from "./index.module.css";
const PropertiesGridView: NextPage = () => {
  return (
    <>
      <Head>
        <title>REIS Real Estate</title>
        <meta
          name="description"
          content="Discover your perfect home with REIS"
        />
      </Head>
      <div className={styles.propertiesGridView}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <Link className={styles.logo} href="/landing-page">
              <img
                className={styles.houselineIcon}
                alt=""
                src="/houseline.svg"
              />
              <div className={styles.name}>
                <div className={styles.reis}>REIS</div>
                <div className={styles.realState}>Real State</div>
              </div>
            </Link>
            <div className={styles.navigationRight}>
              <div className={styles.navigation}>
                <Link className={styles.home} href="/landing-page">
                  HOME
                </Link>
                <a className={styles.aboutUs}>ABOUT US</a>
                <a className={styles.aboutUs}>OUR AGENTS</a>
                <a className={styles.properties}>PROPERTIES</a>
                <a className={styles.aboutUs}>GALLERY</a>
                <a className={styles.aboutUs}>BLOG</a>
                <a className={styles.aboutUs}>CONTACT US</a>
                <a className={styles.aboutUs}>SEARCH</a>
              </div>
              <button className={styles.hamburger}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
              </button>
            </div>
          </div>
        </header>
        <div className={styles.category}>
          <div className={styles.properties1}>
            <div className={styles.properties2}>Properties</div>
            <div className={styles.homeParent}>
              <a className={styles.becomeAHost}>Home</a>
              <div className={styles.div}>/</div>
              <div className={styles.properties3}>Properties</div>
            </div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.container}>
            <div className={styles.sortBy}>
              <div className={styles.options}>
                <button className={styles.listbullets}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/vector2.svg"
                  />
                </button>
                <button className={styles.listbullets}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon9}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector3.svg"
                  />
                </button>
              </div>
              <div className={styles.div}>Sort by:</div>
              <Dropdown
                overlay={
                  <Menu>
                    {(
                      [
                        { value: "Popular properties" },
                        { value: "Latest properties" },
                        { value: "Recommended properties" },
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
                  {`Default Order `}
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
          <PropertiesGridContainer />
          <div className={styles.pagination}>
            <button className={styles.backArrow}>
              <img
                className={styles.arrowleftIcon}
                alt=""
                src="/arrowleft.svg"
              />
            </button>
            <button className={styles.button}>
              <div className={styles.div1}>1</div>
            </button>
            <button className={styles.button1}>
              <div className={styles.div2}>2</div>
            </button>
            <button className={styles.button1}>
              <div className={styles.div2}>3</div>
            </button>
            <div className={styles.div4}>
              <div className={styles.div5}>...</div>
            </div>
            <button className={styles.button1}>
              <div className={styles.div2}>54</div>
            </button>
            <button className={styles.forwardArrow}>
              <img
                className={styles.arrowleftIcon}
                alt=""
                src="/arrowright.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.footerSection}>
          <footer className={styles.footer}>
            <div className={styles.contactUs1}>
              <div className={styles.logo1}>
                <img
                  className={styles.houselineIcon}
                  alt=""
                  src="/houseline1.svg"
                />
                <div className={styles.name}>
                  <div className={styles.reis}>REIS</div>
                  <div className={styles.realState}>Real State</div>
                </div>
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactUs2}>Contact Us</div>
                <div className={styles.div}>Call : +123 400 123</div>
                <div className={styles.praesentNullaMassa}>
                  Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                  auctor felis.
                </div>
                <div className={styles.emailExamplemailcom}>
                  Email: example@mail.com
                </div>
              </div>
              <div className={styles.socialMedia}>
                <div className={styles.socialMediaCard}>
                  <img
                    className={styles.socialMediaLogo}
                    alt=""
                    src="/social-media-logo.svg"
                  />
                </div>
                <div className={styles.socialMediaCard}>
                  <img
                    className={styles.socialMediaLogo1}
                    alt=""
                    src="/social-media-logo1.svg"
                  />
                </div>
                <div className={styles.socialMediaCard}>
                  <img
                    className={styles.socialMediaLogo1}
                    alt=""
                    src="/social-media-logo2.svg"
                  />
                </div>
                <div className={styles.socialMediaCard}>
                  <img
                    className={styles.socialMediaLogo1}
                    alt=""
                    src="/social-media-logo3.svg"
                  />
                </div>
                <div className={styles.socialMediaCard}>
                  <img
                    className={styles.socialMediaLogo1}
                    alt=""
                    src="/social-media-logo4.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.teamAndPolicies}>Features</div>
              <div className={styles.featuresSubCategories}>
                <a className={styles.becomeAHost}>Home</a>
                <a className={styles.becomeAHost}>Become a Host</a>
                <div className={styles.div}>Pricing</div>
                <div className={styles.div}>Blog</div>
                <div className={styles.div}>Contact</div>
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.teamAndPolicies}>Company</div>
              <div className={styles.featuresSubCategories}>
                <a className={styles.becomeAHost}>About Us</a>
                <div className={styles.div}>Press</div>
                <div className={styles.div}>Contact</div>
                <div className={styles.div}>Careers</div>
                <div className={styles.div}>Blog</div>
              </div>
            </div>
            <div className={styles.termsAndPolicies}>
              <div className={styles.teamAndPolicies}>Team and policies</div>
              <div className={styles.termsAndPoliciesSubcategori}>
                <a className={styles.becomeAHost}>Terms of servies</a>
                <div className={styles.div}>Privacy Policy</div>
                <div className={styles.div}>Security</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PropertiesGridView;
