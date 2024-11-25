import React from 'react'
import Title from './Title'
import brandImage from '../assets/brand_img.png'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Title 
        mainHeader="About" 
        subHeader="Our Brand" 
        secondHeader="Passionate About Properties, Dedicated to" 
        lastHeader="Your vision" 
      />
      <div className='grid grid-cols-1 md:grid-cols-2 h-full w-full overflow-hidden'>
        <div className='flex justify-center md:justify-end h-full py-10 px-10'>
          <img src={brandImage} alt="brand building" className='w-[85%] h-auto'/>
        </div>
        <div className='flex flex-col sm:items-center px-10 py-10 mt-10 h-full'>
          <div className='grid grid-cols-2 grid-rows-2 gap-5 font-host'>
            <div>
              <h1 className='font-bold text-4xl'>10+</h1>
              <p className='text-slate-700'>Years of Excellence</p>
            </div>
            <div>
              <h1 className='font-bold text-4xl'>12+</h1>
              <p className='text-slate-700'>Projects completed</p>
            </div>
            <div>
              <h1 className='font-bold text-4xl'>20+</h1>
              <p className='text-slate-700'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <h1 className='font-bold text-4xl'>25</h1>
              <p className='text-slate-700'>Ongoing Projects</p>
            </div>
          </div>
          <p className='py-10 text-justify max-w-md text-slate-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className='px-10 py-4 bg-blue-500 font-host text-white rounded-md max-w-[100%]'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
