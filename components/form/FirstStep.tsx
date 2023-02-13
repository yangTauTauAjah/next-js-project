import { useEffect, useRef } from "react";
import { UserDataStructure } from "./Form";

const onchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  const element = e.target;
  const warning = element.parentNode?.querySelector(".warning");

  if (element.validity.valid) {
    element.classList.remove("invalid");
    warning?.classList.add("hidden");
  } else {
    if (element.value !== "")
      warning ? (warning.textContent = "The value is invalid") : null;
    else warning ? (warning.textContent = "This field is required") : null;
    element.classList.add("invalid");
    warning?.classList.remove("hidden");
  }
};

function desktop({ data }: { data: UserDataStructure }) {
  let InputRef = useRef({
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
  });

  useEffect(() => {
    if (InputRef.current.name.current)
      InputRef.current.name.current.value = data[0].name;
    if (InputRef.current.email.current)
      InputRef.current.email.current.value = data[0].email;
    if (InputRef.current.phone.current)
      InputRef.current.phone.current.value = data[0].phone;
  }, []);

  return (
    <ul className="flex flex-col gap-6 font-medium">
      <li className="flex flex-col gap-1">
        <div className="flex justify-between">
          <label className="font-normal" htmlFor="name-input">
            Name
          </label>
          <p className="warning hidden text-red-500">This field is required</p>
        </div>
        <input
          onChange={(e) => {
            onchange(e);
            data[0].name = e.target.value;
          }}
          ref={InputRef.current.name}
          id="name-input"
          placeholder="e. g. Stephen King"
          className="h-10 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-lg px-5 md:h-14"
          type="text"
          required
        />
      </li>
      <li className="flex flex-col gap-1 font-medium">
        <div className="flex justify-between">
          <label className="font-normal" htmlFor="email-input">
            Email Address
          </label>
          <p className="warning hidden text-red-500">This field is required</p>
        </div>
        <input
          onChange={(e) => {
            onchange(e);
            data[0].email = e.target.value;
          }}
          ref={InputRef.current.email}
          id="email-input"
          placeholder="e. g. stephenking@lorem.com"
          className="h-10 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-lg px-5 md:h-14"
          type="email"
          required
        />
      </li>
      <li className="flex flex-col gap-1 font-medium">
        <div className="flex justify-between">
          <label className="font-normal" htmlFor="phone-number-input">
            Phone Number
          </label>
          <p className="warning hidden text-red-500">This field is required</p>
        </div>
        <input
          onChange={(e) => {
            onchange(e);
            data[0].phone = e.target.value;
          }}
          ref={InputRef.current.phone}
          id="phone-input"
          placeholder="e. g. +1 234 567 890"
          className="h-10 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-lg px-5 md:h-14"
          type="tel"
          required
        />
      </li>
    </ul>
  );
}

function mobile({ data }: { data: UserDataStructure }) {

  return (
    <ul className="flex flex-col gap-6 font-medium">
      <li className="flex flex-col gap-1">
        <div className="flex justify-between">
          <label className="font-normal" htmlFor="name-input">
            Name
          </label>
          <p className="warning hidden text-red-500">
            This field is required
          </p>
        </div>
        <input
          id="name-input"
          placeholder="e. g. Stephen King"
          className="h-10 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-md px-5 placeholder:font-bold"
          type="text"
          required
        />
      </li>
      <li className="flex flex-col gap-1 font-medium">
        <div className="flex justify-between">
          <label className="font-normal" htmlFor="email-input">
            Email Address
          </label>
          <p className="warning hidden text-red-500">
            This field is required
          </p>
        </div>
        <input
          id="email-input"
          placeholder="e. g. stephenking@lorem.com"
          className="h-10 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-md px-5 placeholder:font-bold"
          type="email"
          required
        />
      </li>
      <li className="flex flex-col gap-1 font-medium">
        <div className="flex justify-between">
          <label className="font-normal" htmlFor="phone-number-input">
            Phone Number
          </label>
          <p className="warning hidden text-red-500">
            This field is required
          </p>
        </div>
        <input
          id="phone-input"
          placeholder="e. g. +1 234 567 890"
          className="h-10 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-md px-5 placeholder:font-bold"
          type="tel"
          required
        />
      </li>
    </ul>
  );
}

export default desktop;