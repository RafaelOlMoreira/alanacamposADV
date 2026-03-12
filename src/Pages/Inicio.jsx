import React from 'react'

function Home() {
    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <section className="min-h-screen bg-[url('/bgHome.jpg')] drop-shadow-2xl bg-cover bg-center bg-fixed flex items-center relative">
            <div className='absolute inset-0 bg-black/40'></div>
            <div className="relative px-5 lg:px-32 lg:w-2/3 text-white space-y-5 lg:space-y-12 font-inter">
                <h1 className="text-4xl lg:text-8xl font-cormorant text-white">
                    Advocacia com <span className='block'>Excelência e Dedicação</span>
                </h1>
                <p className='text-md lg:text-[34px]'>
                    Soluções jurídicas personalizadas com foco em resultados efetivos e atendimento humanizado
                </p>
                <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10 lg:w-1/2'>
                    <a href='#Contato' className='lg:w-full p-4 lg:p-6 lg:px-10 bg-[#1a3b5d] border-2 border-[#1a3b5d] text-md lg:text-lg font-semibold text-white text-center rounded-lg hover:scale-105 transition-all duration-300'>
                        Consultar Agora
                    </a>
                    <a href='#Sobre' className='lg:w-full p-4 lg:p-6 lg:px-10 border-2 border-white rounded-lg text-white text-md lg:text-lg text-center font-semibold hover:bg-white hover:text-[#1a3b5d] transition-all duration-300'>
                        Saiba Mais
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home