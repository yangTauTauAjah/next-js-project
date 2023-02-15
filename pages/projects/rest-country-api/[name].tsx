import { GetStaticPaths } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { COLORS, ThemeContext, Wrapper } from ".";
import data from "../../../public/rest-country-api/data.json";

const ALPA3CODE = {
  AFG: "Afghanistan",
  ALA: "Åland Islands",
  ALB: "Albania",
  DZA: "Algeria",
  ASM: "American Samoa",
  AND: "Andorra",
  AGO: "Angola",
  AIA: "Anguilla",
  ATA: "Antarctica",
  ATG: "Antigua and Barbuda",
  ARG: "Argentina",
  ARM: "Armenia",
  ABW: "Aruba",
  AUS: "Australia",
  AUT: "Austria",
  AZE: "Azerbaijan",
  BHS: "Bahamas",
  BHR: "Bahrain",
  BGD: "Bangladesh",
  BRB: "Barbados",
  BLR: "Belarus",
  BEL: "Belgium",
  BLZ: "Belize",
  BEN: "Benin",
  BMU: "Bermuda",
  BTN: "Bhutan",
  BOL: "Bolivia (Plurinational State of)",
  BES: "Bonaire, Sint Eustatius and Saba",
  BIH: "Bosnia and Herzegovina",
  BWA: "Botswana",
  BVT: "Bouvet Island",
  BRA: "Brazil",
  IOT: "British Indian Ocean Territory",
  UMI: "United States Minor Outlying Islands",
  VGB: "Virgin Islands (British)",
  VIR: "Virgin Islands (U.S.)",
  BRN: "Brunei Darussalam",
  BGR: "Bulgaria",
  BFA: "Burkina Faso",
  BDI: "Burundi",
  KHM: "Cambodia",
  CMR: "Cameroon",
  CAN: "Canada",
  CPV: "Cabo Verde",
  CYM: "Cayman Islands",
  CAF: "Central African Republic",
  TCD: "Chad",
  CHL: "Chile",
  CHN: "China",
  CXR: "Christmas Island",
  CCK: "Cocos (Keeling) Islands",
  COL: "Colombia",
  COM: "Comoros",
  COG: "Congo",
  COD: "Congo (Democratic Republic of the)",
  COK: "Cook Islands",
  CRI: "Costa Rica",
  HRV: "Croatia",
  CUB: "Cuba",
  CUW: "Curaçao",
  CYP: "Cyprus",
  CZE: "Czech Republic",
  DNK: "Denmark",
  DJI: "Djibouti",
  DMA: "Dominica",
  DOM: "Dominican Republic",
  ECU: "Ecuador",
  EGY: "Egypt",
  SLV: "El Salvador",
  GNQ: "Equatorial Guinea",
  ERI: "Eritrea",
  EST: "Estonia",
  ETH: "Ethiopia",
  FLK: "Falkland Islands (Malvinas)",
  FRO: "Faroe Islands",
  FJI: "Fiji",
  FIN: "Finland",
  FRA: "France",
  GUF: "French Guiana",
  PYF: "French Polynesia",
  ATF: "French Southern Territories",
  GAB: "Gabon",
  GMB: "Gambia",
  GEO: "Georgia",
  DEU: "Germany",
  GHA: "Ghana",
  GIB: "Gibraltar",
  GRC: "Greece",
  GRL: "Greenland",
  GRD: "Grenada",
  GLP: "Guadeloupe",
  GUM: "Guam",
  GTM: "Guatemala",
  GGY: "Guernsey",
  GIN: "Guinea",
  GNB: "Guinea-Bissau",
  GUY: "Guyana",
  HTI: "Haiti",
  HMD: "Heard Island and McDonald Islands",
  VAT: "Vatican City",
  HND: "Honduras",
  HUN: "Hungary",
  HKG: "Hong Kong",
  ISL: "Iceland",
  IND: "India",
  IDN: "Indonesia",
  CIV: "Ivory Coast",
  IRN: "Iran (Islamic Republic of)",
  IRQ: "Iraq",
  IRL: "Ireland",
  IMN: "Isle of Man",
  ISR: "Israel",
  ITA: "Italy",
  JAM: "Jamaica",
  JPN: "Japan",
  JEY: "Jersey",
  JOR: "Jordan",
  KAZ: "Kazakhstan",
  KEN: "Kenya",
  KIR: "Kiribati",
  KWT: "Kuwait",
  KGZ: "Kyrgyzstan",
  LAO: "Lao People's Democratic Republic",
  LVA: "Latvia",
  LBN: "Lebanon",
  LSO: "Lesotho",
  LBR: "Liberia",
  LBY: "Libya",
  LIE: "Liechtenstein",
  LTU: "Lithuania",
  LUX: "Luxembourg",
  MAC: "Macao",
  MKD: "North Macedonia",
  MDG: "Madagascar",
  MWI: "Malawi",
  MYS: "Malaysia",
  MDV: "Maldives",
  MLI: "Mali",
  MLT: "Malta",
  MHL: "Marshall Islands",
  MTQ: "Martinique",
  MRT: "Mauritania",
  MUS: "Mauritius",
  MYT: "Mayotte",
  MEX: "Mexico",
  FSM: "Micronesia (Federated States of)",
  MDA: "Moldova (Republic of)",
  MCO: "Monaco",
  MNG: "Mongolia",
  MNE: "Montenegro",
  MSR: "Montserrat",
  MAR: "Morocco",
  MOZ: "Mozambique",
  MMR: "Myanmar",
  NAM: "Namibia",
  NRU: "Nauru",
  NPL: "Nepal",
  NLD: "Netherlands",
  NCL: "New Caledonia",
  NZL: "New Zealand",
  NIC: "Nicaragua",
  NER: "Niger",
  NGA: "Nigeria",
  NIU: "Niue",
  NFK: "Norfolk Island",
  PRK: "Korea (Democratic People's Republic of)",
  MNP: "Northern Mariana Islands",
  NOR: "Norway",
  OMN: "Oman",
  PAK: "Pakistan",
  PLW: "Palau",
  PSE: "Palestine, State of",
  PAN: "Panama",
  PNG: "Papua New Guinea",
  PRY: "Paraguay",
  PER: "Peru",
  PHL: "Philippines",
  PCN: "Pitcairn",
  POL: "Poland",
  PRT: "Portugal",
  PRI: "Puerto Rico",
  QAT: "Qatar",
  UNK: "Republic of Kosovo",
  REU: "Réunion",
  ROU: "Romania",
  RUS: "Russian Federation",
  RWA: "Rwanda",
  BLM: "Saint Barthélemy",
  SHN: "Saint Helena, Ascension and Tristan da Cunha",
  KNA: "Saint Kitts and Nevis",
  LCA: "Saint Lucia",
  MAF: "Saint Martin (French part)",
  SPM: "Saint Pierre and Miquelon",
  VCT: "Saint Vincent and the Grenadines",
  WSM: "Samoa",
  SMR: "San Marino",
  STP: "Sao Tome and Principe",
  SAU: "Saudi Arabia",
  SEN: "Senegal",
  SRB: "Serbia",
  SYC: "Seychelles",
  SLE: "Sierra Leone",
  SGP: "Singapore",
  SXM: "Sint Maarten (Dutch part)",
  SVK: "Slovakia",
  SVN: "Slovenia",
  SLB: "Solomon Islands",
  SOM: "Somalia",
  ZAF: "South Africa",
  SGS: "South Georgia and the South Sandwich Islands",
  KOR: "Korea (Republic of)",
  ESP: "Spain",
  LKA: "Sri Lanka",
  SDN: "Sudan",
  SSD: "South Sudan",
  SUR: "Suriname",
  SJM: "Svalbard and Jan Mayen",
  SWZ: "Swaziland",
  SWE: "Sweden",
  CHE: "Switzerland",
  SYR: "Syrian Arab Republic",
  TWN: "Taiwan",
  TJK: "Tajikistan",
  TZA: "Tanzania, United Republic of",
  THA: "Thailand",
  TLS: "Timor-Leste",
  TGO: "Togo",
  TKL: "Tokelau",
  TON: "Tonga",
  TTO: "Trinidad and Tobago",
  TUN: "Tunisia",
  TUR: "Turkey",
  TKM: "Turkmenistan",
  TCA: "Turks and Caicos Islands",
  TUV: "Tuvalu",
  UGA: "Uganda",
  UKR: "Ukraine",
  ARE: "United Arab Emirates",
  GBR: "United Kingdom of Great Britain and Northern Ireland",
  USA: "United States of America",
  URY: "Uruguay",
  UZB: "Uzbekistan",
  VUT: "Vanuatu",
  VEN: "Venezuela (Bolivarian Republic of)",
  VNM: "Vietnam",
  WLF: "Wallis and Futuna",
  ESH: "Western Sahara",
  YEM: "Yemen",
  ZMB: "Zambia",
  ZWE: "Zimbabwe",
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { name: "afghanistan" } },
      { params: { name: "belgium" } },
      { params: { name: "indonesia" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { name: string };
}) => {
  return {
    props: { name: params.name },
  };
};

