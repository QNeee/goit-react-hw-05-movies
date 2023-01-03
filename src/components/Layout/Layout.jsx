import { Link, Outlet } from "react-router-dom"

export const Layout = () => {

    return <><header>
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/movies"}>Movies</Link>
        </nav>
    </header><main><Outlet /></main></>
}