import { Link } from "react-router-dom";
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

function Register() {
    return (
        <div className={`${authStyle.wrap} max-w-screen-xl`}>
            <div className="flex lg:justify-between">
                <div className="hidden lg:block lg:w-2/5">
                    <AuthCarousel />
                </div>
                <div className="w-full lg:w-3/5">
                    <div className="mx-auto lg:mx-10">
                        <AuthHeader title="Sign Up" text="Let’s get you all st up so you can access your personal account." />

                        <form className="mt-6">
                            <div className="mb-2 flex flex-col gap-4">
                                <div className="grid gap-x-3 grid-cols-2">
                                    <Input label="First Name" />
                                    <Input label="Last Name" />
                                </div>
                                <div className="grid gap-x-3 grid-cols-2">
                                    <Input type="email" label="Email" />
                                    <Input label="Phone Number" />
                                </div>
                                <Input type="password" label="Password" />
                                <Input type="password" label="Confirm Password" />
                            </div>
                            <Checkbox
                                label={
                                    (
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                        >
                                            I agree to all the 
                                            <a href="#" className="my-auto text-sm text-blue-400">&nbsp;Terms&nbsp;</a> 
                                            and 
                                            <a href="#" className="my-auto text-sm text-blue-400">&nbsp;Privacy Policies</a>
                                        </Typography>
                                    )
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button className="mt-6 text-black normal-case" fullWidth>
                                Create account
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have an account?{" "}
                                <Link to={'/login'} className="font-medium text-blue-500 transition-colors hover:text-blue-700">Login</Link>
                            </Typography>
                        </form>

                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;