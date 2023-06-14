import React from "react"
import { useNavigate } from "react-router-dom";
import {
    Input,
    Typography,
    Checkbox,
    Button,
    Select, Option
} from "@material-tailwind/react";
import { countries } from "country-data-list";

import {
    AuthCarousel,
    AuthHeader
} from "./components";
import { authStyle } from "./sharedStyle";

function AddPayment() {
    const countriesAry = countries.all;
    const navigate = useNavigate();

    return (
        <div className={`${authStyle.wrap} max-w-screen-xl`}>
            <div className="flex lg:justify-between">
                <div className="hidden lg:block lg:w-2/5">
                    <AuthCarousel />
                </div>
                <div className="w-full lg:w-3/5">
                    <div className="mx-auto lg:mx-10">
                        <AuthHeader
                            title="Add a payment method"
                            text="Let’s get you all st up so you can access your personal account."
                            backBtn={true}
                            backTxt="Back"
                            backLink="/register"
                        />

                        <form className="mt-6">
                            <div className="mb-2 flex flex-col gap-4">
                                <div>
                                    <Input label="Card Number" />
                                </div>
                                <div className="grid gap-x-3 grid-cols-2">
                                    <Input type="email" label="Email" />
                                    <Input label="Phone Number" />
                                </div>
                                <Input label="Name on Card" />
                                <Select
                                    label="Select Country"
                                    selected={(element) =>
                                        element &&
                                        React.cloneElement(element, {
                                            className: "flex items-center px-0 gap-2 pointer-events-none",
                                        })
                                    }
                                >
                                    {countriesAry.map(({ name }) => (
                                        <Option key={name} value={name} className="flex items-center gap-2">
                                            {name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <Checkbox
                                color="blue-gray"
                                label={
                                    (
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                        >
                                            Securely save my information for 1-click checkout
                                        </Typography>
                                    )
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button
                                onClick={() => navigate("/")}
                                className="mt-6 text-black normal-case" fullWidth>
                                Add payment method
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal text-[12px] w-[85%] mx-auto">
                                By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
                            </Typography>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPayment;