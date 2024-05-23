import testimonialimg from '../assets/images/testimonial1.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const Testimonials = () =>{

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
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <MdKeyboardArrowLeft />,
        nextArrow: <MdKeyboardArrowRight />,
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

    return(
        <div className="bg-[#F5F7FA] lg:rounded-[30px] py-[62px] lg:py-[36px] px-[30px] lg:px-[70px] 2xl:px-[107px] testimonial-slider relative shadow-greyshadow">
            <Slider {...settings} ref={sliderRef}>
                <div>
                    <div className='flex flex-col justify-between items-center gap-[32px]'>
                        <div className="bg-white rounded-[30px] pt-[20px] pb-[50px] lg:py-[20px] px-[30px] lg:px-[35px] 2xl:px-[46px] text-center flex flex-col gap-[30px] items-center lg:min-h-[200px] 2xl:min-h-[250px] test-card">
                            <p className="text-[15px] text-testimonialclr">"As a non-technical product manager, Appcues has really given me super powers."</p>
                            <p className="text-smalltext text-testimonialclr"><span className="font-bold text-extraclr2">Neel Desai,</span> Product Manager</p>
                        </div>
                        <div>
                            <img src={testimonialimg} className='w-[70px]'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-between items-center gap-[32px]'>
                        <div className="bg-white rounded-[30px] pt-[20px] pb-[50px] lg:py-[20px] px-[30px] lg:px-[35px] 2xl:px-[46px] text-center flex flex-col gap-[30px] items-center lg:min-h-[200px] 2xl:min-h-[250px] test-card">
                            <p className="text-[15px] text-testimonialclr">"As a non-technical product manager, Appcues has really given me super powers."</p>
                            <p className="text-smalltext text-testimonialclr"><span className="font-bold text-extraclr2">Neel Desai,</span> Product Manager</p>
                        </div>
                        <div>
                            <img src={testimonialimg} className='w-[70px]'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-between items-center gap-[32px]'>
                        <div className="bg-white rounded-[30px] pt-[20px] pb-[50px] lg:py-[20px] px-[30px] lg:px-[35px] 2xl:px-[46px] text-center flex flex-col gap-[30px] items-center lg:min-h-[200px] 2xl:min-h-[250px] test-card">
                            <p className="text-[15px] text-testimonialclr">"As a non-technical product manager, Appcues has really given me super powers."</p>
                            <p className="text-smalltext text-testimonialclr"><span className="font-bold text-extraclr2">Neel Desai,</span> Product Manager</p>
                        </div>
                        <div>
                            <img src={testimonialimg} className='w-[70px]'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-between items-center gap-[32px]'>
                        <div className="bg-white rounded-[30px] pt-[20px] pb-[50px] lg:py-[20px] px-[30px] lg:px-[35px] 2xl:px-[46px] text-center flex flex-col gap-[30px] items-center lg:min-h-[200px] 2xl:min-h-[250px] test-card">
                            <p className="text-[15px] text-testimonialclr">"As a non-technical product manager, Appcues has really given me super powers."</p>
                            <p className="text-smalltext text-testimonialclr"><span className="font-bold text-extraclr2">Neel Desai,</span> Product Manager</p>
                        </div>
                        <div>
                            <img src={testimonialimg} className='w-[70px]'/>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="slider-arrows flex items-center justify-between w-[100%] lg:w-[95%] absolute left-0 right-0 top-0 bottom-0 m-auto">
                <div className="prev-arrow" onClick={handlePrevClick}>
                    <MdKeyboardArrowLeft
                        size={"45px"}
                        className="text-iconclr2 cursor-pointer hover:text-hoverclr"
                    />
                </div>
                <div className="next-arrow" onClick={handleNextClick}>
                <MdKeyboardArrowRight
                    size={"45px"}
                    className="text-iconclr2 cursor-pointer hover:text-hoverclr"
                />
                </div>
            </div>

        </div>
    )
}

export default Testimonials;