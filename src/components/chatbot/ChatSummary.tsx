import { FaStethoscope } from "react-icons/fa6";
import { BsMic } from "react-icons/bs";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import ChatbotFooter from "./ChatbotFooter";
import { LiaImage } from "react-icons/lia";
import { useState, useEffect } from "react";
import copyimg from "../../assets/images/copysvg.svg";
import chatdownarrow from "../../assets/images/chatdown-img.png";
import { ImDownload } from "react-icons/im";
import { BiSolidCart } from "react-icons/bi";
import sparkle from "../../assets/images/sparklegrey.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ChatSummary = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const [activeTab, setActiveTab] = useState("CureValue Chat");
  const [showFacility, setShowFacility] = useState(false);
  const navigate = useNavigate();
  const toggleTab = (tabName: any) => {
    setActiveTab(tabName);
  };
  const toggleFacilityDetail = () => {
    setShowFacility(!showFacility);
  };

  const scrollDown = () => {};

  useEffect(() => {
    const summaryContent = document.getElementById("summarycontent");
    if (summaryContent) {
      const handleScroll = () => {
        if (
          summaryContent.scrollHeight > summaryContent.clientHeight &&
          summaryContent.scrollTop <
            summaryContent.scrollHeight - summaryContent.clientHeight
        ) {
          setShowScrollBtn(true);
        } else {
          setShowScrollBtn(false);
        }
      };

      if (summaryContent) {
        handleScroll();
        summaryContent.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (summaryContent) {
          summaryContent.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

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
        className={`flex items-center justify-start lg:justify-center pb-[32px] mobilechatbot lg:h-[100%]`}
        style={{ display: activeTab === "CureValue Chat" ? "flex" : "none" }}
      >
        <div className="flex flex-col text-center justify-between h-[100%] w-[100%]">
          <div className="px-[39px] lg:px-[0] chatcontent-height">
            <div className="flex flex-col lg:gap-[10px]w-[100%] pt-[20px] lg:pt-[80px] dosieredit-text">
              <div className="flex gap-[22px] items-center justify-between chat-answer w-[100%]">
                <div className="flex gap-[22px] items-center w-[100%]">
                  <div className="min-w-[40px] min-h-[40px] bg-pc border border-[#E2E8F0] rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <div className="text-left rounded-[8px] py-[10px] px-[22px] bg-[#1A38601A] w-[100%]">
                    <p className="text-[#1B2559] text-smalltext lg:text-pfont font-medium">
                      Your dossier is ready to download if you would like to
                      make any changes please tap on{" "}
                      <a
                        href="#"
                        className="underline underline-offset-2 text-blueclr"
                      >
                        edit{" "}
                      </a>
                      .{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              id="summarycontent"
              className="bg-white flex flex-col items-start text-left pt-[28px] px-[25px] pb-[39px] border border-borderclr border-b-0 rounded-t-[16px] w-[90%] mx-auto relative max-h-[400px] lg:max-h-[320px] overflow-scroll summarycontent"
            >
              {showScrollBtn && (
                <img
                  src={chatdownarrow}
                  className="w-[45px] fixed left-0 right-0 mx-auto bottom-[120px] cursor-pointer"
                  onClick={scrollDown}
                />
              )}
              <div className="flex items-center justify-between w-[100%] pb-[22px]">
                <h2 className="text-[18px] lg:text-[24px] font-bold text-extraclr3">
                  Summery for Doctor
                </h2>
                <div className="rounded-full border border-borderclr p-[8px] cursor-pointer">
                  <img src={sparkle} className="w-[27px]" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[40px] w-[100%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] justify-between w-[100%]">
                  <div>
                    <h4 className="text-pfont text-pc font-semibold">
                      Condition{" "}
                    </h4>
                    <p className="text-smalltext font-bold text-extraclr1">
                      Eu mattis in et volutpat.
                    </p>
                    <div className="text-smalltext text-[#718096] summary-li pt-[5px]">
                      <ul>
                        <li>Elit enim odio enim augue quis. </li>
                        <li>Velit natoque turpis arcu </li>
                        <li>Eget massa dictum in viverra felis id.</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-pfont text-pc font-semibold">
                      History{" "}
                    </h4>
                    <p className="text-smalltext font-bold text-extraclr1">
                      Eu mattis in et volutpat.
                    </p>
                    <div className="text-smalltext text-[#718096] summary-li pt-[5px]">
                      <ul>
                        <li>Elit enim odio enim augue quis. </li>
                        <li>Velit natoque turpis arcu </li>
                        <li>Eget massa dictum in viverra felis id.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] justify-between w-[100%]">
                  <div>
                    <p className="text-smalltext font-bold text-extraclr1 pb-[10px]">
                      Package ID
                    </p>
                    <div className="flex items-center gap-[11px]">
                      <img src={copyimg} className="w-[22px] cursor-pointer" />
                      <p className="text-smalltext text-[#718096] pt-[5px]">
                        PCI-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-smalltext font-bold text-extraclr1 pb-[10px]">
                      Lorem Ipsum
                    </p>
                    <div className="flex items-center gap-[11px]">
                      <img src={copyimg} className="w-[22px] cursor-pointer" />
                      <img src={copyimg} className="w-[22px] cursor-pointer" />
                      <img src={copyimg} className="w-[22px] cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[25px] justify-between w-[100%]">
                  <div>
                    <button
                      className="bg-[#E5F0FF] text-extraclr3 py-[14px] w-[100%] text-center font-semibold flex items-center justify-center gap-[16px] text-smalltext lg:text-pfont"
                      onClick={() => {
                        navigate("/mytrip");
                      }}
                    >
                      <BiSolidCart className="text-pc text-[18px] lg:text-[24px]" />
                      View In Cart
                    </button>
                  </div>
                  <div>
                    <button className="bg-[#E5F0FF] text-extraclr3 py-[14px] w-[100%] text-center font-semibold flex items-center justify-center gap-[16px] text-smalltext lg:text-pfont">
                      <ImDownload className="text-pc text-[18px] lg:text-[24px]" />
                      Download
                    </button>
                  </div>
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
                  <PiPaperPlaneRightBold className="text-[#1C1C1C66] text-[20px] cursor-pointer" />
                </div>
              </div>
              <ChatbotFooter />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container pt-[50px] h-[80%] overflow-y-scroll"
        style={{
          display: activeTab === "Chat Information" ? "block" : "none",
        }}
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

export default ChatSummary;
