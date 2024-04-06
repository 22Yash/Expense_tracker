import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div id="navbar" className='xl:w-full xl:bg-red-300 xl:h-[120px] xl:flex xl:gap-32  '>
       <Link to="signup">SignUp</Link>
       <Link to="login">Login</Link>
    </div>
    </>
  )
}

export default Home
