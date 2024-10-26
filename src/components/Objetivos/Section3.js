import styled from 'styled-components';


export const SessaoCarrossel = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const ImagensCarrossel = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CaixaDeTexto = styled.div`
    position: absolute;
    top: 43%;
    left: 25%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(0, 0, 0);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    width: 35%;
`;

export const TituloCarrossel = styled.h1`
    color: white;
    font-size: 32px;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: black;
    font-family: 'MontSerrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    line-height: normal;
`;

export const DescricaoCarrossel = styled.p`
    color: white;
    font-size: 20px;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: black;
    font-family: 'MontSerrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
`;

export const ContainerCarrosel = styled.div`
    position: relative;
    width: 100%;
    height: 100vh; /* Ocupa a altura total da tela */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SwiperSlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra o espaço */
`;

export const SwiperPaginationBullet = styled.span`
    background-color: #fff; /* Cor das bolinhas */
    opacity: 0.6;
    &.swiper-pagination-bullet-active {
        background-color: #ff6700; /* Cor da bolinha ativa */
        opacity: 1;
    }
`;

export const SwiperButtonPrev = styled.div`
    color: #fff; /* Cor das setas */
    width: 50px;
    height: 50px;
    &:hover {
        color: #ff6700; /* Cor ao passar o mouse sobre as setas */
    }
`;

export const SwiperButtonNext = styled.div`
    color: #fff; /* Cor das setas */
    width: 50px;
    height: 50px;
    &:hover {
        color: #ff6700; /* Cor ao passar o mouse sobre as setas */
    }
`;

// Exporta todos os styled-components
export {
    SessaoCarrossel,
    ImagensCarrossel,
    CaixaDeTexto,
    TituloCarrossel,
    DescricaoCarrossel,
    ContainerCarrosel,
    SwiperSlideImage,
    SwiperPaginationBullet,
    SwiperButtonPrev,
    SwiperButtonNext,
    SectionContainer
};
