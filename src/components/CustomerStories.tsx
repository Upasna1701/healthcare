import doctor from '../assets/images/Patient-resources.png'
import doctormob from '../assets/images/Patient-resources-mob.png'
import Stories from './Cards/Stories';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useState } from "react";
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa";

const CustomerStories = () =>{

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: <FaRegArrowAltCircleLeft />,
        nextArrow: <FaRegArrowAltCircleRight />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1,
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              }
            }
        ],
    };

    const sliderRef = useRef<any>(null);

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };


    return(
        <div className='overflow-hidden '>
            <div className='lg:grid lg:grid-cols-2 h-[100%] gap-[60px] bg-[#F5F7FA] relative '>
                <div>
                    <div className='block lg:hidden px-[24px] pt-[47px] pb-[21px]'>
                        <h2 className='text-[30px]/[35px] text-black max-w-[50%] pb-[15px] font-semibold'>More than ever</h2>
                        <p className='text-h4font font-medium max-w-[100%]'>Tempus semper sit sed tellus pretium euismod elementum ut vel. Volutpat leo odio sit eget. In facilisi in commodo aliquam. Mauris pellentesque commodo.</p>
                    </div>
                    <div className='h-[100%]'>
                        <img src={doctor} className='2xl:w-[900px] lg:w-[730px] h-[100%] customer-docimg hidden lg:block'/>
                        <img src={doctormob} className=' customer-docimg block lg:hidden w-[100%]'/>
                    </div>
                </div>
                <div className='lg:pt-[60px] pb-[67px] lg:pb-[30px]'>
                    <div className='hidden lg:block customertext'>
                        <h2 className='text-[38px]/[45px] text-black lg:max-w-[70%] pb-[21px] font-semibold'>Egestas pretium pretium elementum</h2>
                        <p className='lg:text-h3font font-medium max-w-[80%]'>Tempus semper sit sed tellus pretium euismod elementum ut vel. Volutpat leo odio sit eget. In facilisi in commodo aliquam. Mauris pellentesque commodo.</p>
                    </div>
                    <div>
                        <div className='mt-[-20%] ml-[-10%] lg:mt-[0] lg:ml-[-150%] md:ml-[-90%]'>
                            <div className='stories-slider lg:pt-[53px] '>
                                <Slider {...settings} ref={sliderRef}>
                                    <div>
                                        <Stories/>
                                    </div>
                                    <div>
                                        <Stories/>
                                    </div>
                                    <div>
                                        <Stories/>
                                    </div>
                                    <div>
                                        <Stories/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="slider-arrows flex items-center gap-[25px] 2xl:gap-[45px] pl-[20px] justify-start pt-[34px] lg:pt-[20px] 2xl:pt-[30px]">
                            <div className="prev-arrow" onClick={handlePrevClick}>
                                <FaRegArrowAltCircleLeft className="text-cardpara text-[38px] 2xl:text-[50px] cursor-pointer hover:text-hoverclr" />
                            </div>
                            <div className="next-arrow" onClick={handleNextClick}>
                                <FaRegArrowAltCircleRight className="text-cardpara text-[38px] 2xl:text-[50px] cursor-pointer hover:text-hoverclr" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerStories;