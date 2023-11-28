import styled from "styled-components";

export const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 12px;
margin-top: 20px;

`

export const CastCardWrapper = styled.li`
width: 130px;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 8px;
justify-content: center;


`

export const CastImg = styled.img`
height: 200px;

`
export const CastInformation = styled.p`
font-size: 10px;
`

export const CastCharacter = styled.p`
font-weight: 700;
font-size: 10px;`

export const NoCasts = styled.div`
margin-top:20px;
margin-bottom: 20px;
`