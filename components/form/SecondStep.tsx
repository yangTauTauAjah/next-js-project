import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import IconArcade from "../../public/multi-step-form/images/icon-arcade.svg";
import IconAdvanced from "../../public/multi-step-form/images/icon-advanced.svg";
import IconPro from "../../public/multi-step-form/images/icon-pro.svg";
import { Addons, Plan, TimePeriod, UserDataStructure } from "./Form";

type CardProps = {
  index?: number;
  selected: boolean;
  mode: 0 | 1;
  icon: any;
  label: string;
  priceMo: number;
  priceYr: number;
  onClick: (ev: any) => any;
};

const CardElement = ({
  index,
  selected,
  mode,
  icon,
  label,
  priceMo,
  priceYr,
  onClick,
}: CardProps) => {

  return (
    <li
      onClick={() => onClick(index)}
      className={`
      cursor-pointer
      rounded-lg
      hover:border-[#483EFF]
      ${
        selected
          ? "border-[#483EFF] bg-gray-100"
          : "border-gray-300 bg-transparent"
      }
      border-2
      flex
      flex-col
      px-3
      py-4
      w-28
      gap-8`}
    >
      <Image src={icon} alt={label} />
      <div>
        <h3>{label}</h3>
        <h4 className="text-gray-400 font-normal">
          ${!mode ? priceMo : priceYr}/{!mode ? "mo" : "Yr"}
        </h4>
        <h4 className={`${!mode ? "hidden" : null} font-normal text-xs`}>
          2 months free
        </h4>
      </div>
    </li>
  );
};

const CardList = [
  {
    icon: IconArcade,
    label: "Arcade",
    priceMo: 9,
    priceYr: 90,
  },
  {
    icon: IconAdvanced,
    label: "Advanced",
    priceMo: 12,
    priceYr: 120,
  },
  {
    icon: IconPro,
    label: "Pro",
    priceMo: 15,
    priceYr: 150,
  },
];

export default function ({ data }: { data: UserDataStructure }) {
  let [mode, setMode]: [TimePeriod, any] = useState(data[1].period);
  let [select, setSelect]: [Plan, any] = useState(data[1].plan);
  const toggle: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useEffect(() => {
    data[1].plan = select;
    data[1].period = mode;
  }, [select, mode]);

  return (
    <div className="font-medium flex flex-col gap-7">
      <ul className="flex gap-4">
        {CardList.map(({ icon, label, priceMo, priceYr }, i) => (
          <CardElement
            key={i}
            index={i}
            selected={select === i}
            onClick={setSelect}
            mode={mode}
            icon={icon}
            label={label}
            priceMo={priceMo}
            priceYr={priceYr}
          />
        ))}
      </ul>
      <div className="flex justify-center items-center bg-[#F8F9FE] h-10 gap-5 rounded-lg">
        <p className={`${mode && "text-gray-400"} pointer-events-none`}>
          Monthly
        </p>
        <div
          onClick={() => {
            toggle.current &&
              (!mode
                ? (toggle.current.style.left = "calc(100% - 14px)")
                : (toggle.current.style.left = "2px"));

            setMode(mode ? 0 : 1);
          }}
          className="cursor-pointer relative h-4 w-7 bg-[#03285A] rounded-full"
        >
          <div
            ref={toggle}
            style={{
              left: mode ? "calc(100% - 14px)" : "2px",
            }}
            className={`transition-all absolute top-1/2 -translate-y-1/2 aspect-square block bg-white h-3/4 rounded-full`}
          />
        </div>
        <p className={`${!mode && "text-gray-400"} pointer-events-none`}>
          Yearly
        </p>
      </div>
    </div>
  );
}
