import { MdKeyboardArrowLeft, MdEdit } from "react-icons/md";
import doctorimg from '../../assets/images/doctorimg.png'
import { FaUserLarge, FaStethoscope } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";


const ChatLeftContent = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return(
        <div className={`hidden lg:block bg-white pl-[15px] lg:pl-[28px] pt-[25px] pb-[50px] h-[100%] lg:sticky fixed bottom-0 rounded-[20px] overflow-visible z-0 min-w-[258px] max-w-[258px] left-0 shadow-cardshadow chatinfo ${showDetails ? 'hidecontentleft' : ' '}`}>
            <div className="h-[100%] relative">
                <button className={`block lg:hidden transition-300 absolute left-[250px] ${showDetails ? ' top-[50%] ' : 'top-0 bottom-0 my-auto'}`} onClick={toggleDetails}><MdKeyboardArrowRight className="text-[34px] text-iconclr3"/></button>

                {/* <div className="block lg:hidden"><MdKeyboardArrowRight onClick={toggleDetails} className="text-iconclr3 text-[36px] absolute top-0 bottom-0 left-0 my-auto"/></div> */}
                <div className='flex items-center  pb-[12px] border-b border-[#E2E8F0]' onClick={toggleDetails}>
                    <MdKeyboardArrowLeft className='text-iconclr3 text-[24px]' />
                    <h3 className='text-smalltext font-semibold text-sc'>Go Back</h3>
                </div>
                <div className='flex flex-col justify-between h-[100%] pt-[10px]'>
                    <div className="chat-facilitydetail mb-[30px]">
                        <h2 className='lg:text-pfont font-semibold text-cardpara pb-[10px]'>Procedure Details</h2>
                        <div>
                            <div className='pb-[10px]'>
                                <p className='text-cardpara text-smalltext font-semibold'>Procedure</p>
                                <p className='text-extraclr1 text-smalltext w-[90%]'>Vitae consequat </p>
                            </div>
                            <div className='pb-[10px]'>
                                <p className='text-cardpara text-smalltext font-semibold'>Treatment</p>
                                <p className='text-extraclr1 text-smalltext w-[90%]'>Interdum velit</p>
                            </div>
                            <div className='pb-[10px]'>
                                <p className='text-cardpara text-smalltext font-semibold'>Sub Treatment</p>
                                <p className='text-extraclr1 text-smalltext w-[90%]'>Lectus molestie urna sed</p>
                            </div>
                            <div className='pb-[10px]'>
                                <p className='text-cardpara text-smalltext font-semibold'>Timeframe</p>
                                <p className='text-extraclr1 text-smalltext w-[90%]'>In a month</p>
                            </div>
                            <div className='pb-[10px]'>
                                <p className='text-cardpara text-smalltext font-semibold'>City, Country</p>
                                <p className='text-extraclr1 text-smalltext w-[90%]'>Istanbul, Turkey</p>
                            </div>
                            <div className='pb-[10px]'>
                                <p className='text-cardpara text-smalltext font-semibold'>Facility</p>
                                <p className='text-extraclr1 text-smalltext w-[90%]'>Sed morbi aliquet ipsum ultrices et</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <h3 className='text-pfont font-medium text-center max-w-[50%] m-auto'>More than <span className='font-semibold'>45+ Doctors</span></h3>
                            <img src={doctorimg} alt=""className='m-auto max-w-[90%]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatLeftContent;