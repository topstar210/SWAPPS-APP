import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Avatar, List, ListItem, Card } from "@material-tailwind/react";
import { useAppContext } from "context/AppContext";

import SearchForm from "./SearchForm";

interface HeaderProps {
    page?: string
}
const Header = ({ page }: HeaderProps) => {
    const dropWrapperRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const context = useAppContext();

    const [openDropdown, setOpenDropdown] = useState(false);

    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignUP = () => {
        navigate('/register')
    }

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropWrapperRef.current && !dropWrapperRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropWrapperRef]);

    return (
        <div className="bg-header relative shadow-md">
            <div className="max-w-screen-3xl mx-auto flex justify-between items-center py-3 px-5 3xl:px-0">
                <a href="/" className="flex">
                    <img src="/images/logo-white.svg" alt="logo" />
                    <img src="/images/logo-white-txt.svg" alt="logo-text" />
                </a>
                {
                    !context?.isLogined &&
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
                }
                {
                    context?.isLogined &&
                    <div className="flex gap-3 items-center justify-end relative">
                        <div className="hidden sm:flex items-center gap-1 text-white text-sm cursor-pointer">
                            <img src="/icons/heart-white.svg" alt="" />
                            Favourites
                        </div>
                        <div className="hidden sm:block bg-white h-6 w-[2px]"></div>
                        <div
                            ref={dropWrapperRef}
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="flex items-center gap-1 text-white text-sm relative cursor-pointer"
                        >
                            <img src="/icons/arrow-down-purple.svg" className="absolute bottom-0 left-8 z-10 w-4" alt="" />
                            <Avatar src="/images/avatar/1.png" alt="avatar" />
                            <div>Elvis Presley</div>
                            {
                                openDropdown &&
                                <Card className="w-76 absolute top-12 right-0 z-50">
                                    <List className="text-sm">
                                        <ListItem className="py-2">
                                            <div className="flex gap-3 items-center">
                                                <Avatar src="/images/avatar/1.png" className="w-16 h-16" alt="avatar" />
                                                <div>
                                                    <div className="text-base font-bold">Elvis Presley</div>
                                                    <div>Online</div>
                                                </div>
                                            </div>
                                        </ListItem>
                                        <div className="h-[1px] w-full bg-gray-300"></div>
                                        <ListItem className="py-2" onClick={() => navigate('/profile/account')}>
                                            <div className="w-full flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <img src="/icons/User-dark.svg" alt="" />
                                                    My account
                                                </div>
                                                <img src="/icons/arrow-up.svg" className="rotate-90 w-3 h-3" alt="" />
                                            </div>
                                        </ListItem>
                                        <ListItem className="py-2" onClick={() => navigate('/profile/payment')}>
                                            <div className="w-full flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <img src="/icons/Payments.svg" alt="" />
                                                    Payments
                                                </div>
                                                <img src="/icons/arrow-up.svg" className="rotate-90 w-3 h-3" alt="" />
                                            </div>
                                        </ListItem>
                                        <ListItem className="py-2 block sm:hidden">
                                            <div className="w-full flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <svg width="18" height="18" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9995 21.5C11.6985 21.4996 11.4045 21.4086 11.1558 21.2389C7.47189 18.7381 5.87673 17.0234 4.99689 15.9514C3.12189 13.6663 2.22423 11.3202 2.24954 8.77953C2.27908 5.86813 4.61486 3.5 7.45642 3.5C9.52267 3.5 10.9538 4.66391 11.7872 5.63328C11.8136 5.66368 11.8462 5.68805 11.8829 5.70476C11.9195 5.72146 11.9593 5.73011 11.9995 5.73011C12.0398 5.73011 12.0796 5.72146 12.1162 5.70476C12.1529 5.68805 12.1855 5.66368 12.2119 5.63328C13.0453 4.66297 14.4764 3.5 16.5427 3.5C19.3842 3.5 21.72 5.86812 21.7495 8.78C21.7749 11.3211 20.8763 13.6672 19.0022 15.9519C18.1224 17.0239 16.5272 18.7386 12.8433 21.2394C12.5946 21.4089 12.3006 21.4998 11.9995 21.5Z" fill="black" />
                                                    </svg>
                                                    Favourites
                                                </div>
                                                <img src="/icons/arrow-up.svg" className="rotate-90 w-3 h-3" alt="" />
                                            </div>
                                        </ListItem>
                                        <ListItem className="py-2">
                                            <div className="w-full flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <img src="/icons/settings.svg" alt="" />
                                                    Settings
                                                </div>
                                                <img src="/icons/arrow-up.svg" className="rotate-90 w-3 h-3" alt="" />
                                            </div>
                                        </ListItem>
                                        <div className="h-[1px] w-full bg-gray-300"></div>
                                        <ListItem className="py-2">
                                            <div className="w-full flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <img src="/icons/Support.svg" alt="" />
                                                    Support
                                                </div>
                                                <img src="/icons/arrow-up.svg" className="rotate-90 w-3 h-3" alt="" />
                                            </div>
                                        </ListItem>
                                        <ListItem className="py-2" onClick={() => navigate('/login')}>
                                            <div className="w-full flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <img src="/icons/Logout.svg" alt="" />
                                                    Logout
                                                </div>
                                            </div>
                                        </ListItem>
                                    </List>
                                </Card>
                            }
                        </div>
                    </div>
                }
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