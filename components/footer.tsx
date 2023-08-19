import type { NextPage } from "next";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
  return (
    <div className={styles.footerSection}>
      <footer className={styles.footer}>
        <div className={styles.contactUs}>
          <div className={styles.logo}>
            <img
              className={styles.houselineIcon}
              alt=""
              src="/houseline2.svg"
            />
            <div className={styles.reisParent}>
              <div className={styles.reis}>REIS</div>
              <div className={styles.realState}>Real State</div>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactUs1}>Contact Us</div>
            <a className={styles.home} href="tel:+123456789">
              Call : +123 400 123
            </a>
            <div className={styles.praesentNullaMassa}>
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <a
              className={styles.emailExamplemailcom}
              href="mailto:hello@gmail.com?subject=Hello there!"
            >
              Email: example@mail.com
            </a>
          </div>
          <div className={styles.socialMedia}>
            <a
              className={styles.socialMediaCard}
              href="sample.com"
              target="_blank"
            >
              <img
                className={styles.socialMediaLogo}
                alt=""
                src="/social-media-logo5.svg"
              />
            </a>
            <a className={styles.socialMediaCard} target="_blank">
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo6.svg"
              />
            </a>
            <a className={styles.socialMediaCard} target="_blank">
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo7.svg"
              />
            </a>
            <a className={styles.socialMediaCard} target="_blank">
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo8.svg"
              />
            </a>
            <a className={styles.socialMediaCard} target="_blank">
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo9.svg"
              />
            </a>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.teamAndPolicies}>Features</div>
          <div className={styles.featuresSubCategories}>
            <a className={styles.home}>Home</a>
            <a className={styles.home}>Become a Host</a>
            <a className={styles.home}>Pricing</a>
            <a className={styles.home}>Blog</a>
            <a className={styles.home}>Contact</a>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.teamAndPolicies}>Company</div>
          <div className={styles.featuresSubCategories}>
            <a className={styles.home}>About Us</a>
            <a className={styles.home}>Press</a>
            <a className={styles.home}>Contact</a>
            <a className={styles.home}>Careers</a>
            <a className={styles.home}>Blog</a>
          </div>
        </div>
        <div className={styles.termsAndPolicies}>
          <div className={styles.teamAndPolicies}>Team and policies</div>
          <div className={styles.termsAndPoliciesSubcategori}>
            <a className={styles.home}>Terms of servies</a>
            <a className={styles.home}>Privacy Policy</a>
            <a className={styles.home}>Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
