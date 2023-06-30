import { useState } from "react";
import DatePicker from 'react-datepicker';
import ReactSlider from "react-slider";
import 'react-datepicker/dist/react-datepicker.css';
import { Radio, Checkbox, Button } from "@material-tailwind/react";

const Sidebar = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const minutesFormat = (minutes: number) => {
        const date = new Date();
        date.setHours(0, minutes); // set hours to 0 and minutes to the value

        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return formattedTime;
    }

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
            <div className="px-6 py-10">
                <div className="text-[20px] font-bold w-full my-5">Filters</div>
                <div>
                    <div className="flex justify-between">
                        <div className="font-semibold">Price</div>
                        <button><img src="/icons/arrow-up.svg" alt="" /></button>
                    </div>
                    <div className="py-8">
                        <ReactSlider
                            onAfterChange={(val) => { }}
                            className="filter-slider w-full"
                            thumbClassName="filter-thumb"
                            trackClassName="filter-track"
                            defaultValue={[50, 1200]}
                            min={50}
                            max={1200}
                            renderThumb={(props, state) => <div {...props}>
                                <div className="f_mark"></div>
                                <div className="f_value">${state.valueNow}</div>
                            </div>}
                            renderTrack={(props, state) => <div {...props}></div>}
                            minDistance={1}
                        />
                    </div>
                    <div className="bg-[#062D4A] opacity-25 h-[0.5px] my-10" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="font-semibold">Departure Time</div>
                        <button><img src="/icons/arrow-up.svg" alt="" /></button>
                    </div>
                    <div className="py-8">
                        <ReactSlider
                            onAfterChange={(val) => { }}
                            className="filter-slider w-full"
                            thumbClassName="filter-thumb"
                            trackClassName="filter-track"
                            defaultValue={[0, 1440]}
                            min={0}
                            max={1440}
                            renderThumb={(props, state) => <div {...props}>
                                <div className="mark-wrap"><div className="f_mark"></div></div>
                                <div className="text-sm w-[65px]">{minutesFormat(state.valueNow)}</div>
                            </div>}
                            renderTrack={(props, state) => <div {...props}></div>}
                            minDistance={1}
                        />
                    </div>
                    <div className="bg-[#062D4A] opacity-25 h-[0.5px] my-10" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="font-semibold">Airlines</div>
                        <button><img src="/icons/arrow-up.svg" alt="" /></button>
                    </div>
                    <div className="py-3">
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-1"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-1" className="ml-3">
                                Emirated
                            </label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-wizz"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-wizz" className="ml-3">
                                WIZZ
                            </label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-air-china"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-air-china" className="ml-3">
                                AIR CHINA
                            </label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-delta"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-delta" className="ml-3">
                                DELTA AIRLINES
                            </label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-fly-dubai"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-fly-dubai" className="ml-3">
                                Fly Dubai
                            </label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-qatar"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-qatar" className="ml-3">
                                Qatar
                            </label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                id="airlines-ethihad"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{ className: "px-0" }}
                            />
                            <label htmlFor="airlines-ethihad" className="ml-3">
                                Etihad
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar