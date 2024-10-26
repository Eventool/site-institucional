import { ItemUl, ItemMenu, MenuWrapper, Link } from './Menu';
// import { Link } from 'react-scroll';

const Menu = () => {
    return (
        <MenuWrapper>
            <ItemUl>
                <ItemMenu><Link href='#sobre-nos'>Sobre nós</Link></ItemMenu>
                <ItemMenu><Link href='#objetivos'>Objetivos</Link></ItemMenu>
                <ItemMenu><Link href='#cases'>Cases</Link></ItemMenu>
            </ItemUl>   
        </MenuWrapper>
    )
}

export default Menu;