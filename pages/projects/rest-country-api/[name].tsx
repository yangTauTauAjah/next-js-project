import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Wrapper } from ".";
import data from "../../../public/rest-country-api/data.json";

const colors = {
  darkBlue: "#2b3945",
  veryDarkBlueBg: "#202c37",
  white: "#ffffff",
  veryDarkBlueText: "#111517",
  darkGrayInput: "#858585",
  veryLightGrayBg: "#fafafa",
};

type currency = {
  code: string;
  name: string;
  symbol: string;
};
type language = {
  iso639_1?: string;
  iso639_2?: string;
  name: string;
  nativeName?: string;
};

interface Country {
  name: string;
  nativeName?: string;
  flag: string;
  population?: number;
  region?: string;
  subregion?: string;
  capital?: string;
  borders?: string[];
  topLevelDomain?: string[];
  currencies?: currency[];
  languages?: language[];
}

function Country({ country }: { country?: Country }) {
  return country ? (
    <div className="w-auto px-7 py-10">
      <a
        href="/"
        className="rounded flex justify-between items-center px-8 bg-white w-24 h-8 shadow-lg"
      >
        {/* @ts-ignore */}
        <ion-icon size="large" name="arrow-back-outline" />
        <p className="pointer-event-none">Back</p>
      </a>
      <Image
        src={country.flag}
        alt="flag"
        width={1024}
        height={1024}
        className="rounded mt-16 w-full shadow-2xl"
      />
      <h1 className="mt-12 font-extrabold text-2xl">{country.name}</h1>
      <div className="mt-9 flex flex-col gap-12">
        <div className="flex flex-col gap-5 text-lg">
          <p>
            <span className="font-semibold">Native Name:</span>{" "}
            {country.nativeName}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Sub Region:</span>{" "}
            {country.subregion}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
        <div className="flex flex-col gap-5 text-lg">
          <p>
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {country.topLevelDomain}
          </p>
          <p>
            <span className="font-semibold">Currencies:</span>{" "}
            {country.currencies?.map((e) => e.name).join(", ")}
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {country.languages?.map((e) => e.name).join(", ")}
          </p>
        </div>
        <div>
          <p className="font-semibold text-xl">Border Countries:</p>
          <ul className="mt-6 flex gap-3">
            {country?.borders?.map((e, i) => (
              <li
                key={i}
                className="rounded shadow-lg flex place-items-center w-24 h-7"
              >
                <p className="w-full text-center">{e}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <h1>404</h1>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { name: "afghanistan" } },
      { params: { name: "belgium" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({params}: {params: {name: string}}) => {
  return {
    props: { name: params.name },
  };
};

export default function ({ name }: { name: string }) {
  const router = useRouter();

  console.log(router.query)

  if (router.isFallback) return <h1>Loading</h1>;

  return (
    <Wrapper>
      <Country
        country={data.find((e) => e.name.match(new RegExp(name, "i")))}
      />
    </Wrapper>
  );
}
