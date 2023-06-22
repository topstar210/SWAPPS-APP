import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";

const TicketDetails = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <BookHeader />

            <div className="max-w-screen-xl mx-auto px-5 xl:px-0 pt-10 mb-20">
                <div className="text-4xl font-[900] mb-6">
                    Tickets Details
                    <div className="bg-hr w-24 h-2 rounded-r-lg my-3"></div>
                </div>

                <div className="rounded-lg border border-slate-300 p-6 bg-white">
                    <div className="flex justify-between items-center gap-3 mb-6">
                        <div className="w-5/6">
                            <div className="">Name</div>
                            <div className="text-xl font-bold">Elvis Presley</div>
                        </div>
                        <Button
                            variant="outlined"
                            className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                            <img src="/icons/edit.svg" alt="edit" />
                            <div className="md:block hidden">Change</div>
                        </Button>
                    </div>
                    <div className="flex justify-between items-center gap-3 mb-6">
                        <div className="w-4 /6">
                            <div className="">Email</div>
                            <div className="text-xl font-bold break-words">elvis.presley@gmail.com</div>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outlined"
                                className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                                <img src="/icons/add.svg" alt="edit" />
                                <div className="md:block hidden">Add another email</div>
                            </Button>
                            <Button
                                variant="outlined"
                                className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                                <img src="/icons/edit.svg" alt="edit" />
                                <div className="md:block hidden">Change</div>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-3 mb-6">
                        <div className="w-5/6">
                            <div className="">Phone number</div>
                            <div className="text-xl font-bold">+1 000-000-0000</div>
                        </div>
                        <Button
                            variant="outlined"
                            className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                            <img src="/icons/edit.svg" alt="edit" />
                            <div className="md:block hidden">Change</div>
                        </Button>
                    </div>
                    <div className="flex justify-between items-center gap-3 mb-6">
                        <div className="w-5/6">
                            <div className="">Address</div>
                            <div className="text-xl font-bold">St 32 main downtown, Los Angeles, California, USA</div>
                        </div>
                        <Button
                            variant="outlined"
                            className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                            <img src="/icons/edit.svg" alt="edit" />
                            <div className="md:block hidden">Change</div>
                        </Button>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <div className="w-5/6">
                            <div className="">Date of birth</div>
                            <div className="text-xl font-bold">01-01-1992</div>
                        </div>
                        <Button
                            variant="outlined"
                            className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                            <img src="/icons/edit.svg" alt="edit" />
                            <div className="md:block hidden">Change</div>
                        </Button>
                    </div>
                </div>

                <div className="flex justify-end my-10">
                    <div className="flex gap-3">
                        <Button onClick={() => navigate('/payment')} variant="outlined" size="lg" className="sm:w-[242px] mb-6 text-center">
                            Previous
                        </Button>
                        <Button onClick={() => navigate('/ticket-success')} size="lg" className="sm:w-[242px] mb-6 text-center bg-btn-primary">
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default TicketDetails;