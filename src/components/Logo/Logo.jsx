import React from "react";
import { DivLogo, ImgLogo, TituloSerenity } from "./Logo";
import serenityLogo from '../../assets/img/serenity-logo.png'; 

const Logo = () => {
    return (
        <DivLogo>
            <ImgLogo src={serenityLogo} alt="" />
            <TituloSerenity>Serenity</TituloSerenity>
        </DivLogo>
    )
}

export default Logo;