import { MdAirlineSeatIndividualSuite, MdOutlinePets, MdOndemandVideo, MdCommute } from "react-icons/md";
// import { MdOutlinePets } from "react-icons/md";
const AmenitiesCard = () =>{
    return(
        <div>
            <div className="mb-[30px] lg:mb-[52px] pb-[27px] lg:pb-[58px] border-b border-borderclr">
                <div className="flex items-center gap-[5px] pb-[16px]">
                    <MdAirlineSeatIndividualSuite className="text-iconclr text-h3font lg:text-[30px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Amenities</h2>
                </div>
                <div className="grid grid-cols-3 gap-[30px] lg:gap-[70px] md:max-w-[70%]">
                    <div className="flex flex-col items-start ">
                        <div className="border border-borderclr bg-[#f8f8f8] w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] rounded-[20px] flex items-center justify-center group hover:bg-pc">
                            <MdAirlineSeatIndividualSuite className="text-[50px] lg:text-[80px] text-iconclr2  group-hover:text-white"/>
                        </div>
                        <p className="text-anchortext lg:text-pfont text-black pt-[5px] lg:whitespace-nowrap">Private Rooms</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="border border-borderclr bg-[#f8f8f8] w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] rounded-[20px] flex items-center justify-center group hover:bg-pc">
                            <MdOutlinePets className="text-[50px] lg:text-[80px] text-iconclr2 group-hover:text-white"/>
                        </div>
                        <p className="text-anchortext lg:text-pfont text-black pt-[5px] lg:whitespace-nowrap">Pet-friendly</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="border border-borderclr bg-[#f8f8f8] w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] rounded-[20px] flex items-center justify-center group hover:bg-pc">
                            <MdOndemandVideo className="text-[50px] lg:text-[80px] text-iconclr2 group-hover:text-white"/>
                        </div>
                        <p className="text-anchortext lg:text-pfont text-black pt-[5px] lg:whitespace-nowrap">Advanced Equipment</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="border border-borderclr bg-[#f8f8f8] w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] rounded-[20px] flex items-center justify-center group hover:bg-pc">
                            <MdOndemandVideo className="text-[50px] lg:text-[80px] text-iconclr2 group-hover:text-white"/>
                        </div>
                        <p className="text-anchortext lg:text-pfont text-black pt-[5px] lg:whitespace-nowrap">Entertainment </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="border border-borderclr bg-[#f8f8f8] w-[90px] h-[90px] lg:w-[140px] lg:h-[140px] rounded-[20px] flex items-center justify-center group hover:bg-pc">
                            <MdCommute className="text-[50px] lg:text-[80px] text-iconclr2 group-hover:text-white"/>
                        </div>
                        <p className="text-anchortext lg:text-pfont text-black pt-[5px] lg:whitespace-nowrap">Transportation Assistance</p>
                    </div>  
                    <div className="flex flex-col items-start text-center h-[90px] w-[90px] lg:w-[140px] lg:h-[140px] justify-center">
                        <p className="text-anchortext lg:text-pfont font-semibold text-blueclr2 cursor-pointer hover:text-hoverclr">Show all 36 amenities</p>
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default AmenitiesCard;