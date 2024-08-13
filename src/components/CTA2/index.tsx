import img1 from '../../assets/CTA1.png';

export function CTA2() {
    return (
        <div className='bg-white flex flex-col items-center h-full'>
            <h1 className='font-bold pb-4 text-2xl'>O único App que você vai precisar</h1>
            <p className='font-semibold pb-4 text-lg'>Com a Stone no seu celular, você tem o controle total do seu negócio nas suas mãos</p>
            <div className='flex gap-4 p-2 rounded-full bg-zinc-300 font-semibold'>
                <div className='p-4'>
                    Várias formas de vender
                </div>
                <div className='p-4'>
                    Gerencie sua equipe
                </div>
                <div className='p-4'>
                    Pague suas contas
                </div>
                <div className='border-2 p-4 rounded-full text-green-600 bg-white'>
                    Integre seu negócio
                </div>
            </div>
            <div className=' p-4 flex items-center justify-center relative'>
                <img src={img1} className='rounded-3xl' />
                <div className='absolute inset-0 pl-10  flex items-center justify-start '>
                    <div className='bg-white rounded-3xl p-10  w-[500px]   items-start justify-center'>
                        <h2 className='text-zinc-500 font-medium'>TUDO CONECTADO</h2>
                        <h1 className='font-bold text-2xl text-zinc-800 py-2'>Gestão integrada pra acelerar seu negócio</h1>
                        <p className='font-normal text-zinc-800'>Mais de 90 sistemas que se integram com a maquininha
                            da Stone pra otimizar o fluxo do seu negócio de ponta a ponta</p>
                        <div className='mt-5' >
                            <button className="bg-green-600 text-white py-2 px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                                Seja Stone
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
