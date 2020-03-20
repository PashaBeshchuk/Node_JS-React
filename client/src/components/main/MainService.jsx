import React from 'react';
import scss from './Main.module.scss';
import BlockService from './BlockService';
import footerImage from './../../images/footer_image.png';


const MainService = (props) => {
    return <div>
        <div className={scss.blockServices}>           
            <div className={scss.blockServices__h1}>
                <p><b>Afforadble Pricing and Packages</b></p>
                <p>choose your best one</p>
            </div>
            <div className={scss.blockServices__text}>
                <p>Monotonectally grow strategic process improvements vis-a-vis</p>
                <p>integrated resources.</p>
            </div>
            <div>
                <BlockService/>
            </div>
            <div className={scss.blockServices__h2}>If you need custom services or Need more? <span>Contact us</span></div>
            <div className={scss.blockServices__footer}>
                <img style={{width:'100%'}} src={footerImage}/>
                <div className={scss.blockServices__footer__fieldText}></div>
                <input placeholder={'Enter your email'}/>
                <button className={scss.blockServices__footer__button}>Subscribe</button>
                <div className={scss.blockServices__footer__t1}>AppCo</div>
                <div className={scss.blockServices__footer__t2}>All rights reserved by ThemeTags</div>
                <div className={scss.blockServices__footer__t3}>Copyrights © 2019.</div>
            </div>
        </div>
    </div>
}

export default MainService;