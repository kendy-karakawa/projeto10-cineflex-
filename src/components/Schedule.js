import styled from "styled-components";

export default function Schedule() {
  return (
    <ScreenContainer>
      <Header>CINEFLEX</Header>

      <Title>Selecione o horário</Title>

      <ScheduleContainer>
        ssssssssssssssss
      <Button>
        <button>xx</button>
        <button>xx</button>
      </Button>
      </ScheduleContainer>
      
      
      <Footer>
        <Poster>
          <img src="" alt="" />
        </Poster>
        <p>ssssssssss</p>
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
  flex-direction:column;
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

const ScheduleContainer = styled.div`
  width: 400px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #293845;
  padding: 24px;
`;

const Button = styled.div`
  width: 400px;
  min-width: 400px;
  display: flex;
  justify-content: flex-start;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  
  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-radius: 3px;
    margin-right:10px;
    margin-top: 20px;
  }
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


