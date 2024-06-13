"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import React, { useState } from "react";

const SignupPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 p-8 rounded-lg shadow-md flex flex-col">
                <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="block font-semibold mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block font-semibold mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={onSignup}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Sign Up
                </button>
                <Link href="/login" className="w-full text-center pt-2 underline hover:text-blue-600" >Login</Link>
            </div>
        </div>
    );
};

export default SignupPage;