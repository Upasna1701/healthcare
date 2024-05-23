import { useEffect, useState } from "react";
import { MdOutlineAttachMoney, MdEdit, MdOutlineSaveAlt } from "react-icons/md";
// import { MdOutlineSaveAlt } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const SavingsCalculator = () => {
  const percentage = 30;
  const percentage2 = 65;
  const navigate = useNavigate();
  return (
    <div id="saving" className="">
      <div className="flex items-start gap-[5px] lg:pb-[27px] lg:max-w-[60%]">
        <MdOutlineAttachMoney className="text-iconclr text-h3font lg:text-[34px]" />
        <h2 className="text-sc text-h3font font-semibold lg:text-[18px]">
          CureValue Savings Meter
        </h2>
      </div>
      <div className="flex flex-col justify-center text-center items-center bg-white shadow-cardshadow lg:w-[360px] rounded-[22px] px-[27px] pt-[14px] pb-[30px] mb-[30px] ml-auto calculator">
        <div className="flex items-end gap-[22px] mb-[13px]">
          <div className="flex flex-col gap-[5px] items-end">
            <h3 className="text-black font-semibold text-[18px]">$7000</h3>
            <p className="text-black text-[18px]">US</p>
            <div className="w-[48px] bg-[#1C375A29] h-[209px] rounded-[4px]"></div>
          </div>
          <div className="flex flex-col gap-[5px] items-start">
            <h3 className="text-black font-semibold text-[18px]">$4000</h3>
            <p className="text-black text-[18px]">Turkey</p>
            <div className="w-[48px] bg-[#4AB972] h-[103px] rounded-[4px]"></div>
          </div>
        </div>

        <h3 className="text-smalltext font-semibold text-cardpara">
          Dental Treatment Cost
        </h3>
        <p className="font-medium text-extraclr1 text-smalltext">
          *Includes travel costs
        </p>

        <button
          className="flex bg-pc text-white gap-[10px] items-center text-left px-[24px] py-[11px] rounded-full text-smalltext font-semibold mt-[21px] border border-pc group hover:bg-white hover:text-pc"
          onClick={() => {
            navigate("/pricing");
          }}
        >
          <MdEdit className="text-white text-[21px] group-hover:text-pc" />
          Personalize & Save
        </button>
      </div>
    </div>
  );
};

export default SavingsCalculator;
