import { BlocksIcon, HandCoins, HeadsetIcon, SmartphoneIcon } from "lucide-react";

export function Features() {
    return (
        <div>
            <div className="bg-white  m-24">
                <h1 className="text-4xl text-zinc-800 font-bold mb-12 text-center">
                    Tudo que o seu negócio precisa pra <span className="text-green-600">vender</span>, <span className="text-green-600">gerir</span> e <span className="text-green-600">girar</span>
                </h1>
                <div className="flex gap-4 font-medium text-lg  text-zinc-800">
                    <div className="border-2 rounded-2xl p-5 ">
                        <HandCoins size={32} color="green"/>
                        <h1 className="text-green-700 font-bold pt-2">Justo Pro Seu Bolso</h1>
                        <p >
                            Quanto mais seu negócio vende, menos taxa você paga
                        </p>
                    </div>
                    <div className="border-2  rounded-2xl p-5">
                        <HeadsetIcon size={32} color="green"/>
                        <h1 className="text-green-700 font-bold pt-2">Justo Pro Seu Bolso</h1>
                        <p>
                            Quanto mais seu negócio vende, menos taxa você paga
                        </p>
                    </div>
                    <div className="border-2  rounded-2xl p-5">
                        <BlocksIcon size={32} color="green"/>
                        <h1 className="text-green-700 font-bold pt-2">Justo Pro Seu Bolso</h1>
                        <p>
                            Quanto mais seu negócio vende, menos taxa você paga
                        </p>
                    </div>
                    <div className="border-2  rounded-2xl p-5">
                        <SmartphoneIcon size={32} color="green"/>
                        <h1 className="text-green-700 font-bold pt-2">Justo Pro Seu Bolso</h1>
                        <p>
                            Quanto mais seu negócio vende, menos taxa você paga
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}