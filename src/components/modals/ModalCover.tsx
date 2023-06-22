type Props = {
    itemcenter?: boolean,
    children: React.ReactNode
}

const ModalCover: React.FC<Props> = ({itemcenter, children}) => {
    return (
        <div className={`fixed top-0 left-0 z-[100] px-3 bg-cover w-screen h-screen overflow-hidden flex justify-center ${!itemcenter?"py-20":"items-center"}`}>
            { children }
        </div>
    )
}

export default ModalCover;