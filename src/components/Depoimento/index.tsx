import {  ThumbsUpIcon } from 'lucide-react'
import ft1 from '../../assets/ft1.png'

export function Depoimento() {
    return (
        <div className='flex px-40 gap-8 pb-20 '>
            <div className='p-6 w-1/2'>
                <ThumbsUpIcon size={42} color='green' />
                <h1 className='font-bold text-2xl pt-4'> O cliente tem sempre razão, né? Olha o que os nossos dizem:</h1>
            </div>
            <div className="bg-zinc-200 p-5 rounded-3xl w-3/5">
                <div className='flex gap-4 pb-2'>
                    <div className=''>
                        <img src={ft1} className='rounded-lg' />
                    </div>
                    <div>
                        <h1>Wanessa Ferreira</h1>
                        <p className='text-zinc-500'>@waanessaf</p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ut ipsum pariatur veniam aut temporibus, exercitationem
                    facere! Voluptate qui
                    vero delectus omnis perferendis, distinctio explicabo
                    quos dolorem saepe, aut ipsum!</p>
            </div>
            <div className="bg-zinc-200 p-4 rounded-3xl w-3/5">
                <div className='flex gap-4 pb-2'>
                    <div className=''>
                        <img src={ft1} className='rounded-lg' />
                    </div>
                    <div>
                        <h1>Wanessa Ferreira</h1>
                        <p className='text-zinc-500'>@waanessaf</p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ut ipsum pariatur veniam aut temporibus, exercitationem
                    facere! Voluptate qui
                    vero delectus omnis perferendis, distinctio explicabo
                    quos dolorem saepe, aut ipsum!</p>
            </div>
            
            
        </div>

    )
}