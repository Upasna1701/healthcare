import tripimg1 from '../../assets/images/tripimg1.png';
import tripimg2 from '../../assets/images/tripimg2.png';
import { BsThreeDotsVertical } from "react-icons/bs";

const TripCard = () => {
    return(
        <>
            <div className='w-fit pb-[40px] lg:pb-[69px]'>
                <div className='relative'>
                    <img src={tripimg1} className='w-[100%] max-w-[765px]'/>
                    <div className='absolute bottom-[17px] left-[24px]'>
                        <h2 className='text-white font-bold text-[18px]/[24px] lg:text-[24px]/[28px]'>Acibadem Kadikoy Hospital</h2>
                        <p className='text-white text-[18px]/[24px] lg:text-[24px]/[28px]'>Istanbul, Turkey</p>
                    </div>
                </div>

                <div className='pt-[29px] flex items-center justify-between px-[19px]'>
                    <div>
                        <h3 className='text-extraclr3 text-[20px] lg:text-h5font font-semibold'>Dental Implants</h3>
                        <p className='font-medium text-smalltext lg:text-cardpara'>Fri, April 12 - Thu, April 18</p>
                    </div>
                    <div>
                        <BsThreeDotsVertical className='text-extraclr3 text-[22px] lg:text-[28px] cursor-pointer'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TripCard;