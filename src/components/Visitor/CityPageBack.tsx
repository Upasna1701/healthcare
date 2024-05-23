import { MdArrowBackIos, MdLocationSearching,MdEdit } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const CityPageBack = () =>{
    const [isFieldsOpen, setIsFieldsOpen] = useState(false)
        const [openFacilitiesList, setOpenFacilitiesList] = useState(null);

    const openFacilities = (formid : any) => {
        setOpenFacilitiesList(openFacilitiesList === formid ? null : formid);
    }
    const openFields = () => {
        setIsFieldsOpen(!isFieldsOpen)
    }

    return (
        <>
            <div className="hidden lg:block lg:max-w-[1800px] m-auto px-[24px] pt-[30px] pb-[24px]">
                <div className="flex items-center justify-between pt-[10px] w-[100%]">
                    <div className="flex items-center gap-[4px]  cursor-pointer">
                        <MdArrowBackIos className="text-extraclr3 text-[24px] lg:text-iconclr3 lg:text-[20px]"/>
                        <a className="text-pfont lg:text-[18px] font-medium text-sc font-sans whitespace-nowrap backbtn">See all Destinations</a>
                    </div>
                    <div className="flex items-center justify-between rounded-full border border-[#DDD] shadow-cardshadow w-[55%] citytop-form">
                        <div className="flex items-center justify-between">
                            <div className="pl-[20px] pr-[30px] py-[15px] h-[100%] bg-[#E9ECF0] flex items-center justify-center rounded-l-full w-[100px] citytoplocation-icon">
                                <FaLocationDot className="text-cardpara text-[24px]"/>
                            </div>
                            <div className="grid grid-cols-2 py-[10px]">
                                
                                <div className="relative flex items-center gap-[20px] pl-[35px] pr-[65px] border-r border-r-[#1C375A29] citytop-facility">
                                    <BiPlusMedical className="text-cardpara text-[24px]" />
                                    {/* <select className="font-semibold text-pfont text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%] " style={{ outline: 'none', border: 'none' }}>
                                        <option>Dental </option>
                                        <option>Lorem Ipsum</option>
                                    </select> */}
                                    <div className="font-semibold text-smalltext lg:text-pfont text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%]" onClick={() => openFacilities('second')}>
                                        <p>Dental</p>
                                    </div>
                                    {openFacilitiesList === 'second' && ( 
                                        <div className="bg-white shadow-boxshadow h-auto absolute  z-20 top-[38px] left-0 w-[200px] border-t-[5px] border-hoverclr rounded-b-[10px] pb-[20px]">
                                            
                                            <div className="">
                                                <ul className="pt-[20px] px-[20px] flex flex-col gap-[10px] max-h-[400px] overflow-y-scroll">
                                                    <li><a href="/about">Profile</a></li>
                                                    <li><a href="/about">Notification</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="relative flex items-center  gap-[20px] pl-[35px] citytop-faciity2">
                                    <BiPlusMedical className="text-cardpara text-[24px]" />
                                    {/* <select className="font-semibold text-pfont text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%]" style={{ outline: 'none', border: 'none' }}>
                                        <option>Dental Implants</option>
                                        <option>Lorem Ipsum</option>
                                    </select> */}
                                    <div className="font-semibold text-smalltext lg:text-pfont text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%]" onClick={() => openFacilities('first')}>
                                        <p>Dental</p>
                                    </div>
                                    {openFacilitiesList === 'first' && ( 
                                        <div className="bg-white shadow-boxshadow h-auto absolute  z-20 top-[38px] left-0 w-[200px] border-t-[5px] border-hoverclr rounded-b-[10px] pb-[20px]">
                                            
                                            <div className="">
                                                <ul className="pt-[20px] px-[20px] flex flex-col gap-[10px] max-h-[400px] overflow-y-scroll">
                                                    <li><a href="/about">Profile</a></li>
                                                    <li><a href="/about">Notification</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                    <li><a href="/about">Personal settings</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                            </div>
                        </div>
                            <div className="pr-[8px] py-[10px]">
                                <button className="bg-pc rounded-full px-[30px] py-[5px] border border-pc text-white hover:text-pc hover:bg-white">Search</button>
                            </div>
                    </div>

                    <div className=" w-[10%] 2xl:w-[8%] flex items-center gap-[10px]  border border-[#323232] rounded-full py-[18px] px-[9px] citytop-form-location">
                        <MdLocationSearching className="text-iconclr2 text-[24px] "/>
                        <input type="text" placeholder="New York" className="w-[80%] text-extraclr1 bg-transparent font-medium" style={{ outline: 'none', border: 'none' }}/>
                    </div>

                </div>
            </div>

            <div className="fixed bottom-[16px] lg:hidden w-[92%] left-0 right-0 mx-auto z-20">
                <div className={`w-[100%] flex  border border-[#DDD] bg-white shadow-cardshadow ${isFieldsOpen ? 'rounded-[30px] items-end py-[10px]' : 'rounded-full items-center'}  `}>
                    <div className=" py-[10px]">
                        <div className="pl-[35px] pr-[65px] flex items-center gap-[20px] ">
                            <BiPlusMedical className="text-cardpara text-[24px]" />
                            <select className="font-semibold text-h4font text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%] " style={{ outline: 'none', border: 'none' }}>
                                <option>Dental Work and Oral Surge..</option>
                                <option>Lorem Ipsum</option>
                            </select>
                        </div>
                        {isFieldsOpen && (
                            <>
                                <div className="pl-[35px] py-[20px] flex items-center gap-[20px]">
                                    <BiPlusMedical className="text-cardpara text-[24px]" />
                                    <select className="font-semibold text-h4font text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%]" style={{ outline: 'none', border: 'none' }}>
                                        <option>Imp..</option>
                                        <option>Lorem Ipsum</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="pr-[8px]">
                        {isFieldsOpen ? 
                            <button className="bg-pc rounded-full p-[12px]"><IoSearch className="text-white text-[21px] " onClick={openFields}/></button>
                            :
                            <button className="bg-pc rounded-full p-[12px]"><MdEdit className="text-white text-[21px] " onClick={openFields}/></button>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CityPageBack;