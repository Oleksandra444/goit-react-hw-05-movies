import styled from "styled-components";

export const ListTitle = styled.h1`
margin-bottom: 20px;
`
export const MoviesList = styled.ul`
display: flex;
gap: 20px;
flex-wrap: wrap;
/* justify-content: center; */

`

export const MovieItem = styled.li`
/* max-width: 200px; */
`

export const MovieCardWrapper = styled.div`
display: flex;
flex-direction: column;
width: 264px;
`

export const MovieImageWrapper = styled.div`
width: 264px;
border-radius: 8px;
justify-content: center;
align-items: center;
margin-bottom: 14px;
display: flex;
overflow: hidden;


`

export const MovieImage = styled.img`

object-fit: cover;
max-width: 100%;
height: 300px;

`

export const MovieTitle = styled.p`
text-decoration: none;
    font-size: 16px;
    margin-top: 12px;
    color: rgb(17, 17, 17);
    font-weight: 500;
    text-align: center;


`