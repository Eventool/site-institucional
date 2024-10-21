import React from "react";
import {
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
} from "./Section4";
import ImagemFundo from '../../assets/img/fundo_ondulado.jpg';

const Section = () => {
  return (
    <>
      <Secao backgroundImage={ImagemFundo}>
        <Overlay>
          <SectionContainer>
            <TopContainer>
              <InfoCard>
                <InfoTitle>Missão</InfoTitle>
                <InfoDescription>
                  Construímos uma possibilidade, uma ferramenta que melhora vidas.
                </InfoDescription>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Valores</InfoTitle>
                <InfoDescription>
                  Somos uma equipe diversa com foco em oferecer oportunidades para pessoas indistintamente.
                </InfoDescription>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Objetivo</InfoTitle>
                <InfoDescription>
                  Temos como propósito o uso da inovação tecnológica para alcançar processos intuitivos.
                </InfoDescription>
              </InfoCard>
            </TopContainer>

            <ServicesTitle>Serviços</ServicesTitle>

            <ServicesGrid>
              <ServiceCard>
                <ServiceIcon>🔧</ServiceIcon>
                <ServiceTitle>Criação & Edição de Eventos</ServiceTitle>
                <ServiceDescription>
                  Facilite a criação e edição de eventos de maneira simples e eficaz.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>📄</ServiceIcon>
                <ServiceTitle>Coleta Simplificada de Documentos</ServiceTitle>
                <ServiceDescription>
                  Organize e colete documentos de forma digital e acessível.
                </ServiceDescription>  
                </ServiceCard>

              <ServiceCard>
                <ServiceIcon>✔️</ServiceIcon>
                <ServiceTitle>Check-in Rápido e Seguro</ServiceTitle>
                <ServiceDescription>
                  Melhore a experiência dos participantes com um check-in mais eficiente.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>🛠️</ServiceIcon>
                <ServiceTitle>Manipulação das Vagas</ServiceTitle>
                <ServiceDescription>
                  Controle de vagas com facilidade e segurança.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>👥</ServiceIcon>
                <ServiceTitle>Gestão Eficaz da Equipe</ServiceTitle>
                <ServiceDescription>
                  Gerencie sua equipe com ferramentas colaborativas.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>🗂️</ServiceIcon>
                <ServiceTitle>Organização & Administração</ServiceTitle>
                <ServiceDescription>
                  Organize processos internos com eficiência.
                </ServiceDescription>
              </ServiceCard>
            </ServicesGrid>
          </SectionContainer>
        </Overlay>
      </Secao>
    </>
  );
};

export default Section;
