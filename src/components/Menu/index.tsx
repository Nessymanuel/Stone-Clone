import logo from '../../assets/logo.png';

export function Menu() {
    return (
        <div className="bg-white px-20 py-2 text-zinc-950 text-lg font-semibold">
            <div className='flex justify-between items-center px-8'>
                <div className='flex items-center space-x-8'>
                    <div>
                        <a href=""> <h1 className='text-green-700 text-3xl pb-2'>Stone</h1>                        </a>
                    </div>
                    <ul className="flex space-x-8 list-none">
                        <li><a href="#" className="">Produtos</a></li>
                        <li><a href="#" className="">Planos</a></li>
                        <li><a href="#" className="">Sobre a Stone</a></li>
                        <li><a href="#" className="">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-8 list-none">
                        <li><a href="#" className="p-2 ">Atendimento</a></li>
                        <li><a href="#" className="p-2 ">Baixe o app</a></li>
                        <li><a href="#" className="border-2 p-2 rounded-3xl px-4 ">Login</a></li>
                        <li><a href="#" className="bg-green-900 p-2 text-white rounded-3xl px-4 ">Seja Stone</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
