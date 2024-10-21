import React from "react";
import { 
    Secao,
    Overlay,
    Container,
    Title,
    Subtitle} from "./Carrossel2";
import ImagemFundo from  '../../assets/img/team-working-together-project.jpg'

const SectionCarrossel2 = () => {
    return (
        <>
            <Secao backgroundImage={ImagemFundo}>
                <Overlay>
                <Container>
                    <Title>Gerenciamento de equipes e perfis</Title>
                        <Subtitle>
                        Monitorar e gerenciar equipes baseado em perfis e desempenhos individuais, assegurando qualidade e produtividade no ambiente de trabalho.                        </Subtitle>
                </Container>
                </Overlay>
            </Secao>      
        </>
    );
};

export default SectionCarrossel2;