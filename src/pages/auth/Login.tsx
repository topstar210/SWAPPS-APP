import { Link } from "react-router-dom";

import {
    Carousel,
    Input,
    Typography,
    Checkbox,
    Button
} from "@material-tailwind/react";

function Login() {
    return (
        <div className="max-w-screen-lg mx-auto px-5 md:px-10 py-16 2xl:py-24">
            <div className="flex lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="w-80 sm:w-96 mx-auto lg:mx-0">
                        <div className="flex mb-8">
                            <img src="/images/logo.svg" alt="logo" />
                            <img src="/images/logo-txt.svg" className="ml-3 my-auto" alt="logo" />
                        </div>
                        <Typography variant="h1">Login</Typography>
                        <Typography className="opacity-75 mt-1">Login to access your Golobe account</Typography>
                        <form className="mt-8 mb-2">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Email" />
                                <Input type="password" size="lg" label="Password" />
                            </div>
                            <div className="flex justify-between">
                                <Checkbox
                                    label={
                                        (
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                Remember me
                                            </Typography>
                                        )
                                    }
                                    containerProps={{ className: "-ml-2.5" }}
                                />
                                <Link to={'/auth/forgot-password'} className="my-auto text-sm text-blue-400">Forgot Password</Link>
                            </div>
                            <Button className="mt-6 text-black normal-case" fullWidth>
                                Login
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Don't have an account?{" "}
                                <a
                                    href="#"
                                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                                >
                                    Sign up
                                </a>
                            </Typography>
                        </form>
                        <div className="flex justify-between items-center my-8">
                            <hr className="w-2/6" />
                            <Typography className="opacity-50">Or login with</Typography>
                            <hr className="w-2/6" />
                        </div>
                        <div className="grid gap-x-3 grid-cols-3">
                            <Button
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center justify-center"
                            >
                                <img src="/images/facebook.svg" alt="facebook" className="h-6 w-6" />
                            </Button>
                            <Button
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center justify-center"
                            >
                                <img src="/images/google.svg" alt="google" className="h-6 w-6" />
                            </Button>
                            <Button
                                variant="outlined"
                                color="blue-gray"
                                className="flex items-center justify-center"
                            >
                                <img src="/images/apple.svg" alt="apple" className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <Carousel
                        className="rounded-2xl"
                        autoplay={true}
                        loop={true}
                        prevArrow={() => { }}
                        nextArrow={() => { }}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-blue-400 w-6" : "bg-white w-2"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <img
                            src="/images/login/waterplace.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/login/airplane.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="/images/login/airplane.png"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Login;