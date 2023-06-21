const PriceCard = () => {
    return <div className="w-full bg-white rounded-lg shadow-lg px-6 py-5 mb-5">
        <div className="flex gap-3 border-b border-slate-300 pb-4 mb-4">
            <img src="/images/flight-place.png" className="rounded-2xl" alt="" />
            <div>
                <div>Economy </div>
                <div className="text-[20px] font-bold">KLM A380 Airbus</div>
                <div className="flex gap-2 items-center mt-6 text-[12px]">
                    <div className="border border-blue-400 rounded-md px-2 py-1">4.2</div>
                    <span className="font-bold">Very Good</span> 54 reviews
                </div>
            </div>
        </div>
        <div className="border-b border-slate-300 pb-4 mb-4">
            Your booking is protected by <strong>SWAPPS</strong>
        </div>
        <div className="border-b border-slate-300 pb-4 mb-4">
            <div className="font-bold mb-3">Price Details</div>
            <div className="flex justify-between mb-3">
                <div>Base Fare</div>
                <div>$200</div>
            </div>
            <div className="flex justify-between mb-3">
                <div>Discount</div>
                <div>$0</div>
            </div>
            <div className="flex justify-between mb-3">
                <div>Taxes</div>
                <div>$100</div>
            </div>
            <div className="flex justify-between">
                <div>Service Fee</div>
                <div>$14</div>
            </div>
        </div>
        <div className="">
            <div className="flex justify-between">
                <div>Total</div>
                <div>$314</div>
            </div>
        </div>
    </div>
}

export default PriceCard;