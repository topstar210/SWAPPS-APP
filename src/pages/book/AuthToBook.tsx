import { Input, Button } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";
import { SocialLogin } from "pages/auth/components";

const AuthToBook = () => {
    return (
        <div>
            <Header />
            <BookHeader />

            <div className="lg:flex max-w-screen-xl mx-auto px-5 3xl:px-0 pt-10 gap-10">
                <div className="lg:w-7/12 bg-white rounded-lg shadow-lg px-6 py-6 mb-8">
                    <div className="text-3xl font-bold mb-4">Login or Sign up to book</div>
                    <Input label="Phone Number" size="lg" className="rounded-sm" />
                    <div className="text-sm mt-4">
                        We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                    </div>
                    <Button className="w-full mt-5 normal-case text-black">Continue</Button>
                    <SocialLogin />
                    <Button
                        size="lg"
                        className="w-full mt-5 normal-case text-black flex items-center justify-center gap-3"
                        variant="outlined">
                        <img src="/icons/email.svg" alt="" />
                        Continue with email
                    </Button>
                </div>
                <div className="lg:w-5/7 bg-white rounded-lg shadow-lg px-6 py-5 mb-8">
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
            </div>
            <Footer />
        </div>
    )
}

export default AuthToBook;