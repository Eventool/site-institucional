import React from "react";
import { DivLogo, ImgLogo, TituloSerenity, DivLink, Link, ItemUl} from "./Logo";
import serenityLogo from '../../assets/img/serenity-logo.png'; 

const Logo = () => {
    return (
        <DivLogo>
        <DivLink>
            <ItemUl>
                <Link href="#home"> {/* Link para "home" */}
                    <ImgLogo src={serenityLogo} alt="Logo Serenity" />
                </Link>
            </ItemUl>
        </DivLink>
    
        <DivLink>
            <ItemUl>
                <Link href="#home"> {/* Link para "home" */}
                    <TituloSerenity>Serenity</TituloSerenity>
                </Link>
            </ItemUl>
        </DivLink>
    </DivLogo>
    )
}

export default Logo;