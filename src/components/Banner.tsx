import bannerimg from "../assets/images/banner-full.png";
import bannermob from "../assets/images/bannermob-full.png";
import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [openFacilitiesList, setOpenFacilitiesList] = useState(false);
  const navigate = useNavigate();

  const openFacilities = () => {
    setOpenFacilitiesList(!openFacilitiesList);
  };

  return (
    <div className="relative overflow-hidden bg-[#F5F7FA] pt-[70px] lg:pt-[80px]">
      <div className="desktop relative">
        <img
          src={bannerimg}
          className="w-[100%] 2xl:h-[800px] hidden lg:block"
        />
        <img src={bannermob} className="w-[100%] lg:hidden block" />
        <div className="text-white absolute bottom-[60px] left-[24px] lg:bottom-[52px] lg:left-[87px] lg:max-w-[50%] max-w-[80%] banner-text">
          <h2 className="font-semibold text-[30px] lg:text-h1font pb-[11px]">
            More than ever
          </h2>
          <p className="text-anchortext lg:text-[20px] font-medium pb-[24px]">
            More than ever, our communities need compassion and caring, and our
            families need support. At CommonSpirit Health®, we are committed to
            building healthier communities.
          </p>
        </div>



        {/* <div className="absolute top-[50%] translate-y-[-50%] bottom-0 my-auto right-[100px] p-[10px] rounded-[16px] bg-[#ffffff45] h-fit">
          <div className="min-w-[375px] rounded-[16px] bg-white">
            <div className="px-[10px] lg:px-[20px] gap-[10px] lg:gap-[12px] py-[10px] lg:py-[20px]  bg-[#E9ECF0] flex items-center rounded-t-[16px]">
              <FaLocationDot className="text-cardpara text-[18px] lg:text-[24px]" />
              <p className="text-cardpara font-medium text-smalltext lg:text-pfont whitespace-nowrap">
                I am looking for
              </p>
            </div>
            <div className="bg-white px-[10px] pb-[15px] rounded-b-[16px]">
              <div className="mb-[15px]">
                  <div className="relative bg-white flex items-center gap-[10px] lg:py-[20px] lg:gap-[20px] pl-[10px] lg:pl-[10px]">
                    <BiPlusMedical className="text-cardpara text-[18px] lg:text-[24px]" />
                    <div
                      className="font-semibold text-smalltext lg:text-pfont text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%]"
                      onClick={openFacilities}
                    >
                      <p>Dental</p>
                    </div>
                    {openFacilitiesList && (
                      <div className="bg-white shadow-boxshadow h-auto absolute  z-20 top-[60px] left-0 w-[100%] border-t-[5px] border-hoverclr rounded-b-[10px] pb-[20px]">
                        <div className="">
                          <ul className="pt-[20px] px-[20px] flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
                            <li>
                              <a href="/about">Profile</a>
                            </li>
                            <li>
                              <a href="/about">Notification</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                            <li>
                              <a href="/about">Personal settings</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
              </div>
              <div>
                <button className="bg-pc text-white text-center w-[100%] py-[20px] font-bold rounded-[8px]">Search</button>
              </div>
            </div>
          </div>
        </div> */}


















        <div className="absolute top-[30px] lg:top-[54px] left-0 right-0 mx-auto">
          <div className="flex items-center justify-between bg-white rounded-full border border-[#DDD] shadow-cardshadow w-[95%] lg:w-[50%] mx-auto bannerformipad">
            <div className="flex items-center justify-between">
              <div className="px-[10px] lg:px-[20px] gap-[10px] lg:gap-[20px] py-[10px] lg:py-[15px] h-[100%] bg-[#E9ECF0] flex items-center justify-center rounded-l-full">
                <FaLocationDot className="text-cardpara text-[18px] lg:text-[24px]" />
                <p className="text-cardpara font-medium text-smalltext lg:text-pfont whitespace-nowrap">
                  I am looking for
                </p>
              </div>
              <div className="lg:py-[10px]">
                <div className="relative flex items-center gap-[10px] lg:gap-[20px] bg-white pl-[10px] lg:pl-[25px]">
                  <BiPlusMedical className="text-cardpara text-[18px] lg:text-[24px]" />
                  <div
                    className="font-semibold text-smalltext lg:text-pfont text-extraclr1 bg-transparent appearance-none cursor-pointer w-[100%]"
                    onClick={openFacilities}
                  >
                    <p>Dental</p>
                  </div>
                  {openFacilitiesList && (
                    <div className="bg-white shadow-boxshadow h-auto absolute  z-20 top-[38px] left-0 w-[200px] border-t-[5px] border-hoverclr rounded-b-[10px] pb-[20px]">
                      <div className="">
                        <ul className="pt-[20px] px-[20px] flex flex-col gap-[10px] max-h-[400px] overflow-y-scroll">
                          <li>
                            <a href="/about">Profile</a>
                          </li>
                          <li>
                            <a href="/about">Notification</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                          <li>
                            <a href="/about">Personal settings</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pr-[8px] lg:py-[10px]">
              <button
                className="bg-pc rounded-full px-[15px] lg:px-[30px] py-[5px] border border-pc text-white hover:text-pc hover:bg-white text-smalltext lg:text-pfont"
                onClick={() => {
                  navigate("/cityselection");
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
