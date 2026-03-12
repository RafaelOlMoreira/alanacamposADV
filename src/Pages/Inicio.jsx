import React from 'react'

function Home() {
    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <section className="pt-16 min-h-screen bg-[url('/bgHome.jpg')] drop-shadow-2xl bg-cover bg-center bg-fixed flex items-center relative">
            <div className='absolute inset-0 bg-black/40'></div>
            <div className="relative px-5 text-white space-y-5 font-inter">
                <h1 className="text-4xl font-cormorant text-white">
                    Advocacia com <span className='block'>Excelência e Dedicação</span>
                </h1>
                <p className='text-md'>
                    Soluções jurídicas personalizadas com foco em resultados efetivos e atendimento humanizado
                </p>
                <div className='flex flex-col space-y-5'>
                    <a href='#Contato' className='p-4 bg-[#1a3b5d] text-md font-semibold text-white text-center rounded-lg hover:scale-105 transition-all duration-300'>
                        Consultar Agora
                    </a>
                    <a href='#Sobre' className='p-4 border-2 border-white rounded-lg text-white text-center font-semibold hover:bg-white hover:text-[#1a3b5d] transition-all duration-300'>
                        Saiba Mais
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home