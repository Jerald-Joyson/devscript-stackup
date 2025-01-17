import React, { useContext, useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../firebase/FirebaseConfig";

export default function AdminRegister() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const register = async () => {
        if (!email || !password) {
            return toast.error("All fields are required");
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Registration successful")
            console.log("Registration Successfull")
            navigate('/adminlogin')
        } catch (error) {
            console.log(error)
            toast.error("Registration failed")
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">

            {/* Card  */}
            <Card
                className="w-full max-w-[24rem]"
                style={{
                    background: mode === 'dark'
                        ? 'rgb(30, 41, 59)'
                        : 'rgb(226, 232, 240)'
                }}
            >
                {/* CardHeader */}
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        background: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : 'rgb(30, 41, 59)'
                    }}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className=" flex justify-center">
                            {/* Image  */}
                            <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20"
                            />
                        </div>
                    </div>

                    {/* Top Haeding  */}
                    <Typography variant="h4" style={{
                        color: mode === 'dark'
                            ? 'rgb(30, 41, 59)'
                            : 'rgb(226, 232, 240)'
                    }}>
                        Register
                    </Typography>
                </CardHeader>

                {/* CardBody */}
                <CardBody>
                    <form className=" flex flex-col gap-4">
                        {/* First Input  */}
                        <div>
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* Second Input  */}
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* Third Input  */}
                        <div>
                            <Input
                                type="password"
                                label="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {/* Login Button  */}
                        <Button
                            onClick={register}
                            style={{
                                background: mode === 'dark'
                                    ? 'rgb(226, 232, 240)'
                                    : 'rgb(30, 41, 59)',
                                color: mode === 'dark'
                                    ? 'rgb(30, 41, 59)'
                                    : 'rgb(226, 232, 240)'
                            }}>
                            Register
                        </Button>
                    </form>
                    <p className="mt-5 text-sm text-black text-center">
                        Do you have an account?
                        <Link to={'/adminlogin'} className="text-blue-700 hover:underline">
                            Login
                        </Link>
                    </p>
                </CardBody>
            </Card>
        </div>


    );
} 