import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Segment Mafia</title>
      </Head>

      <main>
        <Header title="Segment Mafia" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
      </main>
      
      <Footer />
    </div>
  );
}
