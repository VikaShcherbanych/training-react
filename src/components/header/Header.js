import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header>
            <h1>App Title</h1>
            <nav>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
