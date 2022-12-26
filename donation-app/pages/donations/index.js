import Head from "next/head";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import DonateUsHero from "../../components/DonateUsHero/DonateUsHero";

export default function DonateUs() {
  return (
    <div>
      <Head>
        <title>Donate US</title>
        <meta name="description" content="Donate Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DonateUsHero />
        <DetailsForm />
      </main>
    </div>
  );
}
