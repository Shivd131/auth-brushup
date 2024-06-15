"use client"
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const profilePage = () => {
    const router = useRouter();
    const [data, setData] = useState(
        "nothing"
    )

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)

    }

    return (
        <div className="flex flex-col items-center justify-center  min-h-screen py-2">
            <h1>Profile</h1>
            <p>Details</p>
            <h2>{data === "nothing" ? "Not found" :
                <Link className="bg-green-600 p-2 m-2 rounded-md" href={`/profile/${data}`}>
                    {data}
                </Link>
            } </h2>
            <button onClick={getUserDetails} className="bg-blue-500 hover:bg-blue-700 text-white p-2 my-2 rounded-md">
                Get User Details
            </button>
            <hr />
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white p-2 my-2 rounded-md">
                Logout
            </button>
        </div>
    )
}

export default profilePage;