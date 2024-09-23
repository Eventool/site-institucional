import React from 'react';
import styles from './Header.module.css';
import Button from '../button/Button';

const Header = () => {
    return(
        <header>
            <p>Serenity</p>
            <ul className={styles.navItens}>
                <li>Sobre nós</li>
                <li>Objetivos</li>
                <li>Cases</li>
            </ul>
        </header>
    )
}

export default Header;