import Image from 'next/image'
import banner from '../../../public/multi-step-form/images/bg-sidebar-desktop.svg'

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

const onchange: React.ChangeEventHandler<HTMLInputElement> = e => {

  const element = e.target
  const warning = element.parentNode?.querySelector('.warning')

  if (element.validity.valid) {
    element.classList.remove('invalid')
    warning?.classList.add('hidden')
  }
  else {
    if (element.value !== '') warning ? warning.textContent = 'The value is invalid' : null;
    else warning ? warning.textContent = 'This field is required' : null;
    element.classList.add('invalid')
    warning?.classList.remove('hidden')
  }

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

      <form onSubmit={e => e.preventDefault()} className='flex flex-col justify-between w-auto my-5 mx-auto'>
        <div>
          <h1 className='font-bold text-2xl mb-4'>Personal Info</h1>
          <h5 className='font-medium text-gray-500'>Please provide your name, email address, and phone number.</h5>
        </div>
        <div>
          <ul className='flex flex-col gap-6 font-medium'>
            <li className='flex flex-col gap-1'>
              <div className='flex justify-between'>
                <label className='font-normal' htmlFor="name-input">Name</label>
                <p className='warning hidden text-red-500' >This field is required</p>
              </div>
              <input
              onChange={onchange}
              id='name-input'
              placeholder='e. g. Stephen King'
              className='h-14 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-lg px-5' 
              type="text"
              required/>
            </li>
            <li className='flex flex-col gap-1 font-medium'>
              <div className='flex justify-between'>
                <label className='font-normal' htmlFor="email-input">Email Address</label>
                <p className='warning hidden text-red-500' >This field is required</p>
              </div>
              <input
              onChange={onchange}
              id='email-input'
              placeholder='e. g. stephenking@lorem.com'
              className='h-14 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-lg px-5'
              type="email"
              required/>
            </li>
            <li className='flex flex-col gap-1 font-medium'>
              <div className='flex justify-between'>
                <label className='font-normal' htmlFor="phone-number-input">Phone Number</label>
                <p className='warning hidden text-red-500' >This field is required</p>
              </div>
              <input
              onChange={onchange}
              id='phone-input'
              placeholder='e. g. +1 234 567 890'
              className='h-14 border-2 border-gray-300 focus:border-[#483EFF] outline-none rounded-lg px-5'
              type="tel"
              required/>
            </li>
          </ul>
        </div>
        <div className='self-end'>
          <button type='submit' className='px-7 py-3 bg-[#174A8B] text-white rounded-lg'>Next Step</button>
        </div>
      </form>
    </article>
  )

}

export default Main