
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import img5 from '../../assets/image5.png'
import img6 from '../../assets/image6.png'
import img7 from '../../assets/image7.png'
import img8 from '../../assets/image8.png'
import img9 from '../../assets/image9.png'
import img10 from '../../assets/image10.png'
import img11 from '../../assets/image11.png'
import img12 from '../../assets/image12.png'
import img13 from '../../assets/image13.png'
import img14 from '../../assets/image14.png'
import img15 from '../../assets/image15.png'
import img16 from '../../assets/image16.png'
import img17 from '../../assets/image17.png'
import img18 from '../../assets/image18.png'
import img19 from '../../assets/image19.png'
import img20 from '../../assets/image20.png'
import img21 from '../../assets/image21.png'
import img22 from '../../assets/image22.png'
import img23 from '../../assets/image23.png'
import img24 from '../../assets/image24.png'
import img25 from '../../assets/image25.png'
import img26 from '../../assets/image26.png'
import img27 from '../../assets/image27.png'
import img28 from '../../assets/image28.png'

import img01 from '../../assets/img1.png'
import img02 from '../../assets/img2.png'
import img03 from '../../assets/img3.png'
import img04 from '../../assets/img4.png'
import img05 from '../../assets/img5.png'
import img06 from '../../assets/img6.png'
import img07 from '../../assets/img7.png'
import img08 from '../../assets/img8.png'
import img09 from '../../assets/img9.png'
import img010 from '../../assets/img10.png'
import img011 from '../../assets/img11.png'
import img012 from '../../assets/img12.png'
import img013 from '../../assets/img13.png'
import img014 from '../../assets/img14.png'
import img015 from '../../assets/img15.png'

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
    img17, img18, img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28
];
const images1 = [
    img01, img02, img03, img04, img05, img06, img07, img08,
    img09, img010, img011, img012, img013, img014, img015,
];

export function Payment() {
    return (
        <div className="">
            <div className='items-center'>
                <h1 className="font-semibold text-2xl text-center mt-32 ">
                    Aceite as principais formas de pagamento e
                    <span className="text-green-500"> mais de 50 bandeiras</span>
                </h1>
                <div>
                    <div>
                        <div className='flex justify-center items-center gap-2 pt-4'>
                            <div className='border-t-2 w-2/5'>
                            </div>
                            <div className=''>
                                <p className='text-base pb-2 font-medium text-center'>Crédito, débito e outros</p>
                            </div>
                            <div className='border-t-2 w-2/5'>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 px-11 justify-center  ">
                            {images.map((image, index) => (
                                <div key={index} className="">
                                    <img src={image} alt={`Payment Method ${index + 1}`} />
                                </div>

                            ))}


                        </div>
                    </div>
                    <div className='pb-32'>
                        <div className='flex justify-center items-center gap-2 pt-4'>
                            <div className='border-t-2 w-2/5'>
                            </div>
                            <div className=''>
                                <p className='text-base pb-2 font-medium text-center'>Vouchers</p>
                            </div>
                            <div className='border-t-2 w-1/3'>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3  justify-center  ">
                            {images1.map((image, index) => (
                                <div key={index} className="">
                                    <img src={image} alt={`Payment Method ${index + 1}`} />
                                </div>

                            ))}


                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}
