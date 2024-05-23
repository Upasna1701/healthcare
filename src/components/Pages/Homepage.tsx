import React, { useRef, useState } from "react";
import Header from "../Header";
import Banner from "../Banner";
import Destinationcard from "../Cards/Destinationcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Footer from "../Footer";
import CitySliderTitle from "../CitySliderTitle";
import FaqNew from "../FaqNew";
import FacilityCard from "../Cards/FacilityCard";
import CustomerStories from "../CustomerStories";
import vector1 from '../../assets/images/aeroplane-vector.png';
import vector2 from '../../assets/images/home-vector2.png';
import vector3 from '../../assets/images/homevector-cropped.png';
import PopularTreatments from "../Cards/PopularTreatments";
import BuildingCommunity from "../BuildingCommunity";
import ClientLogos from "../ClientLogos";

const Homepage = () => {
  const [isOpenModal, setIsOpenModal] = useState<any>(false);
  const sliderRef = useRef<any>(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };
  const handleViewMore = () => {
    setIsOpenModal(!isOpenModal)
  };

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: <FaRegArrowAltCircleLeft />,
    nextArrow: <FaRegArrowAltCircleRight />,
    responsive: [
        {
          breakpoint: 1500,
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
  return (
    <>
      <Header />
      <Banner />
        <div className=" pt-[230px] pb-[130px] lg:pb-[70px] mt-[-170px]">
          <PopularTreatments/>
        </div>
        <div className="relative cityselection-cards">
          <div className="citysliders relative">
            <img src={vector3} className="absolute w-[130px] top-[-12%] left-[0] lg:top-[-30%] lg:left-[0] lg:w-[320px] z-0 stathoscope1"/>
            <div className="overflow-hidden pb-[62px]">
              <div className="pt-[56px] px-[24px] lg:px-[107px] dest-card">
                <div className="flex flex-col lg:flex-row lg:items-center gap-[25px] lg:gap-[80px]">
                  <div className="w-[100%] lg:w-[40%]">
                      <CitySliderTitle/>
                  </div>
                  <div className="w-[100%] lg:w-[60%]">
                    <div className="destination-slider">
                      <Slider {...settings} ref={sliderRef}>  
                        <div>
                          <Destinationcard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                        </div>
                        <div>
                          <Destinationcard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                        </div>
                        <div>
                          <Destinationcard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                        </div>
                        <div>
                          <Destinationcard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                        </div>
                      </Slider>
                    </div>
                    <div className="slider-arrows flex items-center gap-[25px] 2xl:gap-[45px] pl-[20px] justify-start pt-[20px] 2xl:pt-[30px]">
                            <div className="prev-arrow" onClick={handlePrevClick}>
                            <FaRegArrowAltCircleLeft
                                className="text-cardpara text-[38px] 2xl:text-[50px] cursor-pointer hover:text-hoverclr"
                            />
                            </div>
                            <div className="next-arrow" onClick={handleNextClick}>
                            <FaRegArrowAltCircleRight
                                className="text-cardpara text-[38px] 2xl:text-[50px] cursor-pointer hover:text-hoverclr"
                            />
                            </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="citysliders relative">
            <img src={vector1} className="absolute w-[300px] top-[-26%] left-[-29%] lg:top-[-36%] lg:left-[0] lg:w-[450px] z-0 stathoscope2 hidden lg:block"/>
            <div className="overflow-hidden pb-[62px]">
              <div className="pt-[56px] px-[24px] lg:px-[107px] dest-card">
                <div className="flex flex-col lg:flex-row lg:items-center gap-[25px] lg:gap-[80px]">
                  <div className="w-[100%] lg:w-[40%]">
                      <CitySliderTitle/>
                  </div>
                  <div className="w-[100%] lg:w-[60%]">
                    <div className="destination-slider">
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
                        <div>
                          <FacilityCard/>
                        </div>
                      </Slider>
                    </div>
                    <div className="slider-arrows flex items-center gap-[25px] 2xl:gap-[45px] pl-[20px] justify-start pt-[20px] 2xl:pt-[30px]">
                            <div className="prev-arrow" onClick={handlePrevClick}>
                            <FaRegArrowAltCircleLeft
                                className="text-cardpara text-[38px] 2xl:text-[50px] cursor-pointer hover:text-hoverclr"
                            />
                            </div>
                            <div className="next-arrow" onClick={handleNextClick}>
                            <FaRegArrowAltCircleRight
                                className="text-cardpara text-[38px] 2xl:text-[50px] cursor-pointer hover:text-hoverclr"
                            />
                            </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <CustomerStories/>
        </div>


      <ClientLogos/>
      <BuildingCommunity />
      <Footer />
    </>
  );
};

export default Homepage;