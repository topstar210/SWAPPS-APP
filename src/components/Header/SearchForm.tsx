import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from "@material-tailwind/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import HotelIcon from "assets/icons/Hotel"
import FlightIcon from "assets/icons/Flight"
import HolidayIcon from "assets/icons/Holiday"
import VoucherIcon from "assets/icons/Voucher"

const SearchForm = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selTab, setSelTab] = useState<Number | 0>(0);
    const navigate = useNavigate();

    return (
        <div className="mx-auto w-fit">
            <div className="sm:flex sm:gap-1 md:gap-3 px-5 text-[15px]">
                <div
                    onClick={() => setSelTab(0)}
                    className={`${selTab !== 0 ? 'text-white bg-blue-200' : 'text-blue-500 bg-white'} px-3 sm:px-3 py-1 rounded-t-xl flex justify-center items-center gap-1 hover:cursor-pointer`}>
                    <FlightIcon color={`${selTab===0?'#52B4FF':''}`} />
                    Flights
                </div>
                <div
                    onClick={() => setSelTab(1)}
                    className={`${selTab !== 1 ? 'text-white bg-blue-200' : 'text-blue-500 bg-white'} px-3 sm:px-3 py-1 sm:rounded-t-xl flex justify-center items-center gap-1 hover:cursor-pointer`}>
                    <HotelIcon color={`${selTab===1?'#52B4FF':''}`} />
                    Hotels
                </div>
                <div
                    onClick={() => setSelTab(2)}
                    className={`${selTab !== 2 ? 'text-white bg-blue-200' : 'text-blue-500 bg-white'} px-3 sm:px-3 py-1 sm:rounded-t-xl flex justify-center items-center gap-1 hover:cursor-pointer`}>
                    <HolidayIcon color={`${selTab===2?'#52B4FF':''}`} />
                    Holidays
                </div>
                <div
                    onClick={() => setSelTab(3)}
                    className={`${selTab !== 3 ? 'text-white bg-blue-200' : 'text-blue-500 bg-white'} px-3 sm:px-3 py-1 rounded-b-xl sm:rounded-b-none mb-5 sm:mb-0 sm:rounded-t-xl flex justify-center items-center gap-1 hover:cursor-pointer`}>
                    <VoucherIcon color={`${selTab===3?'#52B4FF':''}`} />
                    Vouchers
                </div>
            </div>
            <div className="bg-white py-5 px-3 rounded-2xl">
                <div className="lg:flex justify-between">
                    <div className="lg:mx-2 mx-auto w-[330px] sm:w-[360px] mb-2">
                        <div>From</div>
                        <div className="relative">
                            <input type="text"
                                className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                                placeholder="Tel Aviv, Central District, Israel" />
                            <img src="/icons/pos.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                        </div>
                    </div>
                    <div className="lg:mx-2 mx-auto w-[330px] sm:w-[360px] mb-2">
                        <div>To</div>
                        <div className="relative">
                            <input type="text"
                                className="pl-8 w-full outline-none bg-[#F4F8FA] h-12"
                                placeholder="Barcelona, Spain" />
                            <img src="/icons/pos.svg" className="grid place-items-center absolute text-blue-gray-100 top-5 left-2 -translate-y-1/4 w-5 h-5" alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="lg:mx-2 mx-auto w-[330px] sm:w-[360px] mb-2 flex gap-3">
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
                    <div className="lg:mx-2 mx-auto w-[330px] sm:w-[360px] mb-2 flex items-end">
                        <Button 
                            onClick={()=>navigate('/search')}
                            size="lg" 
                            className="w-full text-center text-white normal-case bg-[#062D4A] flex justify-center items-center gap-2">
                            Search Flights
                            <img src="/icons/flight.svg" alt="fligt-icon" />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchForm;