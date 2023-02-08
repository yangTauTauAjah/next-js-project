


export default function ({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) {

  return (
    <form
      onSubmit={e => {e.preventDefault(); setStep((prev) => ++prev)}}
      className="flex flex-col justify-between w-auto my-5 mx-auto"
    >
      <div>
        <h1 className="font-bold text-2xl mb-4">Finishing up</h1>
        <h5 className="font-medium text-gray-400">
        Double-check everything looks OK before confirming.
        </h5>
      </div>
      <div className="flex flex-col gap-8 font-medium">
        <div className='flex flex-col bg-[#F8F9FE] rounded-lg'>
          <div className='flex justify-between items-center mx-5 py-5 border-b-[1px] border-gray-200'>
            <div>
              <h3 className="font-bold text-sm">Arcade (Monthly)</h3>
              <a href="#" className="border-b-2 border-gray-400 text-xs text-gray-400">Change</a>
            </div>
            <h3 className="font-bold text-base">$9/mo</h3>
          </div>
          <ul className="flex flex-col mx-5 py-5 gap-4 border-t-[1px] border-gray-200">
            <li className="flex justify-between items-center">
              <p className="text-xs font-medium text-gray-400">Online service</p>
              <h3 className="font-normal text-sm">+$1/mo</h3>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-xs font-medium text-gray-400">Larger storage</p>
              <h3 className="font-normal text-sm">+$2/mo</h3>
            </li>
          </ul>
        </div>
        <div className="flex justify-between mx-5 items-center">
          <p className="text-xs font-medium text-gray-400">Total (per month)</p>
          <h3 className="font-bold text-xl text-[#483EFF]">+$12/mo</h3>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setStep((prev) => --prev)}
          type="submit"
          className="transition-colors font-medium px-7 py-3 text-gray-400 hover:text-[#174A8B]"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="transition-colors font-medium px-7 py-3 bg-[#483EFF] hover:bg-[#938CFE] text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
