"use client"
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const profilePage = () => {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center  min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white p-2 my-2 rounded-md">
                Logout
            </button>
        </div>
    )
}

export default profilePage;