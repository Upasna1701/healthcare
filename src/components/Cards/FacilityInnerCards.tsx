import { MdOutlineSegment } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import sun from '../../assets/images/sunny.png';
const FacilityInnerCards = () =>{
    return(
        <div className="">
            <div className="mb-[30px] lg:mb-[52px] pb-[27px] lg:pb-[58px] border-b border-borderclr">
                <div className="flex items-center gap-[5px] pb-[16px]">
                    <MdOutlineSegment className="text-iconclr text-h3font lg:text-[35px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Overview</h2>
                </div>
                <div>
                    <p className="text-[19px] lg:text-pfont/[26px] text-cardpara mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <p className="text-pfont text-cardpara font-medium">English (Fluent)</p>
                    <p className="text-pfont text-cardpara font-medium">Arabic (Fluent)</p>

                    <div className="flex items-center gap-[7px] py-[20px]">
                        <img src={sun} alt="" className="max-w-[70px]"/>
                        <p className="text-pfont text-iconclr font-medium">Arabic (Fluent)</p>
                    </div>

                </div>
                <a href="#" className="text-[19px] font-semibold text-cardpara underline underline-offset-2 flex items-center gap-[5px] pt-[14px]">Show more
                <GrNext className="text-anchortext text-cardpara"/>
                </a>

            </div>
        </div>
    )
}

export default FacilityInnerCards;