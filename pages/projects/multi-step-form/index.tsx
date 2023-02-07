import Image from 'next/image'
import banner from '../../../public/multi-step-form/images/bg-sidebar-desktop.svg'
import FirstStep from '../../../components/form/FirstStep'
import SecondStep from '../../../components/form/SecondStep'
import ThirdStep from '../../../components/form/ThirdStep'

import styled from "styled-components"

type BannerLiProps = { order: number, children: string, selected?: boolean }

const BannerLi = (props: BannerLiProps) => {

  return <li className='flex gap-7 h-10'>
    <div className={`aspect-square box-content h-full text-center align-middle leading-10 rounded-full font-bold
    ${props.selected ? 'bg-[#BEE1FD]' : 'border-[#BEE1FD] border-2 text-white'}
    `}>{props.order}</div>
    <div className='flex flex-col text-white'>
      <h5 className='font-normal'>STEP {props.order}</h5>
      <h3 className='font-bold'>{props.children}</h3>
    </div>
  </li>
}

const Main = () => {

  return (
    <article className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 box-content p-5 h-[568px] w-[890px] flex rounded-xl bg-white shadow-xl'>
      <div id='banner' className='relative w-auto h-100%'>
        <Image src={banner} alt='banner' className="h-full" />
        <ul className='absolute top-0 left-0 w-100% p-10 z-10 flex flex-col gap-8'>
          <BannerLi selected order={1}>YOUR INFO</BannerLi>
          <BannerLi order={2}>SELECT PLAN</BannerLi>
          <BannerLi order={3}>ADD-ONS</BannerLi>
          <BannerLi order={4}>SUMMARY</BannerLi>
        </ul>
      </div>

      {/* <FirstStep /> */}
      {/* <SecondStep /> */}
      <ThirdStep />
    </article>
  )

}

export default Main