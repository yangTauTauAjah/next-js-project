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
      
    </div>
    <div className='self-end'>
      <button type='submit' className='transition-all px-7 py-3 bg-[#03295A] hover:bg-[#174A8B] text-white rounded-lg'>Next Step</button>
    </div>
  </form>
  )
}