import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const AuthCarousel = () => {
    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            dynamicHeight={true}
            showStatus={false}
            showThumbs={false}
        >
            <div className="h-full">
                <img
                    src="/images/login/waterplace.png"
                    alt="i-1"
                    className="h-full rounded-3xl w-full object-cover"
                />
            </div>
            <div className="h-full">
                <img
                    src="/images/login/airplane.png"
                    alt="i-2"
                    className="h-full rounded-3xl w-full object-cover"
                />
            </div>
            <div className="h-full">
                <img
                    src="/images/login/waterplace.png"
                    alt="i-3"
                    className="h-full rounded-3xl w-full object-cover"
                />
            </div>
        </Carousel>
    )
}