import React from 'react'

function Sobre() {
    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <>
            <section id='Sobre' className='scroll-m-15 bg-white font-inter px-5 md:px-16 lg:px-32 pt-15 lg:py-30 lg:grid lg:grid-cols-2 lg:space-x-28'>
                <div>
                    <h1 className='font-cormorant text-4xl lg:text-6xl text-[#1a3b5d]'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >Sobre a Dra. Alana Campos</h1>
                    <div className='text-gray-700 lg:text-2xl leading-[1.8] text-md space-y-8 my-8'>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >Com mais de 15 anos de experiência em advocacia, a Dra. Alana Campos construiu uma carreira sólida baseada em ética, competência e dedicação aos seus clientes. Formada pela Universidade de São Paulo, com especialização em Direito Civil e Empresarial, ela se destaca pela abordagem humanizada e estratégica na resolução de conflitos.</p>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >Sua atuação é pautada pela busca constante de soluções eficientes e personalizadas, sempre priorizando os interesses e objetivos de cada cliente. A Dra. Alana Campos acredita que o direito deve ser acessível e compreensível, transformando complexidade jurídica em clareza e segurança.</p>
                    </div>

                    <div className='flex flex-col lg:text-2xl'
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <span className='font-cormorant text-xl lg:text-4xl text-[#1a3b5d] font-semibold'>Dra. Alana Campos</span>
                        <span className='text-[#c9a87c]'>OAB/SP 123.456 | Especialista em Direito Civil e Empresarial</span>
                    </div>
                </div>

                <div className="py-10 lg:px-10 lg:py-0">
                    <div className="relative bg-[url('/person.jpg')] h-[65vh] lg:h-full bg-cover bg-top rounded-lg"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className='absolute -bottom-1 right-1 -m-4 p-3.5 lg:p-4 flex flex-col bg-white border-4 border-[#c9a87c] rounded-full text-center'>
                            <span className='text-[20px] lg:text-[22px] text-[#1a3b5d] font-semibold'>+15</span>
                            <span className='text-[12px] lg:text-[14px] text-[#c9a87c]'>Anos de <span className='block'>Experiência</span></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre
