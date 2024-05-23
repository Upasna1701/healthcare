import { MdOndemandVideo } from "react-icons/md";
import videoimg from "../../assets/images/Video.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef } from "react";
import { GrNext } from "react-icons/gr";

const AmbienceCard = () => {
    const sliderRef = useRef<any>(null);

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <GrNext />,
      };
    return(
        <div className="amenities">
            <div className="mb-[30px] lg:mb-[52px] pb-[50px] lg:pb-[58px] border-b border-borderclr">
                <div className="flex items-center gap-[5px] pb-[16px]">
                    <MdOndemandVideo className="text-iconclr text-h3font lg:text-[30px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Ambience</h2>
                </div>




                <div className="relative">
                    <Slider {...settings} ref={sliderRef}>
                        <div className="am-card">
                            <div className="flex flex-col lg:flex-row items-center gap-[42px]">
                                <div>
                                    <iframe className="rounded-[20px] w-[100%] lg:w-[300px] 2xl:w-[380px]" height="211" src="https://www.youtube.com/embed/PjXA4xhqcws?si=u2jJXhra73bsTymT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <div className="text-center lg:text-left lg:max-w-[35%]">
                                    <h3 className="text-[24px] lg:text-[20px] font-semibold lg:font-bold text-iconclr mb-[8px]">Medical Park Lorem Ipsum </h3>
                                    <p className="text-pfont lg:text-anchortext">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="am-card">
                            <div className="flex flex-col lg:flex-row items-center gap-[42px]">
                                <div>
                                    <iframe className="rounded-[20px] w-[100%] lg:w-[300px] 2xl:w-[380px]" height="211" src="https://www.youtube.com/embed/PjXA4xhqcws?si=u2jJXhra73bsTymT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <div className="text-center lg:text-left lg:max-w-[35%]">
                                    <h3 className="text-[24px] lg:text-[20px] font-semibold lg:font-bold text-iconclr mb-[8px]">Medical Park Lorem Ipsum </h3>
                                    <p className="text-pfont lg:text-anchortext">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                                </div>
                            </div>
                        </div>

                        <div className="am-card">
                            <div className="flex flex-col lg:flex-row items-center gap-[42px]">
                                <div>
                                    <iframe className="rounded-[20px] w-[100%] lg:w-[300px] 2xl:w-[380px]" height="211" src="https://www.youtube.com/embed/PjXA4xhqcws?si=u2jJXhra73bsTymT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <div className="text-center lg:text-left lg:max-w-[35%]">
                                    <h3 className="text-[24px] lg:text-[20px] font-semibold lg:font-bold text-iconclr mb-[8px]">Medical Park Lorem Ipsum </h3>
                                    <p className="text-pfont lg:text-anchortext">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                                </div>
                            </div>
                        </div>

                        <div className="am-card">
                            <div className="flex flex-col lg:flex-row items-center gap-[42px]">
                                <div>
                                    <iframe className="rounded-[20px] w-[100%] lg:w-[300px] 2xl:w-[380px]" height="211" src="https://www.youtube.com/embed/PjXA4xhqcws?si=u2jJXhra73bsTymT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                                <div className="text-center lg:text-left lg:max-w-[35%]">
                                    <h3 className="text-[24px] lg:text-[20px] font-semibold lg:font-bold text-iconclr mb-[8px]">Medical Park Lorem Ipsum </h3>
                                    <p className="text-pfont lg:text-anchortext">m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                    <div className="hidden slider-arrows lg:flex items-center absolute right-0 top-0 bottom-0 my-auto">
                        <div className="next-arrow" onClick={handleNextClick}>
                        <GrNext
                            size={"30px"}
                            className="text-iconclr2 cursor-pointer hover:text-hoverclr"
                        />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AmbienceCard;