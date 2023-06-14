import { Typography } from "@material-tailwind/react";

interface AuthHeaderProps {
    title: String,
    text: String
}

export const AuthHeader = (props: AuthHeaderProps) => {
    return (
        <>
            <div className="flex mb-7">
                <img src="/images/logo.svg" alt="logo" />
                <img src="/images/logo-txt.svg" className="ml-3 my-auto" alt="logo" />
            </div>
            <Typography variant="h1">{ props.title }</Typography>
            <Typography className="opacity-75 mt-1">{ props.text }</Typography>
        </>
    )
}