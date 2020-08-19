import React, { useState }  from 'react';
import './main.scss';
import './media.scss';
import { Redirect } from 'react-router-dom';


const MainHeaderCopy = (props) => {
    const [ redirectToUserStatisticsPage, setRedirect ] = useState( false );
    const redirectInUserStatistics = () =>{
        setRedirect(true); 
    }
    if(redirectToUserStatisticsPage) return <Redirect to={'/Main/User-Statistics'}/>;



    return <div className="blockHeader">
        <div className="blockHeader__content">
            <div className="blockHeader__content__text">
                    <h1>AppCo</h1>
                    <h2><span>Brainstorming</span> for <br/>
                    desired perfect Usability</h2>


                    <p>Our design projects are fresh and simple and will benefit <br/>
                    your business greatly. Learn more about our work!</p>

                <button onClick={redirectInUserStatistics} >
                    View UserStatistics
                </button>
            </div>
            <div className="blockHeader__content__img">
                    <div className="blockHeader__content__img__container">
                        <div className="phone">
                            <div className="phone__container">
                                <div className="phone__container__text"></div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>


}

export default MainHeaderCopy;