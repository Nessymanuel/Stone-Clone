export function CTA3() {
    return (
        <div className="bg-zinc-300 p-20 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">São <span  className="text-green-500"> muitos motivos pra você contar com a <br />gente</span> , né? Por onde você quer começar?</h1>

            <div className="flex gap-5 items-center">
                <div className='mt-5' >
                    <button className="bg-green-600 text-white py-2 px-6 rounded-3xl text-lg font-semibold hover:bg-green-800 transition">
                        Descubra suas taxas
                    </button>
                </div><div className='mt-5' >
                    <button className="bg-white text-black py-2 px-6 rounded-3xl border-2 border-zinc-400 text-lg font-semibold ">
                       Abra a sua conta
                    </button>
                </div>
            </div>

        </div>
    )
}