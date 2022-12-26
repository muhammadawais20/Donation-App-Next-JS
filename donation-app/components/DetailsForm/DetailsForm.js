import styles from "../../styles/DetailsForm.module.scss";

const DetailsForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Make a Donation</h2>
        <form className={styles.form}>
          <div className={styles.formWrapper}>
            <h2>Details</h2>
            <div className={styles.formFields}>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
            <div className={styles.formFields}>
              <input type="text" name="email" id="email" placeholder="Email" />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className={styles.formFields}>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your message"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DetailsForm;
