import React from 'react'

function Especialidades() {
    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <>
            <section id='Especialidades' className='scroll-m-15 h-auto bg-gray-50 font-inter px-5 md:px-16 mt-6 pt-15 lg:pt-30 pb-10 text-center'>
                <h1 className='font-cormorant text-3xl lg:text-5xl text-[#1a3b5d]'>Áreas de Atuação</h1>
                <p className='text-gray-700 leading-[1.8] text-md lg:text-xl my-4 lg:mx-52'>
                    Expertise jurídica abrangente para atender suas necessidades com excelência e dedicação
                </p>

                <div className='my-5 lg:my-15 space-y-5 lg:space-y-0 lg:flex lg:gap-10 md:px-16'>
                    {data.map((d) => (
                        <div className='group bg-white shadow-sm p-5 lg:p-10 rounded-2xl hover:cursor-pointer hover:shadow-2xl transition-all duration-300'>
                            <button className='bg-white p-8 rounded-full border-2 border-[#c9a87c] group-hover:bg-[#c9a87c] transition-all duration-300'></button>
                            <h1 className='font-cormorant text-xl text-[#1a3b5d] my-3'>
                                {d.title}
                            </h1>
                            <p className='text-gray-700 text-md'>
                                {d.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Especialidades

const data = [
    {
        title: `Direito Civil`,
        description: `Contratos, responsabilidade civil, direito de família e sucessões com atendimento personalizado e soluções eficazes.`,
    },
    {
        title: `Direito Empresarial`,
        description: `Consultoria jurídica para empresas, contratos comerciais, recuperação judicial e planejamento societário estratégico.`,
    },
    {
        title: `Direito Imobiliário`,
        description: `Compra, venda e locação de imóveis, regularização fundiária e resolução de conflitos imobiliários complexos.`,
    },
    {
        title: `Mediação e Arbitragem`,
        description: `Resolução alternativa de conflitos com foco em acordos justos e eficientes, evitando desgastes judiciais prolongados.`,
    }
]