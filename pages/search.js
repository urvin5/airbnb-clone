import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { InfoCard } from "../components/InfoCard";

export default function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);

  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}-${formattedEndDate}`;

  return (
    <>
      <Header placeholder={`${location}|${range}|${guests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays {range} for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibility </p>
            <p className="button">Type of place </p>
            <p className="button">Price </p>
            <p className="button">Rooms and bed </p>
            <p className="button">More filters </p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((el, index) => (
              <InfoCard
                key={index}
                img={el.img}
                location={el.location}
                title={el.title}
                description={el.description}
                star={el.star}
                price={el.price}
                total={el.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
