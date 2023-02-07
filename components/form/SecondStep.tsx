import Image from 'next/image'
import IconArcade from '../../public/multi-step-form/images/icon-arcade.svg'
import IconAdvanced from '../../public/multi-step-form/images/icon-advanced.svg'
import IconPro from '../../public/multi-step-form/images/icon-pro.svg'
import { useState } from 'react'

type CardProps = {
  index?: number
  selected: boolean,
  mode: 0 | 1,
  icon: any,
  label: string,
  priceMo: number,
  priceYr: number,
  onClick: (ev: any) => any
}

const CardElement = ({index, selected, mode, icon, label, priceMo, priceYr, onClick }: CardProps) => {

  return (
    <div
      key={index}
      onClick={() => onClick(index)}
      className={`
      cursor-pointer
      rounded-lg
      hover:border-[#483EFF]
      ${selected ? 'border-[#483EFF] bg-gray-100' : 'border-gray-300 bg-transparent'}
      border-2
      flex
      flex-col
      px-3
      py-4
      w-28
      gap-8`}>
      <Image src={icon} alt={label} />
      <div>
        <h3>{label}</h3>
        <h4 className='text-gray-400 font-normal'>${!mode ? priceMo : priceYr}/{!mode ? 'mo' : 'Yr'}</h4>
        <h4 className={`${!mode ? 'hidden' : null} font-normal text-xs`}>2 months free</h4>
      </div>
    </div>
  )

}

const CardList = [
  {
    icon: IconArcade,
    label: 'Arcade',
    priceMo: 9,
    priceYr: 90
  },
  {
    icon: IconAdvanced,
    label: 'Advanced',
    priceMo: 12,
    priceYr: 120
  },
  {
    icon: IconPro,
    label: 'Pro',
    priceMo: 15,
    priceYr: 150
  },
]

export default function () {

  let [mode, setMode]: [0 | 1, any] = useState(0)
  let [select, setSelect]: [number, any] = useState(0)

  return (
    <form onSubmit={e => e.preventDefault()} className='flex flex-col justify-between w-auto my-5 mx-auto'>
      <div>
        <h1 className='font-bold text-2xl mb-4'>Select your plan</h1>
        <h5 className='font-medium text-gray-400'>You have the option of monthly or yearly billing.</h5>
      </div>
      <div className='font-medium flex flex-col gap-7'>
        <ul className='flex gap-4'>
          {CardList.map(({icon, label, priceMo, priceYr}, i) => (
            <li>
              <CardElement
                index={i}
                selected={select === i}
                onClick={setSelect}
                mode={mode}
                icon={icon}
                label={label}
                priceMo={priceMo}
                priceYr={priceYr}
              />
            </li>
          ))}
        </ul>
        <div className='flex justify-center items-center bg-[#F8F9FE] h-10 gap-5 rounded-lg'>
          <p className={`${mode && 'text-gray-400'} pointer-events-none`}>Monthly</p>
          <div
            onClick={() => {
              const toggle = document.querySelector('#circle')
              /* @ts-ignore */
              !mode ? toggle?.style.left = 'calc(100% - 14px)' : toggle?.style.left = '2px'
              setMode(mode ? 0 : 1)
            }}
            className="cursor-pointer relative h-4 w-7 bg-[#03285A] rounded-full">
            <div
              id='circle'
              className='transition-all absolute left-[2px] top-1/2 -translate-y-1/2 aspect-square block bg-white h-3/4 rounded-full' />
          </div>
          <p className={`${!mode && 'text-gray-400'} pointer-events-none`}>Yearly</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <button type='submit' className='transition-colors font-medium px-7 py-3 text-gray-400 hover:text-[#174A8B]'>Go Back</button>
        <button type='submit' className='transition-colors font-medium px-7 py-3 bg-[#03295A] hover:bg-[#174A8B] text-white rounded-lg'>Next Step</button>
      </div>
    </form>
  )
}