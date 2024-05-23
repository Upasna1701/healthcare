import { MdQuestionAnswer } from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react';

const FAQ = () => {
    const [isOpenList, setIsOpenList] = useState([true, false, false, false, false, false]);

    const toggleAnswer = (index: number) => {
        const updatedIsOpenList = isOpenList.map((value, idx) => idx === index ? !value : false);

        if (index !== 0) {
            updatedIsOpenList[0] = false;
        }

        setIsOpenList(updatedIsOpenList);
    };

    return (
        <div className="container pt-[77px] lg:pt-[200px] lg:pb-[112px]">
            <div className="flex  justify-between lg:grid lg:grid-cols-2 gap-[38px] border-b border-borderclr lg:border-0">
                <div className="flex items-center gap-[5px] pb-[16px] pb-[16px] lg:border-b border-borderclr">
                    <MdQuestionAnswer className="text-iconclr text-h3font lg:text-[35px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[30px] lg:font-bold">FAQs</h2>
                </div>
                <div className="flex items-center justify-end gap-[10px] pb-[16px] pb-[16px] lg:border-b border-borderclr">
                    <span className="text-footerlink">Visit our help desk</span>
                    <a href="#"><BsFillArrowRightCircleFill className="text-pc text-[21px] lg:text-iconclr lg:text-[35px] hover:text-hoverclr"/></a>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-[38px]">
                <div>
                    <div>
                        <div className="py-[22px] border-b border-borderclr cursor-pointer">
                            <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(0)}>
                                <p className="text-footerlink font-semibold max-w-[85%]">What is Cure Value?</p>
                                <IoIosArrowDown size={'15px'} className={`text-faqicon cursor-pointer ${isOpenList[0] ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`faq-answer ${isOpenList[0] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-footerlink font-medium pt-[22px] max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-[22px] border-b border-borderclr cursor-pointer">
                            <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(1)}>
                                <p className="text-footerlink font-semibold max-w-[85%]">What is a registered dietitian? Why should I see a dietitian?</p>
                                <IoIosArrowDown size={'15px'} className={`text-faqicon cursor-pointer ${isOpenList[1] ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`faq-answer ${isOpenList[1] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-footerlink font-medium pt-[22px] max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-[22px] border-b border-borderclr cursor-pointer">
                            <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(2)}>
                                <p className="text-footerlink font-semibold max-w-[85%]">Are dietitians the same thing as nutritionists?</p>
                                <IoIosArrowDown size={'15px'} className={`text-faqicon cursor-pointer ${isOpenList[2] ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`faq-answer ${isOpenList[2] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-footerlink font-medium pt-[22px] max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="py-[22px] border-b border-borderclr cursor-pointer">
                            <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(3)}>
                                <p className="text-footerlink font-semibold max-w-[85%]">Will my insurance cover my sessions?</p>
                                <IoIosArrowDown size={'15px'} className={`text-faqicon cursor-pointer ${isOpenList[3] ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`faq-answer ${isOpenList[3] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-footerlink font-medium pt-[22px] max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-[22px] border-b border-borderclr cursor-pointer">
                            <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(4)}>
                                <p className="text-footerlink font-semibold max-w-[85%]">How many appointments will I need?</p>
                                <IoIosArrowDown size={'15px'} className={`text-faqicon cursor-pointer ${isOpenList[4] ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`faq-answer ${isOpenList[4] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-footerlink font-medium pt-[22px] max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-[22px] border-b border-borderclr cursor-pointer">
                            <div className="faq-question relative flex items-center justify-between" onClick={() => toggleAnswer(5)}>
                                <p className="text-footerlink font-semibold max-w-[85%]">Do providers at CureValue work with children?</p>
                                <IoIosArrowDown size={'15px'} className={`text-faqicon cursor-pointer ${isOpenList[5] ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`faq-answer ${isOpenList[5] ? 'open opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-footerlink font-medium pt-[22px] max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
