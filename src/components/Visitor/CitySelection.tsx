const CitySelection = () => {
    return(
        <div className="lg:mb-[22px] lg:pb-[21px] border-none lg:border-b lg:border-borderclr ">
            <h2 className="text-h3font lg:text-[24px] text-[#14AE5C] font-semibold pb-[10px] lg:pb-[0]">Dental in</h2>
            <div>
                <select className="font-semibold text-h4font lg:text-[24px] text-iconclr bg-transparent appearance-none w-[100%] 2xl:w-[85%] selectcity cursor-pointer border border-[#c4cad3] lg:border-none lg:outline-none py-[6px] px-[17px] lg:px-[0] lg:py-[0] rounded-[10px] cityselect-input" >
                    <option>Istanbul, Turkey</option>
                    <option>Delhi, India</option>
                    <option>Istanbul, Turkey</option>
                    <option>Mumbai, India</option>
                </select>
            </div>
            {/* <div className="hidden lg:block">
                <select className="font-semibold text-[21px] text-greyclr bg-transparent appearance-none w-[75%] selectcity cursor-pointer" style={{ outline: 'none', border: 'none' }}>
                    <option>3 Months - 6 Months</option>
                    <option>3 Months - 6 Months</option>
                    <option>3 Months - 6 Months</option>
                    <option>3 Months - 6 Months</option>
                </select>
            </div> */}
        </div>
    )
}

export default CitySelection;