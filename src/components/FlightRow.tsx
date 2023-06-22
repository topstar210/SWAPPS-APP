import { Button } from "@material-tailwind/react";

const FlightRow = () => {
    return <>
        {/* flight row */}
        <div className="flex items-center justify-between rounded-lg bg-white mb-5 p-6">
            <div className="flex items-center gap-5">
                <div className="w-20 h-20 flex items-center justify-center border border-blue-300 rounded-lg">
                    <img src="/ticketlogos/dubai-airbus-a380-emirates-airline-logo.png" alt="" />
                </div>
                <div className="flex gap-3 items-center">
                    <div>
                        <div>Newark(EWR)</div>
                        <div className="text-xl font-semibold">12:00 pm</div>
                    </div>
                    <div className="bg-dark-green w-5 h-[2px]"></div>
                    <div>
                        <div>Newark(EWR)</div>
                        <div className="text-xl font-semibold">12:00 pm</div>
                    </div>
                </div>
                <div className="w-[1px] h-12 bg-gray-300"></div>
                <div className="flex gap-5">
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/date-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Date</div>
                                <div className="text-[12px]">29/03/2023</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/time-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Flight time</div>
                                <div className="text-[12px]">06:00</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/gate-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Gate</div>
                                <div className="text-[12px]">A12</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src="/icons/seat-border.svg" alt="i" />
                            <div>
                                <div className="text-sm opacity-60">Seat</div>
                                <div className="text-[12px]">128</div>
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
export default FlightRow;