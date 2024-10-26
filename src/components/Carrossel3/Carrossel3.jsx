import React from "react";
import{
    Secao2,
    Overlay,
    Title,
    Subtitle,
    Container
} from "./Carrossel3"
import ImagemFundo from '../../assets/img/planner-calendar-schedule-date-concept.jpg'

const Section2 = () => {
    return (
        <>
    <Secao2 backgroundimage={ImagemFundo}>
        <Overlay>
        <Container>
                <Title>Planejamento e organização aprimorados</Title>
                <Subtitle>
                Organize e planeje eventos com ferramentas facilitadoras para gerir prazos e demandas. Mantenha controle total sobre as atividades para garantir o sucesso de cada evento.                        </Subtitle>
                </Container>
         </Overlay>
    </Secao2>
        </>
    );
};

export default Section2;