import './App.css'
import Header from './components/Header'

import backgroundImage from './assets/header_img.png'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <div className="h-screen w-full overflow-x-hidden relative" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment:'fixed'
     }}>
      <Header/>
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-host text-center'>
        <h1 className='text-4xl md:text-7xl  text-white font-extrabold'>
            Explore homes that fit your dreams
          </h1>
        <div className='flex flex-col md:flex-row justify-center mt-10 gap-5'>
          <button className='px-10 py-4 transition-all ease-in-out delay-150 border-2 font-host text-white rounded-md hover:bg-gray-100 hover:text-blue-500'>Projects</button>
          <button className='px-10 py-4 transition-all ease-in-out delay-150 bg-blue-500 font-host text-white rounded-md hover:bg-gray-100 hover:text-blue-500'>Contact us</button>
        </div>
        </div>
     </div>
     <About/>
     <Projects/>
     <Testimonials/>
     <Contacts/>
     <Footer/>
    </>
  )
}

export default App
