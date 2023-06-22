import { useState } from "react";
import AddNewCardModal from "components/modals/AddNewCardModal";

const PaymentMethods = () => {
    const [openModal, setOpenModal] = useState(false);

    return <>
        <div className="text-3xl sm:text-4xl font-semibold mb-5">Payment methods</div>
        <div className="rounded-xl border border-slate-300 p-6 pb-0 bg-white">
            <div className="md:flex justify-start gap-5">
                <div className="w-full md:w-1/2 lg:w-1/3 rounded-xl bg-[#51B3FF] p-5 mb-6">
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <div>**** **** ****</div>
                            <div className="text-3xl font-semibold -mt-2">4321</div>
                        </div>
                        <button>
                            <img src="/icons/Bin.svg" className="w-6" alt="" />
                        </button>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[12px]">Valid Thru</div>
                            <div className="text-2xl font-semibold">4321</div>
                        </div>
                        <img src="/images/visa-dark.png" className="w-[52px]" alt="" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
                    <div className="h-full flex items-center justify-center border-2 rounded-2xl border-dashed border-blue-400">
                        <div onClick={() => setOpenModal(!openModal)} className="text-center py-10 sm:py-8 cursor-pointer">
                            <img src="/icons/Add_circle.svg" className="mx-auto" alt="" />
                            <div className="text-[12px]">Add a new card</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {openModal && <AddNewCardModal setOpenModal={setOpenModal} />}
    </>
}

export default PaymentMethods;