import Image from "next/image";
import { useEffect, useState } from "react";
import Down from "../../../public/rest-country-api/down-arrow.png";
import data from "../../../public/rest-country-api/data.json";

const colors = {
  darkBlue: "hsl(209, 23%, 22%)",
  veryDarkBlueBg: "hsl(207, 26%, 17%)",
  white: "hsl(0, 0%, 100%)",
  veryDarkBlueText: "hsl(200, 15%, 8%)",
  darkGrayInput: "#858585",
  veryLightGrayBg: "hsl(0, 0%, 98%)",
};

type region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";
interface Country {
  name?: string;
  nativeName?: string;
  flag?: string;
  population?: number;
  region?: region;
  subregion?: string;
  capital?: string;
  borders?: string[];
  topLevelDomain?: string[];
  currencies?: string[];
  languages?: string[];
}

function Card({ name, flag, population, region, capital }: Country) {
  return (
    <li className="flex flex-col justify-between rounded-lg bg-white shadow-lg w-64 overflow-hidden">
      <img src={flag} alt={`${name} flag`} className="w-full" />
      <div className="px-6 py-8">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="mt-6">
          <span className="font-semibold">population : </span>
          {population.toLocaleString("id")}
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
  
  return(
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
      grid-cols-[repeat(auto-fill, 256px)]"
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
  )
}          

function Country({country}: {country: Country}) {
  return(
    <div className="w-auto px-7 py-10">
      <a href="/" className="rounded flex justify-between items-center px-8 bg-white w-24 h-8 shadow-lg">
        {/* @ts-ignore */}
        <ion-icon size='large' name="arrow-back-outline" />
        <p className='pointer-event-none'>Back</p>
      </a>
      <Image src={country.flag} alt='flag' width={1024} height={1024} className='rounded mt-16 w-full shadow-lg' />
      <h1 className='mt-12 font-extrabold text-2xl'>{country.name}</h1>
      <div className='mt-9 flex flex-col gap-12'>
        <div className='flex flex-col gap-5'>
          <p><span className='font-semibold'>Native Name:</span> {country.nativeName}</p>
          <p><span className='font-semibold'>Population:</span> {country.population}</p>
          <p><span className='font-semibold'>Region:</span> {country.region}</p>
          <p><span className='font-semibold'>Sub Region:</span> {country.subregion}</p>
          <p><span className='font-semibold'>Capital:</span> {country.capital}</p>
        </div>
        <div className='flex flex-col gap-5'>
          <p><span className='font-semibold'>Top Level Domain:</span>{country.topLevelDomain}</p>
          <p><span className='font-semibold'>Currencies:</span>{country.currencies}</p>
          <p><span className='font-semibold'>Languages:</span>{country.languages}</p>
        </div>
        <div>
          <p className='font-semibold text-lg'>Border Countries:</p>
          <ul className='mt-6 flex gap-3 mt-6'>
            {
              country
                .borders
                .map(e => (
                  <li className="rounded shadow-lg flex place-items-center w-24 h-7"><p className="w-full text-center">{e}</p></li>
                ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

function Main() {

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
        {/* <List /> */}
        <Country country={data[0]} />
      </article>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      />
      {/* @ts-ignore */}
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      />
    </>
  );
}

export default Main;
