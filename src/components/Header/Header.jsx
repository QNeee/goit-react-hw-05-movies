import { Link } from "react-router-dom"

export const Header = () => {

    return <header>
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/movies"}>Movies</Link>
        </nav>
    </header>
}