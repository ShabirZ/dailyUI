import { useState, useEffect } from "react";
import Typewriter from "./typewriter";
import minaHand from '../../images/mina5.jpg'
import mangoSmile from '../../images/mango4.jpg'
import minaUpsidedown from '../../images/mina6.png'
import mangoHappy from '../../images/mango3.jpg'

export default function Day3() {
  return (
    //drop-shadow-lg
    <div className="min-h-screen bg-gray-200 flex flex-col">
        <div className="  z-100 drop-shadow-lg bg-gray-200 sticky top-0 shadow-md h-18 p-4 px-10 text-xl font-mono grid grid-cols-3 items-center z-0">
            <div className="font-semibold">Day 3</div>
            <div className="font-semibold text-center drop-shadow-lg">Create a Landing Page</div>
            <ul className="flex gap-5 justify-end">
                <li>About</li>
                <li>Home</li>
                <li>Contact Us</li>
            </ul>
        </div>


        <main className="bg-gray-200 flex-grow flex justify-center items-center flex-col">
        <Typewriter className=""
            text={[
            "Welcome!",
            "TEST 1 2 3",
            "Scroll Down"
            ]}
        />
        </main>
        <div className="bg-gradient-to-b from-gray-300 to-zinc-700 w-full h-16">  
        </div>

        <div className="flex flex-col  items-center h-max bg-gradient-to-b from-zinc-700 to-sky-900 gap-50 p-50" >
            <div className="text-white text-3xl drop-shadow-lg font-bold">
                The Goal of this is to create a Landing Page
            </div>
            <div className="flex flex-col w-screen h-max gap-y-20"> 
                <div className="flex flex-row w-screen justify-evenly">
                    <div>
                        <div className="text-white text-xl font-bold">Mina sleep </div>
                        <img src={minaHand} className="w-70 h-100 shadow-xl drop-shadow-2xl border-2" alt="Image 1" />
                    </div>

                    <div>
                        <div className="text-white text-xl font-bold">Mango hungry</div>
                        <img src={mangoSmile} className="w-70  h-100 shadow-xl drop-shadow-2xl border-2" alt="Image 2" />
                    </div>
                </div>
                <div className="flex flex-row w-screen justify-evenly ">
                    <div>
                        <div className="text-white text-xl font-bold">Mina sleep </div>
                        <img src={minaUpsidedown} className="w-70 h-100 shadow-xl drop-shadow-2xl border-2" alt="Image 1" />
                    </div>
                    <div>
                        <div className="text-white text-xl font-bold">Mina sleep </div>
                        <img src={mangoHappy} className="w-70 h-100 shadow-xl drop-shadow-2xl border-2" alt="Image 1" />
                    </div>
                </div>
            </div>


        </div>
    </div>
  );
}
