import img1 from '../../assets/Levis.png'
import img2 from '../../assets/Alphabeto.png'
import img3 from '../../assets/Mocellin.png'
import img4 from '../../assets/MiniSo.png'
import img5 from '../../assets/Julietto.png'
import img6 from '../../assets/Melissa.png'

export function Partnes() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-20">Parceira de mais de <span className="text-green-500"> 1 milhão de negócios </span>  por todo Brasil</h1>

            <div className='flex justify-between px-28'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>

                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>

            </div>
        </div>
    )
}