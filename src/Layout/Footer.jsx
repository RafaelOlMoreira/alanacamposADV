import React from 'react'

import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    // branco: #FFFFFF
    // azul: #1a3b5d
    // dourado: #c9a87c
    return (
        <footer className='h-auto bg-[#1a3b5d] font-inter px-8 lg:px-32 mt-6 pt-15 pb-10'>

            <div className='lg:grid lg:grid-cols-3 lg:gap-20'>
                <div className='space-y-5'>
                    <img src="#" />
                    <p className='text-gray-300 text-sm lg:text-lg leading-relaxed'>Advocacia com excelência, ética e dedicação. Soluções jurídicas personalizadas para proteger seus direitos e interesses.</p>
                </div>
                <div className='mt-5 text-white'>
                    <h6 className='pb-3 lg:pb-6 lg:text-lg'>Contato</h6>

                    {data.map((d) => (
                        <div className='group flex items-center pb-3 space-x-2'>
                            {d.icon}
                            {d.link}
                        </div>
                    ))}

                </div>
                <div className='mt-5 text-white'>
                    <h6 className='pb-3 lg:pb-6 lg:text-lg'>Redes Sociais</h6>

                    <div className='flex space-x-3'>
                        {dataRS.map((e) => (
                            <button className='p-2 lg:p-3 border-2 border-white rounded-full hover:border-[#c9a87c] hover:bg-[#c9a87c] transition-all duration-300'>
                                <a href={e.linkRS}>
                                    {e.iconRS}
                                </a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <hr className='mt-10 text-gray-300/30' />
            <p className='text-gray-300 text-sm lg:text-md py-3 lg:mt-10 text-center'>&copy; Dra. Alana Campos - Advocacia. Todos os direitos reservados. OAB/SP 123.456</p>

        </footer>
    )
}

export default Footer

const data = [
    {
        icon: <FiPhone className='size-5 group-hover:text-[#c9a87c] transition-all duration-300' />,
        link: <a href="#" className='group-hover:text-[#c9a87c] transition-all duration-300'>(11) 99999-9999</a>,
    },
    {
        icon: <FaWhatsapp className='size-5 group-hover:text-[#c9a87c] transition-all duration-300' />,
        link: <a href="#" className='group-hover:text-[#c9a87c] transition-all duration-300'>WhatsApp</a>,
    },
    {
        icon: <MdOutlineEmail className='size-5 group-hover:text-[#c9a87c] transition-all duration-300' />,
        link: <a href="#" className='group-hover:text-[#c9a87c] transition-all duration-300'>contato@alanacampos.br</a>,
    }
]

const dataRS = [
    {
        linkRS: `https://github.com/RafaelOlMoreira`,
        iconRS: <FaInstagram className='size-5 lg:size-6' />,
    },
    {
        linkRS: `https://github.com/RafaelOlMoreira`,
        iconRS: <FaFacebook className='size-5 lg:size-6' />,
    },
]