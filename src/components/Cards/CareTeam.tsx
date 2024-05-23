import { IoStar, IoClose } from "react-icons/io5";
import docimg from '../../assets/images/doc-img.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";


const CareTeam=() =>{
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpenModal]);
    
    const toggleModal = (e:any) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
    };

    const sliderRef = useRef<any>(null);
    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
      };
    
      const handleNextClick = () => {
        sliderRef.current.slickNext();
      };
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <FaRegArrowAltCircleLeft />,
        nextArrow: <FaRegArrowAltCircleRight />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                },
            },
        ],
      };

    return (
        <div>
            <div className="mb-[30px] lg:mb-[52px] pb-[27px] lg:pb-[58px] border-b border-borderclr">
                <div className="flex items-center gap-[5px] pb-[16px]">
                    <IoStar className="text-iconclr text-h3font lg:text-[30px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Care Team</h2>
                </div>

                <div className="careteam-slide">
                    <Slider {...settings} ref={sliderRef}>
                        <div>
                            <div className="care-card border border-borderclr rounded-[30px] bg-white relative pt-[50px] lg:pt-[130px] mb-[30px] lg:mb-[50px] careteam-slide cursor-pointer hover:shadow-cardshadow">
                                <img src={docimg} alt="" className="pb-[23px] max-w-[113px] lg:max-w-[185px] absolute left-[30px] right-0 top-[-60px]"/>
                                <div className="p-[30px] lg:max-w-[95%]">
                                    <h2 className="text-extraclr3 text-[20px] lg:text-[19px] font-semibold pb-[8px]">Dr. Emily Smith, MD</h2>
                                    
                                    <div className="flex flex-wrap items-center gap-[10px] pb-[14px]">
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">Internal Medicine</p>
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">Cardiology</p>
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">Dentistry</p>
                                    </div>

                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">gender</h6>
                                        <p className="capitalize text-smalltext">Female</p>
                                    </div>
                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">Education & Training</h6>
                                        <p className="text-smalltext">Clarkson College of Nursing</p>
                                    </div>
                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">Board Certifications</h6>
                                        <p className="text-smalltext">Nurse Practitioner::American Academy of Nurse Practitioners</p>
                                    </div>


                                    <a href="#" className="text-pfont lg:text-smalltext  font-medium text-[#006AF5] underline underline-offset-2" onClick={(e) => toggleModal(e)}>View Profile</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="care-card border border-borderclr rounded-[30px] bg-white relative pt-[50px] lg:pt-[130px] mb-[30px] lg:mb-[50px] careteam-slide cursor-pointer hover:shadow-cardshadow">
                                <img src={docimg} alt="" className="pb-[23px] max-w-[113px] lg:max-w-[185px] absolute left-[30px] right-0 top-[-60px]"/>
                                <div className="p-[30px] lg:max-w-[95%]">
                                    <h2 className="text-extraclr3 text-[20px] lg:text-[19px] font-semibold pb-[8px]">Dr. Emily Smith, MD</h2>
                                    
                                    <div className="flex flex-wrap items-center gap-[10px] pb-[14px]">
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">Internal Medicine</p>
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">Cardiology</p>
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">Dentistry</p>
                                    </div>

                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">gender</h6>
                                        <p className="capitalize text-smalltext">Female</p>
                                    </div>
                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">Education & Training</h6>
                                        <p className="text-smalltext">Clarkson College of Nursing</p>
                                    </div>
                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">Board Certifications</h6>
                                        <p className="text-smalltext">Nurse Practitioner::American Academy of Nurse Practitioners</p>
                                    </div>


                                    <a href="#" className="text-pfont lg:text-smalltext  font-medium text-[#006AF5] underline underline-offset-2" onClick={(e) => toggleModal(e)}>View Profile</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="care-card border border-borderclr rounded-[30px] bg-white relative pt-[50px] lg:pt-[130px] mb-[30px] lg:mb-[50px] careteam-slide cursor-pointer hover:shadow-cardshadow">
                                <img src={docimg} alt="" className="pb-[23px] max-w-[113px] lg:max-w-[185px] absolute left-[30px] right-0 top-[-60px]"/>
                                <div className="p-[30px] lg:max-w-[95%]">
                                    <h2 className="text-extraclr3 text-[20px] lg:text-[19px] font-semibold pb-[8px]">Dr. Emily Smith, MD</h2>
                                    
                                    <div className="flex flex-wrap items-center gap-[10px] pb-[14px]">
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">Internal Medicine</p>
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">Cardiology</p>
                                        <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">Dentistry</p>
                                    </div>

                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">gender</h6>
                                        <p className="capitalize text-smalltext">Female</p>
                                    </div>
                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">Education & Training</h6>
                                        <p className="text-smalltext">Clarkson College of Nursing</p>
                                    </div>
                                    <div className="pb-[20px]">
                                        <h6 className="capitalize text-anchortext lg:text-smalltext font-semibold text-cardpara">Board Certifications</h6>
                                        <p className="text-smalltext">Nurse Practitioner::American Academy of Nurse Practitioners</p>
                                    </div>


                                    <a href="#" className="text-pfont lg:text-smalltext font-medium text-[#006AF5] underline underline-offset-2"  onClick={(e) => toggleModal(e)}>View Profile</a>
                                </div>
                            </div>
                        </div>


                    </Slider>

                    <div className="slider-arrows flex items-center gap-[25px] lg:gap-[45px] pl-[20px] justify-start">
                        <div className="prev-arrow" onClick={handlePrevClick}>
                        <FaRegArrowAltCircleLeft
                            className="text-extraclr1 text-[38px] lg:text-[50px] cursor-pointer hover:text-hoverclr"
                        />
                        </div>
                        <div className="next-arrow" onClick={handleNextClick}>
                        <FaRegArrowAltCircleRight
                            className="text-extraclr1 text-[38px] lg:text-[50px] cursor-pointer hover:text-hoverclr"
                        />
                        </div>
                    </div>

                </div>

            </div>


            {isOpenModal && (
                <div className='modal-hospital z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='modal-hospital-content bg-white rounded-[24px] p-[20px] lg:py-[30px] lg:pl-[50px] w-[95%] lg:w-[60%] relative'>
                        <div className='max-h-[600px] overflow-y-scroll'>
                        <div className='absolute right-[10px] top-[10px] lg:right-[36px] lg:top-[30px]'>
                            <span className='close cursor-pointer' onClick={toggleModal}><IoClose size={'40px'} className='text-black'/></span>
                        </div>
                            <div className="flex flex-col lg:flex-row lg:items-end gap-[30px] lg:gap-[60px] pb-[20px] lg:pb-[35px]">
                                <div>
                                    <img src={docimg} alt=""/>
                                </div>
                                <div>
                                    <h2 className="text-[24px] text-extraclr3 font-semibold pb-[3px]">Dr. Emily Smith, MD</h2>
                                    <div className="flex items-center gap-[10px] pb-[21px]">
                                        <p className="text-smalltext lg:text-anchortext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">Internal Medicine</p>
                                        <p className="text-smalltext lg:text-anchortext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">Cardiology</p>
                                        <p className="text-smalltext lg:text-anchortext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">Dentistry</p>
                                    </div>
                                    <div>
                                        <h6 className="capitalize text-anchortext lg:text-pfont font-semibold text-cardpara">gender</h6>
                                        <p className="capitalize">Female</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:max-w-[90%] modal-hospital">
                                <h3 className="text-[20px] font-semibold text-extraclr1 mb-[22px]">About the Doctor</h3>
                                <p className="mb-[22px] text-anchortext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                                <div className="grid lg:grid-cols-3 items-start gap-[20px] lg:gap-[40px]">
                                    <div>
                                        <h6 className="capitalize text-anchortext font-semibold text-cardpara">Languages Spoken</h6>
                                        <p className="text-anchortext">English (fluent)</p>
                                    </div>
                                    <div>
                                        <h6 className="capitalize text-anchortext font-semibold text-cardpara">Education & Training</h6>
                                        <p className="text-anchortext">Clarkson College of Nursing</p>
                                    </div>
                                    <div>
                                        <h6 className="capitalize text-anchortext font-semibold text-cardpara">Board Certifications</h6>
                                        <p className="text-anchortext">Nurse Practitioner::American Academy of Nurse Practitioners</p>
                                    </div>
                                    <div>
                                        <h6 className="capitalize text-anchortext font-semibold text-cardpara">Residencies</h6>
                                        <p className="text-anchortext">...</p>
                                    </div>
                                    <div>
                                        <h6 className="capitalize text-anchortext font-semibold text-cardpara">Medical Schools</h6>
                                        <p className="text-anchortext">...</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CareTeam;