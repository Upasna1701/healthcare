const SavingsMobile = () => {
    return(
        <div className="fixed z-10 bottom-0 block lg:hidden w-[100%] bg-[#fcfcfc] shadow-cardshadow">
            <div className="py-[16px] flex items-start justify-between container">
                <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[7px]">
                        <p className="text-[#14AE5C] text-h3font font-bold">$3500</p>
                        <p className="text-h6font text-cardpara font-semibold">Savings</p>
                    </div>
                    <div className="flex items-center gap-[7px]">
                        <p className="text-[#14AE5C] text-h4font font-bold">$6500</p>
                        <p className="text-h6font text-cardpara font-semibold">Total</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                    <button className="capitalize bg-pc text-white p-[10px] text-anchortext font-medium rounded-[3px]">Download Details</button>
                    <a className="text-h6font font-semibold text-[#006AF5]">More Details</a>
                </div>
            </div>
        </div>
    )
}

export default SavingsMobile;