import React, { useState } from "react";

import Button from "../Button/Button";
import Image from "../Image/Image";

import visaImage from "../../assets/visa.png";
import masterImage from "../../assets/master.png";
import paypalImage from "../../assets/paypal.png";

import styles from "../../styles/DetailsForm.module.scss";

const DetailsForm = () => {
  const [showCashField, setShowCashField] = useState(true);
  const [donationType, setDonationType] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardHolderName, setcardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const donationFormDetails = {
    "Payment Method": paymentMethod,
    "Donation Type": donationType,
    "Donation Amount": donationAmount,
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    Address: address,
    Message: message,
    "Card Holder Name": cardHolderName,
    "Card Number": cardNumber,
    CVV: cvv,
    "Expiry Date": expiryDate,
  };

  const showCashFieldHandler = () => {
    setShowCashField(false);
    console.log("clicked");
  };

  const hideCashFieldHandler = () => {
    setShowCashField(true);
    console.log("clicked");
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("donationFormDetails", donationFormDetails);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Make a Donation</h2>
        <form className={styles.form} onSubmit={submitFormHandler}>
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
                    onClick={showCashFieldHandler}
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
                    onClick={hideCashFieldHandler}
                    onChange={(e) => setDonationType(e.target.value)}
                  />
                  <label htmlFor="monthlySubscription">
                    Monthly Subscription
                  </label>
                </div>
              </div>
              <div
                className={`${styles.formFields} ${
                  showCashField ? styles.hideElement : styles.showElement
                }`}
              >
                <input
                  type="number"
                  name="donationAmount"
                  id="donationAmount"
                  placeholder="Donation Amount"
                  onChange={(e) => setDonationAmount(e.target.value)}
                  required
                />
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

          <div className={styles.formWrapper}>
            <h2>Choose Payment Method</h2>
            <div className={styles.paymentMethods}>
              <ul>
                <li>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="method1"
                    value="VISA"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="method1">
                    <Image src={visaImage} alt="Payment Method" />
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="method2"
                    value="MASTER"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="method1">
                    <Image
                      src={masterImage}
                      alt="Payment Method"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="method3"
                    value="PAYPAL"
                  />
                  <label htmlFor="method1">
                    <Image
                      src={paypalImage}
                      alt="Payment Method"
                    />
                  </label>
                </li>
              </ul>
            </div>
            <div className={styles.formFields}>
              <input
                type="text"
                name="cardHolderName"
                id="cardHolderName"
                placeholder="Card Holder Name"
                onChange={(e) => setcardHolderName(e.target.value)}
                required
              />
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                placeholder="Card Number"
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className={styles.formFields}>
              <input
                type="number"
                name="cvv"
                id="cvv"
                placeholder="CVV"
                onChange={(e) => setCvv(e.target.value)}
              />
              <input
                type="date"
                name="expiryDate"
                id="expiryDate"
                placeholder="Expiry Date"
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
          </div>
          <Button>Donate Now</Button>
        </form>
      </div>
    </section>
  );
};

export default DetailsForm;
