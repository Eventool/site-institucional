import styled from "styled-components";

const Secao = styled.div`
    height: 888px;
    width: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative; /* Para que o overlay funcione */

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
}
`;

const Button = styled.button`
  background-color: #F95A00;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 120px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #F95A00;
  }
`;

const Title = styled.h1`
    font-size: 75px;
    color: white; 
    margin: 0; 
    word-wrap: break-word; 
    overflow-wrap: break-word; 
    hyphens: auto; 
`;


const Description = styled.p`
    font-size: 18px; 
    color: white;
    margin: 10px 0; 
    word-wrap: break-word;
    overflow-wrap: break-word; 
    hyphens: auto; 
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;
const Content = styled.div`
    position: relative;
    z-index: 2;
    margin-top: 15%;
    text-align: left;
    margin-left: 3%;
    padding: 20px;
`;

export {
    Secao,
    Title,
    Description,
    Overlay,
    Content,
    Button
}