import { useState } from "react";
import { RiBubbleChartFill } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdEdit } from "react-icons/md";
import sparkle from '../../assets/images/edit-sparkle.svg'

const ChatbotRight = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return(
        <div className="h-[100%] hidden lg:block">

            <button className={`knowmorebtn flex gap-[8px] items-center px-[30px] pt-[10px] pb-[15px] lg:pb-[30px] rounded-t-[30px] text-smalltext lg:text-pfont font-semibold  whitespace-nowrap shadow-cardshadow transition-300 ${showDetails ? 'right-[-60px] lg:right-[-80px] bg-pc text-white ' : 'right-[190px] lg:right-[170px] bg-white text-pc'}`} onClick={toggleDetails}><RiBubbleChartFill className={`lg:text-[24px] ${showDetails ? 'text-white ' : 'text-pc'} `}/>Know more</button>

            <div className={`bg-white pt-[25px] h-[100%] lg:sticky fixed top-[80px] transition-all duration-500 rounded-[20px] z-0 min-w-[258px] max-w-[258px] right-0 ${showDetails ? 'hidecontent' : ' '} chatinfo pb-[30px]`}>
                <div className='flex flex-col items-start justify-between h-[100%] '>
                    <div className='px-[24px] chat-introduction mb-[70px]'>
                        <div className='flex items-center gap-[7px] pb-[19px] mb-[17px] border-b border-[#E2E8F0] transition-300' >
                            <MdKeyboardArrowLeft className='text-cardpara text-[24px]' />
                            <h3 className='text-pfont font-semibold text-[#1B2559]'>Back</h3>
                        </div>
                        <div className='pb-[30px] lg:pb-[50px] w-[100%] lg:w-[95%]'>
                            <h2 className='lg:text-pfont font-semibold text-cardpara pb-[14px]'>Introduction</h2>
                            <div className="">
                                <p className='text-cardpara font-medium text-smalltext pb-[20px]'>Eget tellus eu eget diam fermentum quisque. Orci orci cursus posuere amet pretium pellentesque urna natoque vehicula. Mauris purus nascetur turpis orci. Fermentum quam magna diam in viverra posuere tellus. Auctor vulputate tincidunt quam nulla.</p>
                                <p className='text-cardpara font-medium text-smalltext pb-[20px]'>Risus tristique praesent volutpat eget. Eget tellus eu eget diam fermentum quisque. </p>
                            </div>
                        </div>
                    </div>
                    <div className='px-[14px]'>
                        <div className='bg-pc text-white flex flex-col items-center text-center justify-center px-[19px] rounded-[20px] pt-[35px] pb-[21px] relative'>
                            <div className='bg-white rounded-full p-[5px] absolute top-[-50px]'>
                                <div className='bg-pc rounded-full p-[15px]'>
                                    <div className='bg-[#E4F0FF] rounded-full p-[11px]'>
                                        <img src={sparkle} className='w-[25px]'/>
                                    </div>
                                </div>
                            </div>
                            <h3 className='text-h4font font-bold pt-[16px]'>Magic Edit</h3>
                            <p className='text-anchortext font-medium pb-[32px]'>You can revise the dossier within 30 days</p>
                            <button className='text-pc border border-white font-semibold bg-white rounded-full text-anchortext px-[60px] py-[8px] hover:bg-pc hover:text-white'>Edit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatbotRight;