import React from "react";
import {
    Secao2,
    Overlay,
    Title,
    Texto,
    Button,
    SiteImg,
    Div1,
    Div2,
    Link
} from "./Section2"
import ImagemFundo from '../../assets/img/fundoBranco.jpg'
import ImagemSite from '../../assets/img/imagemSite.png'
// import { Link } from "react-scroll";

const Section2 = () => {
    return (
        <>
            <Secao2 backgroundimage={ImagemFundo} id="sobre-nos">
                <Overlay>
                    <Div1>
                        <Title>
                            Serenidade na gestão de <br /> eventos e equipes
                        </Title>
                        <Texto>
                            compromissados com o <br />
                            crescimento do mundo dos <br />
                            eventos, temos como foco <br />
                            organizar as escalas de <br />
                            colaboradores de eventos, e, <br />
                            facilitar o fluxo dos pagamentos!
                        </Texto>
                        <div>
                        <Button >
                            <Link href="#cases" passHref>
                            Saber Mais
                            </Link>
                        </Button>
                        </div>
                    </Div1>
                    <Div2>
                        <SiteImg src={ImagemSite} alt="imagem site" />
                    </Div2>
                </Overlay>
            </Secao2>
        </>
    );
};

export default Section2;