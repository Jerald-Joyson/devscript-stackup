import React from "react";
import Navbar from "../Components/Navbar";
import BackgroundImg from "../Images/home.jpg";
import "../Css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="main w-full">
        <img
          src={BackgroundImg}
          alt="Background"
          className="w-full max-h-screen object-cover"
        />
        <div className="navbar bg-opacity-40 bg-black">
          <Navbar />
        </div>

        <div className="card w-86 h-86 bg-gray-500 border border-solid bg-opacity-40 p-7 rounded-md flex flex-col justify-center items-center text-white ">
          <h2 className="text-3xl font-bold mb-3">Hi UserName !</h2>
          <h1 className="text-7xl mt-3 font-semibold">Welcome To Blog</h1>
          <div className="flex flex-col justify-center items-center mb-3">
            <p className="mt-3 text-xl">"Awesome place to make oneself</p>
            <p className="text-xl">productive and entertained</p>
            <p className="text-xl"> through daul updates."</p>
          </div>
          <Link to="/Uploaded">
            <button className="bg-white rounded-3xl w-48 h-14 mt-3 font-bold text-xl text-black border border-solid border-black hover:bg-slate-200">
              Create Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
