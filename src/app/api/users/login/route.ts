import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        if (!email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const user = await User.findOne({ email })
        //if user doesn't exist;
        if (!user) {
            return NextResponse.json({ error: "User doesn't exists" }, { status: 400 });
        }

        //checking password;
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid username or password" }, { status: 400 });
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" })
        //setting token to users cookie
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        //the response object can access the users cookies
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}