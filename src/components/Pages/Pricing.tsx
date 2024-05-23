import PricingCards from "../Cards/PricingCards";
import PageBack from "../FacilityComponents/Pageback";
import Footer from "../Footer";
import Header from "../Header";
import { MdArrowBackIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import PricingTable from "../PricingTable";
import Testimonials from "../Testimonials";
import FaqNew from "../FaqNew";



const Pricing = () => {
    return (
        <div>
            <Header/>
                <div className="pt-[80px]">
                    <div className="bg-[#F5F7FA] pb-[100px] lg:pb-[0]">
                        {/* <PageBack/> */}
                        <div className="container hidden lg:block">
                            <div className="flex items-center justify-between pt-[30px]">
                                <div className="flex items-center gap-[4px] lg:gap-[10px] cursor-pointer">
                                    <MdArrowBackIos className="text-extraclr3 text-[24px] lg:text-iconclr3 lg:text-[20px]"/>
                                    <a className="text-pfont lg:text-[18px] font-medium text-sc font-sans">See facility details</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center lg:px-[24px]">
                            <div className="pt-[50px] lg:pt-[7px] pb-[10px] lg:pb-[20px] text-center">
                                <h2 className="text-[30px] lg:text-[38px] text-[#231D4F] font-semibold pb-[15px]">Our Packages</h2>
                                <p className="text-testimonialclr text-h6font lg:text-pfont font-medium max-w-[90%] lg:max-w-[800px] text-center mx-auto">Whether you’re at a Fortune 500 company or a startup, Appcues has a plan to help you grow. Pricing for each plan below scales with your monthly active user count.</p>
                                <div className="mt-[10px] lg:mt-[25px]">
                                    <a className="flex items-center text-center gap-[7px] justify-center text-blueclr font-semibold text-smalltext lg:text-anchortext group ">
                                        or schedule time with a product specialist
                                        <span><FaArrowRightLong className="text-blueclr text-[19px] group-hover:text-hoverclr"/>  </span>
                                    </a>
                                </div>
                            </div>

                            <div className="container">
                                <PricingCards/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <PricingTable />
                    </div>

                    <div className="relative">
                        <div className=" flex flex-col items-center justify-center lg:pt-[30px] lg:px-[24px]">
                            <div className="pt-[50px] lg:pt-[13px] pb-[55px] text-center">
                                <h2 className="text-h5font lg:text-[32px]] text-[#231D4F] font-semibold pb-[15px]">Testimonials</h2>
                                <p className="text-testimonialclr text-pfont font-medium max-w-[90%] lg:max-w-[600px] text-center mx-auto">Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
                            </div>

                            <div className="w-[100%] lg:container ">
                                <Testimonials/>
                            </div>
                        </div>
                        <div>
                            <FaqNew/>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Pricing;