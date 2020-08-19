import React from 'react';
import backgroundPicture from './../../images/background_picture.png';
import stationeryItems from './../../images/stationery_items.png';
import security from './../../images/security.png';
import gadgets from './../../images/gadgets.png';
import './main.scss';

const MainCategoriesCopy = (props) => {
    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__container__head">  
                    <h1>Why <span> do small business owners</span><br/>
                    <span>love</span> AppCo?</h1>
                    
                    <h2>Our design projects are fresh and simple and will benefit your business
                    <br/>greatly. Learn more about our work!</h2>
                </div>
                <div className="categories__container__box">

                    <div className="categories__container__box__block">
                        <div className="contant">
                            <div className="contant__image">
                                <img src={backgroundPicture}/>
                                <img src={stationeryItems}/>
                            </div>
                            <h3>
                                Clean Design
                            </h3>
                            <p>Increase sales by showing true<br/> 
                            dynamics of your website.</p>
                        </div>
                    </div>

                    <div className="categories__container__box__block">
                        <div className="contant">
                            <div className="contant__image">
                                <img src={backgroundPicture}/>
                                <img src={security}/>
                            </div>
                            <h3>
                                Clean Design
                            </h3>
                            <p>Increase sales by showing true<br/> 
                            dynamics of your website.</p>
                        </div>
                    </div>

                    <div className="categories__container__box__block">
                        <div className="contant">
                            <div className="contant__image">
                                <img src={backgroundPicture}/>
                                <img src={gadgets}/>
                            </div>
                            <h3>
                                Clean Design
                            </h3>
                            <p>Increase sales by showing true<br/> 
                            dynamics of your website.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )   
}

export default MainCategoriesCopy;