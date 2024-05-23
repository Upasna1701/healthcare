import { FaArrowRightLong } from "react-icons/fa6";


const Stories = () =>{
    return(
        <div className="flex justify-center items-center bg-white rounded-[30px] px-[25px] lg:px-[30px] py-[33px] stories-card">
            <div className="flex flex-col gap-[14px] lg:gap-[37px] justify-between text-left items-start">
                <div className="text-black">
                    <h3 className="text-[24px] font-semibold pb-[17px]">Praesent</h3>
                    <p className="text-anchortext lg:text-h4font/[22px] font-medium">Tempus semper sit sed tellus pretium euismod elementum ut vel. Volutpat leo odio sit eget. In facilisi in commodo aliquam. Mauris pellentesque commodo.</p>
                </div>
                <div>
                <a className="flex items-center gap-[5px] text-blueclr font-semibold text-smalltext lg:text-pfont cursor-pointer group hover:text-hoverclr">
                    Learn more
                    <span><FaArrowRightLong className="text-blueclr text-pfont group-hover:text-hoverclr"/>  </span>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Stories;