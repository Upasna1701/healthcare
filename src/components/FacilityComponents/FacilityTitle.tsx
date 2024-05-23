import { FaBookmark } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
const FacilityTitle = () =>{
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const FacilityElement = document.getElementById("facility-title");
            if (!FacilityElement) return; // Null check
            const facilityOffset = FacilityElement.offsetTop;
            const scrollTop = window.pageYOffset;
    
          setIsFixed(scrollTop > facilityOffset);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return(
        <div id="facility-title" className={`w-[100%] transition-all z-10 ${isFixed ? "fixed top-0 bg-[#fcfcfc] shadow-sm lg:shadow-0 lg:bg-pc ease-in-out duration-300" : "lg:bg-white"}`}>
            <div className="container flex items-center py-[17px] justify-between w-[100%] ">
                <div>
                    <h1 className={`text-[20px] lg:text-[24px] font-bold ${isFixed ? 'text-pc lg:text-white ease-in-out duration-300' : 'text-pc lg:text-iconclr'}`}>Medical Park Hospitals Group <span className="font-medium">Istanbul, Turkey</span></h1>
                </div>
                <div className="hidden lg:flex items-center gap-[22px]">
                    <BsShareFill size={'30px'} className={`cursor-pointer ${isFixed ? 'text-white ease-in-out duration-300' : ''}`}/>
                    <FaBookmark size={'30px'} className={`cursor-pointer ${isFixed ? 'text-white ease-in-out duration-300' : ''}`}/>
                </div>
            </div>
            
        </div>
    )
}

export default FacilityTitle;
