import BasicMenu from "../components/menu/BasicMenu"

const BasicLayout = ({children}) =>{
    return(
        <>
        <BasicMenu></BasicMenu>

        <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <main className="bg-green-500 md:w-2/3 lg:w-3/4 px-5 py-5">{children}</main>

            <aside className="bg-blue-500 md:w-1/4 px-5 py-5">
                <h1 className="text-2xl md:text-4xl">Sidebar</h1>
            </aside>
        </div>
        </>
    );
}

export default BasicLayout