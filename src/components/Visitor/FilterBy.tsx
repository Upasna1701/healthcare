import { FaStar } from "react-icons/fa";
import PriceRangeSlider from "./Affordability";


const FilterBy = () =>{
    return(
        <div className="hidden lg:block">
            <h2 className="pb-[30px] text-[20px] font-semibold text-cardpara">Filter By</h2>
            <div className="pb-[52px]">
                <h3 className="text-cardpara text-[18px] font-semibold pb-[21px]">Speciality</h3>
                <div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">Family Medicine with Obstetrics</label>
                    </div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">Gynecologic Oncology</label>
                    </div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">Gynecological Surgeon</label>
                    </div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">Gynecology</label>
                    </div>
                </div>
                <a className="text-blueclr font-medium text-anchortext">See more</a>
            </div>

            <div className="pb-[69px]">
                <h3 className="text-cardpara text-[18px] font-semibold pb-[21px]">Scheduling Options</h3>
                <div className="max-w-[70%]">
                    <div className="flex items-start justify-between pb-[18px]">
                        <label className="max-w-[60%] text-anchortext">Accepting Patients</label>
                        <input type="checkbox" id="switch" className="switch"/>
                    </div>
                    <div className="flex items-start justify-between pb-[18px]">
                        <label className="max-w-[60%] text-anchortext">Video Visits</label>
                        <input type="checkbox" id="switch" className="switch"/>
                    </div>
                    <div className="flex items-start justify-between pb-[18px]">
                        <label className="max-w-[60%] text-anchortext">Online Scheduling</label>
                        <input type="checkbox" id="switch" className="switch"/>
                    </div>
                    <div className="flex items-start justify-between pb-[18px]">
                        <label className="max-w-[60%] text-anchortext">Post Treatment Check-ups</label>
                        <input type="checkbox" id="switch" className="switch"/>
                    </div>
                </div>
            </div>

            <div className="pb-[59px]">
                <h3 className="text-cardpara text-[18px] font-semibold pb-[21px]">Affordability</h3>
                <div className="pb-[59px]">
                    <PriceRangeSlider/>
                </div>
            </div>

            <div className="pb-[45px]">
                <h3 className="text-cardpara text-[18px] font-semibold pb-[21px]">Language spoken</h3>
                <div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">English</label>
                    </div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">Spanish</label>
                    </div>
                    <div className="flex items-start pb-[18px]">
                        <input type="checkbox" className="mr-[10px] w-[20px] h-[20px]"/>
                        <label className="text-anchortext">Chinese</label>
                    </div>
                </div>
                <a className="text-blueclr font-medium text-anchortext">See more</a>
            </div>

            <div>
                <h3 className="text-cardpara text-[18px] font-semibold pb-[8px]">Patient Rating</h3>
                <div className="flex flex-center gap-[7px] pb-[41px]">
                    <FaStar size={'35px'} className="text-[#FFD233]"/>
                    <FaStar size={'35px'} className="text-[#FFD233]"/>
                    <FaStar size={'35px'} className="text-[#FFD233]"/>
                    <FaStar size={'35px'} className="text-[#FFD233]"/>
                    <FaStar size={'35px'} className="text-borderclr"/>
                </div>
            </div>
        </div>
    )
}

export default FilterBy;