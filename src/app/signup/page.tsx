"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function signup()
{
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    });

    const onSignup=async()=>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>signup!!</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
            className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600" 
            type="text" name="username" id="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="username" />
            <label htmlFor="email">email</label>
            <input 
            className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600" 
            type="email" name="email" id="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email"/>
            <label htmlFor="password">password</label>
            <input
            className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600"
             type="password" name="password" id="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password"/>
            <button className="p-4 border border-black bg-gray-50 rounded-md mb-4 focus:outline-none focus: border-gray-600" onClick={onSignup}>signup here</button>
            <Link href="/login">visit login page</Link>
        </div>
    )
}