import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Seat from "./Seat";

export default function Reservation({name,setName,cpf,setCpf,ids,setIds,setReservationDate}) {
  const { idSessao } = useParams();
  const [reserve, setReserve] = useState(undefined);
  const [seatList, setSeatList] = useState([])
  const navigate = useNavigate();

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

  function reservation(event) {
    event.preventDefault();
    const reserveDate = { ids, name, cpf };
    console.log(reserveDate)
    const url =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

    const promise = axios.post(url, reserveDate);
    //promise.then((res) => console.log(res.data));
    // promise.then(()=> navigate("/sucesso"))
    promise.then(postThen)
    promise.catch((res) => console.log(res.response.data));

    
  }

  function postThen(res){
    setReservationDate({title:reserve.movie.title , date:reserve.day.date ,time:reserve.name  ,seats:seatList , name, cpf})
    navigate("/sucesso")
    setName("")
    setCpf("")
    setIds([])

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
            SeatId={seat.id}
            ids={ids}
            setIds={setIds}
            seatList={seatList}
            setSeatList={setSeatList}
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

      <ReservationFoms onSubmit={reservation}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome..."
          onChange={(e) => setName(e.target.value)}
          required
          
        />
        <label htmlFor="cpf">CPF do comprador:</label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <button type="submit">Reservar assento(s)</button>
      </ReservationFoms>

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

const ReservationFoms = styled.form`
  width: 400px;
  padding: 24px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;

  label {
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
  a {
    text-decoration: none;
  }
  button {
    width: 225px;
    height: 42px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    background: #e8833a;
    border-radius: 3px;
    margin-top: 50px;
    margin-left: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
