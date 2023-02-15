import Image from "next/image";
import { useEffect, useState } from "react";
import Down from "../../../public/rest-country-api/down-arrow.png";
import data from "../../../public/rest-country-api/data.json";
import Script from "next/script";
import { useRouter } from "next/router";

const colors = {
  darkBlue: "#2b3945",
  veryDarkBlueBg: "#202c37",
  white: "#ffffff",
  veryDarkBlueText: "#111517",
  darkGrayInput: "#858585",
  veryLightGrayBg: "#fafafa",
};

type region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";
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

function Card({ name, flag, population, region, capital }: Country) {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(`/projects/rest-country-api/${name}`)}
      className="flex flex-col justify-between rounded-lg bg-white shadow-lg w-64 overflow-hidden"
    >
      <img src={flag} alt={`${name} flag`} className="w-full" />
      <div className="px-6 py-8">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="mt-6">
          <span className="font-semibold">population : </span>
          {population?.toLocaleString("id")}
        </p>
        <p>
          <span className="font-semibold">Region : </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Capital : </span>
          {capital}
        </p>
      </div>
    </li>
  );
}

function Select({
  state: [filter, setFilter],
}: {
  state: [
    filter: string | null,
    setFilter: React.Dispatch<React.SetStateAction<string | null>>
  ];
}) {
  const [show, setShow] = useState(false);

  return (
    <div tabIndex={0} className="relative">
      <div
        onClick={() => setShow(!show)}
        className="rounded-md flex justify-between items-center w-52 h-12 shadow-md px-6 font-semibold"
      >
        <p className="pointer-events-none">{filter || "Filter by region"}</p>
        <div className="aspect-square h-3">
          <Image src={Down} alt="drop-down" height={50} width={50} />
        </div>
      </div>
      <ul
        className={`${
          show ? "flex" : "hidden"
        } flex-col items-start rounded-md overflow-hidden absolute bg-white top-12 mt-1 w-52 shadow-md outline-none font-semibold`}
      >
        <li
          onClick={() => {
            setFilter("Africa");
            setShow(false);
          }}
          className={`hover:bg-[#e5e5e5] w-full px-6 py-3`}
        >
          <p className="pointer-events-none">Africa</p>
        </li>
        <li
          onClick={() => {
            setFilter("Americas");
            setShow(false);
          }}
          className={`hover:bg-[#e5e5e5] w-full px-6 py-3`}
        >
          <p className="pointer-events-none">Americas</p>
        </li>
        <li
          onClick={() => {
            setFilter("Asia");
            setShow(false);
          }}
          className={`hover:bg-[#e5e5e5] w-full px-6 py-3`}
        >
          <p className="pointer-events-none">Asia</p>
        </li>
        <li
          onClick={() => {
            setFilter("Europe");
            setShow(false);
          }}
          className={`hover:bg-[#e5e5e5] w-full px-6 py-3`}
        >
          <p className="pointer-events-none">Europe</p>
        </li>
        <li
          onClick={() => {
            setFilter("Oceania");
            setShow(false);
          }}
          className={`hover:bg-[#e5e5e5] w-full px-6 py-3`}
        >
          <p className="pointer-events-none">Oceania</p>
        </li>
      </ul>
    </div>
  );
}

function List() {
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-10 px-4 py-6 items-start">
      <div className="flex justify-between gap-8 w-full items-center h-12 px-8 bg-white rounded-lg shadow-md">
        {/* @ts-ignore */}
        <ion-icon class="text-xl" name="search-outline" />
        <input
          placeholder="Search for a country ..."
          className="outline-none font-semibold h-full flex-grow"
        />
      </div>

      <Select state={[filter, setFilter]} />

      <ul
        className="w-full grid justify-center gap-10
      grid-cols-[repeat(auto-fill,256px)]"
      >
        {(() => {
          let _temp = data;

          if (filter) _temp = _temp.filter((e) => e.region === filter);

          return (
            _temp
              // .filter((e, i) => i >= 0 && i <= 20)
              .map(({ name, flag, population, region, capital }, i) => (
                <Card
                  key={i}
                  name={name}
                  flag={flag}
                  population={population}
                  region={region as region}
                  capital={capital}
                />
              ))
          );
        })()}
      </ul>
    </div>
  );
}

export function Wrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.setProperty("background", colors.veryLightGrayBg);
  }, []);

  return (
    <>
      <article
        className="text-sm"
        style={{
          color: colors.veryDarkBlueText,
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        <header className="flex justify-between items-center h-20 px-4 bg-white shadow-md">
          <h1 className="text-lg font-extrabold">Where in the world?</h1>
          <div className="flex items-center gap-2">
            {/* @ts-ignore */}
            <ion-icon class="text-xl" name="moon-outline"></ion-icon>
            <p className="font-semibold">Dark Mode</p>
          </div>
        </header>
        {children}
      </article>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
    </>
  );
}

export default function () {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
}
