import { Link, useNavigate } from "react-router-dom";
import {
    Input,
    Typography,
    Checkbox,
    Button
} from "@material-tailwind/react";

import {
    AuthCarousel,
    AuthHeader,
    SocialLogin
} from "./components";
import { authStyle } from "./sharedStyle";
import { useAppContext } from "context/AppContext";

function Login() {
    const navigate = useNavigate();
    const context = useAppContext();

    const handleLogin = () => {
        context?.setIsLogined(true);
        navigate("/");
    }

    return (
        <div className={`${authStyle.wrap} max-w-screen-lg`}>
            <div className="flex lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="w-80 sm:w-96 mx-auto lg:mx-0">
                        <AuthHeader title="Login" text="Login to access your Golobe account" />

                        <form className="mt-8 mb-4">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input type="email" size="lg" label="Email" />
                                <Input type="password" size="lg" label="Password" />
                            </div>
                            <div className="flex justify-between">
                                <Checkbox
                                    color="blue-gray"
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
                            <Button
                                onClick={handleLogin}
                                className="mt-6 text-black normal-case" fullWidth>
                                Login
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Don't have an account?{" "}
                                <Link to={'/register'} className="font-medium text-blue-500 transition-colors hover:text-blue-700">Sign up</Link>
                            </Typography>
                        </form>

                        <SocialLogin />
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <AuthCarousel />
                </div>
            </div>
        </div>
    );
}

export default Login;