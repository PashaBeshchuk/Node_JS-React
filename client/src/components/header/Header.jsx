import React from 'react';
import scss from './Header.module.scss';

const Header = (props) => {
    return <div className={scss.header}>
        <div className={scss.header__text}>AppCo</div>
    </div>
}

export default Header;