import styled from "styled-components";

const Secao2 = styled.div`
    height: 999px;
    width: 100%;
    background-image: url(${(props) => props.backgroundImage});
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


const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7); 
  color: white; 
  text-align: center; 
  padding: 20px; 
  border-radius: 8px; 
  max-width: 600px; 
  margin-top: 19%;
  margin-left: 5%;
  height: 147px;
  font-family: Montesserrat, sans-serif; 
`;

const Title = styled.h1`
  font-size: 24px; /* Tamanho do título */
  margin-bottom: 10px; /* Espaçamento inferior do título */
`;

const Subtitle = styled.p`
  font-size: 16px; /* Tamanho do subtítulo */
  line-height: 1.5; /* Espaçamento entre linhas */
`;

export {
    Secao2,
    Overlay,
    Title,
    Subtitle,
    Container
    
}