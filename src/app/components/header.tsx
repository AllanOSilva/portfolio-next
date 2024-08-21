"use client"
import React from "react"
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
        <header className="bg-green-400">
            <nav>

            </nav>
        </header>
        )
};
