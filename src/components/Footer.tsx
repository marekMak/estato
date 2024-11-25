import React from 'react'

import estateLogo from '../assets/logo.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-full pt-10 px-10 font-host bg-footerBG flex flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-3 px-10 mb-10'>
            <div>
                <img src={estateLogo} alt='Estate company logo'/>
                <p className='text-slate-400 py-2 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <h1 className='text-white font-bold text-2xl mb-2'>Company</h1>
                    <ul className='flex flex-col text-slate-300 text-md'>
                        <li className='hover:text-slate-600 transition-all ease-in-out delay-150 cursor-pointer'>About</li>
                        <li className='hover:text-slate-600 transition-all ease-in-out delay-150 cursor-pointer'>Projects</li>
                        <li className='hover:text-slate-600 transition-all ease-in-out delay-150 cursor-pointer'>Testimonials</li>
                        <li className='hover:text-slate-600 transition-all ease-in-out delay-150 cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <h1 className='text-white font-bold text-2xl mb-2'>Subscribe to our newsletter</h1>
                    <p className='text-slate-300 max-w-[80%] py-2'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div>
                        <input type='email' placeholder='Enter your email' className='rounded py-2 px-2 font-host mr-2 bg-slate-700'/>
                        <button className='bg-blue-400 text-white font-bold py-2 px-4 rounded'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-2 flex justify-center border-t border-gray-700 px-10'>
            <h1 className='text-slate-400 font-host'>Copyright 2024 © Estate. All Right Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer