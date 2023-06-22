import { Button } from "@material-tailwind/react";

const HotelRow = () => {
    return <>
        <div className="flex items-center justify-between rounded-lg bg-white mb-5 p-6">
            <div className="flex items-center gap-5">
                <div className="w-20 h-20 flex items-center justify-center border border-blue-300 rounded-lg">
                    <img src="/ticketlogos/hotels-sample.png" alt="" />
                </div>
                <div className="flex gap-3 items-center">
                    <div>
                        <div>Check-In</div>
                        <div className="text-xl font-semibold">Thur, Dec 8</div>
                    </div>
                    <div className="bg-dark-green w-5 h-[2px]"></div>
                    <div>
                        <div>Check-Out</div>
                        <div className="text-xl font-semibold">Fri, Dec 9</div>
                    </div>
                </div>
                <div className="w-[1px] h-12 bg-gray-300"></div>
                <div className="flex gap-5">
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/time-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Check-In time</div>
                                <div className="text-[12px]">12:00 pm</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/time-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Check-Out time</div>
                                <div className="text-[12px]">06:00 am</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/gate-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Room no.</div>
                                <div className="text-[12px]">On arrival</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button className="text-dark-green normal-case bg-blue-400 rounded-md" size="lg">Download Ticket</Button>
                <Button variant="outlined" className="rounded-md px-4" size="lg">
                    <img src="/icons/arrow-up.svg" className="rotate-90 w-4 h-4" alt="" />
                </Button>
            </div>
        </div>
    </>
}
export default HotelRow;