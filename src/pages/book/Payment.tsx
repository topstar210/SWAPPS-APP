import { Button } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";
import PriceCard from "components/PriceCard";

const Payment = () => {
    return (
        <div>
            <Header />
            <BookHeader />

            <div className="lg:flex justify-between max-w-screen-xl mx-auto px-5 xl:px-0 pt-10 gap-10">
                <div className="">
                    <div className="w-full bg-white rounded-lg shadow-lg px-6 py-6 mb-8">
                        <div className="font-bold text-2xl mb-5">KLM A380 Airbus</div>
                        <div className="flex justify-between text-[20px] mb-6">
                            <div>Return Wed, Dec 8</div>
                            <div>8h 5m</div>
                        </div>
                        <div className="sm:flex justify-between items-center mb-10">
                            <div className="border border-blue-400 rounded flex justify-center items-center gap-5 px-5 py-4">
                                <img src="/images/KLM.png" className="w-[86px]" alt="klm" />
                                <div>
                                    <div className="text-2xl">KLM</div>
                                    <div className="text-sm">Airbus A320</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="px-6">
                                    <img src="/icons/flight-dark.svg" alt="" />
                                </div>
                                <div className="h-12 w-[1px] bg-gray-300"></div>
                                <div className="px-6">
                                    <img src="/icons/Wifi.svg" alt="" />
                                </div>
                                <div className="h-12 w-[1px] bg-gray-300"></div>
                                <div className="px-6">
                                    <img src="/icons/stop.svg" alt="" />
                                </div>
                                <div className="h-12 w-[1px] bg-gray-300"></div>
                                <div className="px-6">
                                    <img src="/icons/fast-food.svg" alt="" />
                                </div>
                                <div className="h-12 w-[1px] bg-gray-300"></div>
                                <div className="px-6">
                                    <img src="/icons/sitdown.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex items-center justify-between gap-3 xl:gap-6">
                            <div className="flex items-center justify-center gap-3">
                                <div className="text-2xl font-bold">06:05 PM</div>
                                <div>New York (JFK)</div>
                            </div>
                            <div className="sm:w-1/6 flex justify-center">
                                <img src="/images/from-to.png" alt="" />
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div className="text-2xl font-bold">06:05 PM</div>
                                <div>Ireland (SNN)</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-8">
                        <div className="flex justify-between items-center rounded-xl p-4 bg-blue-400">
                            <div className="text-white">
                                <div className="pb-3">Pay in full</div>
                                <div className="text-sm">Pay the total and you are all set</div>
                            </div>
                            <div>
                                <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-white">
                                    <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center rounded-xl p-4">
                            <div className="">
                                <div className="pb-3">Pay part now, part later</div>
                                <div className="text-sm">Pay $200 now, and the rest ($114) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</div>
                            </div>
                            <div>
                                <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-black">
                                    <div className="w-[10px] h-[10px] rounded-full bg-white hidden"></div>
                                </div>
                            </div>
                        </div>
                        <div className="underline text-[12px] mx-4">More info</div>
                    </div>

                    <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-8">
                        <div className="flex justify-between items-center rounded-xl p-4 py-7 bg-blue-400">
                            <div className="text-white flex items-center gap-4">
                                <img src="/images/Visa.png" className="mr-2" alt="" />
                                <div className="font-bold">**** 4321</div>
                                <div className="text-sm">02/27</div>
                            </div>
                            <div>
                                <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-white">
                                    <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center border-2 rounded-2xl border-dashed border-blue-400 mt-4">
                            <div className="text-center py-8">
                                <img src="/icons/Add_circle.svg" className="mx-auto" alt="" />
                                <div className="text-[12px]">Add a new card</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <PriceCard />
                    <div className="flex gap-3">
                        <Button variant="outlined" size="lg" className="w-1/2 text-center">
                            Previous
                        </Button>
                        <Button size="lg" className="w-1/2 text-center bg-btn-primary">
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Payment;