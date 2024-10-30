import styled from "styled-components";

const SectionContainer = styled.div`
    margin: 20px 0;
    background: #f0f0f0;
    @media (max-width: 768px) {
        padding: 15px; 
    }
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 1% 0;
    height: 60px;
    width: 100%;
    display: flex;
    background-color: #fff; /* Ajuste conforme o design da sua página */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export {
    Header,
    SectionContainer
}