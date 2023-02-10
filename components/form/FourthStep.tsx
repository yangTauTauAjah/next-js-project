import { UserDataStructure, Price, Plan, TimePeriod, Addons } from "./Form";

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

export default function ({ data }: { data: UserDataStructure }) {
  return (
    <div className="flex flex-col gap-8 font-medium">
      <div className="flex flex-col bg-[#F8F9FE] rounded-lg">
        <div className="flex justify-between items-center mx-5 py-5 border-b-[1px] border-gray-200">
          <div>
            <h3 className="font-bold text-sm">
              {Plan[data[1].plan]} ({TimePeriod[data[1].period]})
            </h3>
            <a
              href="#"
              className="border-b-2 border-gray-400 text-xs text-gray-400"
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
          Total (per {TimePeriod[data[1].period]})
        </p>
        <h3 className="font-bold text-xl text-[#483EFF]">
          +
          {Object
          .keys(data[2])
          .filter(key => data[2][Number(key) as 0 | 1 | 2])
          .map(key => Price[data[1].period].addons[Number(key) as 0 | 1 | 2])
          .reduce((prev, cur) => prev + cur, 0)
          + Price[data[1].period].plan[data[1].plan]}
          /{TimePeriod[data[1].period]}
        </h3>
      </div>
    </div>
  );
}
