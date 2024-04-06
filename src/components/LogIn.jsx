import React from "react";

function LogIn() {
  return (
    <>
      <div
        id="logIn"
        className="xl:w-[550px] xl:h-[350px] bg-[#1e2319]  xl:grid xl:grid-cols-1 xl:ml-[520px] xl:mt-[200px] "
      >
        <div id="header" className="text-white  xl:p-5 font-LexendDeca ">
          <h3 className="xl:p-2">Log In</h3>
          <p className="xl:pb-3">Please Log in to account to manage expenses</p>
          <hr />
        </div>
        <div
          id="info"
          className="text-white xl:flex xl:flex-col xl:p-5 xl:-mt-10"
        >
          <div className="email  p-4  -ml-[15px] xl:flex xl:p-4 xl:-ml-[15px] ">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              id="email"
              className="
            bg-[#3b4046] ml-[40px] h-[40px]
            xl:ml-[82px] xl:w-[300px]  xl:h-[50px]  xl:rounded-xl"
            />
          </div>
          <div className="password xl:flex ">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              id="password"
              className="
            bg-[#3b4046] ml-[10px] h-[40px]
            xl:ml-[52px] xl:w-[300px] xl:h-[50px]  xl:rounded-xl"
            />
          </div>
        </div>

        <div
          id="button"
          className=" xl:h-[60px] xl:-mt-10 xl:ml-5 text-[#e09b40] ml-5 p-2"
        >
          <button
            type="submit"
            className="border-[#e09b40] border-2 xl:p-2 p-2 xl:rounded-lg"
          >
            Sign Up
          </button>
        </div>
        <div id="signUp" className="text-white xl:ml-40 xl:-mt-10 ml-10">
          <p>Don't have an account , Sign Up</p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
