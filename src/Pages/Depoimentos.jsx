import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

function Depoimentos() {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [prevDisabled, setPrevDisabled] = useState(true)
    const [nextDisabled, setNextDisabled] = useState(true)

    // Funções seguras com fallback (algumas versões usam nomes diferentes)
    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    // Toggle dos botões (boa prática para UX)
    useEffect(() => {
        if (!emblaApi) return
        const toggle = (api) => {
            setPrevDisabled(!api.canScrollPrev())
            setNextDisabled(!api.canScrollNext())
        }
        toggle(emblaApi)
        emblaApi.on('reinit', toggle)
        emblaApi.on('select', toggle)
        return () => {
            emblaApi.off('reinit', toggle)
            emblaApi.off('select', toggle)
        }
    }, [emblaApi])

    return (
        // branco: #FFFFFF
        // azul: #1a3b5d
        // dourado: #c9a87c
        <>
            <section className='h-auto font-inter px-5 mt-6 pt-15 pb-10 text-center'>
                <h1 className='font-cormorant text-3xl text-[#1a3b5d]'>O Que Dizem Nossos Clientes</h1>
                <p className='text-gray-700 leading-[1.8] text-md my-4'>
                    Depoimentos reais de clientes satifesitos com nossos serviços jurídicos
                </p>

                <div className="embla">
                    {/* viewport precisa esconder overflow */}
                    <div className="embla__viewport overflow-hidden px-4" ref={emblaRef}>
                        {/* container precisa ser flex para slides ficarem em linha */}
                        <div className="embla__container flex py-5 space-x-8 rounded-lg">
                            {data.map((d, i) => (
                                // cada slide precisa ter largura fixa / não encolher
                                <div key={i} className="embla__sliderelative w-full flex-none text-start">
                                    <span className='absolute text-[#c9a87c]/25 text-[90px] -m-3 -my-9'>"</span>
                                    <p className='italic pt-5'>
                                        {d.feedback}
                                    </p>
                                    <div className='my-3 space-y-1.5'>
                                        <p className='text-[#1a3b5d]'>
                                            {d.nome}
                                        </p>
                                        <span className='text-[#c9a87c]'>
                                            {d.profissao}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='space-x-5 my-5'>
                        <button
                            className="embla__prev border-2 border-[#c9a87c] p-5 rounded-full hover:bg-[#c9a87c] transition-all duration-300"
                            onClick={goToPrev}
                            disabled={prevDisabled}
                        >

                        </button>
                        <button
                            className="embla__next border-2 border-[#c9a87c] p-5 rounded-full hover:bg-[#c9a87c] transition-all duration-300"
                            onClick={goToNext}
                            disabled={nextDisabled}
                        >
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Depoimentos


const data = [
    {
        feedback: `Profissional extremamente competente e atenciosa. Conduziu meu processo de divórcio com sensibilidade e eficiência, sempre me mantendo informada sobre cada etapa.`,
        nome: `Mariana Costa`,
        profissao: `Arquiteta`,
    },
    {
        feedback: `A Dra. Ana Carolina foi fundamental para resolver uma questão empresarial complexa. Sua expertise e dedicação fizeram toda a diferença. Recomendo sem hesitação!`,
        nome: `Roberto Mendes`,
        profissao: `Empresário`,
    },
    {
        feedback: `Excelente advogada! Resolveu minha questão imobiliária de forma rápida e eficaz. Sua abordagem estratégica e conhecimento técnico são impressionantes.`,
        nome: `Carlos Eduardo Santos`,
        profissao: `Investidor`,
    },
]