import { useNavigate } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";

import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";
import { SocialLogin } from "pages/auth/components";
import PriceCard from "components/PriceCard";

const AuthToBook = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <BookHeader />

            <div className="lg:flex justify-between max-w-screen-xl mx-auto px-5 xl:px-0 pt-10 gap-10 mb-56">
                <div className="bg-white rounded-lg shadow-lg px-6 py-6 mb-8">
                    <div className="text-3xl font-bold mb-4">Login or Sign up to book</div>
                    <Input label="Phone Number" size="lg" className="rounded-sm" />
                    <div className="text-sm mt-4">
                        We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                    </div>
                    <Button onClick={() => navigate('/payment')} className="w-full mt-5 normal-case text-black">Continue</Button>
                    <SocialLogin />
                    <Button
                        size="lg"
                        className="w-full mt-5 normal-case text-black flex items-center justify-center gap-3"
                        variant="outlined">
                        <img src="/icons/email.svg" alt="" />
                        Continue with email
                    </Button>
                </div>
                <div className="lg:w-5/7 lg:max-w-[450px]">
                    <PriceCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AuthToBook;