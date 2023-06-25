import { useNavigate } from "react-router-dom";
import { Button, Avatar, Rating } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";
import TicketsSection from "pages/home/TicketsSection";

const Ticket = () => {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-clip">
            <Header />

            {/* booking ... */}
            <BookHeader />

            <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between items-center px-5 lg:px-0 my-5">
                <div className="flex gap-5 items-center mb-4">
                    <img src="/images/KLM.png" alt="klm" />
                    <Button color="green" variant="outlined" className="rounded-xl normal-case">Auto Verification</Button>
                </div>
                <div className="mb-4 w-full sm:w-auto flex justify-end">
                    <div className="flex gap-2">
                        <Button variant="outlined" className="rounded-xl px-4">
                            <img src="/icons/heart.svg" className="w-5" alt="heart" />
                        </Button>
                        <Button variant="outlined" className="rounded-xl px-4">
                            <img src="/icons/share.svg" className="w-5" alt="share" />
                        </Button>
                        <Button onClick={() => navigate('/auth-to-book')} className="rounded-xl flex items-center bg-btn-primary">
                            BOOK NOW <img src="/icons/arrow-right.svg" className="w-[14px]" alt="" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-3xl mx-auto px-5 3xl:px-0">
                <div className="lg:flex bg-white rounded-xl px-5 sm:px-12 border border-gray-300 pt-8 mb-9">
                    <div className="lg:w-7/12 mb-5">
                        <div className="text-3xl font-bold mb-4">Information</div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="flex gap-2 items-center mb-4">
                                <img src="/icons/flight-up.svg" alt="flight-up" />
                                06:05 PM 29 Mar 2024
                            </div>
                            <div className="flex gap-2 items-center mb-4">
                                <img src="/icons/flight-down.svg" alt="flight-up" />
                                05:40 AM 30 Mar 2024
                            </div>
                            <div className="flex gap-2 items-center mb-4">
                                <img src="/icons/flight-down.svg" alt="flight-up" />
                                1 adult
                            </div>
                            <div className="flex gap-2 items-center mb-4">
                                <img src="/icons/flight-up.svg" alt="flight-up" />
                                Economy Class Class
                            </div>
                            <div className="flex gap-2 items-center mb-4">
                                <img src="/icons/flight-down.svg" alt="flight-up" />
                                Meal included
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-5/12 border-l-2 border-slate-300 px-5  mb-5">
                        <div className="text-3xl font-bold mb-4">Description</div>
                        <div>One way flight from New York John F Kennedy International Airport to Shannon Airport on 29th Mar 2024</div>
                    </div>
                </div>

                <div className="lg:flex gap-9">
                    <div className="lg:w-1/2 bg-white rounded-xl px-5 sm:px-12 border border-gray-300 pt-8 mb-8">
                        <div className="text-3xl font-bold mb-4">About the seller</div>
                        <div className="flex gap-4">
                            <div className="flex gap-4 items-center font-bold relative">
                                <Avatar src="/images/avatar/1.png" alt="avatar" />
                                <img src="/icons/check.svg" className="absolute bottom-0 left-8" alt="check" />
                                Mike J.
                            </div>
                            <div className="flex items-center gap-1">
                                <Rating unratedColor="blue" value={5} ratedColor="blue" />
                                <div className="text-[12px]">4.9 stars (71 reviews)</div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mb-5">
                            <Button variant="outlined" className="rounded-full normal-case">
                                View reviews
                            </Button>
                            <Button variant="outlined" className="rounded-full normal-case">
                                Message Seller
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 rounded-xl text-center flex justify-center items-center bg-bestthing bg-cover bg-center py-12 mb-8">
                        <div>
                            <div className="text-2xl font-bold text-white">THE 15 BEST Things to Do in Ireland</div>
                            <div className="flex justify-center">
                                <Button variant="outlined" color="white" size="sm" className="rounded-full normal-case mt-3 flex gap-1">
                                    Read More
                                    <img src="/icons/arrow-right.svg" className="w-[16px]" alt="" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl px-5 sm:px-12 border border-gray-300 pt-8 mb-9 relative">
                    <div className="text-3xl font-bold mb-4">Full Details</div>
                    <div className="lg:w-10/12 grid sm:grid-cols-2 lg:grid-cols-3 relative z-20">
                        {
                            [1, 1, 1, 1, 1, 1, 7, 8, 9].map((val, i) => <>
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-[14px] h-[14px] rounded-full bg-blue-500"></div>
                                    <div>
                                        <div className="text-blue-500">Outbound departure time</div>
                                        <div>29/03/2024 8:05 AM</div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                    <img src="/images/flight.gif" 
                            className="absolute -bottom-[35px] -right-[50px] w-[271px] h-[271px] -rotate-[19.254deg] rounded-full shadow-flight" 
                            alt="" />
                </div>

                <div>
                    <TicketsSection title="That may interest you" data={[]} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Ticket; 