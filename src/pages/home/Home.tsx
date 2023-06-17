
import { Button } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import TicketsSection from "./TicketsSection";

const Home = () => {
    return (
        <div className="overflow-x-clip">
            <Header />

            {/* home here */}
            <div className="bg-white px-5 py-5">
                <div className="max-w-screen-3xl mx-auto lg:flex">
                    <div className="w-full lg:w-1/4">
                        <div className="min-w-[255px] my-5">
                            <img src="/images/HowSWAPPSworks_.svg" className="mb-5" alt="" />
                            <div className="bg-hr w-24 h-2 rounded-r-lg"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4 relative">
                        <div className="md:flex justify-between items-center lg:absolute md:mt-5">
                            <div className="rounded-3xl p-3 mb-3 bg-card-1 mx-auto">
                                <div className="bg-airticket bg-no-repeat bg-right-top p-4">
                                    <div className="text-white text-4xl font-bold mb-3">Sellers</div>
                                    <div className="h-1 w-[51px] bg-white mb-4"></div>
                                    <div className="text-white text-[14px]">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <Button variant="outlined" color="white" size="sm" className="rounded-full normal-case mt-3 flex gap-1">
                                            Read More
                                            <img src="/icons/arrow-right.svg" className="w-[16px]" alt="" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[60px] mx-3 hidden md:block">
                                <div className="w-[55px] h-[55px] rounded-full bg-switchbtn flex items-center justify-center">
                                    <img src="/icons/exchange.svg" className="scale-[0.8]" alt="" />
                                </div>
                            </div>
                            <div className="rounded-3xl p-3 mb-3 bg-purple mx-auto">
                                <div className="bg-buyerticket bg-no-repeat bg-right-top p-4">
                                    <div className="text-white text-4xl font-bold mb-3">Buyers</div>
                                    <div className="h-1 w-[51px] bg-white mb-4"></div>
                                    <div className="text-white text-[14px]">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <Button variant="outlined" color="white" size="sm" className="rounded-full normal-case mt-3 flex gap-1">
                                            Read More
                                            <img src="/icons/arrow-right.svg" className="w-[16px]" alt="" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* populer items */}
            <div className="max-w-screen-3xl mx-auto min-h-[500px] mt-16 px-5">
                {/* flights */}
                <TicketsSection title="Flight" data={[]} />
                <TicketsSection title="Hotels" data={[]} />
                <TicketsSection title="Holidays" data={[]} />
            </div>

            <Footer />
        </div>
    )
}

export default Home;