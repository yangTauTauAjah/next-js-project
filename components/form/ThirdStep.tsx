import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Addons, TimePeriod, UserDataStructure } from "./Form";

type AddonsProps = {
  order: number;
  data: UserDataStructure[2];
  mode: TimePeriod;
  label: string;
  desc: string;
  priceMo: number;
  priceYr: number;
};

const AddonsLi = ({
  order,
  data,
  mode,
  label,
  desc,
  priceMo,
  priceYr,
}: AddonsProps) => {
  let [selected, setSelected] = useState(data[order as 0 | 1 | 2]);
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  useEffect(() => {
    data[order as 0 | 1 | 2] = selected;
  }, [selected]);

  return (
    <li
      onClick={(e) => {
        setSelected(!selected);
        if (e.target !== inputRef.current)
          inputRef.current?.dispatchEvent(new MouseEvent("click"));
      }}
      className={`
    transition-colors
    hover:border-[#483EFF]
    cursor-pointer
    flex
    justify-between
    items-center
    h-20
    p-6
    border-[1px]
    rounded-lg
    md:gap-24
    ${
      !selected
        ? "border-gray-300 bg-transparent"
        : "border-[#483EFF] bg-gray-100"
    }`}
    >
      <div className="flex gap-6">
        <input
          onChange={() => setSelected(!selected)}
          checked={selected}
          ref={inputRef}
          className="cursor-pointer scale-150 accent-[#483EFF] md:scale-125"
          type="checkbox"
          name={label}
        />
        <div>
          <h4 className="pointer-events-none font-bold text-xs md:text-sm">
            {label}
          </h4>
          <h5 className="pointer-events-none font-normal text-xs md:text-sm text-gray-400">
            {desc}
          </h5>
        </div>
      </div>
      <p className="pointer-events-none font-normal text-[#483EFF]">
        +${!mode ? priceMo : priceYr}/{!mode ? "mo" : "Yr"}
      </p>
    </li>
  );
};

const AddonsList = [
  {
    label: "Online service",
    desc: "Access to multiplayer games",
    priceMo: 1,
    priceYr: 10,
  },
  {
    label: "Larger storage",
    desc: "Extra 1TB of cloud save",
    priceMo: 2,
    priceYr: 20,
  },
  {
    label: "Customizable profile",
    desc: "Custom theme on your profile",
    priceMo: 2,
    priceYr: 20,
  },
];

export default function Main({ data }: { data: UserDataStructure }) {
  return (
    <ul className="flex flex-col gap-4 font-medium">
      {AddonsList.map(({ label, desc, priceMo, priceYr }, i) => (
        <AddonsLi
          key={i}
          order={i}
          data={data[2]}
          mode={data[1].period}
          label={label}
          desc={desc}
          priceMo={priceMo}
          priceYr={priceYr}
        />
      ))}
    </ul>
  );
}
