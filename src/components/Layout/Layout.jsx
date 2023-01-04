import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import { Header, Nav, NavItem, Main } from "./Layout.styled"
export const Layout = () => {
    return <><Header>
        <Nav>
            <NavItem to={"/"}>Home</NavItem>
            <NavItem to={"/movies"}>Movies</NavItem>
        </Nav>
    </Header><Main><Suspense fallback={null}><Outlet /></Suspense></Main></>
}