import React from 'react';
import background from '../images/website.jpg';
import '../css/login.css'
import { BiLockAlt, BiUser, } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';

function register() {
    return (
        <div>
            <img className='fixed top-0 left-0' src={background} alt="background image" />

            <div className="wrapper">
                <form action="">
                    <h1 className="text-center">Register</h1>
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
                            type="text"
                            placeholder="Gmail"
                            required
                            className="w-full h-full bg-transparent border-none outline-none border-2  border-[rgba(255,255,255,.2)] rounded-40px text-white text-16px text-[30px]"
                        />
                        <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
                    </div>
                    <div className="input-box">

                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full h-full bg-transparent border-none outline-none border-2 mb-2 border-[rgba(255,255,255,.2)] rounded-40px text-white text-16px text-[30px]"
                        />
                        <BiLockAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />

                        <input
                            type="password"
                            placeholder="Confirm  Password"
                            required
                            className="w-full h-full bg-transparent border-none outline-none border-2 mt-2 border-[rgba(255,255,255,.2)] rounded-40px text-white text-16px text-[30px]"
                        />
                        <BiLockAlt className="absolute right-4 top-[5.5rem] transform -translate-y-1/2 text-xl" />
                    </div>
                    <div className="mt-[6.5rem]">

                        <button
                            type="submit"
                            className="btn w-full h-45px bg-white border-none outline-none rounded-40px shadow-md cursor-pointer text-16px text-600 hover:bg-[#333] text-[#333] hover:text-white"
                        >
                            Register
                        </button>
                        <div className="register-link text-14.5px text-center mt-20 mb-15">
                            <p>
                                Do you have an account? <a href="#" className="text-blue hover:underline">Login</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default register
