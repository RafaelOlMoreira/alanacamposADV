import React, { useState } from 'react'

import { LuMenu } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";

function Header() {

    const [navMenuAberto, setNavMenuAberto] = useState(false);
    const toggleMenu = () => setNavMenuAberto((s) => !s);

    return (
        // Fundo: #FFFFFF
        // Texto: #1a3b5d
        // Border Button / Hover Text: #c9a87c

        <>
            <header className='fixed top-0 left-0 z-3000 w-full bg-white p-6 py-6 lg:py-4 border-b border-black/15'>
                <div className='flex items-center justify-between lg:justify-normal lg:px-12'>
                    <img src="#" />

                    <div className='hidden lg:flex w-full items-center justify-center'>
                        <ul className='flex gap-10'>
                            {dataDesk.map((dataDesk) => (
                                <li>
                                    <a href={dataDesk.aHref} className={dataDesk.aClass}>
                                        {dataDesk.menuSpan}
                                        <span className={dataDesk.spanClass}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a href='#Contato' className='hidden lg:flex ml-auto uppercase font-semibold text-lg text-center border-2 border-[#c9a87c] rounded-lg py-3 px-9 hover:cursor-pointer hover:text-white hover:bg-[#c9a87c] transition-all duration-300'>Contato</a>

                    <button onClick={toggleMenu} className='block lg:hidden'>
                        {navMenuAberto ? (
                            <VscClose
                                aria-expanded={navMenuAberto}
                                className='size-7 hover:cursor-pointer'
                            />
                        ) : (
                            <LuMenu
                                aria-expanded={navMenuAberto}
                                className='size-7 hover:cursor-pointer'
                            />
                        )}
                    </button>
                </div>
            </header >

            <div className={`fixed z-2000 bg-white ${navMenuAberto ? "opacity-100 pointer-events-auto transform transition-all duration-1000" : "hidden pointer-events-none"}`}>
                <div className="flex px-6 h-auto w-screen mt-20 shadow-lg">
                    <ul className='text-[#1a3b5d] w-screen'>
                        {data.map((d) => (
                            <a href={d.href} onClick={toggleMenu}><li className={d.classname}>{d.span}</li></a>
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
        href: `#`,
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

const dataDesk = [
    {
        aHref: "#",
        aClass: `group relative uppercase pb-2 font-semibold text-lg text-[#1a3b5d] hover:cursor-pointer transition-all duration-300`,
        menuSpan: `Início`,
        spanClass: `absolute bottom-0 left-0 pt-0.5 w-0 bg-[#c9a87c] group-hover:w-full transition-all duration-500`,
    },
    {
        aHref: "#Sobre",
        aClass: `group relative uppercase pb-2 font-semibold text-lg text-[#1a3b5d] hover:cursor-pointer transition-all duration-300`,
        menuSpan: `Sobre`,
        spanClass: `absolute bottom-0 left-0 pt-0.5 w-0 bg-[#c9a87c] group-hover:w-full transition-all duration-500`,
    },
    {
        aHref: "#Especialidades",
        aClass: `group relative uppercase pb-2 font-semibold text-lg text-[#1a3b5d] hover:cursor-pointer transition-all duration-300`,
        menuSpan: `Especialidades`,
        spanClass: `absolute bottom-0 left-0 pt-0.5 w-0 bg-[#c9a87c] group-hover:w-full transition-all duration-500`,
    },
    {
        aHref: "#Depoimentos",
        aClass: `group relative uppercase pb-2 font-semibold text-lg text-[#1a3b5d] hover:cursor-pointer transition-all duration-300`,
        menuSpan: `Depoimentos`,
        spanClass: `absolute bottom-0 left-0 pt-0.5 w-0 bg-[#c9a87c] group-hover:w-full transition-all duration-500`,
    },
]