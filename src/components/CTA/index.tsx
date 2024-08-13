import img from '../../assets/CTA.png'

export function CTA() {
    return (
        <div className='bg-white  flex flex-col items-center h-screen'>

            <div className=' h-1/3'>
                <img src={img} alt="" className="h-[450px] " />
            </div>

            <div className="bg-white justify-between gap-20 items-center flex p-10  w-3/5 h-[900px]  border-2 rounded-xl">
                <div >
                    <h2 className='text-zinc-500 font-medium'>MELHOR SUPORTE DO PAÍS</h2>
                    <h1 className='font-bold text-2xl text-zinc-800 py-2'>Número 1 em atendimento </h1>
                    <p className='font-semibold text-zinc-800'>
                        24 horas atendendo em 5 segundos pelo telefone ou WhatsApp.
                        E se precisar nossos Agentes vão até o seu balcão em todo Brasi</p>
                    <div className='mt-5' >
                        <button className="bg-green-600 text-white py-2 px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                            Fale com a gente
                        </button>
                    </div>
                </div>
                <div className='border-5  justify-between px-5'>
                    <div className='flex'>
                        <div className=' flex  flex-col  '>
                            <div className='bg-zinc-200 px-12 my-1 ml-2 p-2 rounded-xl font-semibold '>
                                <h1 >Reconhecido</h1>
                                <p className='font-bold text-xl '>Ratoo</p>
                                <p className='font-bold text-3xl'>9.0 <span className='font-normal text-lg'>/10</span></p>
                            </div>
                            <div className='bg-zinc-200 px-12 my-1 ml-2 p-2 rounded-xl font-semibold '>
                                <h1 >Atendimento em</h1>
                                <p className='font-bold text-3xl '>5</p>
                                <p>segundos</p>
                            </div>

                        </div>
                        <div className=' flex  flex-col  '>
                            <div className='bg-zinc-200 px-12 my-1 ml-2 p-2 rounded-xl font-semibold '>
                                <h1 >Mais de</h1>
                                <p className='font-bold text-3xl '>3.700</p>
                                <p>agentes</p>
                            </div>
                            <div className='bg-zinc-200 px-12 my-1 ml-2 p-2 rounded-xl font-semibold '>
                                <h1 > Em mais de</h1>
                                <p className='font-bold text-3xl '>5.500</p>
                                <p>cidades</p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h2 className='text-green-700 font-semibold text-lg text-center py-2'>O melhor atendimento da indústria</h2>

                    </div>
                </div>
            </div>
            <div className='h-1/3'>

            </div>


        </div>
    )
}
