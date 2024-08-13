import { CircleCheckBig } from 'lucide-react'
import img from '../../assets/AboutUs.png'


export function AboutUs() {
    return (
        <div className="flex  text-white h-full justify-between bg-green-950 items-center rounded-br-[150px]">

            <div className='max-w-xl ml-20 '>
                <h3 className="text-4xl font-semibold mb-4 ">Conheça a 
                    <span className='border-2 rounded-3xl border-green-500 px-3 ml-3  justify-center'>
                         Conta PJ Stone
                    </span> <br />
                    pra você não perder tempo

                </h3>



                <p className="text-base mb-8 font-medium">
                    Completa pra vender, gerir e girar todo o seu negócio. Grátis e sem mensalidade pra vender no físico e online                </p>
                <div className=''>
                    <ol className='text-base  font-medium'>
                        <div className='flex gap-2'>
                            <CircleCheckBig size={24} color="green" />
                            <li className='mb-2'>Pix em lote com 0% de taxa</li>
                        </div>

                        <div className='flex gap-2'>
                            <CircleCheckBig size={24} color="green" />
                            <li className='mb-2'>Boleto pagos e gerados grátis nos 3 primeiros meses</li>
                        </div>

                        <div className='flex gap-2'>
                            <CircleCheckBig size={24} color="green" />
                            <li className='mb-2'>Suporte via e-mail, chat, ticket, telefone,whatsapp 24h/7</li>
                        </div>

                        <div className='flex gap-2'>
                            <CircleCheckBig size={24} color="green" />
                            <li className='mb-2'>Atendimento com especialistas em até 5 segundos</li>
                        </div>
                    </ol>
                </div>
                <div className='mt-5' >
                    <button className="bg-green-600 text-white py-2 px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                        Conheça agora
                    </button>
                </div>

            </div>
            <div >
                <img src={img} alt="" />
            </div>
        </div>
    )
}