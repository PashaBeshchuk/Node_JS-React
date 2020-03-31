import React from 'react';
import scss from './Main.module.scss';
import pageNote from './../../images/page_note.png'
import keyboard from './../../images/keyboard.png'
import baseShadow from './../../images/base_shadow.png'


const MainStartApps = (props) => {
    return <div>
        <div className={scss.blockStartsBusiness}>
            <div className={scss.blockStartsBusiness__blockText}>
                <div className={scss.blockStartsBusiness__h1}>
                    <p>Start Managing your apps </p>
                    <p>business, more faster</p>
                </div>
                <div className={scss.blockStartsBusiness__text}>
                    <p>Objectively deliver professional value with diverse web-readiness.</p>
                    <p>Collaboratively transition wireless customer service without</p>
                    <p>goal-oriented catalysts for change. Collaboratively.</p>
                </div>
                <button className={scss.blockStartsBusiness__button}>
                    Learn more
                </button>
            </div>
            <div className={scss.blockStartsBusiness__noteBook}></div>
            <div className={scss.blockStartsBusiness__image}><img src={pageNote}/></div>
            <div className={scss.blockStartsBusiness__keyboard}><img src={keyboard}/></div>
            <div className={scss.blockStartsBusiness__keyboardShadowOne}><img src={baseShadow}/></div>
            <div className={scss.blockStartsBusiness__keyboardShadowTwo}><img src={baseShadow}/></div>
        </div>
    </div>
}

export default MainStartApps;