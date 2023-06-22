import { useNavigate } from "react-router-dom";
import TimeInfo from "components/TimeInfo";

interface dataProps{
    data: object
}

const TicketCard = ({data}: dataProps) => {
    const navigate = useNavigate();

    return (
        <div className="p-5 sm:px-7 rounded-3xl bg-white border border-gray-300 w-full max-w-[550px] mb-3 mx-auto">
            <div className="flex justify-between gap-2 mb-3 text-[14px]">
                <div className="flex gap-1 items-center">
                    <img src="/icons/calendar.svg" alt="" />
                    05/12/22 - 05/27/22
                </div>
                <div className="flex gap-1 items-center">
                    <img src="/icons/pos.svg" alt="" />
                    Tel Aviv, Israel - Barcelona, Spain
                </div>
            </div>
            <TimeInfo data={data} />
            <TimeInfo data={data} />
            <div className="flex justify-between items-center gap-2 text-[14px]">
                <div>
                    <div>1 tickets <span className="text-blue-500">|</span> Round trip</div>
                    <div className="flex gap-1 items-center">
                        <img src="/icons/clock.svg" alt="" />
                        4 days left
                    </div>
                </div>
                <div className="flex cursor-pointer transition hover:scale-105" onClick={() => navigate('/ticket')}>
                    <div className="text-center bg-card-price text-white font-bold px-2 py-2 h-[60px] rounded-l-2xl">
                        <div className="text-base">45%</div>
                        <div className="text-sm">Saving</div>
                    </div>
                    <div className="text-[#52B4FF] text-2xl font-bold flex items-center justify-center h-[60px] px-1 pr-2 border border-blue-500 rounded-r-2xl">
                        $186
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard;