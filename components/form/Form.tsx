import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { MutableRefObject, useRef } from "react";

export enum Plan {
  ARCADE = 0,
  ADVANCED = 1,
  PRO = 2,
}

export enum Addons {
  ONLINE_SERVICE = 0,
  LARGER_STORAGE = 1,
  CUSTOMIZABLE_PROFILE = 2,
}

export enum TimePeriod {
  MONTHLY = 0,
  YEARLY = 1,
}

export let Price = {
  [TimePeriod.MONTHLY]: {
    plan: {
      [Plan.ARCADE]: 9,
      [Plan.ADVANCED]: 12,
      [Plan.PRO]: 15,
    },
    addons: {
      [Addons.ONLINE_SERVICE]: 1,
      [Addons.LARGER_STORAGE]: 2,
      [Addons.CUSTOMIZABLE_PROFILE]: 2,
    },
  },
  [TimePeriod.YEARLY]: {
    plan: {
      [Plan.ARCADE]: 90,
      [Plan.ADVANCED]: 120,
      [Plan.PRO]: 150,
    },
    addons: {
      [Addons.ONLINE_SERVICE]: 10,
      [Addons.LARGER_STORAGE]: 20,
      [Addons.CUSTOMIZABLE_PROFILE]: 20,
    },
  },
};

export type UserDataStructure = [
  {
    name: string;
    email: string;
    phone: string;
  },
  {
    plan: Plan;
    period: TimePeriod;
  },
  {
    [Addons.ONLINE_SERVICE]: boolean;
    [Addons.LARGER_STORAGE]: boolean;
    [Addons.CUSTOMIZABLE_PROFILE]: boolean;
  }
];

type FormProps = {
  data: MutableRefObject<UserDataStructure>,
  heading: string;
  desc: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

function desktop({ data, heading, desc, step, setStep }: FormProps) {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStep((prev) => {
          if (step !== 4) return ++prev;
          return 3;
        });
      }}
      className="flex flex-col justify-between shadow-xl rounded-xl bg-white px-6 py-9 w-[90vw] gap-7 md:w-[456px] mx-auto md:my-5 md:shadow-none md:p-0"
    >
      <div className=" pointer-events-none">
        <h1 className="font-bold text-2xl mb-4">{heading}</h1>
        <h5 className="font-medium text-gray-400">{desc}</h5>
      </div>
      {(() => {
        switch (step) {
          case 0:
            return <FirstStep data={data.current} />;
          case 1:
            return <SecondStep data={data.current} />;
          case 2:
            return <ThirdStep data={data.current} />;
          case 3:
            return <FourthStep data={data.current} setStep={setStep} />;
        }
      })()}
      {
        <div className="hidden justify-between md:flex">
          <button
            type="button"
            onClick={() =>
              setStep((prev) => {
                if (step !== 0) return --prev;
                return 0;
              })
            }
            className="transition-colors tracking-wider font-bold px-7 py-3 text-gray-400 hover:text-[#174A8B]"
          >
            Go Back
          </button>
          <button
            type="submit"
            className={`transition-colors tracking-wider font-bold px-7 py-3 ${
              step === 3
                ? "bg-[#483EFF] hover:bg-[#938CFE]"
                : "bg-[#03295A] hover:bg-[#174A8B]"
            } text-white rounded-lg`}
          >
            {step === 3 ? "Confirm" : "Next Step"}
          </button>
        </div>
      }
    </form>
  );
}

function mobile({ heading, desc, step, setStep }: FormProps) {
  let data: MutableRefObject<UserDataStructure> = useRef([
    {
      name: "",
      email: "",
      phone: "",
    },
    {
      plan: Plan.ARCADE,
      period: TimePeriod.MONTHLY,
    },
    {
      [Addons.ONLINE_SERVICE]: false,
      [Addons.LARGER_STORAGE]: false,
      [Addons.CUSTOMIZABLE_PROFILE]: false,
    },
  ]);

  return (
    <form className="shadow-xl rounded-xl bg-white px-6 py-9 flex flex-col justify-between w-[90vw] mx-auto gap-7">
      <div className=" pointer-events-none">
        <h1 className="font-bold text-2xl mb-4">{heading}</h1>
        <h5 className="font-medium text-gray-400">{desc}</h5>
      </div>
      {/* <FirstStep data={data.current} /> */}
      {/* <SecondStep data={data.current} /> */}
      {/* <ThirdStep data={data.current} /> */}
      <FourthStep data={data.current} setStep={setStep} />
    </form>
  );
}

export default desktop;
