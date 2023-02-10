import Image from "next/image";
import { MutableRefObject, useRef, useState } from "react";
import banner from "../../../public/multi-step-form/images/bg-sidebar-desktop.svg";
import Form from "../../../components/form/Form";
import FinalStep from "../../../components/form/FinalStep";

enum Plan {
  ARCADE = 0,
  ADVANCED = 1,
  PRO = 2
}

enum Addons {
  ONLINE_SERVICE = 0,
  LARGER_STORAGE = 1,
  CUSTOMIZABLE_PROFILE = 2
} 

type UserDataStructure = [
  {
    name: string,
    email: string,
    phone: string
  },
  {
    plan: Plan,
    monthly: boolean
  },
  {
    addons: Addons[]
  }
]

type BannerLiProps = { order: number; children: string; selected?: boolean };

const BannerLi = (props: BannerLiProps) => {
  return (
    <li className="flex gap-7 h-10">
      <div
        className={`aspect-square box-content h-full text-center align-middle leading-10 rounded-full font-bold
        ${props.selected ? "bg-[#BEE1FD]" : "border-[#BEE1FD] border-2 text-white"}`}
      >
        {props.order}
      </div>
      <div className="flex flex-col text-white">
        <h5 className="font-normal">STEP {props.order}</h5>
        <h3 className="font-bold">{props.children}</h3>
      </div>
    </li>
  );
};

const Forms = [
  {
    heading: 'Personal Info',
    desc: 'Please provide your name, email address, and phone number.'
  },
  {
    heading: 'Select your plan',
    desc: 'You have the option of monthly or yearly billing.'
  },
  {
    heading: 'Pick add-ons',
    desc: 'Add-ons help enhance your gaming experience.'
  },
  {
    heading: 'Finishing up',
    desc: 'Double-check everything looks OK before confirming.'
  }
]

const Main = () => {

  let [step, setStep]: [number, any] = useState(0)

  return (
    <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 box-content p-5 h-[568px] w-[890px] flex rounded-xl bg-white shadow-xl">
      <div id="banner" className="relative w-auto h-100%">
        <Image src={banner} alt="banner" className="h-full" />
        <ul className="absolute top-0 left-0 w-100% p-10 z-10 flex flex-col gap-8">
          <BannerLi selected={step === 0} order={1}>YOUR INFO</BannerLi>
          <BannerLi selected={step === 1} order={2}>SELECT PLAN</BannerLi>
          <BannerLi selected={step === 2} order={3}>ADD-ONS</BannerLi>
          <BannerLi selected={step === 3} order={4}>SUMMARY</BannerLi>
        </ul>
      </div>

      {
        step >= 0 && step <= 3 ? 
        <Form step={step} setStep={setStep} heading={Forms[step]['heading']} desc={Forms[step]['desc']}/> :
        <FinalStep />
      }
      
   </article>
  );
};

export default Main;
