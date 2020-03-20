import React from 'react';
import scss from './Main.module.scss';
import { NavLink } from 'react-router-dom';
import text from './../../images/text.png'
import footer from './../../images/footer.png'
import back from './../../images/back.png'
import headerImage from './../../images/header_image.png'

const MainHeader = (props) => {
    return <div>
         <div className={scss.blockHeader}>
            <div className={scss.headerImage}><img style={{width:'100%'}} src={headerImage}/></div>
            <div className={scss.blockHeader__text}>
                <div>
                    <p className={scss.blockHeader__text__h1}>AppCo</p>
                    <div className={scss.blockHeader__text__h2}>
                        <p><b>Brainstorming</b> for</p>
                        <p>desired perfect Usability</p>
                    </div>  
                </div>
                <div className={scss.blockHeader__text__h3}>
                    <p>Our design projects are fresh and simple and will benefit</p>
                    <p>your business greatly. Learn more about our work!</p>
                </div>
                <button className={scss.blockHeader__text__button}>
                    <NavLink to='/Main/User-Statistics'>View UserStatistics</NavLink>
                </button>
            </div>
            <div>
                <div className={scss.blockHeader__background__image}></div>
                <img className={scss.blockHeader__image__back} src={back}/>
                <img className={scss.blockHeader__image__footer} src={footer}/>
                <img className={scss.blockHeader__image__text} src={text}/>
            </div> 
        </div>
    </div>
}

export default MainHeader;