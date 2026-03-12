import React, { useState } from 'react'

const MAX = 500;

function Contato() {

    const [message, setMessage] = useState('')

    const counterColor =
        message.length >= MAX ? 'text-red-500' :
            message.length > MAX * 0.9 ? 'text-amber-500' :
                'text-[#b7bac0]';

    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <>
            <section id='Contato' className='scroll-m-15 h-auto bg-gray-50 font-inter px-8 mt-6 pt-15 pb-10 text-center'>
                <h1 className='font-cormorant text-3xl text-[#1a3b5d]'>Entre em Contato</h1>
                <p className='text-gray-700 leading-[1.8] text-md my-4 px-5'>
                    Agende uma consulta e descubra como podemos ajudá-lo com suas questões jurídicas
                </p>

                <form action="#" className='space-y-5 mt-5'>
                    <input
                        type="text"
                        placeholder='Nome Completo'
                        className='w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300 text-sm md:text-base border-gray-300 focus:border-[#c9a87c]'
                    />
                    <input
                        type="email"
                        placeholder='E-mail'
                        className='w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300 text-sm md:text-base border-gray-300 focus:border-[#c9a87c]'
                    />
                    <input
                        type="tel"
                        placeholder='Telefone'
                        className='w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300 text-sm md:text-base border-gray-300 focus:border-[#c9a87c]'
                    />
                    <input
                        type="text"
                        placeholder='Assunto'
                        className='w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300 text-sm md:text-base border-gray-300 focus:border-[#c9a87c]'
                    />
                    <textarea
                        className='w-full bg-transparent border-b-2 py-3 outline-none transition-all duration-300 text-sm md:text-base border-gray-300 focus:border-[#c9a87c] resize-none'
                        maxLength={MAX}
                        rows={2}
                        placeholder='Mensagem'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    ></textarea>
                </form>
                <div className={`text-sm float-end ${counterColor}`}>{message.length}/{MAX}</div>

                <button className='mt-8 bg-[#1a3b5d] w-full text-white p-4 rounded-lg text-sm hover:cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300'>Enviar Mensagem</button>
            </section>
        </>
    )
}

export default Contato
