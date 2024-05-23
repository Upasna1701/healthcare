import tickimg from '../assets/images/li-marker.png';
import tickimgblack from '../assets/images/tickimg-black.png';
import lineimg from '../assets/images/line.png';

const PricingTable = () => {



    return(
        <div className="py-[65px]">
            <h2 className="text-[30px] lg:text-regsize text-center font-bold text-extraclr2 pb-[32px]">Feature comparison</h2>
            <div className="container">
                <table className='w-[100%]'>
                        <tr className='flex items-end pt-[28px] pb-[20px] border-b border-[#C0C6D9] bg-white sticky top-0'>
                            <td className='hidden lg:block lg:w-[25%]'></td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-anchortext text-extraclr2 font-bold uppercase pb-[9px]">basic</p>
                                    <button className="bg-white text-pfont text-pc font-bold px-[20px] py-[10px] rounded-full border border-pc lg:flex lg:gap-[2px] hover:bg-pc hover:text-white">Select <span className='hidden lg:block'> package</span></button>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-anchortext text-extraclr2 font-bold uppercase pb-[9px]">gold</p>
                                    <button className="bg-white text-pfont text-pc font-bold px-[20px] py-[10px] rounded-full border border-pc lg:flex lg:gap-[2px] hover:bg-pc hover:text-white">Select <span className='hidden lg:block'> package</span></button>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-anchortext text-extraclr2 font-bold uppercase pb-[9px]">platinum</p>
                                    <button className="bg-white text-pfont text-pc font-bold px-[20px] py-[10px] rounded-full border border-pc lg:flex lg:gap-[2px] hover:bg-pc hover:text-white">Select <span className='hidden lg:block'> package</span></button>
                                </div>
                            </td>
                        </tr>
                    {/* first  */}
                    <tr className='flex items-end py-[12.5px] lg:pt-[28px] lg:pb-[20px] border-b border-[#C0C6D9]'>
                        <td className='w-[100%]'>
                            <div>
                                <p className="text-extraclr2 text-h4font font-bold">Account</p>
                            </div>
                        </td>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">User licenses </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">3 </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">10 </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Unlimited </p>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Multi-account support </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Mobile add-on Terms </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Contact us </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Contact us </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Contact us </p>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Setup and implementation fee </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Standard, annual </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Standard, annual </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Custom </p>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'></td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>

                    {/* second  */}
                    <tr className='flex items-end py-[12.5px] lg:pt-[28px] lg:pb-[20px] border-b border-[#C0C6D9] pt-[60px]'>
                        <td className='w-[100%]'>
                            <div>
                                <p className="text-extraclr2 text-h4font font-bold">Top use cases</p>
                            </div>
                        </td>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">User onboarding </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Product adoption </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Feedback </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Churn reduction </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">In-app messaging </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    {/* third  */}
                    <tr className='flex items-end py-[12.5px] lg:pt-[28px] lg:pb-[20px] border-b border-[#C0C6D9] pt-[60px]'>
                        <td className='w-[100%]'>
                            <div>
                                <p className="text-extraclr2 text-h4font font-bold">Trageting</p>
                            </div>
                        </td>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Audience segments </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Up to 5  </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Unlimited </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Unlimited </p>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Dynamic personalization </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Event triggering </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Flow priority </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>   
                    {/* fourth */}
                    <tr className='flex items-end py-[12.5px] lg:pt-[28px] lg:pb-[20px] border-b border-[#C0C6D9] pt-[60px]'>
                        <td className='w-[100%]'>
                            <div>
                                <p className="text-extraclr2 text-h4font font-bold">UI Patterns</p>
                            </div>
                        </td>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Tooltips </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Modals </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Slideouts </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Hotspots  </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Pins </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Banners </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Checklists </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">NPS </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Surveys </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Launchpad </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    {/* fifth  */}
                    <tr className='flex items-end py-[12.5px] lg:pt-[28px] lg:pb-[20px] border-b border-[#C0C6D9] pt-[60px]'>
                        <td className='w-[100%]'>
                            <div>
                                <p className="text-extraclr2 text-h4font font-bold">Services</p>
                            </div>
                        </td>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Support </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Email  </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Email and phone </p>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <p className="text-anchortext">Email and phone </p>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Dedicated Customer Success Manager </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Technical Implementation Manager </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex flex-col lg:flex-row items-center justify-between pt-[14px]'>
                        <div className='w-[100%] lg:w-[25%]'>
                            <td className='w-[100%] lg:w-[25%]'>
                                <div className="pb-[10px] lg:pb-[20px] flex items-start gap-[10px]">
                                    <p className="text-anchortext">Dedicated 90-day onboarding program </p>
                                    <a href="#"><span className="text-smalltext text-blueclr bg-[#338CFF21] rounded-full cursor-pointer px-[5px]">?</span></a>
                                </div>
                            </td>
                        </div>
                        <div className='flex items-center lg:justify-around justify-between w-[100%] lg:w-[75%]'>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={lineimg} className='w-[25px]'/>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimg} className='w-[18px]'/>

                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="pb-[20px] flex items-center lg:text-center lg:justify-center">
                                    <img src={tickimgblack} className='w-[18px]'/>
                                </div>
                            </td>
                        </div>
                    </tr>
                    <tr className='flex items-end pt-[28px] pb-[20px]'>
                            <td className='hidden lg:block lg:w-[25%]'></td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="flex flex-col items-center justify-center">
                                    <button className="bg-white text-pfont text-pc font-bold px-[20px] py-[10px] rounded-full border border-pc lg:flex lg:gap-[2px] hover:bg-pc hover:text-white">Select <span className='hidden lg:block'> package</span></button>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="flex flex-col items-center justify-center">
                                    <button className="bg-white text-pfont text-pc font-bold px-[20px] py-[10px] rounded-full border border-pc lg:flex lg:gap-[2px] hover:bg-pc hover:text-white">Select <span className='hidden lg:block'> package</span></button>
                                </div>
                            </td>
                            <td className='w-[31.33%] lg:w-[25%]'>
                                <div className="flex flex-col items-center justify-center">
                                    <button className="bg-white text-pfont text-pc font-bold px-[20px] py-[10px] rounded-full border border-pc lg:flex lg:gap-[2px] hover:bg-pc hover:text-white">Select <span className='hidden lg:block'> package</span></button>
                                </div>
                            </td>
                        </tr>
                </table>
            </div>
        </div>
    )
}

export default PricingTable;