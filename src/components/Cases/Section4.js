import styled from "styled-components";


const Secao = styled.div`
  height: 999px;
  width: 100%;
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  position: relative; /* Necessário para posicionar o conteúdo sobreposto */
  z-index: 0; 
  
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
  z-index: 2; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.section`
  padding: 1px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #010041;
  border-radius: 15px;
  margin-top: 2%;
  height: 75%;
  width: 75%;
`;

// Estilo para a parte superior (Missão, Valores, Objetivo)
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -170px;
  flex-wrap: wrap;
  gap: 99px;
  margin-bottom: 40px;
  height: 29%;
`;

// Bloco de conteúdo individual (Missão, Valores, Objetivo)
const InfoCard = styled.div`
  background-color: #010041;
  color: white;
  padding: 54px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  height: 80%;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;

`;

const InfoDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

// Título dos Serviços
const ServicesTitle = styled.h2`
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
`;

// Grid para organizar os serviços
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1316px;
  height: 80%;
  background-color: #010041;
  border-radius: 10px;
  color: white;
`;

// Cartão individual para cada serviço
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 17px;
  align-items: center;
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 36px; /* Você pode usar ícones de uma biblioteca como FontAwesome ou SVG */
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const ServiceTitleDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 20px;

`
const ServiceSubTitleDiv = styled.div`
 color: #ffffff;
 font-size: 24px;
 padding-bottom: 20px;
 gap: 10px;
`

export {
  Secao,
  Overlay,
  SectionContainer,
  TopContainer,
  InfoCard,
  InfoTitle,
  InfoDescription,
  ServicesTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceTitleDiv,
  ServiceSubTitleDiv,
  
};