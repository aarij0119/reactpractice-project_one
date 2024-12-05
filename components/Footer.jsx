import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between items-center py-6 px-12'>
        <div className='flex items-center gap-2'>
            <h1 className='text-3xl uppercase font-bold text-blue-700 -mt-2'>TechyStar</h1>
            <p>@all right reserved</p>
        </div>
        <div className='flex items-center gap-3'>
            <h1 className='text-2xl font-bold text-[#5853FC] -mt-1 hover:text-green-600 hover:shadow-lg hover:px-2 rounded hover:shadow-green-500'>Follow Us</h1>
            <a className='hover:fontbold hover:text-lg hover:uppercase hover:font-bold' href='https://github.com/aarij0119' target='blank'>Github</a>
            <a className='hover:fontbold hover:text-lg hover:uppercase hover:font-bold' href='https://www.instagram.com/muhammad_aarij0119/' target='blank'>Instagram</a>
            <a className='hover:fontbold hover:text-lg hover:uppercase hover:font-bold' href='https://www.linkedin.com/in/muhammad-aarij-2b06ba326/' target='blank'>Linkedin</a>
        </div>
    </div>
    </>
  )
}

export default Footer