import React from "react";
import { RiHome6Line } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full">
            <ul className="pl-4">
                <li>
                    <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
                        Logo
                    </h1>
                </li>
                <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                    <a href="#" className="bg-[#EC7C6A] p-4 flex justify-center rounded-lg text-white">
                        <RiHome6Line className="text-2xl"/>
                    </a>
                </li>
                
                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-lg 
                                            text-[#EC7C6A] group-hover:text-white transition-colors">
                        <RiHome6Line className="text-2xl"/>
                    </a>
                </li>

            </ul>
        </div>
    )
;}

export default Sidebar