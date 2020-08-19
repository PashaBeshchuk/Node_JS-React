import React from 'react';
import './main.scss';
import basicService from './../../images/basic_service.png';
import standartService from './../../images/standart_service.png';
import unlimitedService from './../../images/unlimited_service.png';
const MainServiceСopy = (props) => {
    return (
        <div className="services">           
            <div className="services__container">
                <h2><span>Afforadble Pricing and Packages</span> choose your best one</h2>
                <p>Monotonectally grow strategic process improvements vis-a-vis
                    integrated resources.</p>
                <div className="services__container__box">
                    <div className="services__container__box__service">
                        <h3>Basic</h3>
                        <div><img src={basicService}/></div>
                        <h4>$29</h4>
                        <ul>
                            <li>Push Notifications</li>
                            <li>Data Transfer</li>
                            <li>SQL Database</li>
                            <li>Search & SEO Analytics</li>
                            <li>24/7 Phone Support</li>
                            <li>2 months technical support</li>
                            <li>2+ profitable keyword</li>
                        </ul>
                        <button>
                            Purchase now
                        </button>
                    </div>
                    <div className="services__container__box__service">
                        <h3>Standard</h3>
                        <div><img src={standartService}/></div>
                        <h4>$29</h4>
                        <ul>
                            <li>Push Notifications</li>
                            <li>Data Transfer</li>
                            <li>SQL Database</li>
                            <li>Search & SEO Analytics</li>
                            <li>24/7 Phone Support</li>
                            <li>2 months technical support</li>
                            <li>2+ profitable keyword</li>
                        </ul>
                        <button>
                            Purchase now
                        </button>
                    </div>
                    <div className="services__container__box__service">
                        <h3>Unlimited</h3>
                        <div><img src={unlimitedService}/></div>
                        <h4>$29</h4>
                        <ul>
                            <li>Push Notifications</li>
                            <li>Data Transfer</li>
                            <li>SQL Database</li>
                            <li>Search & SEO Analytics</li>
                            <li>24/7 Phone Support</li>
                            <li>2 months technical support</li>
                            <li>2+ profitable keyword</li>
                        </ul>
                        <button>
                            Purchase now
                        </button>
                    </div>
                </div>
                <p>If you need custom services or Need more? <span>Contact us</span></p>
            </div>
        </div>
    )
}

export default MainServiceСopy;