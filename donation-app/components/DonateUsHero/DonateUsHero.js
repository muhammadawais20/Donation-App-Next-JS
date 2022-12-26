import Image from "../Image/Image";

import HeroDonationImage from "../../assets/hero-donation-image.jpg";

import styles from "../../styles/DonateUsHero.module.scss";

const DonateUsHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={HeroDonationImage} alt="Image" />
      </div>
    </section>
  );
};

export default DonateUsHero;
