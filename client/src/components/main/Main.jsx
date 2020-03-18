import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = (props) => {
    return <div>
        Main Page
        <div><NavLink to='/Main/User-Statistics'>View UserStatistics</NavLink></div>
    </div>
};

export default Main;