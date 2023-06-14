import { useNavigate } from "react-router-dom";
import {
    Input,
    Button
} from "@material-tailwind/react";

import {
    AuthCarousel,
    AuthHeader,
    SocialLogin
} from "./components";
import { authStyle } from "./sharedStyle";

function ForgotPassword() {
    const navigate = useNavigate();

    return (
        <div className={`${authStyle.wrap} max-w-screen-lg`}>
            <div className="flex lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="w-80 sm:w-96 mx-auto lg:mx-0">
                        <AuthHeader
                            title="Forgot your password?"
                            titleSize="h3"
                            text="Don’t worry, happens to all of us. Enter your email below to recover your password"
                            backBtn={true}
                            backTxt="Back to login"
                            backLink="/login"
                        />

                        <form className="mt-8 mb-4">
                            <Input type="email" size="lg" label="Email" />
                            <Button
                                onClick={() => navigate("/auth/verify-code")}
                                className="mt-6 text-black normal-case" fullWidth>
                                Submit
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

export default ForgotPassword;