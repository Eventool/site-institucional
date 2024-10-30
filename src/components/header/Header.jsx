//import { Button, ButtonGroupContext } from '@mui/material';
import Logo from '../Logo/Logo.jsx';
import Menu from '../menu/Menu.jsx';
import { Header, SectionContainer } from './Header.js';
import Button from '../button/Button.jsx';


const HeaderComponent = () => {
    return (
        <SectionContainer>
            <Header>
            <Logo />
            <Menu />
            <Button/>
        </Header>
        </SectionContainer>
    )
}

export default HeaderComponent;