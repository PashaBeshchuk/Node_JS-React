import React from 'react';

import MainServiceСopy from './MainServiceСopy';
import MainHeaderCopy from './MainHeaderCopy';
import MainCategoriesCopy from './MainCategoriesCopy';
import MainStartAppsCopy from './MainStartAppsCopy';
import Footer from './Footer';




const Main = (props) => {
    return <div>
        <MainHeaderCopy/>
        <MainCategoriesCopy/>
        <MainStartAppsCopy/>
        <MainServiceСopy/>
        <Footer/>

    </div>
};

export default Main;