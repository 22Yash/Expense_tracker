import React from 'react'
import { Link } from 'react-router-dom';
import image2 from './Frame.png'

function MobileHome() {
  return (
    <>
    <div id="home" className='w-full h-[100vh] bg-[#343A40] text-[#F8F9FA] '
     style={{ backgroundImage: `url(${image2})`, backgroundSize:"cover" , backgroundRepeat:"no-repeat" ,  }}>
        <div id="name" className='text-[30px] h-[60vh] font-semibold text-center  pt-[20px] '>
        CashFlow Tracker
        
        </div>
        <div id="bottom" className='w-full  h-[40vh] '>
          
          <div id="getStarted" className='w-[320px] h-[50px] rounded-l-full mt-[60px]  rounded-r-full bg-[#155E75]  flex justify-center flex-col items-center ml-[45px] '>
            <button > <Link to="signup">Get Started</Link></button>
          </div>
          <div id="getStarted" className='w-[320px] h-[50px] rounded-l-full  mt-8 rounded-r-full bg-[#155E75] flex justify-center flex-col items-center ml-[45px] '>
            <button > <Link to="signup">I have an account</Link></button>
          </div>

        </div>
    </div>
    </>
  )
}

export default MobileHome
