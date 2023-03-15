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
          <b> Founders </b> <br />
    Peter Reinhardt, Charm Industrial <br />
    Ilya Volodarsky, Wildfires.org <br />
    <br /> <br />
    
    <b> Operators </b> <br />
    Jeff Boes, Merge.dev <br />
    Brandon Frankel, Middesk <br />

    <br /> <br />
    
    <b> VCs </b> <br />
    Lauren Reeder, Sequoia Capital <br />
    Joe Morrissey, a16z <br />
    Chase Roberts, Vertex Ventures <br />
    Sudhee Chilappagari, Battery Ventures<br />
    
        </p>
      </main>
      
      <Footer />
    </div>
  );
}
