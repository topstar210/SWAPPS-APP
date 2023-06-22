import { useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Header from "components/Header";
import Footer from "components/Footer";
import Account from "./Account";
import PaymentMethods from "./PaymentMethods";
import History from "./History";

interface Props {
    page: string
}

const Profile = ({ page }: Props) => {
    const [openTab, setOpenTab] = useState(page);

    useEffect(()=>{
        setOpenTab(page);
    },[page])

    return <>
        <Header />

        <div className="max-w-screen-2xl mx-auto px-5 2xl:px-0 my-5">
            <div className="py-12">
                <div className="flex justify-center">
                    <div className="text-center">
                        <div className="relative">
                            <Avatar src="/images/avatar/1.png" className="border-2 border-blue-500 w-[160px] h-[160px]" alt="avatar" />
                            <img src="/icons/pen-blue-round.svg" className="absolute bottom-0 right-6" alt="" />
                        </div>
                        <div className="my-5">
                            <div className="text-3xl font-bold">Elvis Presley</div>
                            <div>elvis.presley@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full bg-white rounded-lg p-2">
                    <div onClick={()=>setOpenTab('account')} className="w-1/3 cursor-pointer px-5">
                        <div className={`md:w-2/3 py-3 ${openTab === "account" ? "border-b-4 border-blue-500" : ""}`}>Account</div>
                    </div>
                    <div onClick={()=>setOpenTab('history')} className="w-1/3 cursor-pointer px-5 border-l-2">
                        <div className={`md:w-2/3 py-3 ${openTab === "history" ? "border-b-4 border-blue-500" : ""}`}>History</div>
                    </div>
                    <div onClick={()=>setOpenTab('payment')} className="w-1/3 cursor-pointer px-5 border-l-2">
                        <div className={`md:w-2/3 py-3 ${openTab === "payment" ? "border-b-4 border-blue-500" : ""}`}>Payment <span className="hidden lg:inline-block">methods</span></div>
                    </div>
                </div>
            </div>

            <div className="mb-56">
                { openTab==="account" && <Account /> }
                { openTab==="history" && <History /> }
                { openTab==="payment" && <PaymentMethods /> }
            </div>

        </div>

        <Footer />
    </>
}

export default Profile;