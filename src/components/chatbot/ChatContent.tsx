import React from "react";
import { BsMic } from "react-icons/bs";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { FaUserLarge, FaStethoscope } from "react-icons/fa6";
import { useState } from "react";
import { LiaImage } from "react-icons/lia";
import ChatbotFooter from "./ChatbotFooter";
import { VscRefresh } from "react-icons/vsc";
import sparkle from "../../assets/images/edit-sparkle.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ChatContent = () => {
  const [activeTab, setActiveTab] = useState("CureValue Chat");
  const [showFacility, setShowFacility] = useState(false);
  const navigate = useNavigate();
  const toggleTab = (tabName: any) => {
    setActiveTab(tabName);
  };
  const toggleFacilityDetail = () => {
    setShowFacility(!showFacility);
  };

  return (
    <>
      <div className="block lg:hidden pt-[30px] container">
        <h5
          className="font-semibold text-[20px] flex items-center gap-[10px]"
          onClick={toggleFacilityDetail}
        >
          Facility Name <IoIosArrowDown className="text-[18px]" />
        </h5>
        <div className="flex items-center gap-[20px] py-[20px] border-b border-borderclr">
          <p
            className={`${
              activeTab === "CureValue Chat" ? "text-pc font-medium" : ""
            }`}
            onClick={() => toggleTab("CureValue Chat")}
          >
            CureValue Chat
          </p>
          <p
            className={`${
              activeTab === "Chat Information" ? "text-pc font-medium" : ""
            }`}
            onClick={() => toggleTab("Chat Information")}
          >
            Chat Information
          </p>
        </div>
      </div>

      <div
        className={`lg:flex items-center justify-start lg:justify-center pt-[15px] pb-[32px] mobilechatbot lg:h-[100%]`}
        style={{ display: activeTab === "CureValue Chat" ? "flex" : "none" }}
      >
        <div className="flex flex-col text-center justify-between h-[100%] w-[100%]">
          <div className="chatcontent-height ">
            <div className="flex flex-col gap-[10px] w-[100%] px-[39px] lg:px-[0]">
              <div className="chat-question">
                <div className="flex gap-[22px] items-center">
                  <div className="min-w-[40px] min-h-[40px] bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaUserLarge className="text-pc" />
                  </div>
                  <div className="text-left rounded-[8px] border border-[#E2E8F0] py-[10px] px-[20px] w-[100%] flex items-center justify-between">
                    <p className="text-[#1B2559] text-smalltext lg:text-pfont font-semibold">
                      Neque sed est porttitor tortor enim vel.
                    </p>
                    <MdEdit className="text-[#718096] text-[24px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-[22px] items-center justify-between chat-answer w-[100%]">
                <div className="flex gap-[22px] items-center w-[100%]">
                  <div className="min-w-[40px] min-h-[40px] bg-pc border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <div className="text-left rounded-[8px] py-[10px] px-[20px] bg-[#1A38601A] w-[100%]">
                    <p className="text-[#1B2559] text-smalltext lg:text-anchortext font-medium">
                      Nullam senectus et at maecenas dui amet. Tellus ut viverra
                      enim sit sed ornare id. Arcu libero tortor lectus
                      tincidunt nunc amet in. Pretium{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="chat-question">
                <div className="flex gap-[22px] items-center">
                  <div className="min-w-[40px] min-h-[40px] bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaUserLarge className="text-pc" />
                  </div>
                  <div className="text-left rounded-[8px] border border-[#E2E8F0] py-[10px] px-[20px] w-[100%] flex items-center justify-between">
                    <p className="text-[#1B2559] text-smalltext lg:text-pfont font-semibold">
                      Neque sed est porttitor tortor enim vel.
                    </p>
                    <MdEdit className="text-[#718096] text-[24px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-[22px] items-center justify-between chat-answer w-[100%]">
                <div className="flex gap-[22px] items-center w-[100%]">
                  <div className="min-w-[40px] min-h-[40px] bg-pc border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <div className="text-left rounded-[8px] py-[10px] px-[20px] bg-[#1A38601A] w-[100%]">
                    <p className="text-[#1B2559] text-smalltext lg:text-anchortext font-medium">
                      Nullam senectus et at maecenas dui amet. Tellus ut viverra
                      enim sit sed ornare id. Arcu libero tortor lectus
                      tincidunt nunc amet in. Pretium{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="chat-question">
                <div className="flex gap-[22px] items-center">
                  <div className="min-w-[40px] min-h-[40px] bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaUserLarge className="text-pc" />
                  </div>
                  <div className="text-left rounded-[8px] border border-[#E2E8F0] py-[10px] px-[20px] w-[100%] flex items-center justify-between">
                    <p className="text-[#1B2559] text-smalltext lg:text-pfont font-semibold">
                      Neque sed est porttitor tortor enim vel.
                    </p>
                    <MdEdit className="text-[#718096] text-[24px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-[22px] items-center justify-between chat-answer w-[100%]">
                <div className="flex gap-[22px] items-center w-[100%]">
                  <div className="min-w-[40px] min-h-[40px] bg-pc border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <div className="text-left rounded-[8px] py-[10px] px-[20px] bg-[#1A38601A] w-[100%]">
                    <p className="text-[#1B2559] text-smalltext lg:text-anchortext font-medium">
                      Nullam senectus et at maecenas dui amet. Tellus ut viverra
                      enim sit sed ornare id. Arcu libero tortor lectus
                      tincidunt nunc amet in. Pretium{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="chat-question">
                <div className="flex gap-[22px] items-center">
                  <div className="min-w-[40px] min-h-[40px] bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaUserLarge className="text-pc" />
                  </div>
                  <div className="text-left rounded-[8px] border border-[#E2E8F0] py-[10px] px-[20px] w-[100%] flex items-center justify-between">
                    <p className="text-[#1B2559] text-smalltext lg:text-pfont font-semibold">
                      Neque sed est porttitor tortor enim vel.
                    </p>
                    <MdEdit className="text-[#718096] text-[24px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-[22px] items-center justify-between chat-answer w-[100%]">
                <div className="flex gap-[22px] items-center w-[100%]">
                  <div className="min-w-[40px] min-h-[40px] bg-pc border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <div className="text-left rounded-[8px] py-[10px] px-[20px] bg-[#1A38601A] w-[100%]">
                    <p className="text-[#1B2559] text-smalltext lg:text-anchortext font-medium">
                      Nullam senectus et at maecenas dui amet. Tellus ut viverra
                      enim sit sed ornare id. Arcu libero tortor lectus
                      tincidunt nunc amet in. Pretium{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="chat-question">
                <div className="flex gap-[22px] items-center">
                  <div className="min-w-[40px] min-h-[40px] bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaUserLarge className="text-pc" />
                  </div>
                  <div className="text-left rounded-[8px] border border-[#E2E8F0] py-[10px] px-[20px] w-[100%] flex items-center justify-between">
                    <p className="text-[#1B2559] text-smalltext lg:text-pfont font-semibold">
                      Neque sed est porttitor tortor enim vel.
                    </p>
                    <MdEdit className="text-[#718096] text-[24px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-[22px] items-center justify-between chat-answer w-[100%]">
                <div className="flex gap-[22px] items-center w-[100%]">
                  <div className="min-w-[40px] min-h-[40px] bg-pc border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <div className="text-left rounded-[8px] py-[10px] px-[20px] bg-[#1A38601A] w-[100%]">
                    <p className="text-[#1B2559] text-smalltext lg:text-anchortext font-medium">
                      Nullam senectus et at maecenas dui amet. Tellus ut viverra
                      enim sit sed ornare id. Arcu libero tortor lectus
                      tincidunt nunc amet in. Pretium{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer flex items-center gap-[5px] pl-[62px]">
                <VscRefresh className="text-[20px] text-[#1C304A85]" />
                <p className="text-anchortext font-medium text-[#1C304A85]">
                  restart conversation
                </p>
              </div>
            </div>
          </div>
          <div className="px-[14px] lg:px-[0]">
            <div className="flex items-center justify-between border border-[#bec6d0] rounded-[16px] px-[20px]">
              <div className="flex items-center gap-[8px] w-[100%]">
                <BsMic className="text-lightblack text-[24px] cursor-pointer" />
                <LiaImage className="text-lightblack text-[24px] cursor-pointer" />
                <input
                  type="textbox"
                  placeholder="Type message"
                  className=" border-none outline-none ml-[8px] px-[20px] py-[16px] w-[100%] text-wrap"
                />
              </div>
              <div>
                <PiPaperPlaneRightBold
                  className="text-[#1C1C1C66] text-[20px] cursor-pointer"
                  onClick={() => {
                    navigate("/chatsummary");
                  }}
                />
              </div>
            </div>
            <ChatbotFooter />
          </div>
        </div>
      </div>

      <div
        className="container pt-[50px] h-[80%] overflow-y-scroll"
        style={{ display: activeTab === "Chat Information" ? "block" : "none" }}
      >
        <div className="pb-[30px] lg:pb-[50px] w-[100%] lg:w-[95%]">
          <h2 className="lg:text-pfont font-semibold text-cardpara pb-[14px]">
            Introduction
          </h2>
          <div className="">
            <p className="text-cardpara font-medium text-smalltext pb-[20px]">
              Eget tellus eu eget diam fermentum quisque. Orci orci cursus
              posuere amet pretium pellentesque urna natoque vehicula. Mauris
              purus nascetur turpis orci. Fermentum quam magna diam in viverra
              posuere tellus. Auctor vulputate tincidunt quam nulla.
            </p>
            <p className="text-cardpara font-medium text-smalltext pb-[20px]">
              Risus tristique praesent volutpat eget. Eget tellus eu eget diam
              fermentum quisque.{" "}
            </p>
          </div>
        </div>
        <div className="px-[14px]  w-[100%]">
          <div className="w-fit mx-auto bg-pc text-white flex flex-col items-center text-center justify-center px-[19px] rounded-[20px] pt-[35px] pb-[21px] relative">
            <div className="bg-white rounded-full p-[5px] absolute top-[-50px]">
              <div className="bg-pc rounded-full p-[15px]">
                <div className="bg-[#E4F0FF] rounded-full p-[11px]">
                  <img src={sparkle} className="w-[25px]" />
                </div>
              </div>
            </div>
            <h3 className="text-h4font font-bold pt-[16px]">Magic Edit</h3>
            <p className="text-anchortext font-medium pb-[32px] max-w-[60%]">
              You can revise the dossier within 30 days
            </p>
            <button className="text-pc border border-white font-semibold bg-white rounded-full text-anchortext px-[60px] py-[8px] hover:bg-pc hover:text-white">
              Edit Now
            </button>
          </div>
        </div>
      </div>

      {showFacility && (
        <div className="fixed top-[150px] left-[24px] z-20 w-[80%] h-auto  bg-white rounded-[30px] bg-white shadow-cardshadow">
          <div className="flex flex-col container h-[100%] py-[30px]">
            <div className="">
              <div>
                <div className="pb-[10px]">
                  <p className="text-cardpara text-anchortext font-semibold">
                    Procedure
                  </p>
                  <p className="text-extraclr1 text-anchortext w-[90%]">
                    Vitae consequat{" "}
                  </p>
                </div>
                <div className="pb-[10px]">
                  <p className="text-cardpara text-anchortext font-semibold">
                    Treatment
                  </p>
                  <p className="text-extraclr1 text-anchortext w-[90%]">
                    Interdum velit
                  </p>
                </div>
                <div className="pb-[10px]">
                  <p className="text-cardpara text-anchortext font-semibold">
                    Sub Treatment
                  </p>
                  <p className="text-extraclr1 text-anchortext w-[90%]">
                    Lectus molestie urna sed
                  </p>
                </div>
                <div className="pb-[10px]">
                  <p className="text-cardpara text-anchortext font-semibold">
                    Timeframe
                  </p>
                  <p className="text-extraclr1 text-anchortext w-[90%]">
                    In a month
                  </p>
                </div>
                <div className="pb-[10px]">
                  <p className="text-cardpara text-anchortext font-semibold">
                    City, Country
                  </p>
                  <p className="text-extraclr1 text-anchortext w-[90%]">
                    Istanbul, Turkey
                  </p>
                </div>
                <div className="pb-[10px]">
                  <p className="text-cardpara text-anchortext font-semibold">
                    Facility
                  </p>
                  <p className="text-extraclr1 text-anchortext w-[90%]">
                    Sed morbi aliquet ipsum ultrices et
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatContent;
