import { UserDataStructure, Price } from "./Form";

const AddonsLi = ({
  label,
  price,
  period,
}: {
  label: string;
  price: number;
  period: string;
}) => (
  <li className="flex justify-between items-center">
    <p className="text-xs font-medium text-gray-400">{label}</p>
    <h3 className="font-normal text-sm">
      +${price}/{period}
    </h3>
  </li>
);

const Plan = ["Arcade", "Advanced", "Pro"];
const Addons = ["Online service", "Larger storage", "Customizable profile"];
const TimePeriod = ["mo", "yr"];

export default function ({
  data,
  setStep,
}: {
  data: UserDataStructure;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-col gap-8 font-medium">
      <div className="flex flex-col bg-[#F8F9FE] rounded-lg">
        <div className="flex justify-between items-center mx-5 py-5 border-b-[1px] border-gray-200">
          <div>
            <h3 className="font-bold text-sm">
              {Plan[data[1].plan]} ({data[1].period ? "Yearly" : "Monthly"})
            </h3>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setStep(2);
              }}
              className="border-b-2 transition-all text-xs border-gray-400 text-gray-400 hover:text-[#483EFF] hover:border-[#483EFF]"
            >
              Change
            </a>
          </div>
          <h3 className="font-bold text-base">
            ${Price[data[1].period].plan[data[1].plan]}/
            {TimePeriod[data[1].period]}
          </h3>
        </div>
        <ul className="flex flex-col mx-5 py-5 gap-4 border-t-[1px] border-gray-200">
          {Object.keys(data[2]).map((key) => {
            const i = Number(key) as 0 | 1 | 2;
            const e = data[2][i];
            return (
              e && (
                <AddonsLi
                  key={i}
                  label={Addons[i]}
                  price={Price[data[1].period].addons[i]}
                  period={TimePeriod[data[1].period]}
                />
              )
            );
          })}
        </ul>
      </div>
      <div className="flex justify-between mx-5 items-center">
        <p className="text-xs font-medium text-gray-400">
          Total (per {data[1].period ? "year" : "month"})
        </p>
        <h3 className="font-bold text-xl text-[#483EFF]">
          $
          {[
            data[2][0] ? Price[data[1].period].addons[0] : 0,
            data[2][1] ? Price[data[1].period].addons[1] : 0,
            data[2][2] ? Price[data[1].period].addons[2] : 0,
          ].reduce((prev, cur) => prev + cur, 0) +
            Price[data[1].period].plan[data[1].plan]}
          /{TimePeriod[data[1].period]}
        </h3>
      </div>
    </div>
  );
}
