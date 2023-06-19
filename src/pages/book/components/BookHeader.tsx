const BookHeader = () => {
    return (
        <div className="bg-white flex justify-center mb-32">
            <div className="max-w-screen-xl lg:h-[263px] -mb-10 lg:mb-0 px-5 xl:px-0">
                <div className="max-w-screen-lg text-xl sm:text-2xl text-center font-bold py-10 px-5 sm:px-20">One way flight from New York John F Kennedy International Airport to Shannon Airport, Ireland on 29th Mar 2024</div>

                <div className="lg:flex relative text-white">
                    <div className="bg-book-head-1 lg:w-3/4 h-full rounded-3xl">
                        <div className="lg:w-2/3 px-8 py-6 bg-flight-up-place bg-[right_1rem_top] bg-no-repeat">
                            <div className="text-[30px] sm:text-[40px] font-bold">JFK</div>
                            <div className="h-1 w-[54px] bg-white"></div>
                            <div className="mt-3 lg:mt-5 mb-9 lg:mb-12">New York John F Kennedy International Airport, USA</div>
                            <div className="flex gap-1 items-center font-bold">
                                <img src="/icons/clock-white.svg" className="w-4" alt="" />
                                06:05 PM 29 Mar 2024
                            </div>
                        </div>
                    </div>
                    <div className="bg-book-head-2 lg:w-1/2 h-full rounded-3xl lg:absolute right-0 top-0">
                        <div className="absolute top-[50%] -left-7">
                            <img src="/icons/round-arrow.svg" className="-mt-7" alt="" />
                        </div>
                        <div className="px-8 py-6 bg-flight-down-place bg-[right_1rem_top] bg-no-repeat">
                            <div className="text-[30px] sm:text-[40px] font-bold">SNN</div>
                            <div className="h-1 w-[54px] bg-white"></div>
                            <div className="mt-3 lg:mt-5 mb-3">Shannon Airport, Ireland</div>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-1 items-center font-bold">
                                    <img src="/icons/clock-white.svg" className="w-4" alt="" />
                                    06:05 PM 29 Mar 2024
                                </div>
                                <div className="text-[30px] sm:text-[40px] font-bold">
                                    <span className="text-[#B1B8EF] text-[24px] font-normal line-through pr-3">$1057</span>
                                    $317
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookHeader;