import React from 'react';

const Home = () => {
  return (
    <>
      <div id='section1' className="w-full h-screen relative rounded-b-[7rem]">
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
      <div className='w-full h-screen bg-[#090c31] pt-40'>
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
      <div className='w-full h-screen bg-[#0e0e17] pt-40 flex justify-end'>
         <div className='w-3/5 bg-[#5853ff] h-4/5 rounded-l-[10rem] p-5'>

         </div>
      </div>
    </>
  );
}

export default Home;
