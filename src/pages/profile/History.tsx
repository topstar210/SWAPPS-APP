import { useState } from "react";

import FlightRow from "components/FlightRow";
import HotelRow from "components/HotelRow";

const fakeData = [1,2,3];

const History = () => {
    const [openTab, setOpenTab] = useState('flight')

    return <>
        <div className="text-3xl sm:text-4xl font-semibold mb-5">Tickets/Bookings</div>
        <div className="mb-56">
            <div className="flex justify-between w-full bg-white rounded-lg p-2 mb-5">
                <div onClick={() => setOpenTab('flight')} className="w-1/2 cursor-pointer px-5">
                    <div className={`py-3 flex items-center gap-2 ${openTab === "flight" ? "border-b-4 border-blue-500" : ""}`}>
                        <img src="/icons/flight-dark.svg" alt="i" />
                        Flights
                    </div>
                </div>
                <div onClick={() => setOpenTab('hotels')} className="w-1/2 cursor-pointer px-5 border-l-2">
                    <div className={`py-3 flex items-center gap-2 ${openTab === "hotels" ? "border-b-4 border-blue-500" : ""}`}>
                        <img src="/icons/bed-dark.svg" alt="i" />
                        Hotels
                    </div>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <div className="min-w-[980px]">
                    {
                        openTab==="flight" && 
                        fakeData.map((flight, i) => <FlightRow key={i} />)
                    }
                    {
                        openTab==="hotels" && 
                        fakeData.map((hotel, i) => <HotelRow key={i} />)
                    }
                </div>
            </div>
        </div>
    </>
}

export default History;