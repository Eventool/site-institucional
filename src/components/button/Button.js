import styled from "styled-components";

const DivButton = styled.div`
  width: 9%;
  height: 100%;
  display: flex;
  margin-left: 7%;
  align-items: center;
  gap: 27px;

`;

const ButtonEntrar = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #f95a00;
  border-radius: 25px;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f95a00;
    color: white;
  }
`;

const ButtonCadastrar = styled.button`
  background-color: #010041;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #03006e;
  }
`;

export {
  ButtonEntrar,
  ButtonCadastrar,
  DivButton
}