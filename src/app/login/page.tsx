"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = axios.post("/api/users/login", user);
            console.log("Login successful", response.data)
            router.push("/profile")
        } catch (error: any) {
            console.log("Login failed", error.message)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else setButtonDisabled(true)
    }, [user])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 p-8 rounded-lg shadow-md flex flex-col">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
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
                        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={onLogin}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    {loading ? "Loging in" : "Log in"}
                </button>
                <Link href="/signup" className="w-full text-center pt-2 underline hover:text-blue-600" >Sign Up</Link>
            </div>
        </div>
    );
};

export default LoginPage;