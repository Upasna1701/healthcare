import Header from "../Header";
import LoginFooter from "./LoginFooter";

const ForgotPassword = () => {
    return (
        <div className="">
            <Header/>
            <div className="relative">
                <div className="pt-[100px] pb-[600px] lg:pb-[500px] relative z-20">
                    <div className="flex flex-col  justify-center px-[24px] py-[80px] max-w-[100%] lg:max-w-[30%] mx-auto">
                        <p className="text-center pb-[20px]">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                        <div className="flex flex-col gap-[4px] mb-[20px]">
                            <label className="text-pfont text-lightblack font-semibold">Email</label>
                            <input placeholder="Example@gmail.com"  type="email" name="email" autoComplete="off" className="form-control bg-transparent border border-[#abbed1] py-[4px] px-[12px] rounded-[5px]"/>
                        </div>
                        <div className="d-grid mb-[25px]">
                            <button type="submit" className="bg-pc text-white rounded-full w-[100%] text-pfont font-medium py-[8px] cursor-pointer group hover:bg-white border border-pc">
                                <span className="indicator-label group-hover:text-pc">Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
                <LoginFooter/>
            </div>
        </div>
    )
}

export default ForgotPassword;  