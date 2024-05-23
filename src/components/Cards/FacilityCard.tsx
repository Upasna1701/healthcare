
import { IoMdInformationCircleOutline } from "react-icons/io";
import cardimg from '../../assets/images/destination-img1.png';
import { PiMedalFill } from "react-icons/pi";
import trustimg from '../../assets/images/trustmark2.png'


const FacilityCard = () => {
    return(
        <div> 
            <div className="facilityipad cursor-pointer border-[3px] border-borderclr hover:border-hoverclr rounded-[30px] px-[15px] pb-[19px] lg:px-[32px] lg:pb-[25px] bg-white relative pt-[110px] lg:pt-[140px] destinationcard">
                <img src={cardimg} alt="" className="w-[90%] lg:max-w-[340px] lg:pb-[19px] m-auto absolute left-0 right-0 top-[-70px]"/>
                <div className="flex items-center justify-between lg:pt-[13px] 2xl:pt-[31px] pb-[8px]">
                <h2 className="text-sc text-h4font/[22px] lg:text-[21px]/[27px] font-semibold 2xl:pb-[10px] max-w-[70%] lg:max-w-[70%]">Medical Park Hospitals Group <span className="text-pfont/[20px] lg:text-[18px]/[26px] font-medium">Istanbul</span></h2>

                    <div className="flex items-center gap-[13px]">
                    <div className="relative">
                        <img src={trustimg} className="w-[100%] max-w-[69px]"/>
                        <p className="absolute text-smalltext font-semibold text-white top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] mx-auto">100</p>
                    </div>

                        {/* <IoMdInformationCircleOutline className="cursor-pointer text-[20px] text-iconclr2 2xl:text-[30px]"/> */}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-[10px] pt-[11px] lg:pt-[9px] pb-[12px]">
                    <p className="text-[10px] xl:text-anchortext font-medium px-[8px] py-[2px] bg-[#005fdb24] text-blueclr2">Internal Medicine</p>
                    <p className="text-[10px] xl:text-anchortext font-medium px-[8px] py-[2px] bg-[#1584441c] text-extraclr4">Cardiology</p>
                    <p className="text-[10px] xl:text-anchortext font-medium px-[8px] py-[2px] bg-[#98521138] text-extraclr5">Dentistry</p>
                </div> 
                <div className="flex items-center gap-[5px] pb-[6px] xl:pb-[12px]">
                    <PiMedalFill className="text-cardpara lg:text-[20px] 2xl:text-[35px]"/>
                    <p className="font-medium text-cardpara text-[10px] lg:text-anchortext ">JCI, ISQua, ACHSI, ISO</p>
                </div>
                <p className="font-medium text-smalltext lg:text-[15px] text-sc pb-[18px] lg:pb-[22px]">With its strategic location bridging Europe and Asia, Turkey boasts internationally accredited hospitals, skilled medical.</p>
                <a className="text-smalltext lg:text-anchortext  underline text-[#006AF5] font-medium cursor-pointer">View more</a>
                
        </div>
        </div>
    )
}

export default FacilityCard;