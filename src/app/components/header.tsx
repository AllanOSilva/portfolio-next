"use client"
import React from "react"
import Logo from "./ui/logo";
import { AiOutlineMenu,  AiOutlineClose } from "react-icons/ai";
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
                <div className="hidden sm:flex px-4">
                    <ul className="flex">
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
            <div className={
                menuOpen
                ? "fixed-0 top-0 w-[65%] sm:hidden h-screen bg-green-700 text-white p-10 ease-in duration-500" 
                :"fixed left-[-100%] p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-center">
                <div onClick={handleNav} className=" md:hidden cursor-pointer pl-24">
                    <AiOutlineClose size={25} />
                </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <li onClick={()=>setMenuOpen(false)} className="py-4 cursor-pointer">
                            <a href="#home">Home</a>
                            </li>
                        <li onClick={()=>setMenuOpen(false)} className="py-4 cursor-pointer">
                            <a href="#projects">Projetos</a>
                            </li>
                        <li onClick={()=>setMenuOpen(false)} className="py-4 cursor-pointer">
                            <a href="#skills">Skills</a>
                            </li>
                    </ul>
                </div>
            </div>
          </nav>      
        )
};
