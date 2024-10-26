import styled from "styled-components";

const Secao2 = styled.div`
    height: 999px;
    width: 100%;
    background-image: url(${(props) => props.backgroundimage});
    background-size: cover;
    background-position: center;
    position: relative; /* Para que o overlay funcione */

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
}
`;

const Overlay = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const Title = styled.h1`
    font-size: 44px;
    color: #FF4500; 
    margin-top: 32%; 
    margin-left: 18%; 
    overflow-wrap: break-word; 
    hyphens: auto; 
`;

const Texto = styled.p`
    font-size: 30px; 
    color: #010041;
    margin: 10px 0; 
    word-wrap: break-word;
    overflow-wrap: break-word; 
    hyphens: auto; 
    margin-left: 18%;
    margin-top: 3%;
`

const Button = styled.button`
  margin-left: 32%;
  margin-top: 7%;
  background-color: #f95a00;
  color: white;
  border: 2px solid #f95a00;
  border-radius: 25px;
  padding: 15px 90px;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 10;

  &:hover {
  background-color: #f95a00; /* Cor de fundo */
  color: white; /* Cor do texto */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra ao redor do botão */
  border: 2px solid #ffffff; /* Borda branca */
  transform: scale(1.05); /* Aumento do tamanho do botão */
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, border 0.3s ease, transform 0.3s ease; /* Suaviza a transição */
}
`;


const SiteImg = styled.img`
  height: 750px; 
  margin-top: 26%;
  margin-left: 11%;
  max-width: 109%;
`;

const Div1 = styled.div`
  width: 40%;
  heigth: 100%
`;

const Div2 = styled.div`
  width: 50%;
  heigth: 100%
`;

const Link = styled.a`
  text-decoration: none; // Remove o sublinhado
    color: inherit; // Herda a cor do elemento pai

    &:hover {
        text-decoration: none; // Remove o sublinhado ao passar o mouse
    }

    &:focus {
        outline: none; // Remove o contorno ao focar
    }
`;

const ItemUl = styled.ul`
    list-style: none;
    display: flex;
    
`;
export {
    Secao2,
    Overlay,
    Title,
    Texto,
    Button,
    SiteImg,
    Div1,
    Div2,
    Link,
    ItemUl
}