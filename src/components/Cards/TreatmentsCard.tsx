import { FaStethoscope, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import treatmentimg from '../../assets/images/Treatment.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef } from "react";
import { GrNext } from "react-icons/gr";


const TreatmentsCard = () => {
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
                    <FaStethoscope className="text-iconclr text-h3font lg:text-[30px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Treatments</h2>
                </div>

                <div className="treatment-slider">
                    <Slider {...settings} ref={sliderRef}>
                        <div>
                            <div className="hover:shadow-cardshadow cursor-pointer border border-borderclr rounded-[30px] bg-white relative pt-[50px] lg:pt-[130px] mb-[30px] lg:mb-[50px] treatment-slide">
                                <img src={treatmentimg} alt="" className="w-[90%] pb-[23px] m-auto absolute left-0 right-0 top-[-110px]"/>
                                <div className="p-[30px]">
                                    <h2 className="text-extraclr3 text-[21px] font-semibold">Dental Implants</h2>
                                    <p className="text-underline text-h6font underline underline-offset-2 font-semibold text-cardpara">Specialises in consectetu adipi</p>
                                    <p className="font-medium text-cardpara text-anchortext py-[9px]">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                    <a href="#" className="text-[19px] font-semibold text-cardpara underline underline-offset-2 flex items-center gap-[5px]">Know more
                                    <GrNext className="text-anchortext text-cardpara"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="hover:shadow-cardshadow cursor-pointer border border-borderclr rounded-[30px] bg-white relative pt-[50px] lg:pt-[130px] mb-[30px] lg:mb-[50px] treatment-slide">
                                <img src={treatmentimg} alt="" className="w-[90%] pb-[23px] m-auto absolute left-0 right-0 top-[-110px]"/>
                                <div className="p-[30px]">
                                    <h2 className="text-extraclr3 text-[21px] font-semibold">Dental Implants</h2>
                                    <p className="text-underline text-h6font underline underline-offset-2 font-semibold text-cardpara">Specialises in consectetu adipi</p>
                                    <p className="font-medium text-cardpara text-anchortext py-[9px]">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                    <a href="#" className="text-[19px] font-semibold text-cardpara underline underline-offset-2 flex items-center gap-[5px]">Know more
                                    <GrNext className="text-anchortext text-cardpara"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="hover:shadow-cardshadow cursor-pointer border border-borderclr rounded-[30px] bg-white relative pt-[50px] lg:pt-[130px] mb-[30px] lg:mb-[50px] treatment-slide">
                                <img src={treatmentimg} alt="" className="w-[90%] pb-[23px] m-auto absolute left-0 right-0 top-[-110px]"/>
                                <div className="p-[30px]">
                                    <h2 className="text-extraclr3 text-[21px] font-semibold">Dental Implants</h2>
                                    <p className="text-underline text-h6font underline underline-offset-2 font-semibold text-cardpara">Specialises in consectetu adipi</p>
                                    <p className="font-medium text-cardpara text-anchortext py-[9px]">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                    <a href="#" className="text-[19px] font-semibold text-cardpara underline underline-offset-2 flex items-center gap-[5px]">Know more
                                    <GrNext className="text-anchortext text-cardpara"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
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
    )
}

export default TreatmentsCard;