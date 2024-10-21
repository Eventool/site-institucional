import styled from "styled-components";

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 6%;
    width: 40%;
    height: 100%;
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

const Link = styled.a`
    text-decoration: none;  
    color: black;           
    transition: color 0.3s ease;

    &:hover {
    color: #F95A00;
  }
`;

export {
    ItemUl,
    ItemMenu,
    MenuWrapper,
    Link
}