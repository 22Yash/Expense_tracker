
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function LogIn() {

  const [email , setEmail] = useState();
  const [password , setPassword] = useState(); 
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  

  const LogInUser = () => {
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  }
  return (
    <>
      <div
        id="logIn"
        className="
        font-LexendDeca w-[350px]  h-[420px] ml-10 mt-24
        sm:w-[450px] sm:ml-[150px]
        xl:w-[550px] xl:h-[350px] bg-[#1e2319]  xl:grid xl:grid-cols-1 xl:ml-[520px] xl:mt-[200px] "
      >
        <div id="header" className="text-white pt-5 p-5 xl:p-5 font-LexendDeca ">
          <h3 className="xl:p-2 pl-2">Log In</h3>
          <p className="xl:pb-3 pb-2 p-2">Please Log in to account to manage expenses</p>
          <hr />
        </div>
        <div
          id="info"
          className="text-white xl:flex xl:flex-col xl:p-5 xl:-mt-10"
        >
          <div className="email 
          
          p-4  ml-[1px] xl:flex xl:p-4 xl:-ml-[15px] ">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onClick={ e => setEmail(e.target.value)}
              className="
            bg-[#3b4046] ml-[40px] h-[40px] p-2 w-[230px]
            xl:ml-[82px] xl:w-[300px]  xl:h-[50px]  xl:rounded-xl"
            />
          </div>
          <div className="password xl:flex ">
            <label htmlFor="" className="ml-5 xl:ml-0">Password</label>
            <input
              type="password"
              placeholder="Enter your 6 digit password"
              required
              value={password}
              onClick={e => setPassword(e.target.value)}
              className="
            bg-[#3b4046] ml-[10px] h-[40px] p-2 w-[230px] xl:p-2
            xl:ml-[52px] xl:w-[300px] xl:h-[50px]  xl:rounded-xl"
            />
          </div>
        </div>

        <div
          id="button"
          className=" xl:h-[60px] xl:-mt-5 xl:ml-5 text-[#e09b40] ml-5  mt-5 p-2"
        >
          <button
            type="submit"
            onSubmit={LogInUser}
            className="border-[#e09b40] border-2 xl:p-2 xl:w-[120px] p-2 xl:rounded-lg hover:bg-[#e09b40] hover:text-black"
          >
            Login
          </button>
        </div>
        <div id="signUp" className="text-white xl:ml-40  p-5 xl:-mt-5 ml-10">
          <p>Don't have an account , <Link to="/signup"> Sign Up</Link></p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
