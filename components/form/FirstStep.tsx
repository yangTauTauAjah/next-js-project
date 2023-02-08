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

export default function({setStep}: {setStep: React.Dispatch<React.SetStateAction<number>>}) {
  return (
  <form onSubmit={e => {e.preventDefault(); setStep((prev) => ++prev)}} className='flex flex-col justify-between w-auto my-5 mx-auto'>
    <div className=" pointer-events-none">
      <h1 className='font-bold text-2xl mb-4'>Personal Info</h1>
      <h5 className='font-medium text-gray-400'>Please provide your name, email address, and phone number.</h5>
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
      <button type='submit' className='transition-all px-7 py-3 bg-[#03295A] hover:bg-[#174A8B] text-white rounded-lg'>Next Step</button>
    </div>
  </form>
  )
}