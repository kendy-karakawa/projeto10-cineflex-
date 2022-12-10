import { useState } from "react";
import styled from "styled-components";

const AVAILABLE = "#C3CFD9"
const UNAVAILABLE = "#FBE192"
const SELECTED = "#1AAE9E"

export default function Seat({ name, isAvailable, SeatId, ids, setIds,seatList,setSeatList }) {
  const [select, setSelect] = useState(false)
    
    // console.log(isAvailable)
    function selectColor(n) {
    if(select === false){
        setSelect(true)
        setIds([...ids, SeatId])
        setSeatList([...seatList, n])
        
     }else {
        setSelect(false)
        const newList = ids.filter((id)=> id !== SeatId)
        setIds(newList)
        const newSeatList = seatList.filter((name)=> name != n)
        setSeatList(newSeatList)
     }
  }
  
  return (
    <>
    {isAvailable === true ? 
    <Button data-test="seat" buttonColor={UNAVAILABLE} onClick={()=> alert("Esse assento não está disponível")}>{name}</Button>  : !select ? 
    <Button data-test="seat" buttonColor={AVAILABLE} onClick={()=>selectColor(name)}>{name}</Button> : 
    <Button data-test="seat" buttonColor={SELECTED} onClick={()=>selectColor(name)}>{name}</Button>
    }
      
    </>
  );
}




const Button = styled.button`
  width: 26px;
  height: 26px;
  background: ${props=> props.buttonColor};
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
`;
