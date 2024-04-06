import React, { useState } from 'react';

function Addexpense() {
   

  
  return (
    <>
    <div id="AddExpense" className='
    font-LexendDeca  w-[350px]  h-[480px] ml-10 mt-12
    xl:grid xl:grid-cols-1 xl:w-[500px] xl:ml-[500px] xl:mt-[70px] xl:h-[600px] bg-[#3b4046]'>
        <div id="amount" className='text-white xl:p-5 p-5 '>
            <h2 className='xl:text-[30px] p-5  text-[20px]'>Add Expense</h2>
            <h2 className='xl:pb-5 pb-5'> <label htmlFor="" className='xl:text-[20px]'>₹ </label><input type="text" name=""  className='xl:ml-5  ml-5' /></h2>
            
       
            <hr />
        </div>
        <div id="info" className='p-3'>
        <div className="password xl:flex  xl:p-5 xl:-mt-32">
           
            <input
              type="text"
              placeholder='what was this expense for'
              id="category"
              className="
            bg-[#3b4046] ml-[10px] h-[40px] border-2 border-white  w-[250px]  p-2   xl:p-2
            xl:ml-[12px] xl:w-[300px] xl:h-[50px]  xl:rounded-xl"
            />
          </div>

          <div className="date " >
            <input type="date" placeholder="Date" id=""  className='
            ml-[10px] mt-[20px] w-[250px] h-[40px]
            xl:w-[300px] xl:h-[50px] xl:ml-[30px]'/>
          </div>
          
        </div>
        <div
          id="button"
          className=" xl:h-[60px] xl:-mt-10 xl:ml-5 text-[#e09b40] ml-5 p-2"
        >
          <button
            type="submit"
            className="border-[#e09b40] border-2 xl:p-2 xl:w-[220px] p-2 xl:rounded-lg hover:bg-[#e09b40] hover:text-black"
          >
            Save Expense
          </button>
        </div>
    </div>
    </>
  )
}

export default Addexpense
