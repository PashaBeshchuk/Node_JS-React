import React from 'react';
import backgroundPicture from './../../images/background_picture.png';
import stationeryItems from './../../images/stationery_items.png';
import security from './../../images/security.png';
import gadgets from './../../images/gadgets.png';
import scss from './Main.module.scss';

const MainCategories = (props) => {
    return <div>
        <div className={scss.blockCategories}>
            <div className={scss.blockCategories__boxText}>
                <div className={scss.blockCategories__boxText__h1}>
                    <p>Why <b>small business owners</b></p>
                    <p><b>love</b> AppCo?</p>
                </div>
                <div className={scss.blockCategories__boxText__h2}>
                    <p>Our design projects are fresh and simple and will benefit your business</p>
                    <p>greatly. Learn more about our work!</p>
                </div>
                <div className={scss.blockCategories__advantages}>
                    <div className={scss.blockCategories__advantages__categories}>
                        <div className={scss.blockCategories__advantages__categories__img}>
                            <img src={backgroundPicture}/>
                        </div>
                        <div className={scss.blockCategories__advantages__categories__imgChild}>
                            <img src={stationeryItems}/>
                        </div>
                        <span className={scss.blockCategories__advantages__categories__h1}>
                            <b>Clean Design</b>
                        </span>
                        <div className={scss.blockCategories__advantages__categories__text}>
                            <p>Increase sales by showing true</p>  
                            <p>dynamics of your website.</p>
                        </div>
                    </div>
                    <div className={scss.blockCategories__advantages__categories}>
                        <div className={scss.blockCategories__advantages__categories__img}>
                            <img src={backgroundPicture}/>
                        </div>
                        <div className={scss.blockCategories__advantages__categories__imgChild}>
                            <img src={security}/>
                        </div>
                        <span className={scss.blockCategories__advantages__categories__h1}>
                            <b>Secure Data</b>
                        </span>
                        <div className={scss.blockCategories__advantages__categories__text}>
                            <p>Build your online store’s trust using</p>  
                            <p>Social Proof & Urgency.</p>  
                        </div> 
                    </div>
                    <div className={scss.blockCategories__advantages__categories}>
                        <div className={scss.blockCategories__advantages__categories__img}>
                            <img src={backgroundPicture}/>
                        </div>
                        <div className={scss.blockCategories__advantages__categories__imgChild}>
                            <img src={gadgets}/>
                        </div>   
                        <span className={scss.blockCategories__advantages__categories__h1}>
                            <b>Retina Ready</b>
                        </span>
                        <div className={scss.blockCategories__advantages__categories__text}>
                            <p>Realize importance of social proof in</p>  
                            <p>customer’s purchase decision.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
}

export default MainCategories;