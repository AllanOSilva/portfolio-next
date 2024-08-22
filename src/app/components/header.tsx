"use client"
import React from "react"
import Logo from "./ui/logo";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav =() =>{
        setMenuOpen(!menuOpen);
    }
    return (
          <nav className="fixed w-full h-24 bg-green-900 text-white shadow-2xl" >
            <div className="flex justify-between items-center h-full px-4 2xl:px-16">
            <Logo /> 
                <div >
                    <ul className="hidden sm:flex">
                        <li>
                            <a href="#home" className="ml-10 uppercase hover:border-b text-xl">Home</a>
                            </li>
                        <li>
                            <a href="#projects" className="ml-10 uppercase hover:border-b text-xl">Projetos</a>
                            </li>
                        <li>
                            <a href="#skills"  className="ml-10 uppercase hover:border-b text-xl">Skills</a>
                            </li>
                </ul>
                </div>
                <div onClick={handleNav} className=" md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
          </nav>      
        )
};
