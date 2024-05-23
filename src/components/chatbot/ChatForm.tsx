import Header from "../Header";
import ChatbotFooter from "./ChatbotFooter";
import { LiaImage } from "react-icons/lia";
import ChatbotRight from "./ChatbotRight";
import ChatLeftContent from "./ChtaLeftContent";
import { BsMic } from "react-icons/bs";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { useState } from "react";
import sparkle from "../../assets/images/edit-sparkle.svg";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ChatForm = () => {
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
      <Header />
      <div className="h-screen overflow-hidden pt-[70px] lg:pt-[80px]">
        <div className="chatbotscreen">
          <div className="relative lg:flex gap-[70px] justify-between h-[100%] chatscreen-main">
            <div>
              <ChatLeftContent />
            </div>
            <div className="h-[100%]">
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
                      activeTab === "CureValue Chat"
                        ? "text-pc font-medium"
                        : ""
                    }`}
                    onClick={() => toggleTab("CureValue Chat")}
                  >
                    CureValue Chat
                  </p>
                  <p
                    className={`${
                      activeTab === "Chat Information"
                        ? "text-pc font-medium"
                        : ""
                    }`}
                    onClick={() => toggleTab("Chat Information")}
                  >
                    Chat Information
                  </p>
                </div>
              </div>

              <div
                className="pt-[27px] pb-[32px] lg:h-[100%] mobilechatbot"
                style={{
                  display: activeTab === "CureValue Chat" ? "block" : "none",
                }}
              >
                <div className="flex flex-col justify-between h-[100%] w-[100%]">
                  <div className="px-[39px] lg:px-[0] chatcontent-height">
                    <h2 className="text-[18px] lg:text-[24px] text-sc font-semibold lg:max-w-[85%]">
                      Please select your options to chat with our{" "}
                      <span className="text-pc">CureValue Chatbot</span>
                    </h2>
                    <div className="flex flex-col lg:flex-row items-start gap-[27px] lg:gap-[129px] pt-[28px] pb-[44px]">
                      <div>
                        <p className="text-anchortext font-semibold mb-[8px]">
                          When do you want to travel?{" "}
                        </p>
                        <div className="flex items-center pb-[8px]">
                          <input
                            type="radio"
                            name="when-travel"
                            className="mr-[10px] w-[15px] h-[15px]"
                          />
                          <label>Within a month</label>
                        </div>
                        <div className="flex items-center pb-[8px]">
                          <input
                            type="radio"
                            name="when-travel"
                            className="mr-[10px] w-[15px] h-[15px]"
                          />
                          <label>1 month - 3 month</label>
                        </div>
                        <div className="flex items-center pb-[8px]">
                          <input
                            type="radio"
                            name="when-travel"
                            className="mr-[10px] w-[15px] h-[15px]"
                          />
                          <label>6 month</label>
                        </div>
                        <div className="flex items-center pb-[8px]">
                          <input
                            type="radio"
                            name="when-travel"
                            className="mr-[10px] w-[15px] h-[15px]"
                          />
                          <label>In a year</label>
                        </div>
                      </div>
                      <div>
                        <p className="text-anchortext font-semibold mb-[8px]">
                          How would you like to travel ?{" "}
                        </p>
                        <div className="flex items-center pb-[8px]">
                          <input
                            type="radio"
                            name="how-travel"
                            className="mr-[10px] w-[15px] h-[15px]"
                          />
                          <label>Airways</label>
                        </div>
                        <div className="flex items-center pb-[8px]">
                          <input
                            type="radio"
                            name="how-travel"
                            className="mr-[10px] w-[15px] h-[15px]"
                          />
                          <label>Roadways</label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="text-white bg-pc border border-pc hover:bg-white hover:text-pc font-bold text-anchortext py-[9px] rounded-full px-[50px]"
                      onClick={() => {
                        navigate("/chatbot");
                      }}
                    >
                      Go
                    </button>
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
                      Eget tellus eu eget diam fermentum quisque. Orci orci
                      cursus posuere amet pretium pellentesque urna natoque
                      vehicula. Mauris purus nascetur turpis orci. Fermentum
                      quam magna diam in viverra posuere tellus. Auctor
                      vulputate tincidunt quam nulla.
                    </p>
                    <p className="text-cardpara font-medium text-smalltext pb-[20px]">
                      Risus tristique praesent volutpat eget. Eget tellus eu
                      eget diam fermentum quisque.{" "}
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
                    <h3 className="text-h4font font-bold pt-[16px]">
                      Magic Edit
                    </h3>
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
            </div>
            <div>
              <ChatbotRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatForm;
