import { useState } from "react";

import Header from "components/Header";
import Sidebar from "./Sidebar";
import TicketCard from "components/TicketCard";
import Footer from "components/Footer";

import flights from "fakeData/flights";

const Search = () => {
    const [openMobileSearch, setOpenMobileSearch] = useState(false);

    return (
        <div className="relative">
            <Header page="search" />

            <div className="max-w-screen-3xl mx-auto sm:px-5 3xl:px-0 flex justify-between py-8">
                <div className="w-1/4 min-w-[400px] hidden xl:block">
                    <Sidebar />
                </div>
                {
                    openMobileSearch &&
                    <div className="xl:hidden absolute top-0 left-0 w-full h-full overflow-hidden bg-[#3872e082] z-50 transition-all ease-in-out duration-100">
                        <div className="rounded-3xl bg-white w-fit mt-16 relative">
                            <Sidebar />
                            <button
                                onClick={() => setOpenMobileSearch(!openMobileSearch)}
                                className="w-9 absolute -top-4 -right-4">
                                <img src="/icons/close-x-icon.jpg" alt="close" />
                            </button>
                        </div>
                    </div>
                }

                <div className="xl:w-3/4 xl:pl-5">
                    <div className="flex justify-between px-3">
                        <div>
                            <div className="text-2xl font-[900] mb-4">Flights</div>
                            <div className="bg-hr w-16 h-2 rounded-r-lg my-3 mb-4"></div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => setOpenMobileSearch(!openMobileSearch)}
                                className="mr-4 w-9 xl:hidden">
                                <img src="/icons/search-icon-image.jpg" alt="search" />
                            </button>

                            <select className="selectbox text-blue-400 rounded-lg border border-blue-400 px-2 text-sm py-1 bg-transparent" placeholder="Sort By">
                                <option value="">Sort By</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        {
                            flights.length > 0 &&
                            flights.map((data, i) => <div className="2xl:w-1/2 px-3 mx-auto">
                                <TicketCard key={i} data={data} />
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Search;