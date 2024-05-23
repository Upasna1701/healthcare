

import FacilityInnerCards from "../Cards/FacilityInnerCards";
import PageBack from "../FacilityComponents/Pageback";
import FacilityTitle from "../FacilityComponents/FacilityTitle";
import OverviewFilter from "../FacilityComponents/OverviewFilter";
import SavingsCalculator from "../Cards/Savingscalculator";
import AmenitiesCard from "../Cards/AmenitiesCard";
import AmbienceCard from "../Cards/AmbienceCard";
import TreatmentsCard from "../Cards/TreatmentsCard";
import ReviewCard from "../Cards/ReviewCard";
import FAQ from "../FAQ";
import FacilityLocation from "../Maps/FacilityLocation";
import HospitalGallery from "../FacilityComponents/HospitalGallery";
import SavingsMobile from "../Cards/SavingsMobile";
import CareTeam from "../Cards/CareTeam";
import Header from "../Header";
import Footer from "../Footer";
import FaqNew from "../FaqNew";
import FacilityCard from "../Cards/FacilityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoStar, IoClose } from "react-icons/io5";
import BeforeLogin from "../BeforeLogin";


const FacilityPage = () => {
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


      const [isBeforeLogin, setIsBeforeLogin] = useState(true); // Set this to true/false based on whether BeforeLogin component is rendered

    const appClasses = isBeforeLogin ? "app-container no-scroll" : "app-container";





    return ( 
        <>
            <Header/>
            <div className={appClasses}>
            {/* <div> */}
                <BeforeLogin />
                <div className="w-[100%] fac-page pt-[70px] lg:pt-[80px]">
                    <PageBack/>
                    <div className="flex lg:flex-col flex-col-reverse">
                        <FacilityTitle/>
                        <HospitalGallery/>
                    </div>
                    <OverviewFilter/>
                    <div className="container flex items-start justify-between lg:pt-[52px] mb-[50px] facilitydetail-ipad">
                        <div className="lg:max-w-[65%] overflow-hidden">
                            <FacilityInnerCards/>
                            <FacilityInnerCards/>
                            <AmbienceCard/>
                            <TreatmentsCard />
                            <AmenitiesCard/>
                            <CareTeam/>
                            <div className="mb-[30px] lg:mb-[52px] pb-[27px] lg:pb-[58px] border-b border-borderclr">
                                <div className="flex items-center gap-[5px] pb-[16px]">
                                    <IoStar className="text-iconclr text-h3font lg:text-[30px]"/>
                                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Facilities with similar treatments</h2>
                                </div>

                                <div className="careteam-slide">
                                    <Slider {...settings} ref={sliderRef}>
                                        <div>
                                            <FacilityCard/>
                                        </div>

                                        <div>
                                        <FacilityCard/>

                                        </div>

                                        <div>
                                        <FacilityCard/>

                                        </div>


                                    </Slider>

                                    {/* <div className="slider-arrows flex items-center gap-[25px] lg:gap-[45px] pl-[20px] justify-start">
                                        <div className="prev-arrow" onClick={handlePrevClick}>
                                        <FaRegArrowAltCircleLeft
                                            className="text-extraclr1 text-[38px] lg:text-[50px] cursor-pointer"
                                        />
                                        </div>
                                        <div className="next-arrow" onClick={handleNextClick}>
                                        <FaRegArrowAltCircleRight
                                            className="text-extraclr1 text-[38px] lg:text-[50px] cursor-pointer"
                                        />
                                        </div>
                                    </div> */}

                                </div>

                            </div>

                        </div>
                        <div className="filter-rightside hidden lg:block lg:sticky md:top-[50px] lg:top-[190px]">
                            <SavingsCalculator/>
                        </div>
                    </div>
                    <FacilityLocation/> 
                    <FaqNew />
                    <SavingsMobile/>
                    <Footer/>
                    {/* <BeforeLogin/> */}
                </div>
            </div>
        </>
    );
}
export default FacilityPage;