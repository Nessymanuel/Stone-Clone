import { MessageCircleIcon } from 'lucide-react';
import background from '../../assets/fundo99.jpg';

export function HeroSection() {
    return (
        <div className="relative bg-gray-900 h-[750px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${background})` }}>

            {/* Gradiente sobre a imagem */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent" style={{ height: '100%' }}></div>

            <div className="flex flex-col text-left h-full justify-end pb-24 items-start relative z-10">
                <div className="max-w-xl ml-20 text-white">

                    <h1 className="text-6xl font-bold mb-4">
                        Tudo pro seu negócio girar                 </h1>
                    <p className="text-lg mb-8">
                        Maquininha, Conta PJ e cartão no mesmo app, além de toda sua gestão integrada                   </p>

                    <div className='flex font-bold gap-5'>
                        <div>
                            <button className="bg-green-500 text-white py-3  px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                                Descubra suas taxas
                            </button>
                        </div>
                        <div>
                            <p className='text-sm'> <span className='text-green-500'>Atendimento em 5 segundos</span> </p>
                            <p className='text-2xl'>3004 9681</p>
                        </div>
                    </div>

                </div>
                <div>
                    <button className="bg-green-500 text-black py-3 items-center fixed bottom-14 right-10 flex gap-2 px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                       <MessageCircleIcon size={32} color='black'/>
                        Adquira agora
                    </button>
                </div>
            </div>
        </div>
    );
}
