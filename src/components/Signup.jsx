import React from 'react'

function Signup() {
  return (
    <>
    <div id="signUp" className='
    font-LexendDeca w-[350px]  h-[420px] ml-10 mt-24
    sm:w-[450px] sm:ml-[150px]
    xl:w-[500px] xl:h-[500px] bg-[#1e2319] xl:grid xl:grid-cols-1 xl:ml-[450px] xl:mt-[100px]'>
        <div id="header" className='xl:h-[100px] text-white'>
            <h3 className='
            pt-5 p-5
            xl:pt-10 xl:p-5'>Sign Up </h3>
            <p className='
            pl-5 pb-5
            xl:pl-5 xl:pb-5'>Please fill this to create an account</p>
            <hr />
        </div>
        <div id="info" className='
        pl-5 p-5
        xl:flex xl:flex-col xl:-mt-[10px] xl:h-[220px] xl:pl-5 xl:p-5 text-[white]'>
            <div className="name xl:flex ">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="name" className='
            bg-[#3b4046] ml-10 h-[40px] 
            xl:ml-20 xl:w-[300px] xl:h-[50px] xl:rounded-xl' />
            </div>
            <div className="email  p-4  -ml-[15px] xl:flex xl:p-4 xl:-ml-[15px] " >
                <label htmlFor="">Email</label>
            <input type="email" name="" id="email" className='
            bg-[#3b4046] ml-[40px] h-[40px]
            xl:ml-[82px] xl:w-[300px]  xl:h-[50px]  xl:rounded-xl' /> 
            </div>
            <div className="password xl:flex ">
               <label htmlFor="">Password</label>
            <input type="password" name="" id="password" className='
            bg-[#3b4046] ml-[10px] h-[40px]
            xl:ml-[52px] xl:w-[300px] xl:h-[50px]  xl:rounded-xl' /> 
            </div>
           
            
           
        </div>
        <div id="button" className=' xl:h-[60px] xl:-mt-10 xl:ml-5 text-[#e09b40] ml-5 p-2'>
        <button type="submit" className="border-[#e09b40] border-2 xl:p-2 p-2 xl:rounded-lg">Sign Up</button>

        </div>
        <div id="logIn" className='text-white xl:ml-32 xl:-mt-10 ml-10'>
            <h4>Already have an Account,
Log In</h4>
        </div>


    </div>
    
    </>
  )
}

export default Signup
