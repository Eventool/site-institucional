import styled from "styled-components";

const FooterDiv = styled.div`
  height: 370px;
  width: 100%;
  background-color: #010041; 
  display: flex;
  color: white;
  justify-content: flex-start;
`;

const FooterDiv2 = styled.div`
  height: 90px;
  width: 100%;
  background-color: #02004D;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Titulo1 = styled.h1`
  padding-top:3%;
  font-size: 30px;
  padding-left: 8.5%;
  font-weight: 400;
  display: flex;
  margin-right: 20px;
  margin-right: 300px;
`;

const Titulo2 = styled.h1`
  padding-top:3%;
  font-size: 30px;
  font-weight: 400;
  display: flex;
  align-items: top;
`;


const Paragrafo = styled.p`
  color: white;
  padding-left: 8.5%;
  font-size: 16px;
  margin-bottom: 8%;

`;

const Paragrafo2 = styled.p`
  color: white;
  font-size: 16px;
  margin-bottom: 8%;

`;

const ParagrafoDiv2 = styled.p`
  color: white;
  font-size: 16px;
  margin-right: 100px;
`
const MidiaDiv = styled.div`
  display: flex; 
  align-items: center; 
  margin-top: 10px; 
  margin-right: 30px;
`

const MidiaImg = styled.img`
  width: 30px; /* Largura da imagem */
  height: auto; /* Altura automática para manter a proporção */
  margin-right: 27px; /* Margem à esquerda da imagem */
`;

const Serenity = styled.h1`
  padding-top:3%;
  font-size: 40px;
  font-weight: 600;
  display: flex;
  font-style: italic;
  align-items: top;
  margin-left: 300px;
`

const QrCodeImg = styled.img`
  width: 250px; /* Ajuste o tamanho do QR Code */
  height: 250px; /* Mantém a proporção */
  margin-top: 4%; /* Espaço acima do QR Code */
  margin-left: 10%
`;

const Buttons = styled.button`
  margin-left: 66%;
  background-color: #f95a00;
  color: white;
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
  background-color: #f95a00; /* Cor de fundo */
  color: white; /* Cor do texto */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra ao redor do botão */
  border: 2px solid #ffffff; /* Borda branca */
  transform: scale(1.05); /* Aumento do tamanho do botão */
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease, transform 0.3s ease; /* Suaviza a transição */
}
`;

const ButtonContainer = styled.div`
  display: flex;          
  flex-direction: column; 
  gap: 10px;              
`;


export {
  FooterDiv,
  FooterDiv2,
  Titulo1,
  Titulo2,
  Paragrafo,
  Paragrafo2,
  ParagrafoDiv2,
  MidiaDiv,
  MidiaImg,
  Serenity,
  QrCodeImg,
  Buttons,
  ButtonContainer
  
};
