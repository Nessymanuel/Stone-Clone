import { BookUserIcon, ChevronRightIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";

export function Section() {
    return (
        <div className="bg-zinc-800 text-white font-semibold py-20 px-52 justify-between flex">
            <div>
                <BookUserIcon size={32} color="green" />

                <h1 className="text-bold pt-2">Fale com a gente</h1>
                <p>Seja atendidp pelo nosso time</p>
                <div className="flex items-center py-2 ">
                    <p className="text-green-500">
                        <a href="" className="hover:underline" >Atendimento</a>

                    </p>
                    <ChevronRightIcon size={28} color="green" />

                </div>
            </div>
            <div>
                <UsersIcon size={32} color="green" />
                <h1 className="text-bold pt-2">Trabalhe conosco</h1>
                <p>Transforme seu potencial em potência</p>
                <div className="flex items-center py-2 ">
                    <div>
                        <p className="text-green-500">
                            <a href="" className="hover:underline" >Começa</a>

                        </p>
                    </div>
                    <div>
                        <ChevronRightIcon size={28} color="green" />

                    </div>

                </div>
            </div>
            <div>
                <ShoppingCartIcon size={32} color="green" />

                <h1 className="text-bold py-1">E-commerce</h1>
                <p>Soluções pra quem já tem loja virtual</p>
                <div className="flex items-center py-2 ">
                    <p className="text-green-500">
                        <a href="" className="hover:underline" >Começa</a>

                    </p>
                    <ChevronRightIcon size={28} color="green" />

                </div>
            </div>
        </div>
    )
}