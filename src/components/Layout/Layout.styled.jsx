import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);`;
export const Nav = styled.nav`margin-right:auto;`;
export const NavItem = styled(NavLink)`
 margin-right:20px; 
text-decoration:none;
color:white;
  &.active, :hover {
  background-color:white;
    color:blue;
  }

`;

export const Main = styled.main`
max-width:1200px;
margin-left:auto;
margin-right:auto;
`