export default function ({ name }: { name: string }) {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading</h1>;

  const country = useMemo(
    () => data.find((e) => e.name.match(new RegExp(name, "i"))),
    []
  );

  return (
    <Wrapper>
      <ThemeContext.Consumer>
        {({ theme }) =>
          country ? (
            <div className="w-auto px-7 py-10">
              <button
                onClick={() => router.push('/projects/rest-country-api/indonesia')}
                style={{
                  background:
                    theme === "light" ? COLORS.white : COLORS.darkBlue,
                }}
                className="rounded flex justify-between items-center px-8 w-24 h-8 shadow-lg"
              >
                {/* @ts-ignore */}
                <ion-icon size="large" name="arrow-back-outline" />
                <p className="pointer-event-none">Back</p>
              </button>
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
                    <span className="font-semibold">Region:</span>{" "}
                    {country.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span>{" "}
                    {country.capital}
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
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {country?.borders?.map((e, i) => (
                      <li
                        key={i}
                        style={{
                          background: theme === 'white' ? COLORS.white : COLORS.darkBlue
                        }}
                        className="rounded shadow-lg flex place-items-center px-4 h-7"
                      >
                        <p className="w-full text-center">
                          {ALPA3CODE[e as keyof typeof ALPA3CODE]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <h1>404</h1>
          )
        }
      </ThemeContext.Consumer>
    </Wrapper>
  );
}
