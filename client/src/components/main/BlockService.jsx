import React from 'react';
import scss from './Main.module.scss';
import basicService from './../../images/basic_service.png';
import standartService from './../../images/standart_service.png';
import unlimitedService from './../../images/unlimited_service.png';


const BlockService = (props) => {
    return <div>
         <div className={scss.blockServices__sale}>
            <div className={scss.blockServices__sale__service}>
                <p className={scss.blockServices__sale__service__h1}><b>Basic</b></p>
                <div><img src={basicService}/></div>
                <p className={scss.blockServices__sale__service__price}>$29</p>
                <div className={scss.blockServices__sale__service__text}>
                    <p>Push Notifications</p>
                    <p>Data Transfer</p>
                    <p>SQL Database</p>
                    <p>Search & SEO Analytics</p>
                    <p>24/7 Phone Support</p>
                    <p>2 months technical support</p>
                    <p>2+ profitable keyword</p>
                </div>
                <button className={scss.blockServices__sale__service__button}>
                    Purchase now
                </button>
            </div>
            <div className={scss.blockServices__sale__service}>
                <p className={scss.blockServices__sale__service__h1}><b>Standard</b></p>
                <div><img src={standartService}/></div>
                <p className={scss.blockServices__sale__service__priceActive}>$149</p>
                <div className={scss.blockServices__sale__service__text}>
                    <p>Push Notifications</p>
                    <p>Data Transfer</p>
                    <p>SQL Database</p>
                    <p>Search & SEO Analytics</p>
                    <p>24/7 Phone Support</p>
                    <p>2 months technical support</p>
                    <p>2+ profitable keyword</p>
                </div>
                <button className={scss.blockServices__sale__service__button}>
                    Purchase now
                </button>
            </div>
            <div className={scss.blockServices__sale__service}>
                <p className={scss.blockServices__sale__service__h1}><b>Unlimited</b></p>
                <div><img src={unlimitedService}/></div>
                <p className={scss.blockServices__sale__service__price}>$39</p>
                <div className={scss.blockServices__sale__service__text}>
                    <p>Push Notifications</p>
                    <p>Data Transfer</p>
                    <p>SQL Database</p>
                    <p>Search & SEO Analytics</p>
                    <p>24/7 Phone Support</p>
                    <p>2 months technical support</p>
                    <p>2+ profitable keyword</p>
                </div>
                <button className={scss.blockServices__sale__service__button}>
                    Purchase now
                </button>
            </div>
        </div>
    </div>
}

export default BlockService;