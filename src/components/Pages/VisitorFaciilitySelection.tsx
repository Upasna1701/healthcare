import FAQ from "../FAQ";
import CityPageBack from "../Visitor/CityPageBack";
import CitySelection from "../Visitor/CitySelection";
import FilterBy from "../Visitor/FilterBy";
import SearchField from "../Visitor/SearchField";
import CityLocation from "../Maps/CityLocation";
import VisitorSelectionCard from "../Cards/VisitorSelectionCard";
import Header from "../Header";
import Footer from "../Footer";
import FaqNew from "../FaqNew";

const VisitorFaciilitySelection = () => {
    return(
        <div>
            <Header />
            <div className="bg-[#F5F7FA] pt-[70px] lg:pt-[80px]">
                <div className="">
                    <CityPageBack />
                </div>
                <div className="container flex flex-col lg:flex-row items-start gap-[20px] lg:gap-[30px] lg:pt-[32px] lg:pb-[150px]">
                    <div className="w-[100%] lg:w-[30%] xl:w-[27%] lg:sticky top-0">
                        <CitySelection />
                        <SearchField />
                        <FilterBy />
                    </div>
                    <div className="block w-[100%] lg:w-[60%] xl:w-[75%]">
                        <CityLocation/>
                        <VisitorSelectionCard />
                    </div>
                </div>
            </div>
            <FaqNew />
            <Footer />
        </div>
    )
}

export default VisitorFaciilitySelection;