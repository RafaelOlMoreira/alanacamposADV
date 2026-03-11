import React from 'react'

function Sobre() {
    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <>
            <section className='h-screen bg-white font-inter px-5 py-15'>
                <h1 className='font-cormorant text-4xl text-[#1a3b5d]'>Sobre a Dra. Alana Campos</h1>
                <div className='text-gray-700 leading-[1.8] text-md space-y-8 my-8'>
                    <p>Com mais de 15 anos de experiência em advocacia, a Dra. Ana Carolina Silva construiu uma carreira sólida baseada em ética, competência e dedicação aos seus clientes. Formada pela Universidade de São Paulo, com especialização em Direito Civil e Empresarial, ela se destaca pela abordagem humanizada e estratégica na resolução de conflitos.</p>
                    <p>Sua atuação é pautada pela busca constante de soluções eficientes e personalizadas, sempre priorizando os interesses e objetivos de cada cliente. A Dra. Ana Carolina acredita que o direito deve ser acessível e compreensível, transformando complexidade jurídica em clareza e segurança.</p>
                </div>

                <div className='flex flex-col'>
                    <span className='font-cormorant text-xl text-[#1a3b5d] font-semibold'>Dra. Ana Carolina Silva</span>
                    <span className='text-[#c9a87c]'>OAB/SP 123.456 | Especialista em Direito Civil e Empresarial</span>
                </div>

                <div className="py-10">
                    <div className="relative bg-[url('/person.jpg')] h-[65vh] bg-cover bg-center rounded-lg">
                        <div className='absolute -bottom-1 right-1 -m-4 p-3.5 flex flex-col bg-white border-4 border-[#c9a87c] rounded-full text-center'>
                            <span className='text-[20px] text-[#1a3b5d] font-semibold'>+15</span>
                            <span className='text-[12px] text-[#c9a87c]'>Anos de <span className='block'>Experiência</span></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre
