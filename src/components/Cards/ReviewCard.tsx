import { IoStar } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import reviewimg from '../../assets/images/review-img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewCard =() =>{
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                },
            }
            
        ],
      };
    return(
        <div>
            <div className="mb-[30px] lg:mb-[52px] pb-[27px] lg:pb-[58px] border-b border-borderclr">
                <div className="flex items-center gap-[5px] pb-[16px]">
                    <IoStar className="text-iconclr text-h3font lg:text-[30px]"/>
                    <h2 className="text-sc text-h3font font-semibold lg:text-[20px] lg:font-bold">Reviews</h2>
                </div>
                <div>
                    <p className="text-h3font lg:font-semibold text-cardpara"><span className="text-[#14AE5C] text-[49px] lg:text-[61px] font-medium">4.5</span> 6 Ratings & 5 Reviews</p>
                    <div className="flex flex-center gap-[7px] pb-[41px]">
                        <FaStar size={'35px'} className="text-starclr"/>
                        <FaStar size={'35px'} className="text-starclr"/>
                        <FaStar size={'35px'} className="text-starclr"/>
                        <FaStar size={'35px'} className="text-starclr"/>
                        <FaStar size={'35px'} className="text-borderclr"/>
                    </div>
                    <div className="review-slider">
                        <Slider {...settings} >
                            <div>
                                <div className="hover:shadow-cardshadow cursor-pointer px-[18px] py-[24px] text-center reviews-card ">
                                    <img src={reviewimg} alt="" className="text-center m-auto"/>
                                    <p className="text-sc text-h3font font-extrabold mt-[15px] pb-[15px]">4.75</p>
                                    <div className="flex flex-center justify-center gap-[4px] pb-[18px]">
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                    </div>
                                    <h3 className="text-[#646464] text-[24px] font-bold mb-[18px]">Wade Warren</h3>
                                    <p className="text-[#8C8C8C] text-h4font/[27px]">Overall,  it was a good experience. And I will visit this hospital again if medical intervention is neede</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:shadow-cardshadow cursor-pointer px-[18px] py-[24px] text-center reviews-card ">
                                    <img src={reviewimg} alt="" className="text-center m-auto"/>
                                    <p className="text-sc text-h3font font-extrabold mt-[15px] pb-[15px]">4.75</p>
                                    <div className="flex flex-center justify-center gap-[4px] pb-[18px]">
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                    </div>
                                    <h3 className="text-[#646464] text-[24px] font-bold mb-[18px]">Wade Warren</h3>
                                    <p className="text-[#8C8C8C] text-h4font/[27px]">Overall,  it was a good experience. And I will visit this hospital again if medical intervention is neede</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:shadow-cardshadow cursor-pointer px-[18px] py-[24px] text-center reviews-card ">
                                    <img src={reviewimg} alt="" className="text-center m-auto"/>
                                    <p className="text-sc text-h3font font-extrabold mt-[15px] pb-[15px]">4.75</p>
                                    <div className="flex flex-center justify-center gap-[4px] pb-[18px]">
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                    </div>
                                    <h3 className="text-[#646464] text-[24px] font-bold mb-[18px]">Wade Warren</h3>
                                    <p className="text-[#8C8C8C] text-h4font/[27px]">Overall,  it was a good experience. And I will visit this hospital again if medical intervention is neede</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:shadow-cardshadow cursor-pointer px-[18px] py-[24px] text-center reviews-card ">
                                    <img src={reviewimg} alt="" className="text-center m-auto"/>
                                    <p className="text-sc text-h3font font-extrabold mt-[15px] pb-[15px]">4.75</p>
                                    <div className="flex flex-center justify-center gap-[4px] pb-[18px]">
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                        <IoStar size={'30px'} className="text-starclr"/>
                                    </div>
                                    <h3 className="text-[#646464] text-[24px] font-bold mb-[18px]">Wade Warren</h3>
                                    <p className="text-[#8C8C8C] text-h4font/[27px]">Overall,  it was a good experience. And I will visit this hospital again if medical intervention is neede</p>
                                </div>
                            </div>
                            
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard ;