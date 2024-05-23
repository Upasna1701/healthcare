import { FaLocationDot } from "react-icons/fa6";

const FacilityLocation =() =>{
    return (
        <div className="container lg:pt-[90px]">
            <div className="flex items-center gap-[5px] pb-[16px] pb-[16px]">
                <FaLocationDot className="text-iconclr text-h3font lg:text-[30px]"/>
                <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Location</h2>
            </div>
            <div>
                <iframe className="w-[100%] rounded-[30px] h-[215px] lg:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471112786!2d73.7805663519161!3d18.524598599901143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712216004808!5m2!1sen!2sin" width="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default FacilityLocation;