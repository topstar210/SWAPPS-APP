// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-28 w-full bg-white">
            <div className="bg-header w-full h-4"></div>
            <div className="max-w-screen-xl mx-auto px-5 lg:flex justify-between py-10">
                <div className="w-[225px] mb-6">
                    <img src="/images/logo.svg" className="mx-auto" alt="logo" />
                    <img src="/images/logo-txt.svg" className="mx-auto" alt="logo-text" />
                </div>
                <div className="w-full lg:w-3/5 sm:flex flex-wrap">
                    <div className="w-full sm:w-1/3 mb-5">
                        <div className="text-2xl font-[900] mb-4">Navigation</div>
                        <div className="bg-hr w-16 h-2 rounded-r-lg my-3 mb-4"></div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                    </div>
                    <div className="w-full sm:w-1/3 mb-5">
                        <div className="text-2xl font-[900] mb-4">Explore</div>
                        <div className="bg-hr w-16 h-2 rounded-r-lg my-3 mb-4"></div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                    </div>
                    <div className="w-full sm:w-1/3 mb-5">
                        <div className="text-2xl font-[900] mb-4">Articles</div>
                        <div className="bg-hr w-16 h-2 rounded-r-lg my-3 mb-4"></div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                        <div className="flex gap-1 items-center"><img src="/icons/arrow-right-blue.svg" className="w-[14px]" alt="" /> Home page</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0F4F7] h-[58px] w-full">
                <div className="max-w-screen-xl px-5 mx-auto py-4">All rights reserved to SWAPPS ©</div>
            </div>
        </div>
    )
}

export default Footer;