import logo1 from '../assets/images/logo1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, {useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const ClientLogos = () => {

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
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        prevArrow: <MdKeyboardArrowLeft />,
        nextArrow: <MdKeyboardArrowRight />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                },
            },
        ],
      };


    return(
        <div>
            <div className="pt-[93px] pb-[50px] overflow-hidden">
                <div className="mb-[48px] text-center lg:max-w-[60%] mx-auto px-[24px]">
                    <h2 className="text-cardpara text-h2font lg:text-[38px] font-semibold mb-[10px]">Facilities</h2>
                    <p className="font-medium text-anchortext lg:text-pfont">Tempus consequat quam tincidunt lobortis odio convallis id quam ac. Placerat commodo nunc mauris bibendum interdum arcu amet mauris scelerisque.</p>
                </div>
                <div className='facilitylogos relative'>
                    <Slider {...settings} ref={sliderRef}>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                        <div className='py-[40px] px-[50px] lg:py-[66px] lg:px-[80px] rounded-[16px] bg-[#F3F5F7]'>
                            <img src={logo1} className='w-[100%]'/>
                        </div>
                    </Slider>

                    <div className="slider-arrows flex items-center justify-between w-[80%] absolute left-0 right-0 top-0 bottom-0 m-auto z-10">
                        <div className="prev-arrow" onClick={handlePrevClick}>
                            <MdKeyboardArrowLeft
                                size={"45px"}
                                className="text-pcolor cursor-pointer hover:text-hoverclr"
                            />
                        </div>
                        <div className="next-arrow" onClick={handleNextClick}>
                        <MdKeyboardArrowRight
                            size={"45px"}
                            className="text-pcolor cursor-pointer hover:text-hoverclr"
                        />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ClientLogos;