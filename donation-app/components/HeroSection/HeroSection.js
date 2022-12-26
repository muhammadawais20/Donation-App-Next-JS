import Link from "next/link";
import Image from "../Image/Image";

import donationImage from "../../assets/donation-image.jpg";

import styles from "../../styles/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hero__left}>
          <div className={styles.title}>
            <h2>
              Let's Be Kind and
              <br />
              <span> Donate</span>
            </h2>
          </div>
          <div className={styles.subTitle}>
            <p>Step forward and donate for the noble cause,</p>
            <p>your single penny matters alot.</p>
          </div>
          <div className={styles.donateButton}>
            <button>
              <Link className={styles.link} href="/donations">
                Donate Now
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.hero__right}>
          <Image
            src={donationImage}
            alt="Image"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
