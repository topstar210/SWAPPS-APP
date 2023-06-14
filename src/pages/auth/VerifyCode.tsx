import { useNavigate } from "react-router-dom";
import {
    Input,
    Typography,
    Button
} from "@material-tailwind/react";

import {
    AuthCarousel,
    AuthHeader,
    SocialLogin
} from "./components";
import { authStyle } from "./sharedStyle";

function VerifyCode() {
    const navigate = useNavigate();

    return (
        <div className={`${authStyle.wrap} max-w-screen-lg`}>
            <div className="flex lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="w-80 sm:w-96 mx-auto lg:mx-0">
                        <AuthHeader
                            title="Verify code"
                            text="An authentication code has been sent to your email."
                            backBtn={true}
                            backTxt="Back to login"
                            backLink="/login"
                        />

                        <form className="mt-8 mb-4">
                            <Input size="lg" label="Enter Code" />
                            <Typography className="pt-2">
                                Didn’t receive a code?
                                <button className="text-blue-400 mx-2">Resend</button>
                            </Typography>
                            <Button
                                onClick={() => navigate("/login")}
                                className="mt-6 text-black normal-case" fullWidth>
                                Verify
                            </Button>
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

export default VerifyCode;