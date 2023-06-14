import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface AuthHeaderProps {
    title: String,
    text: String,
    backBtn?: Boolean,
    backTxt?: String
}

export const AuthHeader = (props: AuthHeaderProps) => {
    return (
        <>
            <div className="flex mb-7">
                <img src="/images/logo.svg" alt="logo" />
                <img src="/images/logo-txt.svg" className="ml-3 my-auto" alt="logo" />
            </div>
            {
                props.backBtn &&
                <div className="flex items-center mb-3">
                    <img src="/images/arrow-back.svg" alt="arrow-back" />
                    <Link to="/register" className="pl-4">{ props.backTxt }</Link>
                </div>
            }
            <Typography variant="h2">{ props.title }</Typography>
            <Typography className="opacity-75 mt-1">{ props.text }</Typography>
        </>
    )
}