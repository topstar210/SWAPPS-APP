const WzzInfo = () => {
    return (
        <div className="flex justify-between items-center mb-3">
            <img src="/images/wzz.svg" alt="wzz" />
            <div className="flex justify-between items-center w-3/4">
                <div className="text-right">
                    <div className="text-blue-500 font-bold">8:30 AM</div>
                    <div className="">TLV</div>
                </div>
                <div className="text-center w-1/2">
                    <div className="text-[10px]">
                        4h 50m <span className="text-blue-500">|</span> 05/12/22
                    </div>
                    <div className="w-full h-[1] border border-[#CCCCCC] relative">
                        <img src="/icons/right-arrow-gray.svg" className="absolute w-[8px] -right-1 -top-[4px]" alt="" />
                    </div>
                    <div className="text-[10px]">Nonstop</div>
                </div>
                <div className="">
                    <div className="text-blue-500 font-bold">12:30 PM</div>
                    <div className="">BCN</div>
                </div>
            </div>
        </div>
    )
}

export default WzzInfo;