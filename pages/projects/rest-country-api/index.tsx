import Image from "next/image";
import { Context, useEffect, useContext, useState, useMemo } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Down from "../../../public/rest-country-api/icon/down-arrow-backup-2-svgrepo-com.svg";
import Search from "../../../public/rest-country-api/icon/icons8-search.svg";
import Sun from "../../../public/rest-country-api/icon/sun.png";
import Moon from "../../../public/rest-country-api/icon/moon.png";
import Right from "../../../public/rest-country-api/icon/right.png";
import Left from "../../../public/rest-country-api/icon/left.png";
import data from "../../../public/rest-country-api/data.json";
import { createContext } from "react";

export const ThemeContext: Context<{
  theme: string;
  toggleTheme: (params?: any) => any;
}> = createContext({ theme: "light", toggleTheme: () => {} });

export const COLORS = {
  darkBlue: "#2B3945",
  veryDarkBlueBg: "#202C37",
  white: "#FFFFFF",
  veryDarkBlueText: "#111517",
  darkGrayInput: "#858585",
  veryLightGrayBg: "#FAFAFA",
  lightBlue: "#DBEAFE",
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
  const { theme } = useContext(ThemeContext);
  return (
    <li
      onClick={() => router.push(`/projects/rest-country-api/${name}`)}
      style={{ background: theme === "light" ? COLORS.white : COLORS.darkBlue }}
      className="flex flex-col justify-between rounded-lg shadow-lg w-64 overflow-hidden
      md:w-[264px]"
    >
      <img src={flag} alt={`${name} flag`} className="w-full" />
      <div className="px-6 py-7">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <p className="mt-6">
          <span className="font-semibold">population : </span>{" "}
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
  const { theme } = useContext(ThemeContext);

  return (
    <div tabIndex={0} className="relative h-full">
      <div
        onClick={() => setShow(!show)}
        style={{
          background: theme === "light" ? COLORS.white : COLORS.darkBlue,
        }}
        className="rounded-md flex justify-between items-center w-52 h-12 shadow-md px-6 font-semibold
          md:h-14"
      >
        <p className="pointer-events-none">{filter || "Filter by region"}</p>
        <div className="aspect-square h-3">
          <Image src={Down} alt="drop-down" height={50} width={50} />
        </div>
      </div>
      <ul
        style={{
          background: theme === "light" ? COLORS.white : COLORS.darkBlue,
        }}
        className={`${
          show ? "flex" : "hidden"
        } flex-col items-start rounded-md overflow-hidden absolute top-12 mt-1 w-52 shadow-md outline-none font-semibold
        md:top-14`}
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
  );
}

function Page({ PAGES, currentPage }: { PAGES: number; currentPage: number }) {
  const { theme } = useContext(ThemeContext);
  const router = useRouter()

  if (PAGES <= 5)
    return (
      <div className="w-full justify-center flex gap-2">
        <div
          className="cursor-pointer drop-shadow-xl h-8 w-2 leading-8 text-center flex items-center shrink-0"
          onClick={() => {

            const page = Number.parseInt(router.query.page as string)
            if (page <=  1) return

            router.push({
              query: {page: page - 1}
            }
            
          )}}
        >
          <Image
            className="w-full"
            src={Left}
            width={Left.width}
            height={Left.height}
            alt="left"
            style={{ filter: theme === "dark" ? "invert(100%)" : "" }}
          />
        </div>
        <ul className="flex gap-3">
          {Array(PAGES)
            .fill(null)
            .map((e, i) => (
              <li
                onClick={() => router.push({
                  query: {page: i + 1}
                })}
                key={i}
                style={{
                  background:
                    i + 1 === currentPage
                      ? theme === "light"
                      ? COLORS.lightBlue
                      : COLORS.darkGrayInput
                      : theme === "light"
                      ? COLORS.white
                      : COLORS.darkBlue,
                }}
                className="transition-[drop-shadow] cursor-pointer drop-shadow-xl min-w-[32px] h-8 leading-8 text-center rounded-lg font-bold
            hover:drop-shadow-none"
              >
                {i + 1}
              </li>
            ))}
        </ul>
        <div
          className="cursor-pointer drop-shadow-xl h-8 w-2 leading-8 text-center flex items-center shrink-0"
          onClick={() => {

            console.log('test')

            const page = Number.parseInt(router.query.page as string)
            if (page >=  PAGES) return

            router.push({
              query: {page: page + 1}
            }

          )}}
        >
          <Image
            className="w-full"
            src={Right}
            width={Right.width}
            height={Right.height}
            alt="right"
            style={{ filter: theme === "dark" ? "invert(100%)" : "" }}
          />
        </div>
      </div>
    );

  return (
    <div className="w-full justify-center flex gap-2">
      <div
        className="cursor-pointer drop-shadow-xl h-8 w-2 leading-8 text-center flex items-center shrink-0"
        onClick={() => {

          const page = Number.parseInt(router.query.page as string)
          if (page <=  1) return

          router.push({
            query: {page: page - 1}
          }
          
        )}}
      >
        <Image
          className="w-full"
          src={Left}
          width={Left.width}
          height={Left.height}
          alt="left"
          style={{ filter: theme === "dark" ? "invert(100%)" : "" }}
        />
      </div>
      <ul className="flex gap-3">
        {currentPage >= 4 && (
          <>
            <li
              onClick={() => router.push({query: {page: 1}})}
              className="transition-[drop-shadow] cursor-pointer drop-shadow-xl min-w-[32px] h-8 leading-8 text-center rounded-lg font-bold
              hover:drop-shadow-none"
              style={{
                background:
                  theme === "light"
                    ? COLORS.white
                    : COLORS.darkBlue,
              }}
            >
              1
            </li>
            <li className="transition-[drop-shadow] pointer-events-none drop-shadow-xl h-8 leading-8 text-center rounded-lg font-bold">
              ...
            </li>
          </>
        )}
        {[1, 2, 3].map((i) => {
          if (currentPage < 4) {
            return (
              <li
                onClick={() => router.push({query: {page: i}})}
                key={i}
                style={{
                  background:
                    i === currentPage
                      ? theme === "light"
                      ? COLORS.lightBlue
                      : COLORS.darkGrayInput
                      : theme === "light"
                      ? COLORS.white
                      : COLORS.darkBlue,
                }}
                className="transition-[drop-shadow] cursor-pointer drop-shadow-xl min-w-[32px] h-8 leading-8 text-center rounded-lg font-bold
                hover:drop-shadow-none"
              >
                {i}
              </li>
            );
          } else if (currentPage > PAGES - 3) {
            return (
              <li
                onClick={() => router.push({query: {page: i + PAGES - 3}})}
                key={i}
                style={{
                  background:
                    i + PAGES - 3 === currentPage
                      ? theme === "light"
                      ? COLORS.lightBlue
                      : COLORS.darkGrayInput
                      : theme === "light"
                      ? COLORS.white
                      : COLORS.darkBlue,
                }}
                className="transition-[drop-shadow] cursor-pointer drop-shadow-xl min-w-[32px] h-8 leading-8 text-center rounded-lg font-bold
              hover:drop-shadow-none"
              >
                {i + PAGES - 3}
              </li>
            );
          } else {
            return (
              <li
                onClick={() => router.push({query: {page: currentPage + i - 2}})}
                key={i}
                style={{
                  background:
                    i === 2
                      ? theme === "light"
                      ? COLORS.lightBlue
                      : COLORS.darkGrayInput
                      : theme === "light"
                      ? COLORS.white
                      : COLORS.darkBlue,
                }}
                className="transition-[drop-shadow] cursor-pointer drop-shadow-xl min-w-[32px] h-8 leading-8 text-center rounded-lg font-bold
              hover:drop-shadow-none"
              >
                {currentPage + i - 2}
              </li>
            );
          }
        })}
        {currentPage <= PAGES - 3 && (
          <>
            <li className="transition-[drop-shadow] pointer-events-none drop-shadow-xl h-8 leading-8 text-center rounded-lg font-bold">
              ...
            </li>
            <li
              className="transition-[drop-shadow] cursor-pointer drop-shadow-xl min-w-[32px] h-8 leading-8 text-center rounded-lg font-bold
              hover:drop-shadow-none"
              style={{
                background:
                  theme === "light"
                    ? COLORS.white
                    : COLORS.darkBlue,
              }}
              onClick={() => router.push({query: {page: PAGES}})}
            >
              {PAGES}
            </li>
          </>
        )}
      </ul>
      <div
        className="cursor-pointer drop-shadow-xl h-8 w-2 leading-8 text-center flex items-center shrink-0"
        onClick={() => {

          const page = Number.parseInt(router.query.page as string)
          if (page <=  1) return

          router.push({
            query: {page: page + 1}
          }
          
        )}}
      >
        <Image
          className="w-full"
          src={Right}
          width={Right.width}
          height={Right.height}
          alt="right"
          style={{ filter: theme === "dark" ? "invert(100%)" : "" }}
        />
      </div>
    </div>
  );
}

function List() {
  const router = useRouter();

  let [filter, setFilter] = useState<string | null>(null);
  let [search, setSearch] = useState<string>("");
  let [list, setList]: [list: Country[], setList: any] = useState(
    data.map(({ name, flag, population, region, capital }) => ({
      name,
      flag,
      population,
      region,
      capital,
    }))
  );

  useEffect(() => {
    let _temp = data;

    if (filter) _temp = _temp.filter((e) => e.region === filter);
    if (search !== "")
      _temp = _temp.filter((e) => e.name.match(new RegExp(`.*${search}`, "i")));

    setList(
      _temp.map(({ name, flag, population, region, capital }) => ({
        name,
        flag,
        population,
        region,
        capital,
      }))
    );

    router.replace({
      query: {page: 1}
    })

  }, [filter, search]);

  const PAGES = useMemo(() => Math.ceil(list.length / 20), [list]);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!router.query.page) return;
    const page = Number.parseInt(router.query.page as string);

    if (!page || page < 1) router.replace({ query: { page: 1 } });
    else if (page > PAGES) router.replace({ query: { page: PAGES } });
  }, [router]);

  const currentPage = useMemo(
    () => Number.parseInt(router.query.page as string),
    [router]
  );

  return (
    <div
      className="flex flex-col gap-10 px-4 py-6 items-start
      md:px-20 md:py-12 md:gap-12"
    >
      <div
        className="flex flex-col gap-10 justify-between items-start w-full
        md:flex-row md:gap-[unset] md:items-stretch"
      >
        <div
          style={{
            background: theme === "light" ? COLORS.white : COLORS.darkBlue,
          }}
          className="flex justify-between gap-8 w-full items-center h-14 px-8 py-3 rounded-lg shadow-md
          md:w-[480px]"
        >
          <img
            src={Search.src}
            alt="search"
            className="h-full"
            style={theme === "dark" ? { filter: "invert(100%)" } : undefined}
          />
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
        className="w-full grid justify-around gap-x-10 gap-y-10 grid-cols-[repeat(auto-fill,256px)]
        md:gap-x-5 md:gap-y-20 min-[960px]:justify-between"
      >
        {list
          .filter(
            (e, i) => i >= (currentPage - 1) * 20 && i <= currentPage * 20
          )
          .map(({ name, flag, population, region, capital }, i) => (
            <Card
              key={i}
              name={name}
              flag={flag}
              population={population}
              region={region as region}
              capital={capital}
            />
          ))}
      </ul>
      {PAGES > 1 && currentPage && <Page PAGES={PAGES} currentPage={currentPage} />}
    </div>
  );
}

