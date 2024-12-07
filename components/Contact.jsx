import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen bg-[#090c31] pt-14 p-4 flex items-center justify-center'>
        <div className='lg:w-3/5 md:4/5 h-4/6 bg-white lg:rounded-r-[9rem] rounded-3xl lg:rounded-none p-7 overflow-hidden '>
            <h1 className='text-2xl font-bold roboto-bold text-center lg:text-start mb-4 lg:mb-0'>Contact Us</h1>
            <div className='flex justify-center items-center gap-1 -mt-16 flex-col h-full'>
              <div className='flex items-start gap-3 py-2  '>
                <h4>Name</h4>
                <input className='px-2 py-1 sm:w-96 outline-none rounded border-2 border-[#090c31]' type="text" placeholder='Abc' />
              </div>
              <div className='flex items-center gap-4 py-2  rounded'>
              <h4>Email</h4>
              <input className='px-2 py-1 sm:w-96 outline-none rounded border-2 border-[#090c31]'  type="email" placeholder='abc@xyz.com' />
              </div>
              <div className='flex items-center gap-3 py-2 sm:w-[27.8rem]'>
              <h4>Message</h4>
              <input className='px-2 py-1 sm:w-96 outline-none rounded border-2 border-[#090c31] ' type="text" placeholder='Tell us about your query' />
              </div>
              <div className='pt-3'>
                <input type='submit' value={"Send"} className='bg-blue-700 px-16 py-1 text-white rounded ' />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact