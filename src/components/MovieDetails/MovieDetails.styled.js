import styled from "styled-components";
import {NavLink } from "react-router-dom";

export const MovieImage = styled.img`

object-fit: cover;
max-width: 100%;
height: 400px;
/* width: 300px; */

`
export const MovieDetailWrapper = styled.div`
display:flex;
gap: 20px
`
export const MovieInfoWrapper = styled.div`
width: 700px;
display: flex;
flex-direction: column;
gap: 20px;
`

export const ImageWrapper = styled.div`
border-radius: 8px;
width: 300px;
justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    display: flex;
    overflow: hidden;
`

export const MovieTitle = styled.h2`
font-size:36px;`

export const Title = styled.h3`
margin-bottom: 12px;
`

export const StyledLink = styled(NavLink)`
margin-left: 12px;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 500;
 
`
export const StyledButton = styled.button`
    width: 184px;
    height: 40px;
    background-color: lightgray;
    border: 1.5px solid gray;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    

`
