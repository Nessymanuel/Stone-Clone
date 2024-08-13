import img from '../../assets/SocialProve.png'

export function SocialProve() {
    return (
            <div className=' bg-zinc-200 flex gap-36 items-center pb-10'>


                <div>
                    <div className='max-w-xs ml-20'>
                        <h1 className='text-zinc-500 font-bold'>JUSTO PARA O SEU BOLSO</h1>
                        <h3 className="text-5xl font-bold mb-4 ">Menos custo, <br />
                            <span className='text-green-700'> Mais lucro</span>

                        </h3>

                        <p className="text-sm mb-8 font-medium">
                            Seu negócio gira com taxas personalizadas e você sabe exatamente tudo que está pagando </p>
                        <div className='mt-5' >
                            <button className="bg-green-600 text-white py-2 px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                                Seja Stone
                            </button>
                        </div>
                    </div>
                </div>

                <div className='items-center justify-center relative bottom-20 flex'>
                    <img src={img} alt="" />

                </div>
            </div>

    )
}