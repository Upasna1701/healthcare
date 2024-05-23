import { MdArrowBackIos } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
const PageBack = () =>{
    return (
        <>
            <div className="container pageback">
                <div className="flex items-center justify-between pt-[10px]">
                    <div className="flex items-center gap-[4px] lg:gap-[10px] cursor-pointer">
                        <MdArrowBackIos className="text-extraclr3 text-[24px] lg:text-iconclr3 lg:text-[20px]"/>
                        <a className="text-pfont lg:text-[18px] font-medium text-sc font-sans">See all Destinations</a>
                    </div>
                    <div className="lg:hidden flex items-center gap-[22px]">
                        <BsShareFill className="cursor-pointer text-h4font lg:text-[30px]"/>
                        <FaBookmark className="cursor-pointer text-h4font lg:text-[30px]"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageBack;