import React from 'react';
import scss from './Footer.module.scss'

const Footer = (props) => {
    return <div className={scss.footer}>
        <div className={scss.footer__name}>AppCo</div>
        <div className={scss.footer__text}>All rights reserved by ThemeTags</div>
        <div className={scss.footer__year}>Copyrights © 2019.</div>
    </div>
}

export default Footer;