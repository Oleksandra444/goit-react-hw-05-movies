import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
max-width: 1180px;
margin-left: auto;
margin-right: auto;
padding-left: 32px;
padding-right: 32px;
`

export const Header = styled.header`
margin-bottom:30px;
`

export const HeaderMenu = styled.ul`
display: flex;
gap: 40px;
font-size: 28px;
border: 1.5px solid ;
border-radius: 3px;
padding: 12px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000; 
  
  &.active {
    color: blue; 
  }
`