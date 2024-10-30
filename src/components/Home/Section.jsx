import React from "react";
import { Secao, Description, Title, Content, Overlay, Button } from "./Section";
import ImagemDeFundo from '../../assets/img/pexels-pixabay-50675.jpg';


const Section = () => {
    return (
        <>
            <Secao backgroundimage={ImagemDeFundo} id="home">
                <Overlay>
                    <Content>
                    <Title>O equilíbrio ideal entre<br/> 
                        a organização e clareza.</Title>
                    <Description>Garanta o sucesso do seu evento com os melhores profissionais, <br/>trazendo eficiência e tranquilidade para a sua organização.</Description>
                    <Button>  Entrar  </Button>
                    </Content>
                </Overlay>
            </Secao>
        </>
    );
};

export default Section;