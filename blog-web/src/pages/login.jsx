import React from 'react';
import background from '../images/website.jpg';
import '../css/login.css'
import { BiLockAlt, BiUser } from 'react-icons/bi';




function login() {
    return (
        <div>
            <img className='fixed top-0 left-0' src={background} alt="background image" />

            <div className="wrapper">
                <form action="">
                    <h1 className="text-center">Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className="w-full h-full bg-transparent border-none outline-none border-2 border-[rgba(255,255,255,.2)] rounded-40px text-white text-16px text-[30px]"
                        />
                        <BiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full h-full bg-transparent border-none outline-none border-2 border-[rgba(255,255,255,.2)] rounded-40px text-white text-16px text-[30px]"
                        />
                        <BiLockAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
                    </div>
                    <div className="remember-forgot">
                        <label className="flex items-center">
                            <input type="checkbox" className="accent-color-white mr-3" /> Remember me
                        </label>
                        <a href="#" className="text-blue hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="btn w-full h-45px bg-white border-none outline-none rounded-40px shadow-md cursor-pointer text-16px text-600 hover:bg-[#333] text-[#333] hover:text-white"
                    >
                        Login
                    </button>
                    <div className="register-link text-14.5px text-center mt-20 mb-15">
                        <p>
                            Don't have an account? <a href="#" className="text-blue hover:underline">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default login;
