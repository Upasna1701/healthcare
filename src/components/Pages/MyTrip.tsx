import TripCard from "../Cards/TripCard";
import Header from "../Header";

const MyTrip = () => {
    return(
        <>
            <Header/>
            <div className="pt-[70px] lg:pt-[80px] flex flex-col justify-center items-center container">
                <div className="pt-[76px] text-left">
                    <h1 className="text-left text-extraclr3 text-h2font lg:text-regsize font-semibold text-left pb-[33px]">My Trip</h1>
                    <TripCard />
                    <TripCard />
                </div>
            </div>
        </>
    )
}

export default MyTrip;