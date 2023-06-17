import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Radio, Checkbox, Button } from "@material-tailwind/react";

const Sidebar = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="w-full max-w-[402px]">
            <div className="bg-white rounded-3xl border border-gray-300 py-2 px-5 text-sm">
                <div className="flex gap-10">
                    <Radio id="roundtrip" name="type" label="Roundtrip" defaultChecked />
                    <Radio id="oneway" name="type" label="One Way" />
                </div>
                <div className="w-full mb-3">
                    <div>From</div>
                    <div className="relative">
                        <input type="text"
                            className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                            placeholder="Tel Aviv, Central District, Israel" />
                        <img src="/icons/pos.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                    </div>
                </div>
                <div className="w-full mb-3">
                    <div>To</div>
                    <div className="relative">
                        <input type="text"
                            className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                            placeholder="Barcelona, Spain" />
                        <img src="/icons/pos.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                    </div>
                </div>
                <div className="flex justify-between gap-5 mb-3">
                    <div className="">
                        <div>Depart</div>
                        <div className="relative">
                            <DatePicker
                                selected={selectedDate}
                                dateFormat="eee MM/dd/yyyy"
                                className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                                onChange={(date: Date | null) => setSelectedDate(date)}
                            />
                            <img src="/icons/calendar.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div>Return</div>
                        <div className="relative">
                            <DatePicker
                                selected={selectedDate}
                                dateFormat="eee MM/dd/yyyy"
                                className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                                onChange={(date: Date | null) => setSelectedDate(date)}
                            />
                            <img src="/icons/calendar.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full mb-3">
                    <div>Cabin Class & Travelers</div>
                    <div className="relative">
                        <input type="text"
                            className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                            placeholder="1 adult, Economy" />
                        <img src="/icons/user.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                    </div>
                </div>
                <div className="flex mb-3">
                    <div className="flex items-center">
                        <Checkbox
                            id="nonstop-flights"
                            ripple={false}
                            className="hover:before:opacity-0"

                        />
                        <label htmlFor="nonstop-flights">
                            Nonstop flights
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Checkbox
                            id="add-nearby-airports"
                            ripple={false}
                            className="hover:before:opacity-0"

                        />
                        <label htmlFor="add-nearby-airports">
                            Add nearby airports
                        </label>
                    </div>
                </div>
                <div className="mb-2">
                <Button size="lg" className="w-full text-center text-white normal-case bg-search-btn flex justify-center items-center gap-2 rounded-2xl">
                    Search Flights
                    <img src="/icons/flight.svg" alt="fligt-icon" />
                </Button>
                </div>
            </div>

            {/* filters */}
            
        </div>
    )
}

export default Sidebar