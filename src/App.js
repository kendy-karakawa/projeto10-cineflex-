import styled from "styled-components";
import MovieList from "./components/MovieList";
import Schedule from "./components/Schedule";
import Reservation from "./components/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [ids, setIds] = useState([]);
  
  const [reservationDate, setReservationDate] = useState({})
  // title: , date:  ,time:  ,seats:[] , nome, cpf
    
  return (
    <BrowserRouter>
    <Container >
      <Routes>
      <Route path="/" element={<MovieList/>} />
      <Route path="/sessoes/:idFilme" element={<Schedule/>} />
      <Route path="/assentos/:idSessao" element={<Reservation
      name={name}
      setName={setName}
      cpf={cpf}
      setCpf={setCpf}
      ids={ids}
      setIds={setIds}
      setReservationDate={setReservationDate}/>} />
      <Route path="/sucesso" element={<Success 
      reservationDate={reservationDate}/>} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`


