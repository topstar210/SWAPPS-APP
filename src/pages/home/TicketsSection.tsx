import { useState } from "react";
import Carousel from "react-simply-carousel";
import { Button } from "@material-tailwind/react";

import TicketCard from "components/TicketCard";
import ArrowRight from "components/ArrowRight";

interface ServiceProps {
    title: string,
    data: []
}

const TicketsSection = ({
    title, data
}: ServiceProps) => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="py-12">
            <div className="text-4xl font-[900] mb-6">
                {title}
                <div className="bg-hr w-24 h-2 rounded-r-lg my-3"></div>
            </div>
            <div className="flex flex-wrap justify-between relative">
                <Carousel
                    preventScrollOnSwipe
                    swipeTreshold={50}
                    activeSlideIndex={activeSlide}
                    onRequestChange={setActiveSlide}
                    forwardBtnProps={{
                        children: <ArrowRight />,
                        style: {
                            width: 50,
                            height: 50,
                            position: 'absolute',
                            right: -25,
                            alignSelf: "center"
                        }
                    }}
                    dotsNav={{ show: false }}
                    speed={400}
                    responsiveProps={[
                        {
                            itemsToShow: 3,
                            itemsToScroll: 1,
                            maxWidth: 1500,
                        },
                    ]}
                    // centerMode
                >
                    {Array.from({ length: 10 }).map((item, index) => (
                        <div key={index} className="w-[350px] sm:w-[500px]">
                            <TicketCard />
                        </div>
                    ))}
                </Carousel>

                <div className="absolute right-0 -bottom-10">
                    <Button
                        variant="outlined"
                        color="blue"
                        size="sm"
                        className="rounded-full normal-case mt-3 px-10 flex gap-1 items-center">
                        Read More
                        <img src="/icons/arrow-right-blue.svg" className="w-[13px]" alt="" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TicketsSection;