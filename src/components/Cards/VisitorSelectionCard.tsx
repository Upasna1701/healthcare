import { FaBookmark } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import cityimg from "../../assets/images/city1.png";
import citymobimg from "../../assets/images/citymob.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useState, useEffect } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";
import PriceRangeSlider from "../Visitor/Affordability";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMiniInboxStack } from "react-icons/hi2";
import citypopupimg from "../../assets/images/citypopup.png";
import { useNavigate } from "react-router-dom";
import trustimg from '../../assets/images/trustmark2.png'

const VisitorSelectionCard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isopenFilter, setIsOpenFilter] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenModal]);

  const toggleModal = () => {
    // e.preventDefault();
    setIsOpenModal(!isOpenModal);
  };

  const openFilter = () => {
    setIsOpenFilter(!isopenFilter);
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
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FaRegArrowAltCircleLeft />,
    nextArrow: <FaRegArrowAltCircleRight />,
  };
  return (
    <div>
      <div className="hidden lg:flex items-center justify-between mt-[39px] pb-[44px] city-recommended">
        <div className="pl-[28px] pr-[18px] py-[10px]  rounded-[20px] w-[40%]">
          <p className="text-extraclr1 text-anchortext font-medium">Sort By</p>
          <select
            className="font-semibold text-[18px] text-cardpara bg-transparent appearance-none cursor-pointer w-[100%] selectcity"
            style={{ outline: "none", border: "none" }}
          >
            <option>Recommended</option>
            <option>Lorem Ipsum</option>
          </select>
        </div>

        <div className="flex items-center gap-[20px] signin-text">
          <FaBookmark className="cursor-pointer text-h4font text-iconclr2 lg:text-[30px]" />
          <p className="font-semibold text-sc text-[18px] ">
            <a className="text-[#0D6EFF] underline underline-offset-[2px]">
              Sign in{" "}
            </a>{" "}
            to Save your preferences
          </p>
        </div>
      </div>

      <div className="block lg:hidden pt-[35px] pb-[15px]">
        <div className="flex items-center justify-between">
          <div className="relative">
            <MdLocationSearching className="text-iconclr2 text-[24px] " />
            {/* <span className="text-h6font text-cardpara px-[7px] py-[3px] shadow-cardshadow absolute top-[-10px] left-[5px] whitespace-nowrap z-[10]">Tap to change your location</span> */}
          </div>
          <div className="flex items-center gap-[4px]" onClick={openFilter}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="mage:filter-fill">
                <path
                  id="Vector"
                  d="M22 19.3449C22 19.5438 21.921 19.7346 21.7803 19.8753C21.6397 20.0159 21.4489 20.0949 21.25 20.0949H16.15C15.983 20.7178 15.6151 21.2682 15.1034 21.6607C14.5918 22.0532 13.9649 22.266 13.32 22.266C12.6751 22.266 12.0482 22.0532 11.5366 21.6607C11.0249 21.2682 10.657 20.7178 10.49 20.0949H2.75C2.55109 20.0949 2.36032 20.0159 2.21967 19.8753C2.07902 19.7346 2 19.5438 2 19.3449C2 19.146 2.07902 18.9552 2.21967 18.8146C2.36032 18.6739 2.55109 18.5949 2.75 18.5949H10.49C10.657 17.972 11.0249 17.4217 11.5366 17.0292C12.0482 16.6366 12.6751 16.4239 13.32 16.4239C13.9649 16.4239 14.5918 16.6366 15.1034 17.0292C15.6151 17.4217 15.983 17.972 16.15 18.5949H21.25C21.4489 18.5949 21.6397 18.6739 21.7803 18.8146C21.921 18.9552 22 19.146 22 19.3449ZM22 6.13492C22 6.33383 21.921 6.5246 21.7803 6.66525C21.6397 6.8059 21.4489 6.88492 21.25 6.88492H18.8C18.633 7.5078 18.2651 8.05816 17.7534 8.45069C17.2418 8.84322 16.6149 9.05597 15.97 9.05597C15.3251 9.05597 14.6982 8.84322 14.1866 8.45069C13.6749 8.05816 13.307 7.5078 13.14 6.88492H2.75C2.65151 6.88492 2.55398 6.86552 2.46299 6.82783C2.37199 6.79014 2.28931 6.73489 2.21967 6.66525C2.15003 6.59561 2.09478 6.51293 2.05709 6.42193C2.0194 6.33094 2 6.23341 2 6.13492C2 6.03643 2.0194 5.9389 2.05709 5.84791C2.09478 5.75691 2.15003 5.67423 2.21967 5.60459C2.28931 5.53495 2.37199 5.4797 2.46299 5.44201C2.55398 5.40432 2.65151 5.38492 2.75 5.38492H13.14C13.307 4.76204 13.6749 4.21168 14.1866 3.81915C14.6982 3.42662 15.3251 3.21387 15.97 3.21387C16.6149 3.21387 17.2418 3.42662 17.7534 3.81915C18.2651 4.21168 18.633 4.76204 18.8 5.38492H21.25C21.3489 5.38358 21.447 5.40206 21.5386 5.43927C21.6302 5.47649 21.7134 5.53168 21.7833 5.60159C21.8532 5.67151 21.9084 5.75472 21.9457 5.84632C21.9829 5.93793 22.0013 6.03606 22 6.13492ZM22 12.7349C22.0013 12.8338 21.9829 12.9319 21.9457 13.0235C21.9084 13.1151 21.8532 13.1983 21.7833 13.2682C21.7134 13.3382 21.6302 13.3934 21.5386 13.4306C21.447 13.4678 21.3489 13.4863 21.25 13.4849H9.55C9.38296 14.1078 9.01509 14.6582 8.50342 15.0507C7.99176 15.4432 7.36489 15.656 6.72 15.656C6.07511 15.656 5.44824 15.4432 4.93658 15.0507C4.42491 14.6582 4.05704 14.1078 3.89 13.4849H2.75C2.55109 13.4849 2.36032 13.4059 2.21967 13.2653C2.07902 13.1246 2 12.9338 2 12.7349C2 12.536 2.07902 12.3452 2.21967 12.2046C2.36032 12.0639 2.55109 11.9849 2.75 11.9849H3.89C4.05704 11.362 4.42491 10.8117 4.93658 10.4192C5.44824 10.0266 6.07511 9.81387 6.72 9.81387C7.36489 9.81387 7.99176 10.0266 8.50342 10.4192C9.01509 10.8117 9.38296 11.362 9.55 11.9849H21.25C21.4489 11.9849 21.6397 12.0639 21.7803 12.2046C21.921 12.3452 22 12.536 22 12.7349Z"
                  fill="#333333"
                />
              </g>
            </svg>
            <p className="text-h4font font-medium text-cardpara">
              Sort & Filter
            </p>
          </div>
        </div>
      </div>

      {isopenFilter && (
        <div className="bg-white border-t border-[#000] fixed bottom-0 left-0 h-[500px] overflow-scroll z-20 w-[100%] rounded-t-[30px]">
          <div className="pt-[30px] pl-[24px] relative">
            <h2 className="pb-[30px] text-[27px] font-semibold text-cardpara">
              Filter By
            </h2>
            <div className="absolute right-[10px] top-[10px] lg:right-[36px] lg:top-[30px]">
              <span className="close cursor-pointer" onClick={openFilter}>
                <IoClose size={"40px"} className="text-black" />
              </span>
            </div>
            <div className="pb-[52px]">
              <h3 className="text-cardpara text-[20px] font-semibold pb-[21px]">
                Speciality
              </h3>
              <div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>Family Medicine with Obstetrics</label>
                </div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>Gynecologic Oncology</label>
                </div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>Gynecological Surgeon</label>
                </div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>Gynecology</label>
                </div>
              </div>
              <a className="text-blueclr font-medium">See more</a>
            </div>

            <div className="pb-[69px]">
              <h3 className="text-cardpara text-[20px] font-semibold pb-[21px]">
                Scheduling Options
              </h3>
              <div className="max-w-[70%]">
                <div className="flex items-start justify-between pb-[18px]">
                  <label className="max-w-[60%]">Accepting Patients</label>
                  <input type="checkbox" id="switch" className="switch" />
                </div>
                <div className="flex items-start justify-between pb-[18px]">
                  <label className="max-w-[60%]">Video Visits</label>
                  <input type="checkbox" id="switch" className="switch" />
                </div>
                <div className="flex items-start justify-between pb-[18px]">
                  <label className="max-w-[60%]">Online Scheduling</label>
                  <input type="checkbox" id="switch" className="switch" />
                </div>
                <div className="flex items-start justify-between pb-[18px]">
                  <label className="max-w-[60%]">
                    Post Treatment Check-ups
                  </label>
                  <input type="checkbox" id="switch" className="switch" />
                </div>
              </div>
            </div>

            <div className="pb-[59px]">
              <h3 className="text-cardpara text-[20px] font-semibold pb-[21px]">
                Affordability
              </h3>
              <div className="pb-[59px]">
                <PriceRangeSlider />
              </div>
            </div>

            <div className="pb-[45px]">
              <h3 className="text-cardpara text-[20px] font-semibold pb-[21px]">
                Language spoken
              </h3>
              <div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>English</label>
                </div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>Spanish</label>
                </div>
                <div className="flex items-start pb-[18px]">
                  <input
                    type="checkbox"
                    className="mr-[10px] w-[20px] h-[20px]"
                  />
                  <label>Chinese</label>
                </div>
              </div>
              <a className="text-blueclr font-medium">See more</a>
            </div>

            <div>
              <h3 className="text-cardpara text-[20px] font-semibold pb-[8px]">
                Patient Rating
              </h3>
              <div className="flex flex-center gap-[7px] pb-[41px]">
                <FaStar size={"35px"} className="text-[#FFD233]" />
                <FaStar size={"35px"} className="text-[#FFD233]" />
                <FaStar size={"35px"} className="text-[#FFD233]" />
                <FaStar size={"35px"} className="text-[#FFD233]" />
                <FaStar size={"35px"} className="text-borderclr" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-1 xl:flex gap-[38px] xl:gap-[20px] nesthubcity">
        <div
          className="flex flex-col lg:flex-row rounded-[30px] gap-[10px] w-[100%] xl:shadow-cardshadow citycard lg:border lg:border-borderclr"
          onClick={() => {
            navigate("/facility");
          }}
        >
          <div className=" lg:w-[300px] h-auto relative rounded-l-[30px] city-card-mac">
            <div className="desktopslider hidden lg:block h-[100%]">
              <Slider {...settings} ref={sliderRef}>
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
              </Slider>
            </div>
            <div className="mobileslider block lg:hidden">
              <Slider {...settings} ref={sliderRef}>
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
              </Slider>
            </div>
            <div className="slider-arrows flex items-center justify-between w-[90%] absolute left-0 right-0 top-0 bottom-0 m-auto">
              <div className="prev-arrow" onClick={handlePrevClick}>
                <FaRegArrowAltCircleLeft className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
              <div className="next-arrow" onClick={handleNextClick}>
                <FaRegArrowAltCircleRight className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
            </div>
          </div>
          <div className="flex justify-between py-[18px] lg:pr-[26px]">
            <div className="lg:max-w-[70%] citycard-desc">
              <h2 className="text-h4font lg:text-[22px] text-pc lg:text-sc font-semibold">
                Medical Park Hospitals Group
              </h2>
              <p className="text-anchortext text-pc lg:text-sc lg:text-[18px] font-medium secondcity">
                Istanbul
              </p>
              <div className="flex flex-wrap items-center gap-[10px] pt-[16px] xl:pt-[9px] pb-[12px]">
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">
                  Internal Medicine
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">
                  Cardiology
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">
                  Dentistry
                </p>
              </div>
              <div className="flex items-center gap-[5px] pb-[6px] lg:pb-[12px]">
                <PiMedalFill className="text-cardpara text-[35px] lg:text-[18px]" />
                <p className="font-medium text-cardpara lg:text-anchortext">
                  JCI, ISQua, ACHSI, ISO
                </p>
              </div>
              <p className="pb-[12px] text-extraclr1 hidden xl:block lg:text-anchortext">
                Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem qui nesciunt. Sjdue cjrrsj quisquam esafef.....
              </p>
              <a
                className="underline text-[#006AF5] font-medium cursor-pointer lg:text-anchortext"
                onClick={toggleModal}
              >
                View more
              </a>
            </div>
            <div className="w-[23%] xl:w-[70%] flex flex-col justify-between items-end text-right">
              {/* <IoMdInformationCircleOutline className="text-[30px] text-iconclr2" /> */}
              <div className="relative">
                <img src={trustimg} className="w-[100%] max-w-[69px]"/>
                <p className="absolute text-smalltext font-semibold text-white top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] mx-auto">100</p>
              </div>
              <div className="cardprice">
                <h2 className="text-sc text-h3font lg:text-[29px] font-bold">
                  $4500
                </h2>
                <p className="text-greyclr text-anchortext lg:text-pfont font-medium">
                  for dental implant ≈ Approx. amount
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row rounded-[30px] gap-[10px] w-[100%] xl:shadow-cardshadow citycard lg:border lg:border-borderclr"
          onClick={() => {
            navigate("/facility");
          }}
        >
          <div className=" lg:w-[300px] h-auto relative rounded-l-[30px] city-card-mac">
            <div className="desktopslider hidden lg:block h-[100%]">
              <Slider {...settings} ref={sliderRef}>
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
              </Slider>
            </div>
            <div className="mobileslider block lg:hidden">
              <Slider {...settings} ref={sliderRef}>
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
              </Slider>
            </div>
            <div className="slider-arrows flex items-center justify-between w-[90%] absolute left-0 right-0 top-0 bottom-0 m-auto">
              <div className="prev-arrow" onClick={handlePrevClick}>
                <FaRegArrowAltCircleLeft className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
              <div className="next-arrow" onClick={handleNextClick}>
                <FaRegArrowAltCircleRight className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
            </div>
          </div>
          <div className="flex justify-between py-[18px] lg:pr-[26px]">
            <div className="lg:max-w-[70%] citycard-desc">
              <h2 className="text-h4font lg:text-[22px] text-pc lg:text-sc font-semibold">
                Medical Park Hospitals Group
              </h2>
              <p className="text-anchortext text-pc lg:text-sc lg:text-[18px] font-medium secondcity">
                Istanbul
              </p>
              <div className="flex flex-wrap items-center gap-[10px] pt-[16px] xl:pt-[9px] pb-[12px]">
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">
                  Internal Medicine
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">
                  Cardiology
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">
                  Dentistry
                </p>
              </div>
              <div className="flex items-center gap-[5px] pb-[6px] lg:pb-[12px]">
                <PiMedalFill className="text-cardpara text-[35px] lg:text-[18px]" />
                <p className="font-medium text-cardpara lg:text-anchortext">
                  JCI, ISQua, ACHSI, ISO
                </p>
              </div>
              <p className="pb-[12px] text-extraclr1 hidden xl:block lg:text-anchortext">
                Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem qui nesciunt. Sjdue cjrrsj quisquam esafef.....
              </p>
              <a
                className="underline text-[#006AF5] font-medium cursor-pointer lg:text-anchortext"
                onClick={toggleModal}
              >
                View more
              </a>
            </div>
            <div className="w-[23%] xl:w-[70%] flex flex-col justify-between items-end text-right">
              {/* <IoMdInformationCircleOutline className="text-[30px] text-iconclr2" /> */}
              <div className="relative">
                <img src={trustimg} className="w-[100%] max-w-[69px]"/>
                <p className="absolute text-smalltext font-semibold text-white top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] mx-auto">92</p>
              </div>

              <div className="cardprice">
                <h2 className="text-sc text-h3font lg:text-[29px] font-bold">
                  $4500
                </h2>
                <p className="text-greyclr text-anchortext lg:text-pfont font-medium">
                  for dental implant ≈ Approx. amount
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row rounded-[30px] gap-[10px] w-[100%] xl:shadow-cardshadow citycard lg:border lg:border-borderclr"
          onClick={() => {
            navigate("/facility");
          }}
        >
          <div className=" lg:w-[300px] h-auto relative rounded-l-[30px] city-card-mac">
            <div className="desktopslider hidden lg:block h-[100%]">
              <Slider {...settings} ref={sliderRef}>
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
              </Slider>
            </div>
            <div className="mobileslider block lg:hidden">
              <Slider {...settings} ref={sliderRef}>
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
              </Slider>
            </div>
            <div className="slider-arrows flex items-center justify-between w-[90%] absolute left-0 right-0 top-0 bottom-0 m-auto">
              <div className="prev-arrow" onClick={handlePrevClick}>
                <FaRegArrowAltCircleLeft className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
              <div className="next-arrow" onClick={handleNextClick}>
                <FaRegArrowAltCircleRight className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
            </div>
          </div>
          <div className="flex justify-between py-[18px] lg:pr-[26px]">
            <div className="lg:max-w-[70%] citycard-desc">
              <h2 className="text-h4font lg:text-[22px] text-pc lg:text-sc font-semibold">
                Medical Park Hospitals Group
              </h2>
              <p className="text-anchortext text-pc lg:text-sc lg:text-[18px] font-medium secondcity">
                Istanbul
              </p>
              <div className="flex flex-wrap items-center gap-[10px] pt-[16px] xl:pt-[9px] pb-[12px]">
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">
                  Internal Medicine
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">
                  Cardiology
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">
                  Dentistry
                </p>
              </div>
              <div className="flex items-center gap-[5px] pb-[6px] lg:pb-[12px]">
                <PiMedalFill className="text-cardpara text-[35px] lg:text-[18px]" />
                <p className="font-medium text-cardpara lg:text-anchortext">
                  JCI, ISQua, ACHSI, ISO
                </p>
              </div>
              <p className="pb-[12px] text-extraclr1 hidden xl:block lg:text-anchortext">
                Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem qui nesciunt. Sjdue cjrrsj quisquam esafef.....
              </p>
              <a
                className="underline text-[#006AF5] font-medium cursor-pointer lg:text-anchortext"
                onClick={toggleModal}
              >
                View more
              </a>
            </div>
            <div className="w-[23%] xl:w-[70%] flex flex-col justify-between items-end text-right">
              {/* <IoMdInformationCircleOutline className="text-[30px] text-iconclr2" /> */}
              <div className="relative">
                <img src={trustimg} className="w-[100%] max-w-[69px]"/>
                <p className="absolute text-smalltext font-semibold text-white top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] mx-auto">100</p>
              </div>

              <div className="cardprice">
                <h2 className="text-sc text-h3font lg:text-[29px] font-bold">
                  $4500
                </h2>
                <p className="text-greyclr text-anchortext lg:text-pfont font-medium">
                  for dental implant ≈ Approx. amount
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row rounded-[30px] gap-[10px] w-[100%] xl:shadow-cardshadow citycard lg:border lg:border-borderclr"
          onClick={() => {
            navigate("/facility");
          }}
        >
          <div className=" lg:w-[300px] h-auto relative rounded-l-[30px] city-card-mac">
            <div className="desktopslider hidden lg:block h-[100%]">
              <Slider {...settings} ref={sliderRef}>
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
                <img
                  src={cityimg}
                  className="h-[100%] object-cover rounded-l-[30px]"
                />
              </Slider>
            </div>
            <div className="mobileslider block lg:hidden">
              <Slider {...settings} ref={sliderRef}>
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
                <img src={citymobimg} className="" />
              </Slider>
            </div>
            <div className="slider-arrows flex items-center justify-between w-[90%] absolute left-0 right-0 top-0 bottom-0 m-auto">
              <div className="prev-arrow" onClick={handlePrevClick}>
                <FaRegArrowAltCircleLeft className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
              <div className="next-arrow" onClick={handleNextClick}>
                <FaRegArrowAltCircleRight className="text-white cursor-pointer text-regsize hover:text-hoverclr" />
              </div>
            </div>
          </div>
          <div className="flex justify-between py-[18px] lg:pr-[26px]">
            <div className="lg:max-w-[70%] citycard-desc">
              <h2 className="text-h4font lg:text-[22px] text-pc lg:text-sc font-semibold">
                Medical Park Hospitals Group
              </h2>
              <p className="text-anchortext text-pc lg:text-sc lg:text-[18px] font-medium secondcity">
                Istanbul
              </p>
              <div className="flex flex-wrap items-center gap-[10px] pt-[16px] xl:pt-[9px] pb-[12px]">
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">
                  Internal Medicine
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">
                  Cardiology
                </p>
                <p className="text-smalltext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">
                  Dentistry
                </p>
              </div>
              <div className="flex items-center gap-[5px] pb-[6px] lg:pb-[12px]">
                <PiMedalFill className="text-cardpara text-[35px] lg:text-[18px]" />
                <p className="font-medium text-cardpara lg:text-anchortext">
                  JCI, ISQua, ACHSI, ISO
                </p>
              </div>
              <p className="pb-[12px] text-extraclr1 hidden xl:block lg:text-anchortext">
                Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem qui nesciunt. Sjdue cjrrsj quisquam esafef.....
              </p>
              <a
                className="underline text-[#006AF5] font-medium cursor-pointer lg:text-anchortext"
                onClick={toggleModal}
              >
                View more
              </a>
            </div>
            <div className="w-[23%] xl:w-[70%] flex flex-col justify-between items-end text-right">
              {/* <IoMdInformationCircleOutline className="text-[30px] text-iconclr2" /> */}
              <div className="relative">
                <img src={trustimg} className="w-[100%] max-w-[69px]"/>
                <p className="absolute text-smalltext font-semibold text-white top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] mx-auto">9</p>
              </div>

              <div className="cardprice">
                <h2 className="text-sc text-h3font lg:text-[29px] font-bold">
                  $4500
                </h2>
                <p className="text-greyclr text-anchortext lg:text-pfont font-medium">
                  for dental implant ≈ Approx. amount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto text-center pt-[57px]">
        <button className="btn bg-pc border border-pc text-white rounded-full font-anchor font-medium py-[7px] px-[27px] hover:bg-white hover:text-pc">
          Show more
        </button>
      </div>

      {isOpenModal && (
        <div className="modal-hospital z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="modal-hospital-content bg-white rounded-[24px] p-[20px] lg:py-[50px] lg:pl-[50px] w-[95%] lg:w-[60%] relative">
            <div className="max-h-[700px] overflow-y-scroll">
              <div className="absolute right-[10px] top-[10px] lg:right-[36px] lg:top-[30px]">
                <span className="close cursor-pointer" onClick={toggleModal}>
                  <IoClose size={"40px"} className="text-black" />
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-[30px] lg:gap-[80px] pb-[20px] lg:pb-[35px]">
                <div>
                  <img
                    src={citypopupimg}
                    alt=""
                    className="w-[80%] lg:w-[100%]"
                  />
                </div>
                <div>
                  <h2 className="text-h3font/[26px] lg:text-[30px]/[40px] text-sc font-semibold pb-[3px] w-[90%]">
                    Acibadem Kadikoy Hospital{" "}
                    <span className="text-h4font lg:text-h2font text-sc font-medium">
                      Istanbul
                    </span>
                  </h2>
                  <div className="flex items-center gap-[10px] pb-[21px]">
                    <p className="text-smalltext lg:text-anchortext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">
                      Internal Medicine
                    </p>
                    <p className="text-smalltext lg:text-anchortext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">
                      Cardiology
                    </p>
                    <p className="text-smalltext lg:text-anchortext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">
                      Dentistry
                    </p>
                  </div>
                  <div className="">
                    <p className="text-h3font lg:text-regsize font-bold  py-[2px] text-sc">
                      $4300{" "}
                    </p>
                    <span className="text-anchortext lg:text-h4font text-greyclr">
                      for dental implant
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:max-w-[90%]">
                <h3 className="text-[20px] font-semibold text-extraclr1 mb-[22px]">
                  About the City
                </h3>
                <p className="mb-[22px] text-anchortext lg:text-pfont">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-[20px] lg:gap-[100px] pb-[20px] lg:pb-[46px]">
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Accreditations
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">
                      JCI, ISQua, ACHSI, ISO
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Affordability
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">
                      Very affordable
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Transport
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">Uber, Bus</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Weather
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">Sunny 33° C</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-[20px] lg:gap-[100px] pb-[20px] lg:pb-[46px]">
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Language
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">
                      English, Spanish
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Internet
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">Available</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Currency
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">Uber, Bus</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 items-start gap-[20px] lg:gap-[100px]">
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Accommodations
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-[5px]">
                      <HiMiniInboxStack className="text-[24px] text-cardpara" />
                      <h6 className="capitalize text-anchortext lg:text-h3font font-semibold text-cardpara">
                        Cuisine
                      </h6>
                      <IoMdInformationCircleOutline className="text-blueclr2 text-pfont" />
                    </div>
                    <p className="font-semibold text-popupclr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorSelectionCard;
