import gallery1 from '../../assets/images/hospital1.png'
import gallery2 from '../../assets/images/hospital2.png'
import gallery3 from '../../assets/images/hospital3.png'
import doctorimg from '../../assets/images/doctorimg.png'
import doctorimgmob from '../../assets/images/Avatar.png';
import mobilegalleryimg from '../../assets/images/mobile-gallery-img.png'
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState, useEffect, useRef } from 'react';
import { IoMdLock } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const HospitalGallery = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    const sliderRef = useRef<any>(null);

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };
    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpenModal]);
    
    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
    };

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <MdKeyboardArrowLeft />,
        nextArrow: <MdKeyboardArrowRight />,
        afterChange: (currentSlide: number) => setActiveSlide(currentSlide)
        
      };

    return(
        <div>
            {/* mobile gallery start */}
                <div className='block pt-[11px] lg:hidden relative overflow-hidden'>
                    <Slider {...settings} ref={sliderRef}>
                        <div className="gallery-img">
                            <img src={mobilegalleryimg} alt="" className="w-[100%] h-[100%] max-h-[280px]"/>
                        </div>
                        <div className="gallery-img">
                            <img src={mobilegalleryimg} alt="" className="w-[100%] h-[100%] max-h-[280px]"/>
                        </div>
                        <div className="gallery-img">
                            <img src={mobilegalleryimg} alt="" className="w-[100%] h-[100%] max-h-[280px]"/>
                        </div>
                        <div className="gallery-img">
                            <img src={mobilegalleryimg} alt="" className="w-[100%] h-[100%] max-h-[280px]"/>
                        </div>
                        <div className="gallery-img">
                            <img src={mobilegalleryimg} alt="" className="w-[100%] h-[100%] max-h-[280px]"/>
                        </div>
                    </Slider>
                    <div className="slider-arrows flex items-center justify-between w-[90%] absolute left-0 right-0 top-0 bottom-0 m-auto">
                        <div className="prev-arrow" onClick={handlePrevClick}>
                            <MdKeyboardArrowLeft
                                size={"45px"}
                                className="text-white cursor-pointer hover:text-hoverclr"
                            />
                        </div>
                        <div className="next-arrow" onClick={handleNextClick}>
                        <MdKeyboardArrowRight
                            size={"45px"}
                            className="text-white cursor-pointer hover:text-hoverclr"
                        />
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-[90%] bg-transparent absolute bottom-[20px] left-[0] right-[0] mx-auto'>
                        <div className='flex items-center justify-center rounded-full bg-[#ffffffb3] w-fit py-[5px] pr-[15px]'>
                            <img src={doctorimgmob} alt="" className='max-w-[100px]'/>
                            <p className='text-h4font text-cradpara font-semibold'>45+ Doctors</p>
                        </div>
                        <div className='flex items-center justify-center rounded-[5px] w-fit py-[5px] px-[15px] bg-[#1A293DD4]'>
                            <p className='text-[15px] text-white font-semibold'>{activeSlide + 1}/5</p>
                            
                        </div>
                    </div>



                </div>
            {/* mobile gallery ends  */}

            <div className='container'>
                {/* desktop gallery starts  */}
                    <div className='hidden lg:flex items-center gap-[15px] pb-[70px]'>
                        <div className="flex items-center gap-[8px] cursor-pointer" onClick={toggleModal}>
                            <div className="gallery-img">
                                <img src={gallery1} alt="" className="w-[100%] h-[100%] max-w-[704px]"/>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <div className="gallery-img">
                                    <img src={gallery2} alt="" className="w-[100%] h-[100%] max-w-[346]"/>
                                </div>
                                <div className="gallery-img relative flex items-center justify-center">
                                    <img src={gallery3} alt="" className="w-[100%] h-[100%] max-w-[346]"/>
                                    <p className='absolute z-1 text-[37px] text-white font-medium flex items-center'><IoMdLock size={'37px'}/>8+ Images</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center'>
                            <h3 className='lg:text-h2font/[35px] font-medium text-center max-w-[60%] m-auto'>More than <span className='lg:text-h2font/[38px] font-semibold'>45+ Doctors</span></h3>
                            <img src={doctorimg} alt=""className='m-auto  xl:max-w-[70%] 2xl:max-w-[371px]'/>
                        </div>
                    </div>
                {/* desktop gallery ends  */}

                


                {isOpenModal && (
                <div className='modal-hospital z-20 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='modal-hospital-content bg-white rounded-lg pb-[30px] w-[60%] relative'>
                        <div className='max-h-[600px] overflow-y-scroll relative'>
                            <div className='flex items-center gap-[30px] sticky top-0 bg-pc z-10 p-[10px]'>
                                <span className='close cursor-pointer' onClick={toggleModal}><AiFillCloseCircle size={'40px'} className='text-white'/></span>
                                <p className='text-h3font text-white font-medium px-[10px]'>Photo gallery</p>
                            </div>
                            <div className='px-[20px]'>
                                <div className='my-[25px]'>
                                    <h2 className='text-regsize font-semibold px-[10px]'>All Photos</h2>
                                </div>

                                <div className='grid grid-cols-2 gap-[15px] px-[10px]'>
                                    <img src={gallery1} alt="" className='w-[100%] h-[300px]'/>
                                    <img src={gallery1} alt="" className='w-[100%] h-[300px]'/>
                                    <img src={gallery1} alt="" className='w-[100%] h-[300px]'/>
                                    <img src={gallery1} alt="" className='w-[100%] h-[300px]'/>
                                    <img src={gallery1} alt="" className='w-[100%] h-[300px]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default HospitalGallery;