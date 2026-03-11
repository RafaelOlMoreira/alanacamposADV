import React, { useState } from 'react'

import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

function Header() {

    const [navMenuAberto, setNavMenuAberto] = useState(false);
    const toggleMenu = () => setNavMenuAberto((s) => !s);

    return (
        // Fundo: #FFFFFF
        // Texto: #1a3b5d
        // Border Button / Hover Text: #c9a87c

        <>
            <header className='fixed z-3000 w-full bg-white p-6 py-8 border-b border-black/15'>
                <div className='flex items-center justify-between'>
                    <img src="#" />
                    <button className='w-10'>
                        {navMenuAberto ? (
                            <VscClose
                                onClick={toggleMenu}
                                aria-expanded={navMenuAberto}
                                className='size-7 hover:cursor-pointer'
                            />
                        ) : (
                            <VscMenu
                                onClick={toggleMenu}
                                aria-expanded={navMenuAberto}
                                className='size-7 hover:cursor-pointer'
                            />
                        )}
                    </button>
                </div>
            </header >

            <div className={`fixed z-2000 ${navMenuAberto ? "opacity-100 pointer-events-auto transform transition-all duration-1000" : "hidden pointer-events-none"}`}>
                <div className="flex px-6 pb-3 h-auto w-screen mt-23 shadow-lg">
                    <ul className='text-[#1a3b5d] w-screen'>
                        {data.map((d) => (
                            <li className={d.classname}><a href={d.href} onClick={toggleMenu}>{d.span}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header

const data = [
    {
        span: `Inicio`,
        classname: `uppercase font-semibold text-lg py-3 w-full border-b border-black/7 hover:cursor-pointer hover:text-[#c9a87c] transition-all duration-300`,
        href: `#Inicio`,
    },
    {
        span: `Sobre`,
        classname: `uppercase font-semibold text-lg py-3 w-full border-b border-black/7 hover:cursor-pointer hover:text-[#c9a87c] transition-all duration-300`,
        href: `#Sobre`,
    },
    {
        span: `Especialidades`,
        classname: `uppercase font-semibold text-lg py-3 w-full border-b border-black/7 hover:cursor-pointer hover:text-[#c9a87c] transition-all duration-300`,
        href: `#Especialidades`,
    },
    {
        span: `Depoimentos`,
        classname: `uppercase font-semibold text-lg py-3 w-full border-b border-black/7 hover:cursor-pointer hover:text-[#c9a87c] transition-all duration-300`,
        href: `#Depoimentos`,
    },
    {
        span: `Contato`,
        classname: `uppercase font-semibold text-lg text-center border-2 border-[#c9a87c] rounded-lg py-2.5 my-3 w-full hover:cursor-pointer hover:text-white hover:bg-[#c9a87c] transition-all duration-300`,
        href: `#Contato`,
    }
]