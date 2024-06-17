"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function LoginPage()
{
    const [user,setUser]=React.useState({
        email:"",
        password:"",
    
    });

    const onlogin=async()=>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login!!</h1>
            <hr />
            
            <label htmlFor="email">email</label>
            <input 
            className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600" 
            type="email" name="email" id="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email"/>
            <label htmlFor="password">password</label>
            <input
            className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600"
             type="password" name="password" id="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password"/>
            <button className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600" onClick={onlogin}>login here</button>
            <Link href="/signup">visit Signup page</Link>
        </div>
    )
}