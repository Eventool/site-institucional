import styled from "styled-components";



const DivLogo = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const ImgLogo = styled.img`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TituloSerenity = styled.h1`
    font-size: 40px;
    padding-left: 8%;
    font-weight: 500;
    font-style: italic;
    display: flex;
    align-items: center;
`;

const DivLink = styled.div`
`;

const Link = styled.a`
  text-decoration: none; // Remove o sublinhado
    color: inherit; // Herda a cor do elemento pai

    &:hover {
        text-decoration: none; // Remove o sublinhado ao passar o mouse
    }

    &:focus {
        outline: none; // Remove o contorno ao focar
    }
`;

const ItemUl = styled.ul`
    list-style: none;
    display: flex;
    
`;

const ItemMenu = styled.li`
    font-style: none;
    font-size: 16px;
    font-weight: normal;
    padding: 0 30px;
`;
export {
    DivLogo,
    ImgLogo,
    TituloSerenity,
    DivLink,
    Link,
    ItemUl,
    ItemMenu
    
}