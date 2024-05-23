import footerlogo from "../assets/images/whitelogo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const Footer =() =>{

    const location = useLocation();
    const displaylist = ["/chatbot"];
    const footerdisplay = displaylist.includes(location.pathname);


    return (
        <footer className={`bg-pc ${footerdisplay ? "hidden" : "block"} `}>
            <div className="container">
                <div className="flex flex-col gap-[48px] lg:flex-row items-start justify-between pt-[64px] lg:pt-[100px] text-white">
                    <div>
                        <img src={footerlogo} alt="cv-logo" className="pb-[25px]"/>
                        <p className="pb-[10px] max-w-[82%]">52764637, Address Line 1 , Address Line 2</p>
                        <p className="pb-[10px]">Number: <a href="tel:123 564 8524">123 564 8524</a></p>
                        <p className="pb-[10px]">Email: <a href="mailto:customersupport@curevalue.com">customersupport@curevalue.com</a></p>
                    </div>
                    <div className="flex items-starts gap-[70px]">
                        <div>
                            <h5 className="font-bold leading-[24px] pb-[10px]">Get started</h5>
                            <ul>
                                <li className="pb-[10px]"><a href="#">Am I covered</a></li>
                                <li className="pb-[10px]"><a href="#">Find your dietitian</a></li>
                                <li className="pb-[10px]"><a href="#">Refer a patient</a></li>
                            </ul>
                        </div>
                        <div className="block lg:hidden">
                            <h5 className="font-bold leading-[24px] pb-[10px]">Our apps</h5>
                            <ul>
                                <li className="pb-[10px]"><a href="#">ios</a></li>
                                <li className="pb-[10px]"><a href="#">Android</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold leading-[24px] pb-[10px]">Resources</h5>
                        <ul>
                            <li className="pb-[10px]"><a href="#">Blog</a></li>
                            <li className="pb-[10px]"><a href="#">About</a></li>
                            <li className="pb-[10px]"><a href="#">Help center</a></li>
                            <li className="pb-[10px]"><a href="#">Testimonials</a></li>
                            <li className="pb-[10px]"><a href="#">Careers</a></li>
                            <li className="pb-[10px]"><a href="#">Become an RD</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <h5 className="font-bold leading-[24px] pb-[10px]">Our apps</h5>
                        <ul>
                            <li className="pb-[10px]"><a href="#">ios</a></li>
                            <li className="pb-[10px]"><a href="#">Android</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright pt-[50px] pb-[110px] lg:pb-[32px] flex flex-col-reverse items-start gap-[40px] lg:flex-row lg:items-center justify-between text-white">
                    <div className="flex flex-col items-start lg:flex-row lg:items-center gap-[16px] lg:gap-[40px]">
                        <p className="text-anchortext">© 2024 CureValue,Inc. All rights reserved.</p>
                        <div className="flex items-center gap-[24px]">
                            <a href="#"><p className="text-anchortext">Privacy policy</p></a>
                            <a href="#"><p className="text-anchortext">Terms of service</p></a>
                        </div>
                    </div>
                    <div className="socialmedia flex items-center gap-[4px] lg:gap-[15px]">
                        <a href="#"><FaFacebook size={'21px'}/></a>
                        <a href="#"><FaInstagram size={'21px'}/></a>
                        <a href="#"><FaTiktok size={'21px'}/></a>
                        <a href="#"><FaLinkedin  size={'21px'}/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;