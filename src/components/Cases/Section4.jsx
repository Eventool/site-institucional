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
  ServiceDescription,
  ServiceTitleDiv,
  ServiceSubTitleDiv
} from "./Section4";

import ImagemFundo2 from '../../assets/img/fundoBranco_2.png';
import iconeCalendario from '../../assets/img/calendario.png'
import iconeFileCheck from '../../assets/img/file_check.png'
import iconePhoneQrCode from '../../assets/img/phone_qr_code.png'
import iconeTreeVagas from '../../assets/img/tree.png'
import iconeTreePessoas from '../../assets/img/BG conect.png'
import iconePCLista from '../../assets/img/BG list pc.png'

import iconeAlvo from '../../assets/img/alvo.png'
import iconeBalanca from '../../assets/img/balance.png'
import iconeLuz from '../../assets/img/light.png'

const Section = () => {
  return (
    <>
    
    <Secao backgroundimage={ImagemFundo2} id="cases">
        <Overlay>
         <TopContainer>
              <InfoCard>
                <ServiceIcon>
                  <img src={iconeAlvo} alt="alvo" />
                </ServiceIcon>
                <InfoTitle>Missão</InfoTitle>
                <InfoDescription>
                  Construímos uma possibilidade, uma ferramenta que melhora vidas.
                </InfoDescription>
              </InfoCard>

              <InfoCard>
              <ServiceIcon>
                  <img src={iconeBalanca} alt="alvo" />
                </ServiceIcon>
                <InfoTitle>Valores</InfoTitle>
                <InfoDescription>
                  Somos uma equipe diversa com foco em oferecer oportunidades para pessoas indistintamente.
                </InfoDescription>
              </InfoCard>

              <InfoCard>
              <ServiceIcon>
                  <img src={iconeLuz} alt="alvo" />
                </ServiceIcon>
                <InfoTitle>Objetivo</InfoTitle>
                <InfoDescription>
                  Temos como propósito o uso da inovação tecnológica para alcançar processos intuitivos.
                </InfoDescription>
              </InfoCard>
            </TopContainer> 
          <SectionContainer>

          <ServiceTitleDiv>
              <ServicesTitle>Serviços</ServicesTitle>
              <ServiceSubTitleDiv>Conheça nosso portfólio.</ServiceSubTitleDiv>
          </ServiceTitleDiv>
          

            <ServicesGrid>
              <ServiceCard>
              <ServiceIcon>
                  <img src={iconeCalendario} alt="Ícone de calendário" />
                </ServiceIcon>
                <ServiceTitle>Criação & Edição de Eventos</ServiceTitle>
                <ServiceDescription>
                Rápido controle das suas demandas, com escolhas facilitadas e um visual simples.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <img src={iconeFileCheck} alt="icone de arquivo" />
                </ServiceIcon>
                <ServiceTitle>Coleta Simplificada de Documentos</ServiceTitle>
                <ServiceDescription>
                Rápida escolha dos documentos que  serão coletados e captura dos mesmos.
                </ServiceDescription>  
                </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <img src={iconePhoneQrCode} alt="celular qrCode"/>
                </ServiceIcon>
                <ServiceTitle>Check-in Rápido e Seguro</ServiceTitle>
                <ServiceDescription>
                Velocidade e segurança, sinônimos de qualidade dentro do trabalho.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <img src={iconeTreeVagas} alt="vagas" />
                </ServiceIcon>
                <ServiceTitle>Manipulação das Vagas</ServiceTitle>
                <ServiceDescription>
                Controle quais são suas necessidades para cada demanda com praticidade
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <img src={iconeTreePessoas} alt="arvore pessoas" />
                </ServiceIcon>
                <ServiceTitle>Gestão Eficaz da Equipe</ServiceTitle>
                <ServiceDescription>
                Informações e decisões eficazes para gerir as pessoas que irão compor cada equipe.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <img src={iconePCLista} alt="pc lista" />
                </ServiceIcon>
                <ServiceTitle>Organização & Administração</ServiceTitle>
                <ServiceDescription>
                Pré, durante e pós evento, todas as possibilidades em suas mãos.
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
