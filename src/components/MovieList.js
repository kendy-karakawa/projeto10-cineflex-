import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    request.then((resposta) => {
      setItems(resposta.data);
    });
    request.catch((resposta) => console.log(resposta.data));
  }, []);

  if (items === undefined) {
    return <p>loading...</p>;
  }

  return (
    <ScreenContainer>
      <Link to="/">
        <Header>CINEFLEX</Header>
      </Link>
      <Title>Selecione o filme</Title>

      {items.map((item) => (
        <Poster key={item.id}>
          <Link to="/sessoes/item.id">
            <img src={item.posterURL} alt="Poster do filme" />
          </Link>
        </Poster>
      ))}
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
`;

const Title = styled.p`
  height: 110px;
  width: 400px;
  min-width: 400px;
  padding-top: 50px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #293845;
`;

const Header = styled.header`
  width: 400px;
  min-width: 400px;
  min-height: 50px;
  background-color: #c3cfd9;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-weight: 400;
  text-decoration: none;
  font-size: 34px;
  color: #e8833a;
  padding: 10px;
  z-index: 1;
`;

const Poster = styled.div`
  width: 145px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  img {
    width: 129px;
    height: 193px;
  }
`;
