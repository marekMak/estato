import {useState} from 'react'

import estateLogo from '../assets/logo.svg'
import { RiMenu3Line } from "react-icons/ri"
import { IoClose } from "react-icons/io5"

type Props = {}

const Header = (props: Props) => {

  const [menu, setMenu] = useState(false)

  const changeMenu = () => {
    console.log(menu)
    setMenu(!menu)
  }

  return (
    <div>
        <nav className='w-screen min-h-5 py-5 px-5 md:px-32 flex justify-between items-center font-host'>
            <img src={estateLogo} alt='Estate company logo'/>
            <ul className='hidden md:flex gap-4 lg:gap-7 text-white text-xl px-4'>
                <li className='hover:text-slate-300 transition-all ease-in-out delay-150 cursor-pointer'>About</li>
                <li className='hover:text-slate-300 transition-all ease-in-out delay-150 cursor-pointer'>Projects</li>
                <li className='hover:text-slate-300 transition-all ease-in-out delay-150 cursor-pointer'>Testimonials</li>
            </ul>
            <button className='hidden md:block px-4 py-2 text-black bg-white rounded-3xl'>
                Sign Up
            </button>
            <RiMenu3Line className='w-8 h-8 mr-8 text-white md:hidden cursor-pointer' onClick={()=>setMenu(true)}/>
        </nav>

      {menu && (
        <nav className='h-full fixed w-full top-0 left-0 bg-white z-40'>
          <ul className='flex flex-col items-center pt-10 gap-4 lg:gap-7 text-slate-600 text-xl px-4'>
                <li className='hover:text-slate-300 transition-all ease-in-out delay-150 cursor-pointer'>About</li>
                <li className='hover:text-slate-300 transition-all ease-in-out delay-150 cursor-pointer'>Projects</li>
                <li className='hover:text-slate-300 transition-all ease-in-out delay-150 cursor-pointer'>Testimonials</li>
            </ul>
            <IoClose className='text-slate-300 hover:text-slate-600 text-5xl absolute cursor-pointer transition-all delay-150 top-[5%] right-[5%]' onClick={()=>setMenu(false)} />
        </nav>
      )}
    </div>
  )
}

export default Header