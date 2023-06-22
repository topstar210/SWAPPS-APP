import { Input, Checkbox, Button } from "@material-tailwind/react";
import ModalCover from "./ModalCover";

interface Props {
    setOpenModal: (val:boolean) => void
}

const AddNewCardModal = ({ setOpenModal }: Props) => {
    return <>
        <ModalCover>
            <div className="max-w-screen-sm rounded-lg shadow-lg p-5 py-10 sm:p-16 relative bg-white h-fit">
                <button onClick={() => setOpenModal(false)} className="absolute right-5 sm:right-16 top-5 sm:top-10"><img src="/icons/close.svg" alt="" /></button>

                <div className="text-3xl sm:text-3xl mb-8 font-bold">Add a new Card</div>
                <div className="relative mb-5">
                    <Input label="Card Number" />
                    <img src="/images/visa-blue.png" className="absolute right-5 top-3" alt="visa" />
                </div>
                <div className="sm:flex gap-3">
                    <div className="mb-5"><Input label="Exp.Date" /></div>
                    <div className="mb-5"><Input label="CVC" /></div>
                </div>
                <div className="mb-5">
                    <Input label="Name of Card" />
                </div>
                <div className="mb-5">
                    <Input label="Country or Region" />
                </div>
                <div className="flex items-center mb-5">
                    <Checkbox
                        id="airlines-delta"
                        ripple={false}
                        className="hover:before:opacity-0"
                        containerProps={{ className: "px-0" }}
                    />
                    <label htmlFor="airlines-delta" className="ml-3 text-sm">
                        Securely save my information for 1-click checkout
                    </label>
                </div>
                <div className="w-full mb-3">
                    <Button className="text-center w-full normal-case text-black">Add Card</Button>
                </div>
                <div className="text-[12px] text-dark-green text-center">
                    By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
                </div>
            </div>
        </ModalCover>
    </>
}

export default AddNewCardModal;