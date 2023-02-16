import Image from "next/image";
import { Context, useEffect, useContext, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Down from "../../../public/rest-country-api/down-arrow.png";
import data from "../../../public/rest-country-api/data.json";
import { createContext } from "react";

export const ThemeContext: Context<{ theme: string; toggleTheme: () => any }> =
  createContext({ theme: "light", toggleTheme: () => {console.log('initial')} });

export const COLORS = {
  darkBlue: "#2B3945",
  veryDarkBlueBg: "#202C37",
  white: "#FFFFFF",
  veryDarkBlueText: "#111517",
  darkGrayInput: "#858585",
  veryLightGrayBg: "#FAFAFA",
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
  const {theme} = useContext(ThemeContext)
  return (
    <li
      onClick={() => router.push(`/projects/rest-country-api/${name}`)}
      style={{background: theme === "light" ? COLORS.white : COLORS.darkBlue}}
      className="flex flex-col justify-between rounded-lg shadow-lg w-64 overflow-hidden
      md:w-[264px]"
    >
      <img src={flag} alt={`${name} flag`} className="w-full" />
      <div className="px-6 py-7">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="mt-6">
          <span className="font-semibold">population : </span> {population?.toLocaleString("id")}
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
  const {theme} = useContext(ThemeContext)

  return (
    <div tabIndex={0} className="relative h-full">
  <div
    onClick={() => setShow(!show)}
    style={{background: theme === "light" ? COLORS.white : COLORS.darkBlue}}
    className="rounded-md flex justify-between items-center w-52 h-12 shadow-md px-6 font-semibold
      md:h-14"
  >
    <p className="pointer-events-none">{filter || "Filter by region"}</p>
    <div className="aspect-square h-3">
      <Image src={Down} alt="drop-down" height={50} width={50} />
    </div>
  </div>
  <ul
    style={{background: theme === "light" ? COLORS.white : COLORS.darkBlue}}
    className={`${
      show ? "flex" : "hidden"
    } flex-col items-start rounded-md overflow-hidden absolute top-12 mt-1 w-52 shadow-md outline-none font-semibold`}
  >
    <li
      onClick={() => {
        setFilter("Africa");
        setShow(false);
      }}
      className={`hover:bg-[rgba(0,0,0,.2)] w-full px-6 py-3`}
    >
      <p className="pointer-events-none">Africa</p>
    </li>
    <li
      onClick={() => {
        setFilter("Americas");
        setShow(false);
      }}
      className={`hover:bg-[rgba(0,0,0,.2)] w-full px-6 py-3`}
    >
      <p className="pointer-events-none">Americas</p>
    </li>
    <li
      onClick={() => {
        setFilter("Asia");
        setShow(false);
      }}
      className={`hover:bg-[rgba(0,0,0,.2)] w-full px-6 py-3`}
    >
      <p className="pointer-events-none">Asia</p>
    </li>
    <li
      onClick={() => {
        setFilter("Europe");
        setShow(false);
      }}
      className={`hover:bg-[rgba(0,0,0,.2)] w-full px-6 py-3`}
    >
      <p className="pointer-events-none">Europe</p>
    </li>
    <li
      onClick={() => {
        setFilter("Oceania");
        setShow(false);
      }}
      className={`hover:bg-[rgba(0,0,0,.2)] w-full px-6 py-3`}
    >
      <p className="pointer-events-none">Oceania</p>
    </li>
  </ul>
</div>
  )
}

function List() {
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const {theme} = useContext(ThemeContext)

  return (
    <div className="flex flex-col gap-10 px-4 py-6 items-start
      md:px-20 md:py-20">
      <div className="flex flex-col gap-10 justify-between items-start w-full
        md:flex-row md:gap-[unset] md:items-stretch"
      >
        <div
          style={{background: theme === "light" ? COLORS.white : COLORS.darkBlue}}
          className="flex justify-between gap-8 w-full items-center h-12 px-8 rounded-lg shadow-md
          md:w-[480px] md:h-14"
        >
          {/* @ts-ignore */}
          <ion-icon class="text-xl" name="search-outline" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a country ..."
            className="outline-none font-semibold h-14 bg-transparent flex-grow
            md:h-full"
          />
        </div>
        <Select state={[filter, setFilter]} />
      </div>
      <ul
        className="w-full grid justify-between gap-x-10 gap-y-10 grid-cols-[repeat(auto-fill,256px)]
        md:gap-x-5 md:gap-y-18"
      >
        {(() => {
          let _temp = data;

          if (filter) _temp = _temp.filter((e) => e.region === filter);
          if (search !== "")
            _temp = _temp.filter((e) =>
              e.name.match(new RegExp(`.*${search}`, "i"))
            );

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
  const [theme, setTheme] = useState("light");
  const context = useContext(ThemeContext)
  useEffect(() => {
    document.body.style.setProperty("min-height", "100vh");
    console.log('test')
  }, []);

  useEffect(() => {
    document.body.style.setProperty("background", theme === 'light' ? COLORS.veryLightGrayBg : COLORS.veryDarkBlueBg);
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme: context.theme,
        toggleTheme: () => {
          context.theme = theme === 'light' ? 'dark' : 'light'
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      }}
    >  
      <article
        className="text-sm"
        style={{
          color: theme === "light" ? COLORS.veryDarkBlueText : COLORS.white,
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        <header
          style={{
            background:
              theme === "light" ? COLORS.white : COLORS.darkBlue,
          }}
          className="flex justify-between items-center h-20 px-4 shadow-md
          md:px-20"
        >
          <h1 className="text-lg font-extrabold">Where in the world?</h1>
          <button
            onClick={() => {
              context.theme = theme === 'light' ? 'dark' : 'light'
              theme === "light" ? setTheme("dark") : setTheme("light")
            }}
            className="flex items-center gap-2"
          >
            {
              theme === "light" ? (
                /* @ts-ignore */
                <ion-icon class="text-xl" name="moon-outline" />
              ) : (
                /* @ts-ignore */
                <ion-icon name="sunny-outline"></ion-icon>
              )
            }
            <p className="pointer-events-none font-semibold">
              {theme === "light" ? "Dark" : "Light"} Mode
            </p>
          </button>
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
    </ThemeContext.Provider>
  );
}

export default function () {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
}
