import React, { useRef,useState, useEffect } from "react";
import DestinationCard from "../Cards/Destinationcard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import PopUpCard from "../PopUpCard";
import { IoClose } from "react-icons/io5";
import docimg from '../../assets/images/doc-img.png';



import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import CitySliderTitle from "../CitySliderTitle";
import PopUpCard from "../PopUpCard";
import PopupCard from "../PopUpCard";
import FAQ from "../FAQ";
import Header from "../Header";
import Footer from "../Footer";
import FaqNew from "../FaqNew";
import CustomMap from "../Maps/CustomMap";


const VisitorCitySelection = () => {
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
    
    <div className="pt-[70px] lg:pt-[80px]">
      <div className="container">
        <CustomMap/>
      </div>
        {isOpenModal && (   
            <PopupCard setIsOpenModal={handleViewMore}/>
      )} 
      <div className="cityselection-cards">
        <div className="overflow-hidden pb-[62px] citysliders">
          <div className="pt-[56px] px-[24px] lg:px-[107px] dest-card">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[25px] lg:gap-[80px]">
              <div className="w-[100%] lg:w-[40%]">
                  <CitySliderTitle/>
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <div className="destination-slider">
                  <Slider {...settings} ref={sliderRef}>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
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
        <div className="overflow-hidden pb-[62px] citysliders">
          <div className="pt-[56px] px-[24px] lg:px-[107px] dest-card">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[25px] lg:gap-[80px]">
              <div className="w-[100%] lg:w-[40%]">
                  <CitySliderTitle/>
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <div className="destination-slider">
                  <Slider {...settings} ref={sliderRef}>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
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
        <div className="overflow-hidden pb-[62px] citysliders">
          <div className="pt-[56px] px-[24px] lg:px-[107px] dest-card">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[25px] lg:gap-[80px]">
              <div className="w-[100%] lg:w-[40%]">
                  <CitySliderTitle/>
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <div className="destination-slider">
                  <Slider {...settings} ref={sliderRef}>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
                    </div>
                    <div>
                      <DestinationCard isOpenModal={isOpenModal} setIsOpenModal={handleViewMore}/>
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

      

      <FaqNew />
      <Footer />
      
    </div>
    </>
  );
};

export default VisitorCitySelection;