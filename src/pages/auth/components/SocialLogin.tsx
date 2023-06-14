import {
    Typography,
    Button
} from "@material-tailwind/react";

export const SocialLogin = () => {
    return (
        <>
            <div className="flex justify-between items-center my-8">
                <hr className="w-2/6" />
                <Typography className="opacity-50">Or login with</Typography>
                <hr className="w-2/6" />
            </div>
            <div className="grid gap-x-3 grid-cols-3">
                <Button
                    variant="outlined"
                    color="blue"
                    className="flex items-center justify-center"
                >
                    <img src="/images/facebook.svg" alt="facebook" className="h-6 w-6" />
                </Button>
                <Button
                    variant="outlined"
                    color="blue"
                    className="flex items-center justify-center"
                >
                    <img src="/images/google.svg" alt="google" className="h-6 w-6" />
                </Button>
                <Button
                    variant="outlined"
                    color="blue"
                    className="flex items-center justify-center"
                >
                    <img src="/images/apple.svg" alt="apple" className="h-6 w-6" />
                </Button>
            </div>
        </>
    )
}