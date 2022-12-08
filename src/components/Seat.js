import styled from "styled-components";

export default function Seat({name,isAvailable}){
    return(
        <>
        <Button>{name}</Button>
        
        </>
    )
}

const Button = styled.button`
    width: 26px;
    height: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
`