import { IoSearch } from "react-icons/io5";


const SearchField = () => {
    return(
        <div className="hidden lg:block mb-[36px] pb-[34px] border-b border-borderclr">
            <label className="text-cardpara text-[23px] lg:text-[20px] font-semibold">Search by facility name</label>
            <div className="mt-[8px] w-[80%] flex items-center gap-[5px]  border border-[#1C304A85] rounded-[10px] py-[10px] px-[9px]">
                <IoSearch className="text-cardpara text-[24px] "/>
                <input type="text" className="w-[80%] text-extraclr1 bg-transparent" style={{ outline: 'none', border: 'none' }}/>
            </div>
        </div>
    )
}

export default SearchField;