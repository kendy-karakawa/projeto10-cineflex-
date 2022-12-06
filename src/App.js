import styled from "styled-components";
import MovieList from "./components/MovieList";
import Schedule from "./components/Schedule";

export default function App() {
  return (
    <Container >
      {/* <MovieList/> */}
      <Schedule/>
    </Container>
  );
}

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`


