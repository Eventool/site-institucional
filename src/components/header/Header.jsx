//import { Button, ButtonGroupContext } from '@mui/material';
import Logo from '../Logo/Logo.jsx';
import Menu from '../menu/Menu.jsx';
import { Header } from './Header.js';
import Button from '../button/Button.jsx';


const HeaderComponent = () => {
    return (
        <Header>
            <Logo />
            <Menu />
            <Button/>
        </Header>
    )
}

export default HeaderComponent;