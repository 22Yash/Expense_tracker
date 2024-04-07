import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div id="home" className='
    w-full h-[100vh] 
    xl:w-[full] xl:h-[100vh] bg-[#343A40] text-[#F8F9FA] '>
      <div id="navbar" className='
      w-full h-[120px] flex gap-32 text-[20px]
      xl:w-full xl:h-[80px]  font-LexendDeca border-b-2 xl:p-5 xl:flex xl:gap-32+   xl:justify-between '>
       <div id="leftNav" className='w-[120px] pt-8 text-center xl:w-[120px] xl:text-[20px]'>
        <h3>My Money Tracker</h3>
       </div>
       <div id="rightNav" className='xl:flex xl:gap-32 xl:text-[20px] hidden'>
       <Link to="signup">SignUp</Link>
       <Link to="login" className='xl:mr-10'>Login</Link>
       </div>
    </div>
    <div id="hero" className='xl:text-[50px] xl:p-[50px] text-[30px] p-[30px] mt-8 '>
      <h1 className='xl:p-6 xl:w-[700px] text-center font-LexendDeca font-semibold text-[#28A745]'>"Manage your expenses effortlessly, anytime, anywhere."</h1>
    </div>

    </div>

    </>
  )
}

export default Home
