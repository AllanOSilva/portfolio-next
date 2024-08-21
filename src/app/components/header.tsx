"use client"


import React from "react"
import Logo from "./ui/logo";
import { Avatar } from "@nextui-org/react";
export type NavigationType ={
    name: string;
    href: string;
    id: number
}

const navigation: NavigationType[]=[
    {name: "Home", href:"#", id:1},
    {name: "Projetos", href:"#", id:1},
    {name: "Skills", href:"#", id:1},
    {name: "Contatos", href:"#", id:1},
];
export default function Header() {
    return (
          <div className="bg-green-400">
            <header>
                <Logo />
                <nav>
                    
                </nav>
            </header>
          </div>      
        )
};
