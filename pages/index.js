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
          <b> Founders </b> <br>
    Peter Reinhardt, Charm Industrial <br>
    Ilya Volodarsky, Wildfires.org <br>
    

        </p>
      </main>
      
      <Footer />
    </div>
  );
}
