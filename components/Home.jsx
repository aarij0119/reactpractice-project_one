import React from 'react';
import { FaGoogle, FaAmazon, FaYoutube, FaInstagram } from 'react-icons/fa';
const Home = () => {

  return (
    <>
      <div id='home' className="w-full h-screen relative rounded-b-[7rem] mt-10">
        <div className='content pr-4'>
          <h1 className='text-7xl uppercase roboto-bold-italic z-10 '>TechyStar</h1>
          <p className='font-bold uppercase flex justify-end'>Solution to all your problems</p>
        </div>
      </div>
      {/* section2 */}
      <div className='w-full h-screen bg-[#090c31] -mt-28'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 pt-56'>
          <div>
            <img id='headphone_img' src='../src/assets/2.webp' alt='Headphone' />
          </div>
          <div className='text-white font-mono flex items-center justify-center px-5'>
            <p>We are your one and only solution to the tech problems you face every day. We are a leading tech company whose aim is to increase the problem-solving ability in children.</p>
          </div>
        </div>
      </div>
      {/* section3 */}
      <div className='w-full h-screen bg-[#090c31] pt-40' id='about'>
        <div className='w-3/5 bg-white h-4/5 rounded-r-[10rem] p-5 flex items-center justify-center flex-col'>
          <h1 className='text-4xl font-semibold border-b-2 border-black mb-2'>Who we are?</h1>
          <p className='font-mono mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe.
          </p>
        </div>
      </div>
      {/* section4 */}
      <div className='w-full h-screen bg-[#090c31] pt-40 flex justify-end' id='brands'>
        <div className='w-3/5 bg-[#5853ff] h-4/5 rounded-l-[10rem] p-5 flex items-center justify-center flex-col gap-5'>
          <div className='flex  items-center justify-center'>
              <h1 className='text-3xl font-bold border-b-4 border-white  text-white'>Brands</h1>
          </div>
        <div className='flex items-center justify-center gap-4'>
        <div id="icon" className='bg-white p-4 rounded-full' style={{animationDelay: "0.3s"}}><FaGoogle size={32} /></div>
          <div id="icon" className='bg-white p-4 rounded-full' style={{animationDelay: "0.6s"}}>  <FaAmazon size={32} /></div>
          <div id="icon" className='bg-white p-4 rounded-full' style={{animationDelay: "0.9"}}><FaYoutube size={32} /></div>
          <div id="icon" className='bg-white p-4 rounded-full' style={{animationDelay: "1.4s"}}><FaInstagram size={32} /></div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
