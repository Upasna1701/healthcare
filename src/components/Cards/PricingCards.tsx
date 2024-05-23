import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import bestvalue from "../../assets/images/best-price.png";
import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PricingCards = () => {
  const navigate = useNavigate();
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          draggable: true,
          dots: true,
          prevArrow: <FaRegArrowAltCircleLeft />,
          nextArrow: <FaRegArrowAltCircleRight />,
          // adaptiveHeight:true,
        },
      },
    ],
  };

  const [openFeature, setOpenFeature] = useState(null);
  const toggleFeature = (index: any) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  const sliderRef = useRef<any>(null);
  const handlePrevClick = () => {
    setOpenFeature(null);
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    setOpenFeature(null);
    sliderRef.current.slickNext();
  };

  return (
    <div className="price-card  2xl:px-[70px] pricingcard-slider">
      <Slider {...settings} ref={sliderRef}>
        <div className="rounded-[30px] bg-white border border-[#fff] price-dtl hover:border-pc">
          <div className="border-b border-[#C0C6D980] pb-[11px] lg:pb-[47px] p-[38px] p-card">
            <div className="pricing-card flex flex-col items-center text-center">
              <h3 className="text-[20px] lg:text-[17px] text-extraclr2 font-bold uppercase pb-[11px]">
                Basic
              </h3>
              <p className="text-testimonialclr text-anchortext pb-[34px] w-[80%]">
                Orci arcu tempus lobortis aliquam quis montes turpis nam eget.
              </p>
              <p className="text-testimonialclr text-anchortext pb-[7px]">
                No subscriptions
              </p>
              <h2 className="text-[48px]/[52px] font-semibold text-extraclr3">
                $49
              </h2>
              <p className="text-testimonialclr text-anchortext pb-[23px]">
                Per Treatment
              </p>
              <button className="bg-white lg:text-[13px] text-pfont text-pc font-bold py-[12px] px-[60px] lg:px-[60px] 2xl:px-[80px] lg:py-[18px] rounded-full border border-pc hover:bg-pc hover:text-white">
                Choose package
              </button>
              <h5
                className="text-anchortext font-bold text-extraclr2 pt-[12px] pb-[10px] block lg:hidden underline underline-offset-2"
                onClick={() => toggleFeature(0)}
              >
                Features
              </h5>
            </div>
          </div>
          <div
            className={`pt-[40px] p-[38px] p-card  lg:block ${
              openFeature === 0 ? "block" : "hidden"
            }`}
          >
            <div className="pricing-card flex flex-col items-center text-center">
              <h5 className="text-smalltext font-bold text-extraclr2 pb-[10px] hidden lg:block">
                Features
              </h5>
              <ul>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Browse popular destinations and facilities </li>
                  <a href="#">
                    <span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">
                      ?
                    </span>
                  </a>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Average cost of treatment </li>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Basic access to medical facility choices </li>
                </div>
              </ul>
              <div className="mt-[38px] mb-[50px] hidden lg:block">
                <a className="flex items-center text-center  justify-center text-blueclr font-semibold text-pfont group">
                  View full feature comparison
                  <span>
                    <FaArrowDownLong className="text-blueclr text-[19px] group-hover:text-hoverclr" />{" "}
                  </span>
                </a>
              </div>
              <button className="bg-white lg:text-[13px] text-pfont text-pc font-bold py-[12px] px-[60px] lg:px-[60px] 2xl:px-[80px] lg:py-[18px] rounded-full border border-pc hover:bg-pc hover:text-white">
                Choose package
              </button>
            </div>
          </div>
          <div className="mt-[11px] mb-[18px] block lg:hidden">
            <a className="flex items-center text-center gap-[10px] justify-center text-blueclr font-semibold text-smalltext ">
              View full feature comparison
              <span>
                <FaArrowDownLong className="text-blueclr text-[15px]" />{" "}
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-[30px] bg-white border border-pc price-dtl relative">
          <img src={bestvalue} className="absolute top-[-12px] right-[-12px]" />
          <div className="border-b border-[#C0C6D980] pb-[11px] lg:pb-[47px] p-[38px] p-card">
            <div className="pricing-card flex flex-col items-center text-center">
              <h3 className="text-[20px] lg:text-[17px] text-extraclr2 font-bold uppercase pb-[11px]">
                Gold
              </h3>
              <p className="text-testimonialclr text-anchortext pb-[34px] w-[80%]">
                Orci arcu tempus lobortis aliquam quis montes turpis nam eget.
              </p>
              <p className="text-testimonialclr text-anchortext pb-[7px]">
                No subscriptions
              </p>
              <h2 className="text-[48px]/[52px] font-semibold text-extraclr3">
                $129
              </h2>
              <p className="text-testimonialclr text-anchortext pb-[23px]">
                Per Treatment
              </p>
              <button
                className="bg-white lg:text-[13px] text-pfont text-pc font-bold py-[12px] px-[60px] lg:px-[60px] 2xl:px-[80px] lg:py-[18px] rounded-full border border-pc hover:bg-pc hover:text-white"
                onClick={() => {
                  navigate("/chatform");
                }}
              >
                Choose package
              </button>
              <h5
                className="text-anchortext font-bold text-extraclr2 pt-[12px] pb-[10px] block lg:hidden underline underline-offset-2"
                onClick={() => toggleFeature(1)}
              >
                Features
              </h5>
            </div>
          </div>
          <div
            className={`pt-[40px] p-[38px] p-card  lg:block ${
              openFeature === 1 ? "block" : "hidden"
            }`}
          >
            <div className="pricing-card flex flex-col items-center text-center">
              <h5 className="text-smalltext font-bold text-extraclr2 pb-[10px] hidden lg:block">
                Features
              </h5>
              <ul>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>All features of the Basic package</li>
                  <a href="#">
                    <span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">
                      ?
                    </span>
                  </a>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Real-time travel cost calculator </li>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Advanced recommendations for medical conditions </li>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Recommendations on duration of stay and activities </li>
                  <a href="#">
                    <span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">
                      ?
                    </span>
                  </a>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Detailed weather forecast </li>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Accommodation cost calculator </li>
                </div>
              </ul>
              <div className="mt-[38px] mb-[50px] hidden lg:block">
                <a className="flex items-center text-center  justify-center text-blueclr font-semibold text-pfont group">
                  View full feature comparison
                  <span>
                    <FaArrowDownLong className="text-blueclr text-[19px] group-hover:text-hoverclr" />{" "}
                  </span>
                </a>
              </div>
              <button
                className="bg-white lg:text-[13px] text-pfont text-pc font-bold py-[12px] px-[60px] lg:px-[60px] 2xl:px-[80px] lg:py-[18px] rounded-full border border-pc hover:bg-pc hover:text-white"
                onClick={() => {
                  navigate("/chatform");
                }}
              >
                Choose package
              </button>
            </div>
          </div>
          <div className="mt-[11px] mb-[18px] block lg:hidden">
            <a className="flex items-center text-center gap-[10px] justify-center text-blueclr font-semibold text-smalltext ">
              View full feature comparison
              <span>
                <FaArrowDownLong className="text-blueclr text-[15px]" />{" "}
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-[30px] bg-white border border-[#fff] price-dtl hover:border-pc">
          <div className="border-b border-[#C0C6D980] pb-[11px] lg:pb-[47px] p-[38px] p-card">
            <div className="pricing-card flex flex-col items-center text-center">
              <h3 className="text-[20px] lg:text-[17px] text-extraclr2 font-bold uppercase pb-[11px]">
                Platinum
              </h3>
              <p className="text-testimonialclr text-anchortext pb-[34px] w-[80%]">
                Orci arcu tempus lobortis aliquam quis montes turpis nam eget.
              </p>
              <p className="text-testimonialclr text-anchortext pb-[7px]">
                No subscriptions
              </p>
              <h2 className="text-[48px]/[52px] font-semibold text-extraclr3">
                $249
              </h2>
              <p className="text-testimonialclr text-anchortext pb-[23px]">
                Per Treatment
              </p>
              <button
                className="bg-white lg:text-[13px] text-pfont text-pc font-bold py-[12px] px-[60px] lg:px-[60px] 2xl:px-[80px] lg:py-[18px] rounded-full border border-pc hover:bg-pc hover:text-white"
                onClick={() => {
                  navigate("/chatform");
                }}
              >
                Choose package
              </button>
              <h5
                className="text-anchortext font-bold text-extraclr2 pt-[12px] pb-[10px] block lg:hidden underline underline-offset-2"
                onClick={() => toggleFeature(2)}
              >
                Features
              </h5>
            </div>
          </div>
          <div
            className={`pt-[40px] p-[38px] p-card  lg:block ${
              openFeature === 2 ? "block" : "hidden"
            }`}
          >
            <div className="pricing-card flex flex-col items-center text-center">
              <h5 className="text-smalltext font-bold text-extraclr2 pb-[10px] hidden lg:block">
                Features
              </h5>
              <ul>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>All features of the Gold package </li>
                  <a href="#">
                    <span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">
                      ?
                    </span>
                  </a>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Personal agent for scheduling and reservations </li>
                </div>
                <div className="pb-[20px] flex items-start gap-[30px] justify-between">
                  <li>Comprehensive travel and medical appointment dossier </li>
                </div>
              </ul>
              <div className="mt-[38px] mb-[50px] hidden lg:block">
                <a className="flex items-center text-center  justify-center text-blueclr font-semibold text-pfont group">
                  View full feature comparison
                  <span>
                    <FaArrowDownLong className="text-blueclr text-[19px] group-hover:text-hoverclr" />{" "}
                  </span>
                </a>
              </div>
              <button
                className="bg-white lg:text-[13px] text-pfont text-pc font-bold py-[12px] px-[60px] lg:px-[60px] 2xl:px-[80px] lg:py-[18px] rounded-full border border-pc hover:bg-pc hover:text-white"
                onClick={() => {
                  navigate("/chatform");
                }}
              >
                Choose package
              </button>
            </div>
          </div>
          <div className="mt-[11px] mb-[18px] block lg:hidden">
            <a className="flex items-center text-center gap-[10px] justify-center text-blueclr font-semibold text-smalltext ">
              View full feature comparison
              <span>
                <FaArrowDownLong className="text-blueclr text-[15px]" />{" "}
              </span>
            </a>
          </div>
        </div>
      </Slider>
      <div className="slider-arrows flex lg:hidden items-center gap-[30px] pt-[20px] justify-center">
        <div className="prev-arrow" onClick={handlePrevClick}>
          <FaRegArrowAltCircleLeft className="text-iconclr2 text-[38px] cursor-pointer hover:text-hoverclr" />
        </div>
        <div className="next-arrow" onClick={handleNextClick}>
          <FaRegArrowAltCircleRight className="text-iconclr2 text-[38px] cursor-pointer hover:text-hoverclr" />
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
