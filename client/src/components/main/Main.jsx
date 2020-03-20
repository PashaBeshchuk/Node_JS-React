import React from 'react';
import MainCategories from './MainCategories';
import MainHeader from './MainHeader';
import MainStartApps from './MainStartApps';
import MainService from './MainService';




const Main = (props) => {
    return <div>
        <MainHeader/>
        <MainCategories/>
        <MainStartApps/>
        <MainService/>
    </div>
};

export default Main;