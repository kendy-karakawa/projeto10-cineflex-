import styled from "styled-components";
import MovieList from "./components/MovieList";
import Schedule from "./components/Schedule";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Container >
      <Routes>
      <Route path="/" element={<MovieList/>} />
      <Route path="/sessoes/:idFilme" element={<Schedule/>} />
      <Route path="/assentos/:idSessao" element={<Schedule/>} />
      <Route path="/sucesso" element={<Schedule/>} />
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


