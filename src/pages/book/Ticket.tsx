import { Button } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";


const Ticket = () => {
    return (
        <div className="">
            <Header />

            {/* booking ... */}
            <BookHeader />

            <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between items-center px-5 lg:px-0">
                <div className="flex gap-5 items-center mb-4">
                    <img src="/images/KLM.png" alt="klm" />
                    <Button color="green" variant="outlined" className="rounded-xl normal-case">Auto Verification</Button>
                </div>
                <div className="mb-4 w-full sm:w-auto flex justify-end">
                    <div className="flex gap-2">
                        <Button variant="outlined" className="rounded-xl px-4">
                            <img src="/icons/heart.svg" className="w-5" alt="heart" />
                        </Button>
                        <Button variant="outlined" className="rounded-xl px-4">
                            <img src="/icons/share.svg" className="w-5" alt="share" />
                        </Button>
                        <Button className="rounded-xl flex items-center bg-btn-primary">
                            BOOK NOW <img src="/icons/arrow-right.svg" className="w-[14px]" alt="" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto">
                <div className="bg-white rounded-xl px-12">
                    <div>
                        <div className="text-3xl font-bold">Information</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Ticket; 