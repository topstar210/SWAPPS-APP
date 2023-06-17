import Header from "components/Header";
import Sidebar from "./Sidebar";

const Search = () => {
    return (
        <div className="">
            <Header page="search" />

            <div className="max-w-screen-3xl mx-auto px-5 flex justify-between py-8">
                <Sidebar />

                <div>
                    <div className="text-2xl font-[900] mb-4">Explore</div>
                    <div className="bg-hr w-16 h-2 rounded-r-lg my-3 mb-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Search;