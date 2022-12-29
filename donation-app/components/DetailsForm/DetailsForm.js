import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "../Button/Button";
import { checkout } from "../../checkout";

import styles from "../../styles/DetailsForm.module.scss";

const DetailsForm = () => {
  const [donationType, setDonationType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const productIds = {
    monthlySubscription: "price_1MKIKmI3XBmFnBMQYT6Z7E5l",
    "3monthsSubscription": "price_1MKJFVI3XBmFnBMQ3VAYwEiz",
    "6monthsSubscription": "price_1MKJKII3XBmFnBMQHaQCuqyS",
    yearlySubscription: "price_1MKJM6I3XBmFnBMQdutohStQ",
  };

  const donationFormDetails = {
    "Donation Type": donationType,
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    Address: address,
    Message: message,
  };

  const checkoutToDonationHandler = (e) => {
    e.preventDefault();
    if (donationType === "One Time Donation") {
      console.log(donationFormDetails);
      router.push("https://donate.stripe.com/test_fZe3d95qr8hH3vyfYY");
    } else if (donationType) {
      checkout({
        lineItems: [
          {
            price: productIds[donationType],
            quantity: 1,
          },
        ],
      });

      console.log(donationFormDetails);
    } else if (donationType === "") {
      alert("Please select type of donation above!");
    }
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
                      value="monthlySubscription"
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
                      value="3monthsSubscription"
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
                      value="6monthsSubscription"
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
                      value="yearlySubscription"
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