export function Wrapper({ children }: { children: React.ReactNode }) {
  const context = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.setProperty("min-height", "100vh");
  }, []);

  useEffect(() => {
    document.body.style.setProperty(
      "background",
      context.theme === "light" ? COLORS.veryLightGrayBg : COLORS.veryDarkBlueBg
    );
    context.toggleTheme(localStorage.theme)
  }, [context.theme]);

  return (
    <>
      <article
        className="text-sm"
        style={{
          color:
            context.theme === "light" ? COLORS.veryDarkBlueText : COLORS.white,
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        <header
          style={{
            background:
              context.theme === "light" ? COLORS.white : COLORS.darkBlue,
          }}
          className="flex justify-between items-center h-20 px-4 shadow-md
          md:px-20"
        >
          <h1 className="text-lg font-extrabold py-5">Where in the world?</h1>
          <button
            onClick={() => {
              if (context.theme === "light") {
                localStorage.setItem('theme', 'dark')
                context.toggleTheme("dark")
              } else {
                localStorage.setItem('theme', 'light')
                context.toggleTheme("light")
              }
            }}
            className="flex items-center gap-1"
          >
            {context.theme === "light" ? (
              <img src={Sun.src} className="h-4" itemType="svg" />
            ) : (
              <img
                src={Moon.src}
                alt='moon'
                className="h-4"
                style={{ filter: "invert(100%)" }}
              />
            )}
            <p className="pointer-events-none font-semibold">
              {context.theme === "light" ? "Dark" : "Light"} Mode
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
    </>
  );
}

export default function () {
  const context = useContext(ThemeContext);
  let [theme, setTheme] = useState();

  useEffect(() => {
    context.toggleTheme = (theme) => {
      context.theme = theme;
      setTheme(theme);
    };
  }, []);

  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
}
