import Head from "next/head";
import { Banner } from "../components/banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import { LargeCard } from "../components/LargeCard";
import { MediumCard } from "../components/MediumCard";
import { SmallCard } from "../components/smallCard";

export default function Home({ exploreData, liveAnywhereData }) {
  return (
    <div>
      <Head>
        <title>Airbnb </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* Explore */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6 ">Explore Nearby</h2>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {exploreData?.map((el, index) => (
            <SmallCard
              key={index}
              image={el.img}
              location={el.location}
              distance={el.distance}
            />
          ))}
        </div>

        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6 ">Live anywhere</h2>
        </section>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
          {liveAnywhereData?.map((el, index) => (
            <MediumCard key={index} img={el.img} title={el.title} />
          ))}
        </div>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/AFGW")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const liveAnywhereData = await fetch("https://jsonkeeper.com/b/W14P")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
