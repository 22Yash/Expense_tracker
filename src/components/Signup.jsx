import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";



function Signup() {
    const [name , setName ]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage , setErrorMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const createUser = () => {
    if(!email || !password || !name){
        setErrorMessage(" * Fill all fields");
    }
    setErrorMessage("")
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,email,password)
    .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMessage(err.message);
      });
  }

  return (
    <>
      <div
        id="signUp"
        className="
    font-LexendDeca w-[350px]  h-[420px] ml-10 mt-24
    sm:w-[450px] sm:ml-[150px]
    xl:w-[500px] xl:h-[500px] bg-[#1e2319] xl:grid xl:grid-cols-1 xl:ml-[450px] xl:mt-[100px]"
      >
        <div id="header" className="xl:h-[100px] text-white">
          <h3
            className="
            pt-5 p-5
            xl:pt-10 xl:p-5"
          >
            Sign Up{" "}
          </h3>
          <p
            className="
            pl-5 pb-5
            xl:pl-5 xl:pb-5"
          >
            Please fill this to create an account
          </p>
          <hr />
        </div>
        <div
          id="info"
          className="
        pl-5 p-5
        xl:flex xl:flex-col xl:-mt-[10px] xl:h-[220px] xl:pl-5 xl:p-5 text-[white]"
        >
          <div className="name xl:flex ">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="
            bg-[#3b4046] ml-[35px] h-[40px] p-2
            xl:ml-20 xl:w-[300px] xl:h-[50px] xl:rounded-xl"
            />
          </div>
          <div className="email  p-4  -ml-[15px] xl:flex xl:p-4 xl:-ml-[15px] ">
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="
            bg-[#3b4046] ml-[35px] h-[40px] p-2
            xl:ml-[82px] xl:w-[300px]  xl:h-[50px]  xl:rounded-xl"
            />
          </div>
          <div className="password xl:flex ">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder=" Pass should be at least 6 "
              className="
            bg-[#3b4046] ml-[10px] h-[40px] w-[210px]
            xl:ml-[52px] xl:w-[300px] xl:h-[50px]  xl:rounded-xl"
            />
          </div>
        </div>
        
        <div
          id="button"
          className=" xl:h-[60px] xl:-mt-10 xl:ml-5 text-[#e09b40] ml-5 p-2"
        >
            <p className="xl:font-semibold text-[10px] xl:text-[15px] tetx-red">{errorMessage}</p>
          <button
            type="submit"
            disabled={submitButtonDisabled}
            onClick={createUser}
            className="border-[#e09b40] border-2 mt-2 xl:mt-3 xl:p-2 p-2 xl:rounded-lg"
          >
            Sign Up
          </button>
        </div>
        <div id="logIn" className="text-white xl:ml-32 xl:mt-0 ml-10">
          <h4>
            Already have an Account, <Link to="/login"> Log In</Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Signup;
