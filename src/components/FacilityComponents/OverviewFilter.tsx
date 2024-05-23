
import { useEffect, useState } from "react";
import { MdOutlineSegment, MdAirlineSeatIndividualSuite } from "react-icons/md";
import { PiMedalFill } from "react-icons/pi";
import { FaStethoscope } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import React, { useRef } from "react";

const OverviewFilter = () => {
    const [isFixed, setIsFixed] = useState(false);
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
        nextArrow: <GrNext />,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                },
            }
            
        ],
      };

    useEffect(() => {
        const handleScroll = () => {
            const OverviewFilterElement = document.getElementById("overfiewfilter");
            if (!OverviewFilterElement) return; // Null check
            const filterOffset = OverviewFilterElement.offsetTop;
            const scrollTop = window.pageYOffset;
    
          setIsFixed(scrollTop > filterOffset);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return(
        <div>
            <div  id="overfiewfilter" className={`w-[100%] z-10 overview-fil  ${isFixed ? 'fixed top-[70px] bg-[#fcfcfc] pt-[30px] shadow-sm' : ''}`}>
                <div className="container">
                    {/* desktop  */}
                    <div className={`hidden lg:grid grid-cols-10 gap-[20px] w-[350%] lg:w-[100%] overflow-hidden filters ${isFixed ? 'border-0 pb-[20px]' : 'border-b border-borderclr pb-[43px]'}`}>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] text-[11px] font-semibold lg:text-smalltext lg:font-bold">Overview</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <PiMedalFill size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Accreditations</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <FaStethoscope size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Treatments</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <MdAirlineSeatIndividualSuite size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Amenities</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <IoStar size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Reviews</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Care Team</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <FaLocationDot size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Location</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Guide</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Nearby Sites</a>
                        </div>
                        <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                            <TiPlus size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                            <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold lg:text-smalltext lg:font-bold">Additional Care</a>
                        </div>
                    </div>

                    {/* mobile  */}

                    <div className="block lg:hidden pb-[43px]">
                        <div className="relative overview-slider">
                            <Slider {...settings} ref={sliderRef}>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] text-[11px] font-semibold">Overview</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <PiMedalFill size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Accreditations</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <FaStethoscope size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Treatments</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <MdAirlineSeatIndividualSuite size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Amenities</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <IoStar size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Reviews</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Care Team</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <FaLocationDot size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Location</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Guide</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <MdOutlineSegment size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Nearby Sites</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-center text-center gap-[5px] cursor-pointer group">
                                        <TiPlus size={'35px'} className="text-extraclr1 group-hover:text-pcolor"/>
                                        <a className="text-extraclr1 text-[11px] group-hover:text-pcolor group-hover:border-b group-hover:border-b-[#000000] font-semibold">Additional Care</a>
                                    </div>
                                </div>
                            </Slider>
                        
                            <div className="slider-arrows flex items-center absolute right-[-10px] top-0 bottom-0 my-auto">
                                <div className="next-arrow" onClick={handleNextClick}>
                                    <GrNext
                                        size={"20px"}
                                        className="text-iconclr2 cursor-pointer hover:text-hoverclr"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewFilter;
