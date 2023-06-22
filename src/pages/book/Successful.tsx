import { Button } from "@material-tailwind/react";
import Header from "components/Header";
import Footer from "components/Footer";
import BookHeader from "./components/BookHeader";

const Successful = () => {
    return (
        <div>
            <Header />
            <BookHeader />

            <div className="max-w-screen-xl mx-auto px-5 xl:px-0 pt-16 mb-24">
                <div className="flex flex-wrap justify-between mb-5">
                    <div className="mb-4">
                        <div className="text-3xl font-bold mb-5">KLM A380 Airbus</div>
                        <div className="flex gap-3 items-center">
                            <img src="/icons/pos-dark.svg" alt="" />
                            Van Wyck and JFK Expressway, Jamaica, NY 11430
                        </div>
                    </div>
                    <div className="mb-4 w-full md:w-auto flex md:block justify-end">
                        <div className="flex gap-3">
                            <Button variant="outlined" className="rounded-md px-4">
                                <svg width="16" height="16" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.52632 19.5334C10.1828 19.5668 11.5528 18.251 11.5862 16.5945C11.6196 14.938 10.3039 13.568 8.64734 13.5346C6.99082 13.5012 5.62086 14.817 5.58744 16.4735C5.55402 18.13 6.8698 19.5 8.52632 19.5334Z" stroke="#062D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M24.7045 10.8581C26.3611 10.8915 27.731 9.57575 27.7644 7.91924C27.7979 6.26272 26.4821 4.89276 24.8256 4.85934C23.169 4.82592 21.7991 6.1417 21.7657 7.79822C21.7322 9.45473 23.048 10.8247 24.7045 10.8581Z" stroke="#062D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M24.3413 28.8542C25.9978 28.8876 27.3677 27.5718 27.4012 25.9153C27.4346 24.2588 26.1188 22.8889 24.4623 22.8554C22.8058 22.822 21.4358 24.1378 21.4024 25.7943C21.369 27.4508 22.6847 28.8208 24.3413 28.8542Z" stroke="#062D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.171 18.0573L21.8179 24.332M22.1216 9.27634L11.2303 15.1166" stroke="#062D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                            <Button className="rounded-md flex items-center normal-case text-dark-green">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-white flex mb-16">
                    <div className="bg-lightpurple rounded-l-2xl px-2 sm:px-6 py-7 lg:w-[246px]">
                        <div>
                            <div className="text-2xl sm:text-4xl text-white">12:00 pm</div>
                            <div className="text-[12px] text-white opacity-60">New York (JFK)</div>
                        </div>
                        <div className="my-5">
                            <img src="/images/from-to-vertical.png" alt="" />
                        </div>
                        <div>
                            <div className="text-2xl sm:text-4xl text-white">12:00 pm</div>
                            <div className="text-[12px] text-white opacity-60">Ireland (SNN)</div>
                        </div>
                    </div>
                    <div className="w-full sm:w-5/6 lg:w-[calc(100%-246px)]">
                        <div className="rounded-tr-2xl bg-blue-500  p-2 sm:p-6 flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <img src="/images/avatar/1.png" className="border border-white rounded-full w-12 h-12" alt="" />
                                <div>
                                    <div className="sm:text-2xl font-bold">Elvis Presley</div>
                                    <div className="text-[12px] sm:text-sm">Boarding Pass N’123</div>
                                </div>
                            </div>
                            <div className="sm:text-[12px] text-sm font-bold">Business Class</div>
                        </div>
                        <div>
                            <div className="flex flex-wrap">
                                <div className="sm:w-1/2 lg:w-1/4 p-5 flex gap-2 items-center">
                                    <img src="/icons/date-border.svg" alt="i" />
                                    <div>
                                        <div className="text-sm opacity-60">Date</div>
                                        <div className="text-[12px]">29/03/2023</div>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 lg:w-1/4 p-5 flex gap-2 items-center">
                                    <img src="/icons/time-border.svg" alt="i" />
                                    <div>
                                        <div className="text-sm opacity-60">Flight time</div>
                                        <div className="text-[12px]">06:00</div>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 lg:w-1/4 p-5 flex gap-2 items-center">
                                    <img src="/icons/gate-border.svg" alt="i" />
                                    <div>
                                        <div className="text-sm opacity-60">Gate</div>
                                        <div className="text-[12px]">A12</div>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 lg:w-1/4 p-5 flex gap-2 items-center">
                                    <img src="/icons/seat-border.svg" alt="i" />
                                    <div>
                                        <div className="text-sm opacity-60">Seat</div>
                                        <div className="text-[12px]">128</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-5 mt-5 mb-2 sm:mb-0">
                                <div>
                                    <div className="text-2xl sm:text-4xl font-bold">EK</div>
                                    <div className="text-sm sm:text-normal opacity-60">ABC12345</div>
                                </div>
                                <div>
                                    <img src="/images/barcode.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-56">
                    <div className="text-2xl font-medium mb-8">Terms and Conditions</div>
                    <div className="mb-8">
                        <div className="text-xl font-medium mb-4">Payments</div>
                        <ul className="list-disc text-sm px-6">
                            <li className="mb-3">If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. </li>
                            <li className="mb-3">If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.</li>
                            <li className="mb-3">Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <div className="text-xl font-medium mb-4">Contact Us</div>
                            <div>If you have any questions about our Website or our Terms of Use, please contact:</div>
                            <div>SWAPPS</div>
                            <div>SWAPPS Tower</div>
                            <div>P.O. Box: 22550</div>
                            <div>Tel Aviv, Israel</div>
                            <div>Further contact details can be found at swapps.com/help</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Successful;