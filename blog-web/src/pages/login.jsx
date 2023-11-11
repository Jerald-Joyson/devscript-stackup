import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import background from '../images/website.jpg';
import '../css/login.css'
import { BiLockAlt } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';




function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful');
            // You can redirect or set some state to indicate successful login
        } catch (error) {
            console.error('Login failed', error.message);
            setErrorMessage('Login failed. Please check your credentials.');
        }
    };
    return (
        <div>
            <img className='fixed top-0 left-0' src={background} alt="background image" />

            <div className="wrapper">
                <h1 className="text-center">Login</h1>
                <div className="input-box">
                    <input
                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Gmail"
                        required
                        className="w-full h-full bg-transparent border-none outline-none border-2 border-[rgba(255,255,255,.2)] rounded-40px text-white text-16px text-[30px]"
                    />
                    <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
                </div>
                <div className="input-box">
                    <input
                        type="password" value={password} onChange={(e) => setPassword(e.target.value)}
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
                    onClick={handleLogin}
                    className="btn w-full h-45px bg-white border-none outline-none rounded-40px shadow-md cursor-pointer text-16px text-600 hover:bg-[#333] text-[#333] hover:text-white"
                >
                    Login
                </button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div className="register-link text-14.5px text-center mt-20 mb-15">
                    <p>
                        Don't have an account? <a href="#" className="text-blue hover:underline">Register</a>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default login;
