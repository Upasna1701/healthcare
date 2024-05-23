import arrowimg from '../assets/images/arrowimage.png'
import locimg from '../assets/images/loc-img.png'

const BuildingCommunity = () => {
    return(
        <div className='relative pt:[96px] pb-[135px] lg:py-[230px] business-community'>
            <div className="lg:grid lg:grid-cols-2 items-center container">
                <div>
                    <h2 className="text-h2font lg:text-[38px] text-pcolor font-semibold lg:max-w-[90%] 2xl:max-w-[70%] mb-[11px]">Building healthy communities together</h2>
                    <p className="text-anchortext lg:text-[18px] font-medium mb-[18px]">Weaving better health in our communities is at the heart of everything we do. It’s how we help more people and places prosper and is all inspired by faith, driven by innovation, and powered by humanity.</p>
                    <button className="btn border border-pc bg-pc text-white rounded-full text-[17px] font-medium py-[10px]  px-[27px] hover:bg-white hover:text-pc">See more</button>
                </div>
                <div className='mt-[40px] lg:mt-[0]'>
                    <img src={arrowimg} className='arrowimage absolute right-0 top-[27px] lg:top-0 bottom-0 my-auto z-0 2xl:w-[1000px] px-[24px] lg:px-[0]'/>
                    <div className='relative z-10'>
                        <div className='min-w-[200px] max-w-[200px] lg:min-w-[265px] lg:max-w-[265px] w-[100%] border border-hoverclr rounded-[14px] flex items-start px-[17px] py-[10px] lg:py-[24px] lg:px-[24px] gap-[10px] w-fit bg-white lg:absolute bottom:[66px] lg:bottom-unset lg:left-0 lg:right-0 lg:mx-auto 2xl:right-[-30%] healthy-one' >
                            <div className='min-w-[27px] lg:min-w-[39px] pt-[10px]'>
                                <img src={locimg} className='w-[27px] lg:w-[39px]'/>
                            </div>
                            <div>
                                <h2 className='text-pcolor font-semibold text-[33px]/[40px] lg:text-[46px]/[55px]'>1,000+</h2>
                                <p className='text-[10px] lg:text-smalltext text-[#656565] font-semibold'>Care sites in 21 states</p>
                            </div>
                        </div>
                        <div className='min-w-[200px] max-w-[200px] lg:min-w-[265px] lg:max-w-[265px] w-[100%] border border-hoverclr rounded-[14px] flex items-start px-[17px] py-[10px] lg:py-[24px] lg:px-[24px] gap-[10px] w-fit bg-white lg:absolute lg:right-0 lg:bottom-[88px] 2xl:bottom-[100px] 2xl:right-[-25%] healthy-two'>
                            <div className='min-w-[27px] lg:min-w-[39px] pt-[10px]'>
                                <img src={locimg} className='w-[27px] lg:w-[39px]'/>
                            </div>
                            <div>
                                <h2 className='text-pcolor font-semibold text-[33px]/[40px] lg:text-[46px]/[55px]'>140</h2>
                                <p className='text-[10px] lg:text-smalltext text-[#656565] font-semibold'>Hospitals in 21 states across the country</p>
                            </div>
                        </div>
                        <div className='min-w-[200px] max-w-[200px] lg:min-w-[265px] lg:max-w-[265px] w-[100%] border border-hoverclr rounded-[14px] flex items-start px-[17px] py-[10px] lg:py-[24px] lg:px-[24px] gap-[10px] w-fit bg-white lg:absolute lg:bottom-[45px] 2xl:left-[12%] healthy-three'>
                            <div className='min-w-[27px] lg:min-w-[39px] pt-[10px]'>
                                <img src={locimg} className='w-[27px] lg:w-[39px]'/>
                            </div>
                            <div>
                                <h2 className='text-pcolor font-semibold text-[33px]/[40px] lg:text-[46px]/[55px]'>140</h2>
                                <p className='text-[10px] lg:text-smalltext text-[#656565] font-semibold'>Hospitals in 21 states across the country</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BuildingCommunity;