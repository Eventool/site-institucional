import React from "react";
import { 
    Secao,
    Overlay,
    Container,
    Title,
    Subtitle} from "./Carrossel1";
import ImagemFundo from  '../../assets/img/man-working-night.jpg'

const SectionCarrossel1 = () => {
    return (
        <>
            <Secao backgroundimage={ImagemFundo}>
                <Overlay>
                <Container>
                    <Title>Visualização simples e eficiente dos Eventos</Title>
                        <Subtitle>
                            Nossa plataforma oferece uma visualização organizada dos eventos e perfis, facilitando a comunicação e o entendimento das metas e objetivos para os colaboradores.
                        </Subtitle>
                </Container>
                </Overlay>
            </Secao>
        
        
        
        </>
    )
}
export default SectionCarrossel1;