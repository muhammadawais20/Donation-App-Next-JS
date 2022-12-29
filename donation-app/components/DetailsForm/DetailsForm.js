import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "../Button/Button";

import styles from "../../styles/DetailsForm.module.scss";

const DetailsForm = () => {
  const [donationType, setDonationType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const checkoutToDonationHandler = (e) => {
    e.preventDefault();
    if (donationType === "One Time Donation") {
      router.push("https://donate.stripe.com/test_fZe3d95qr8hH3vyfYY");
    } else if (donationType === "Monthly Subscription") {
      router.push("https://buy.stripe.com/test_14k6plaKL1Tj2ru28a");
    } else if (donationType === "3 Months Subscription") {
      router.push("https://buy.stripe.com/test_4gw7tp9GH2Xn7LO4gm");
    } else if (donationType === "6 Months Subscription") {
      router.push("https://buy.stripe.com/test_4gw3d9g55dC13vy7sz");
    } else if (donationType === "Yearly Subscription") {
      router.push("https://buy.stripe.com/test_bIY1517yz1Tj6HK3ck");
    } else if (donationType === "") {
      alert("Please select type of donation above!");
    }
    console.log("donationFormDetails", donationFormDetails);
  };

  const donationFormDetails = {
    "Donation Type": donationType,
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    Address: address,
    Message: message,
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Make a Donation</h2>
        <form className={styles.form} onSubmit={checkoutToDonationHandler}>
          <div className={styles.formWrapper}>
            <h2>Your Donation</h2>
            <div className={styles.donationForm}>
              <div className={styles.radioFieldsWrapper}>
                <div className={styles.radioFieldsGroup}>
                  <div className={styles.radioFields}>
                    <input
                      type="radio"
                      name="donationType"
                      id="oneTimeDonation"
                      value="One Time Donation"
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    <label htmlFor="oneTimeDonation">One Time Donation</label>
                  </div>
                  <div className={styles.radioFields}>
                    <input
                      type="radio"
                      name="donationType"
                      id="subscription"
                      value="Monthly Subscription"
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    <label htmlFor="monthlySubscription">
                      Monthly Subscription
                    </label>
                  </div>
                  <div className={styles.radioFields}>
                    <input
                      type="radio"
                      name="donationType"
                      id="subscription"
                      value="3 Months Subscription"
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    <label htmlFor="3monthsSubscription">
                      3 Months Subscription
                    </label>
                  </div>
                </div>

                <div className={styles.radioFieldsGroup}>
                  <div className={styles.radioFields}>
                    <input
                      type="radio"
                      name="donationType"
                      id="subscription"
                      value="6 Months Subscription"
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    <label htmlFor="6monthsSubscription">
                      6 Months Subscription
                    </label>
                  </div>
                  <div className={styles.radioFields}>
                    <input
                      type="radio"
                      name="donationType"
                      id="subscription"
                      value="Yearly Subscription"
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    <label htmlFor="yearlySubscription">
                      Yearly Subscription
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <h2>Details</h2>
            <div className={styles.formFields}>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formFields}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={styles.formFields}>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit">Donate Now</Button>
        </form>
      </div>
    </section>
  );
};

export default DetailsForm;
