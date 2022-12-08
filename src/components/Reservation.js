import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Seat from "./Seat";

export default function Reservation() {
  const { idSessao } = useParams();
  const [reserve, setReserve] = useState(undefined);

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    request.then((res) => {
      setReserve(res.data);
    });
    request.catch((res) => console.log(res.data));
  }, []);

  if (reserve === undefined) {
    return <p>loading...</p>;
  }

  return (
    <ScreenContainer>
      <Link to="/">
        <Header>CINEFLEX</Header>
      </Link>
      <Title>Selecione o(s) assento(s)</Title>

      <SeatList>
        {reserve.seats.map((seat) => (
          <Seat 
          key={seat.id}
          name={seat.name}
          isAvailable={seat.isAvailable}
          
          />
        ))}
      </SeatList>

      <Comment>
        <div>
          <Selected></Selected>
          <p>Selecionado</p>
        </div>
        <div>
          <Available></Available>
          <p>Disponível</p>
        </div>
        <div>
          <Unavailable></Unavailable>
          <p>Indisponível</p>
        </div>
      </Comment>

      <Data>
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..."></input>
      </Data>

      <Footer>
        <Poster>
          <img src={reserve.movie.posterURL} alt="Poster do filme" />
        </Poster>
        <p>
          {reserve.movie.title} <br />{" "}
          {`${reserve.day.weekday}-${reserve.name} `}
        </p>
      </Footer>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px;
  padding-top: 50px;
  padding-bottom: 120px;
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
  font-size: 34px;
  color: #e8833a;
  padding: 10px;
  z-index: 1;
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

const Footer = styled.footer`
  width: 400px;
  min-width: 400px;
  min-height: 117px;
  background-color: #c3cfd9;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  z-index: 1;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left: 10px;
  }
`;

const Poster = styled.div`
  width: 64px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 48px;
    height: 72px;
  }
`;

const SeatList = styled.div`
  /* height: 280px; */
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  /* button {
    width: 26px;
    height: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
  } */
`;

const Comment = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4e5a65;
    margin-top: 5px;
  }
`;
const Selected = styled.button`
  width: 26px;
  height: 26px;
  background: #1aae9e;
  border: 1px solid #0e7d71;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Available = styled.button`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Unavailable = styled.button`
  width: 26px;
  height: 26px;
  background: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Data = styled.div`
  width: 400px;
  padding: 10px;
  margin-top: 30px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
    margin-top: 10px;
  }
  input {
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 2px solid #d5d5d5;
    border-radius: 3px;
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
`;
