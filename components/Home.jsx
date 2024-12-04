import React from 'react'
const Home = () => {
  // #090c31
  return (
    <>
    <div id='section1' className="bg-[url('../src/assets/1.png')] bg-[#090c31] w-full h-screen bg-cover relative">
    <div className='text-white absolute bottom-[19.5rem] right-0 px-5'>
      <h1 className='text-7xl uppercase roboto-bold-italic'>TechyStar</h1>
      <p className='font-bold uppercase flex justify-end'>Solution to all your problems</p>
    </div>
    </div>
    {/* section2 */}
    <div className='w-full h-screen bg-[#090c31]'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 pt-40'>
        <div>
          <img id='headphone_img' src='../src/assets/2.webp' />
        </div>
        <div className='text-white font-mono flex items-center justify-center px-5'>
          <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home