import type { NextPage } from "next";
import styles from "./contact.module.css";
const Contact: NextPage = () => {
  return (
    <div className={styles.latestPropertiesOfRentCard}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <div className={styles.contactUs}>Contact us</div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <b className={styles.enquiryForm}>Enquiry Form</b>
            <div className={styles.areYouLooking}>
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                type="text"
                placeholder="First name"
                maxLength={100}
                minLength={2}
                required
              />
              <input
                className={styles.input1}
                type="text"
                placeholder="Last name"
                maxLength={100}
                minLength={2}
                required
              />
            </div>
            <input
              className={styles.destinationNameInput}
              type="email"
              placeholder="Email id"
              required
            />
            <textarea
              className={styles.input2}
              placeholder="Comments or questions"
              required
              rows={10}
            />
            <button className={styles.formSubmitButton}>
              <div className={styles.submit}>Submit</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
