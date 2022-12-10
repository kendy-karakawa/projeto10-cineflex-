import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success({reservationDate}) {

    if (reservationDate.seats === undefined) {
        return <p>loading...</p>;
      }  

  return (
    <ScreenContainer>
      <Link to="/">
        <Header>CINEFLEX</Header>
      </Link>
      <Title>
        Pedido feito <br /> com sucesso!
      </Title>

      <Main>
        <div data-test="movie-info">
          <h1>Filme e sessão</h1>
          <p>{reservationDate.title}</p>
          <p>{`${reservationDate.date} ${reservationDate.time}`}</p>
        </div>

        <div data-test="seats-info">
          <h1>Ingressos</h1>
          {reservationDate.seats.map((id)=> <p key={id}>{`assento ${id}`}</p>)}
          
        </div>

        <div data-test="client-info">
          <h1>Comprador</h1>
          <p>{`Nome: ${reservationDate.name}`}</p>
          <p>{`CPF: ${reservationDate.cpf}`}</p>
        </div>

        <Link to="/" data-test="go-home-btn"><button>Voltar para Home</button></Link>
      </Main>
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
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #247a6b;
`;

const Main = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 50px;
  align-items: center;
  padding: 30px;
  div {
    margin-top: 50px;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }
  a{
    text-decoration:none;
  }
  button{
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
