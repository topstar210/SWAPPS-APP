interface propsData {
    color: string
}
const Icon = ({ color }: propsData) => {
    return (
        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.58042 8.4C7.12434 8.4 8.37063 7.14933 8.37063 5.6C8.37063 4.05067 7.12434 2.8 5.58042 2.8C4.0365 2.8 2.79021 4.05067 2.79021 5.6C2.79021 7.14933 4.0365 8.4 5.58042 8.4ZM5.58042 4.66667C6.09196 4.66667 6.51049 5.08667 6.51049 5.6C6.51049 6.11333 6.09196 6.53333 5.58042 6.53333C5.06888 6.53333 4.65035 6.11333 4.65035 5.6C4.65035 5.08667 5.06888 4.66667 5.58042 4.66667ZM16.7413 1.86667H9.3007V9.33333H1.86014V0H0V14H1.86014V11.2H18.6014V14H20.4615V5.6C20.4615 3.53733 18.7967 1.86667 16.7413 1.86667ZM18.6014 9.33333H11.1608V3.73333H16.7413C17.7643 3.73333 18.6014 4.57333 18.6014 5.6V9.33333Z" fill={color || "white"} />
        </svg>

    )
}

export default Icon