import cardimg from "../../assets/images/destination-img1.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdChromeReaderMode } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import flagimg from '../../assets/images/flag.png'

const Destinationcard = ({ isOpenModal, setIsOpenModal }: any) => {
  const navigate = useNavigate();

  const toggleModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpenModal();
  };

  return (
    <>
      <div
        onClick={() => {
          navigate("/city");
        }}
      >
        <div className=" cursor-pointer border-[3px] border-borderclr hover:border-hoverclr rounded-[30px] px-[15px] pb-[19px] lg:px-[32px] lg:pb-[25px] bg-white relative pt-[110px] lg:pt-[140px] destinationcard">
          <img
            src={cardimg}
            alt=""
            className="w-[90%] lg:max-w-[340px] lg:pb-[19px] m-auto absolute left-0 right-0 top-[-70px]"
          />

          <p className="flex items-center m-auto gap-[10px] text-h6font lg:text-pfont rounded-full bg-[#1A38601A] px-[40px] py-[5px] lg:px-[59px] lg:py-[8px] font-semibold justify-center w-fit">
            <FaRegStar className="text-[20px] text-black" />
            Top rated
          </p>
          <div className="flex items-center justify-between lg:pt-[13px] 2xl:pt-[31px] pb-[8px] mt-[10px] lg:mt-[0]">
            <div className="flex items-center gap-[13px]">
              <p className="bg-pc text-white text-[15px] lg:text-h4font px-[15px] py-[5px] rounded-full w-fit font-semibold">
                $450
              </p>
              <p className="text-greyclr capitalize text-[10px] lg:text-smalltext ">
                Treatment Cost
              </p>
            </div>
            <div className="flex items-center gap-[13px]">
              {/* <IoMdInformationCircleOutline className="cursor-pointer text-[20px] text-iconclr2 lg:text-h5font" /> */}
              <img src={flagimg} className="w-[100%] max-w-[60px]"/>
            </div>
          </div>

          <h2 className="text-sc text-h3font/[28px] lg:text-h5font/[38px] font-semibold pb-[10px] max-w-[52%]  lg:max-w-[47%] ">
            New Delhi,{" "}
            <span className="text-h4font lg:text-[25px]/[30px]">India</span>
          </h2>
          <p className="font-medium text-smalltext lg:text-[15px] text-sc pb-[18px] lg:pb-[22px] ">
            With its strategic location bridging Europe and Asia, Turkey boasts
            internationally accredited hospitals, skilled medical.
          </p>
          <div className="grid grid-cols-2 gap-[13px] pb-[15px]">
            <button className="flex bg-[#e9ecf0] text-extraclr3 gap-[10px] items-center text-left pl-[11px] py-[7px] rounded-[30px] text-[10px] lg:text-smalltext font-medium">
              <HiCurrencyDollar className="text-extraclr3 text-smalltext lg:text-[20px]" />
              Very Affordable
            </button>
            <button className="flex bg-[#e9ecf0] text-extraclr3 gap-[10px] items-center text-left pl-[11px] py-[7px] rounded-[30px] text-[10px] lg:text-smalltext font-medium">
              <MdChromeReaderMode className="text-extraclr3 text-smalltext lg:text-[20px]" />
              On Arrival
            </button>
          </div>
          <a
            className="text-smalltext lg:text-anchortext 2xl:text-pfont underline text-[#006AF5] font-medium cursor-pointer"
            onClick={toggleModal}
          >
            View more
          </a>
        </div>
      </div>
    </>
  );
};

export default Destinationcard;
