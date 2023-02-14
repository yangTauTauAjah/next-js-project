import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import bannerDesktop from "../../../public/multi-step-form/images/bg-sidebar-desktop.svg";
import bannerMobile from "../../../public/multi-step-form/images/bg-sidebar-mobile.svg";
import Form, { Addons, Plan, TimePeriod, UserDataStructure } from "../../../components/form/Form";
import FinalStep from "../../../components/form/FinalStep";

type BannerLiProps = { order: number; children: string; selected?: boolean };

const BannerLi = (props: BannerLiProps) => {
  return (
    <li className="flex gap-7 h-10">
      <div
        className={`aspect-square box-content h-full text-center align-middle leading-10 rounded-full font-bold pointer-events-none
        ${
          props.selected
            ? "bg-[#BEE1FD]"
            : "border-[#BEE1FD] border-2 text-white"
        }`}
      >
        {props.order}
      </div>
      <div className="flex flex-col text-white">
        <h5 className="font-normal pointer-events-none">STEP {props.order}</h5>
        <h3 className="font-bold pointer-events-none">{props.children}</h3>
      </div>
    </li>
  );
};

const Forms = [
  {
    heading: "Personal Info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    heading: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
  {
    heading: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    heading: "Finishing up",
    desc: "Double-check everything looks OK before confirming.",
  },
];

const BannerList = ["YOUR INFO", "SELECT PLAN", "ADDO-ONS", "SUMMARY"];

const Desktop = ({
  data,
  step,
  setStep,
}: {
  data: React.MutableRefObject<UserDataStructure>,
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 box-content p-5 h-[568px] w-[890px] flex rounded-xl bg-white shadow-xl">
      <div id="banner" className="relative w-auto h-100%">
        <Image src={bannerDesktop} alt="banner" className="h-full" />
        <ul className="absolute top-0 left-0 w-100% p-10 z-10 flex flex-col gap-8">
          {BannerList.map((e, i) => (
            <BannerLi key={i} selected={step === i} order={i + 1}>
              {e}
            </BannerLi>
          ))}
        </ul>
      </div>

      {step >= 0 && step <= 3 ? (
        <Form
          data={data}
          step={step}
          setStep={setStep}
          heading={Forms[step]["heading"]}
          desc={Forms[step]["desc"]}
        />
      ) : (
        <FinalStep />
      )}
    </article>
  );
};

const Mobile = ({
  data,
  step,
  setStep,
}: {
  data: React.MutableRefObject<UserDataStructure>,
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <article className="relative min-h-[800px] h-[100vh]">
      <Image src={bannerMobile} alt="banner" className="w-full" />

      {step <= 3 && (
        <div className="bg-white absolute bottom-0 flex justify-between w-full p-4">
          <button
            type="button"
            onClick={() =>
              setStep((prev) => {
                if (step !== 0) return --prev;
                return 0;
              })
            }
            className={`${
              step === 0 && "invisible"
            } transition-colors tracking-wider font-bold px-7 py-3 text-gray-400 hover:text-[#174A8B]`}
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={() => {
              setStep((prev) => {
                if (step !== 4) return ++prev;
                return 3;
              });
            }}
            className={`transition-colors tracking-wider font-bold px-7 py-3 ${
              step === 3
                ? "bg-[#483EFF] hover:bg-[#938CFE]"
                : "bg-[#03295A] hover:bg-[#174A8B]"
            } text-white rounded-lg`}
          >
            {step === 3 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full">
        <ul className="my-8 w-full flex justify-center items-center gap-4">
          {[1, 2, 3, 4].map((e, i) => (
            <li
              key={i}
              className={`pointer-events-none aspect-square box-content rounded-full h-8 text-center font-bold text-xs leading-8 ${
                step === i
                  ? "bg-[#BEE1FD]"
                  : "border-[#BEE1FD] border-2 text-white"
              }`}
            >
              {e}
            </li>
          ))}
        </ul>

        {step >= 0 && step <= 3 ? (
          <Form
            data={data}
            step={step}
            setStep={setStep}
            heading={Forms[step]["heading"]}
            desc={Forms[step]["desc"]}
          />
        ) : (
          <FinalStep />
        )}
      </div>
    </article>
  );
};

const Main = () => {
  let [display, setDisplay] = useState("mobile");
  let [step, setStep]: [number, any] = useState(0);
  let data: React.MutableRefObject<UserDataStructure> = useRef([
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (innerWidth <= 768) setDisplay("mobile");
      else setDisplay("desktop");
    });
  }, []);

  useEffect(() => {
    console.log(display);
  }, [display]);

  return display === "mobile" ? (
    <Mobile data={data} step={step} setStep={setStep} />
  ) : (
    <Desktop data={data} step={step} setStep={setStep} />
  );
};

export default Main;
