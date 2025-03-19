import { useState } from "react";

function Day0() {
    //day 0
    return (
    <div className="bg-emerald-900 h-screen flex flex-col justify-center items-center font-bold" >  
        <div className="text-white text-xl shadow-2xl"> Sign Up</div>
        <div className = "sign up card bg-white w-200 h-100 m-5 shadow-2xl bg-zinc-200 flex flex-col justify-center items-center rounded-2xl">  
            <div className ="Email m-5">
                <div className="">Email</div>
                <input className="Email w-100 h-15 bg-lime-200 shadow-xl font-normal hover:bg-gray-200 pl-2" placeholder="JohnDoe@Gmail.com"/>
            </div>
            <div className ="Email m-5 ">
                <div className="">Password</div>
                <input className="Email w-100 h-15 bg-lime-200 shadow-xl font-normal hover:bg-gray-200 pl-2" placeholder="Password123"/>
            </div>
            <button className="bg-green-600 w-30 h-15 rounded-lg hover:bg-green-400 border-1 border-black hover:border-green-400 m-6 shadow-xl">Click Me!</button>
        </div>

    </div>
    );
}

export default Day0;