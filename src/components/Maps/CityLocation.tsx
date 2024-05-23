import dropdownicon from '../../assets/images/dropdown.png';
import { useState } from 'react';
const CityLocation = () =>{
    const [isMapOpen, setIsMapOpen] = useState(false);

    const openMap=() =>{
        setIsMapOpen(!isMapOpen);
    }

    return(
        <div>
            <div className="rounded-[10px] lg:rounded-[30px] border border-[#c4cad3] lg:border-[#1A38601A]">
                <div className='flex items-center justify-between py-[6px] px-[17px] lg:px-[30px] lg:py-[13px]'>
                    <p className="text-sc text-h4font lg:text-[18px] font-medium">View in map</p>
                    <img src={dropdownicon} className='w-[16px] lg:w-[26px] cursor-pointer' onClick={openMap}/>
                </div>
                {isMapOpen && (   
                    <iframe className="rounded-b-[30px] h-[215px] lg:h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471112786!2d73.7805663519161!3d18.524598599901143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712216004808!5m2!1sen!2sin" width="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
            </div>

        </div>
    )
}

export default CityLocation;