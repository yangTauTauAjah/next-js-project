import Image from "next/image";
import IconThankYou from "../../public/multi-step-form/images/icon-thank-you.svg";

export default function () {
  return (
    <div className="flex flex-col justify-center items-center gap-9 w-min grow">
      <Image src={IconThankYou} alt="thank-you" />
      <h1 className="font-bold text-2xl">Thank you!</h1>
      <p className="text-center text-gray-400 w-[445px]">
        Thanks for conforming you subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
