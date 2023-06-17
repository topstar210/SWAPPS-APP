import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import SearchForm from "./SearchForm";

interface HeaderProps {
    page?: string
}
const Header = ({ page }: HeaderProps) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignUP = () => {
        navigate('/register')
    }

    return (
        <div className="bg-header relative shadow-md">
            <div className="max-w-screen-3xl mx-auto flex justify-between items-center py-3 px-5 3xl:px-0">
                <a href="/" className="flex">
                    <img src="/images/logo-white.svg" alt="logo" />
                    <img src="/images/logo-white-txt.svg" alt="logo-text" />
                </a>
                <div className="grid gap-2 grid-cols-2">
                    <Button
                        onClick={() => handleLogin()}
                        size="sm"
                        variant="text"
                        className="text-white normal-case p-2 sm:p-auto">Sign In</Button>
                    <Button
                        onClick={() => handleSignUP()}
                        size="sm"
                        className="normal-case text-blue-500 bg-white p-2 sm:p-auto">Sign Up</Button>
                </div>
            </div>
            <div className="bg-white px-5">
                <div className="max-w-screen-3xl mx-auto flex justify-between items-center py-2">
                    <div className="grid gap-1 sm:gap-2 grid-cols-5">
                        <Button size="sm" className="text-white normal-case bg-blue-400 flex justify-center gap-1 p-2 sm:p-auto">
                            <img src="/icons/home.svg" className="h-[13px]" alt="home-icon" />
                            <div className="hidden sm:block">Home</div>
                        </Button>
                        <Button size="sm" className="text-white normal-case bg-blue-400 flex justify-center gap-1 p-2 sm:p-auto">
                            <img src="/icons/flight.svg" className="h-[13px]" alt="fligt-icon" />
                            <div className="hidden sm:block">Flights</div>
                        </Button>
                        <Button size="sm" className="text-white normal-case bg-blue-400 flex justify-center gap-1 p-2 sm:p-auto">
                            <img src="/icons/hotel.svg" className="h-[13px]" alt="fligt-icon" />
                            <div className="hidden sm:block">Hotels</div>
                        </Button>
                        <Button size="sm" className="text-white normal-case bg-blue-400 flex justify-center gap-1 p-2 sm:p-auto">
                            <img src="/icons/holiday.svg" className="h-[13px]" alt="fligt-icon" />
                            <div className="hidden sm:block">Holidays</div>
                        </Button>
                        <Button size="sm" className="text-white normal-case bg-blue-400 flex justify-center gap-1 p-2 sm:p-auto">
                            <img src="/icons/voucher.svg" className="h-[13px]" alt="fligt-icon" />
                            <div className="hidden sm:block">Vouchers</div>
                        </Button>
                    </div>
                    <div className="grid gap-2 grid-cols-2">
                        <Button size="sm" className="normal-case border-purple text-purple p-2 sm:p-auto" variant="outlined">Browse</Button>
                        <Button size="sm" className="normal-case text-white bg-purple p-2 sm:p-auto">Sell</Button>
                    </div>
                </div>
            </div>
            {page === "home" &&
                <div className="py-6 px-5">
                    <div className="w-full">
                        <SearchForm />
                        <img src="/images/flight-in-round.svg" className="hidden 2xl:block absolute 2xl:left-[80%] 3xl:left-[70%] -bottom-[125px]" alt="" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Header;