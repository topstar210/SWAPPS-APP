import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import type { To } from "react-router-dom";

interface AuthHeaderProps {
    title: String,
    titleSize?: String,
    text: String,
    backBtn?: Boolean,
    backTxt?: String,   // when backBtn === true
    backLink?: To       // when backBtn === true
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
                    <img src="/icons/arrow-back.svg" alt="arrow-back" />
                    <Link to={props.backLink ?? ""} className="pl-4">{props.backTxt}</Link>
                </div>
            }
            <Typography variant={props.titleSize ?? "h2"}>{props.title}</Typography>
            <Typography className="opacity-75 mt-1">{props.text}</Typography>
        </>
    )
}