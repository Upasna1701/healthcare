import React from "react";
import { IoClose } from "react-icons/io5";
import cardimg from '../assets/images/destination-img1.png';
import { HiMiniInboxStack } from "react-icons/hi2";
import { IoMdInformationCircleOutline } from "react-icons/io";



 
const PopupCard = ({setIsOpenModal}:any) => {
    const toggleModal = () => {
        // e.preventDefault();
        setIsOpenModal();
    };
 
  return (
    <>
      <div className='modal-hospital z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
        <div className='modal-hospital-content bg-white rounded-[24px] p-[20px] lg:py-[50px] lg:pl-[50px] w-[95%] lg:w-[60%] relative'>
            <div className='max-h-[700px] overflow-y-scroll'>
            <div className='absolute right-[10px] top-[10px] lg:right-[36px] lg:top-[30px]'>
                <span className='close cursor-pointer' onClick={toggleModal}><IoClose size={'40px'} className='text-black'/></span>
            </div>
                <div className="flex flex-col lg:flex-row lg:items-end gap-[30px] lg:gap-[80px] pb-[20px] lg:pb-[35px]">
                    <div>
                        <img src={cardimg} alt="" className="w-[80%] lg:w-[100%]"/>
                    </div>
                    <div>
                        <h2 className="text-h3font/[26px] lg:text-[38px]/[40px] text-sc font-semibold pb-[3px] w-[80%]">New Delhi, <span className="text-h4font lg:text-[29px] text-sc font-medium">India</span></h2>
                        <div className="flex items-center gap-[10px] lg:pb-[37px]">
                            <p className="text-h3font lg:text-[37px] font-bold  py-[2px] text-sc">$1200 <span className="underline text-h4font lg:text-h5font text-popupclr">for treatment</span></p>
                        </div>
                    </div>
                </div>

                <div className="lg:max-w-[90%]">
                    <h3 className="text-[20px] font-semibold text-extraclr1 mb-[22px]">About the City</h3>
                    <p className="mb-[22px] text-anchortext lg:text-pfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-[20px] lg:gap-[100px] pb-[20px] lg:pb-[46px]">
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Visas</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Yes</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Affordability</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Very affordable</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Transport</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Uber, Bus</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Weather</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Sunny 33° C</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-[20px] lg:gap-[100px] pb-[20px] lg:pb-[46px]">
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Language</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">English, Spanish</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Internet</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Available</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Currency</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Uber, Bus</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 items-start gap-[20px] lg:gap-[100px]">

                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Accommodations</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-[5px]">
                                <HiMiniInboxStack className="text-[24px] text-cardpara"/>
                                <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">Cuisine</h6>
                                <IoMdInformationCircleOutline className="text-blueclr2 text-pfont"/>
                            </div>
                            <p className="font-semibold text-popupclr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        
                    </div>

                </div>


            </div>
        </div>
    </div>
    </>
  );
};
 
export default PopupCard;