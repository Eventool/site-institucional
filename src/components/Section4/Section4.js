import styled from "styled-components";

const Secao = styled.div`
  height: 898px;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
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
  z-index: 2; /* Certifica que o overlay e seu conteúdo estão à frente */
  background-color: rgba(255, 255, 255, 0.8); /* Ajuste a opacidade para dar contraste ao texto */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.section`
  padding: 40px 20px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Estilo para a parte superior (Missão, Valores, Objetivo)
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

// Bloco de conteúdo individual (Missão, Valores, Objetivo)
const InfoCard = styled.div`
  background-color: #001F54;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
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
  font-size: 24px;
  color: #001F54;
  margin-bottom: 20px;
  text-align: center;
`;

// Grid para organizar os serviços
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  background-color: #001F54;
  padding: 30px;
  border-radius: 10px;
  color: white;
`;

// Cartão individual para cada serviço
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
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
  ServiceDescription
};