import { ImDownload } from "react-icons/im";
import { FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const BeforeLogin = () => {
    return(
        <div>
            <div className="w-[100%] withoutlogin fixed bottom-0 left-0 mx-auto text-center flex flex-col justify-end items-center pb-[55px] z-20 px-[24px]">
                <p className="text-white font-semibold text-[24px] lg:text-[30px] mb-[41px]">Create an account to see all the facility details</p>
                <div className="flex flex-col gap-[44px]">
                    <button className="bg-white text-lightblack rounded-full py-[14px] px-[90px] lg:px-[160px] text-center flex items-center justify-center gap-[16px] text-[15px] lg:text-[18px] lg:w-[570px]"><FaRegEnvelope className="text-lightblack text-[18px] lg:text-[24px]" />Sign up with email</button>
                    <button className="bg-white text-lightblack rounded-full py-[14px] px-[90px] lg:px-[160px] text-center flex items-center justify-center gap-[16px] text-[15px] lg:text-[18px] lg:w-[570px]"><FcGoogle className="text-lightblack text-[18px] lg:text-[24px]" />Continue with Google</button>
                    <button className="bg-white text-lightblack rounded-full py-[14px] px-[90px] lg:px-[160px] text-center flex items-center justify-center gap-[16px] text-[15px] lg:text-[18px] lg:w-[570px]"><FaApple className="text-lightblack text-[18px] lg:text-[24px]" />Continue with Apple</button>
                </div>
            </div>
        </div>
    )
}

export default BeforeLogin;