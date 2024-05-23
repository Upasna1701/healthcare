import Header from "../Header";
import LoginFooter from "./LoginFooter";

const ResetPassword = () => {
    return (
        <div className="">
            <Header/>
            <div className="relative">
                <div className="pt-[100px] realtive z-20 pb-[600px] lg:pb-[500px]">
                    <div className="flex flex-col  justify-center px-[24px] py-[80px] max-w-[100%] lg:max-w-[30%] mx-auto">
                        <p className="text-center pb-[20px]">Enter a new password for <span className="font-medium">example@gmail.com</span></p>
                        <div className="flex flex-col gap-[4px] mb-[20px]">
                            <label className="text-pfont text-lightblack font-semibold">Password</label>
                            <input placeholder="Password"  type="password" name="password" autoComplete="off" className="form-control bg-transparent border border-[#abbed1] py-[4px] px-[12px] rounded-[5px]"/>
                        </div>
                        <div className="flex flex-col gap-[4px] mb-[20px]">
                            <label className="text-pfont text-lightblack font-semibold">Confirm Password</label>
                            <input placeholder="Confirm Password"  type="password" name="confirmpassword" autoComplete="off" className="form-control bg-transparent border border-[#abbed1] py-[4px] px-[12px] rounded-[5px]"/>
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

export default ResetPassword;