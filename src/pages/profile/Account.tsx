import { Button } from "@material-tailwind/react";

const Account = () => {
    return <>
        <div className="text-4xl font-semibold mb-5">Account</div>
        <div className="rounded-lg border border-slate-300 p-6 bg-white">
            <div className="flex justify-between items-center gap-3 mb-6">
                <div className="w-5/6">
                    <div className="">Name</div>
                    <div className="text-xl font-bold">Elvis Presley</div>
                </div>
                <Button
                    variant="outlined"
                    className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                    <img src="/icons/edit.svg" alt="edit" />
                    <div className="md:block hidden">Change</div>
                </Button>
            </div>
            <div className="flex justify-between items-center gap-3 mb-6">
                <div className="w-4/6">
                    <div className="">Email</div>
                    <div className="text-xl font-bold break-words">elvis.presley@gmail.com</div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                        <img src="/icons/add.svg" alt="edit" />
                        <div className="md:block hidden">Add another email</div>
                    </Button>
                    <Button
                        variant="outlined"
                        className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                        <img src="/icons/edit.svg" alt="edit" />
                        <div className="md:block hidden">Change</div>
                    </Button>
                </div>
            </div>
            <div className="flex justify-between items-center gap-3 mb-6">
                <div className="w-5/6">
                    <div className="">Password</div>
                    <div className="text-xl font-bold">******</div>
                </div>
                <Button
                    variant="outlined"
                    className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                    <img src="/icons/edit.svg" alt="edit" />
                    <div className="md:block hidden">Change</div>
                </Button>
            </div>
            <div className="flex justify-between items-center gap-3 mb-6">
                <div className="w-5/6">
                    <div className="">Phone number</div>
                    <div className="text-xl font-bold">+1 000-000-0000</div>
                </div>
                <Button
                    variant="outlined"
                    className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                    <img src="/icons/edit.svg" alt="edit" />
                    <div className="md:block hidden">Change</div>
                </Button>
            </div>
            <div className="flex justify-between items-center gap-3 mb-6">
                <div className="w-5/6">
                    <div className="">Address</div>
                    <div className="text-xl font-bold">St 32 main downtown, Los Angeles, California, USA</div>
                </div>
                <Button
                    variant="outlined"
                    className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                    <img src="/icons/edit.svg" alt="edit" />
                    <div className="md:block hidden">Change</div>
                </Button>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="w-5/6">
                    <div className="">Date of birth</div>
                    <div className="text-xl font-bold">01-01-1992</div>
                </div>
                <Button
                    variant="outlined"
                    className="flex justify-center items-center normal-case px-3 sm:px-auto gap-2 rounded-md text-dark-green">
                    <img src="/icons/edit.svg" alt="edit" />
                    <div className="md:block hidden">Change</div>
                </Button>
            </div>
        </div>
    </>
}

export default Account;