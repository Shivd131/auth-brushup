"use client"
import axios from "axios"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function verifyEmail() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token })
            setVerified(true)

        } catch (err: any) {
            setError(true)
            console.log(err.response.data)
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, []);

    useEffect(() => {
        if (token.length > 0) verifyUserEmail()
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl"> Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">
                {token ? `${token}` : "no Token"}
            </h2>

            {verified && (
                <div>
                    <h2 className="2xl">Email Verified</h2>
                    <Link href="/login">
                        LOGIN
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="2xl">Token not verified</h2>
                </div>
            )}


        </div>
    )

}

