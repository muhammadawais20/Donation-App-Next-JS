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
      console.log("donationFormDetails", donationFormDetails);
    } else {
      router.push("/");
    }
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
