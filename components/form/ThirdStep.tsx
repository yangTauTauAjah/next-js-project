import Image from 'next/image'
import { useState } from 'react'

type AddonsProps = {
  order: number,
  mode: 0 | 1,
  id: string,
  label: string,
  desc: string,
  priceMo: number,
  priceYr: number
}

const AddonsLi = ({order, mode, id, label, desc, priceMo, priceYr}: AddonsProps) => {

  let [selected, setSelected] = useState(false)

  return (
    <li
    key={order}
    className={`
    cursor-pointer
    flex
    gap-24
    justify-between
    items-center
    h-20
    p-6
    border-[1px]
    rounded-lg
    ${!selected ? 'border-gray-300 bg-transparent' : 'border-[#483EFF] bg-gray-100'}`}>
      <div className='flex gap-6'>
        <input
        onClick={() => setSelected(!selected)}
        className='cursor-pointer scale-125 accent-[#483EFF]' type="checkbox" name={label} id={id} />
        <div>
          <h4 className='pointer-events-none font-bold text-sm'>{label}</h4>
          <h5 className='pointer-events-none font-normal text-sm text-gray-400'>{desc}</h5>
        </div>
      </div>
      <p className='pointer-events-none font-normal text-[#483EFF]'>+${!mode ? priceMo : priceYr}/{!mode ? 'mo' : 'Yr'}</p>
    </li>
  )

}

const AddonsList = [
  {
    id: 'online-service',
    label: 'Online service',
    desc: 'Access to multiplayer games',
    priceMo: 1,
    priceYr: 10
  },
  {
    id: 'larger-storage',
    label: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    priceMo: 2,
    priceYr: 20
  },
  {
    id: 'customizable-profile',
    label: 'Customizable profile',
    desc: 'Custom theme on your profile',
    priceMo: 2,
    priceYr: 20
  }
]

export default function () {

  return (
    <form onSubmit={e => e.preventDefault()} className='flex flex-col justify-between w-auto my-5 mx-auto'>
      <div>
        <h1 className='font-bold text-2xl mb-4'>Pick add-ons</h1>
        <h5 className='font-medium text-gray-400'>Add-ons help enhance your gaming experience.</h5>
      </div>
      <div className='font-medium'>
        <ul className='flex flex-col gap-4'>
          {AddonsList.map(({id, label, desc, priceMo, priceYr}, i) => (
            <AddonsLi order={i} mode={1} id={id} label={label} desc={desc} priceMo={priceMo} priceYr={priceYr}/>
          ))}
        </ul>
      </div>
      <div className='flex justify-between'>
        <button type='submit' className='transition-colors font-medium px-7 py-3 text-gray-400 hover:text-[#174A8B]'>Go Back</button>
        <button type='submit' className='transition-colors font-medium px-7 py-3 bg-[#03295A] hover:bg-[#174A8B] text-white rounded-lg'>Next Step</button>
      </div>
    </form>
  )
}