import { ItemUl, ItemMenu, MenuWrapper, Link } from './Menu';

const Menu = () => {
    return (
        <MenuWrapper>
            <ItemUl>
                <ItemMenu><Link href=''>Sobre nós</Link></ItemMenu>
                <ItemMenu><Link href=''>Objetivos</Link></ItemMenu>
                <ItemMenu><Link href=''>Cases</Link></ItemMenu>
            </ItemUl>   
        </MenuWrapper>
    )
}

export default Menu;