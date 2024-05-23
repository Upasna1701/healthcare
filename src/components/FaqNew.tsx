import { MdQuestionAnswer } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import img1 from '../assets/images/acc-img.png';
import React, { useState } from 'react';
import img2 from '../assets/images/citypopup.png';


const FaqNew = () => {
    const [isOpenList, setIsOpenList] = useState([true, false, false, false, false]);
    const [openImageIndex, setOpenImageIndex] = useState(0);

    const toggleAnswer = (index: number) => {
        if (isOpenList[index]) {
            // If the clicked accordion is already open, return early
            return;
        }
        const updatedIsOpenList = isOpenList.map((value, idx) => idx === index ? !value : false);

        setIsOpenList(updatedIsOpenList);
        setOpenImageIndex(index);
    };
    return(
        <div className="pt-[93px] pb-[86px] lg:py-[88px]">
            <div className="container">
                <div className="flex justify-between items-center gap-[38px] border-b border-borderclr lg:border-0 pb-[46px]">
                    <div className="flex items-center gap-[5px]">
                        <MdQuestionAnswer className="text-cardpara text-h3font lg:text-[35px]"/>
                        <h2 className="text-cardpara text-h3font font-semibold lg:text-[38px] lg:font-semibold">FAQs</h2>
                    </div>
                    <div className="flex items-center justify-end gap-[10px]">
                        <span className="text-footerlink text-pc text-h4font">Visit our help desk</span>
                        <a href="#"><BsFillArrowRightCircleFill className="text-pc text-[21px] lg:text-pc lg:text-h2font hover:text-hoverclr"/></a>
                    </div>
                </div>

                <div className="flex items-start gap-[56px] accordion-images">
                    <div className="hidden lg:block">
                        <img src={img1} className={`max-w-[425px] w-[425px] ${openImageIndex === 0 ? '' : 'hidden'}`} />
                        <img src={img2} className={`max-w-[425px] w-[425px] ${openImageIndex === 1 ? '' : 'hidden'}`}/>
                        <img src={img1} className={`max-w-[425px] w-[425px] ${openImageIndex === 2 ? '' : 'hidden'}`}/>
                        <img src={img2} className={`max-w-[425px] w-[425px] ${openImageIndex === 3 ? '' : 'hidden'}`}/>
                        <img src={img1} className={`max-w-[425px] w-[425px] ${openImageIndex === 4 ? '' : 'hidden'}`}/>
                    </div>
                    <div className="border-t border-borderclr">
                        <div className="border-b border-borderclr">
                            <div className="py-[22px] border-b border-white cursor-pointer">
                                <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(0)}>
                                    <p className="text-cardpara font-semibold max-w-[85%]">What is Cure Value?</p>
                                    <IoIosArrowDown size={'15px'} className={`text-cardpara cursor-pointer ${isOpenList[0] ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`faq-answer ${isOpenList[0] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <img src={img1} className="pt-[15px] w-[100%] max-w-[500px] block lg:hidden" />
                                    <p className="text-cardpara font-medium pt-[22px] max-w-[90%] lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-borderclr">
                            <div className="py-[22px] border-b border-white cursor-pointer">
                                <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(1)}>
                                    <p className="text-cardpara font-semibold max-w-[85%]">What is a registered dietitian? Why should I see a dietitian?</p>
                                    <IoIosArrowDown size={'15px'} className={`text-cardpara cursor-pointer ${isOpenList[1] ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`faq-answer ${isOpenList[1] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <img src={img1} className="pt-[15px] w-[100%] max-w-[500px] block lg:hidden" />
                                    <p className="text-cardpara font-medium pt-[22px] max-w-[90%] lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-borderclr">
                            <div className="py-[22px] border-b border-white cursor-pointer">
                                <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(2)}>
                                    <p className="text-cardpara font-semibold max-w-[85%]">Are dietitians the same thing as nutritionists?</p>
                                    <IoIosArrowDown size={'15px'} className={`text-cardpara cursor-pointer ${isOpenList[2] ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`faq-answer ${isOpenList[2] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <img src={img1} className="pt-[15px] w-[100%] max-w-[500px] block lg:hidden" />
                                    <p className="text-cardpara font-medium pt-[22px] max-w-[90%] lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-borderclr">
                            <div className="py-[22px] border-b border-white cursor-pointer">
                                <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(3)}>
                                    <p className="text-cardpara font-semibold max-w-[85%]">Are dietitians the same thing as nutritionists?</p>
                                    <IoIosArrowDown size={'15px'} className={`text-cardpara cursor-pointer ${isOpenList[3] ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`faq-answer ${isOpenList[3] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <img src={img1} className="pt-[15px] w-[100%] max-w-[500px] block lg:hidden" />
                                    <p className="text-cardpara font-medium pt-[22px] max-w-[90%] lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-borderclr">
                            <div className="py-[22px] border-b border-white cursor-pointer">
                                <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(4)}>
                                    <p className="text-cardpara font-semibold max-w-[85%]">Are dietitians the same thing as nutritionists?</p>
                                    <IoIosArrowDown size={'15px'} className={`text-cardpara cursor-pointer ${isOpenList[4] ? 'rotate-180' : ''}`} />
                                </div>
                                <div className={`faq-answer ${isOpenList[4] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <img src={img1} className="pt-[15px] w-[100%] max-w-[500px] block lg:hidden" />
                                    <p className="text-cardpara font-medium pt-[22px] max-w-[90%] lg:max-w-[75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqNew;