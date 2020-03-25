import React from 'react';
import scss from '../UsersStatistics.module.scss';

const UserStatistic = (props) => {
    return <>
        <td className={scss.personalData}>{props.id}</td>
        <td className={scss.personalData}>{props.first_name}</td>
        <td className={scss.personalData}>{props.last_name}</td>
        <td className={scss.personalData}>{props.email}</td>
        <td className={scss.personalData}>{props.gender}</td> 
        <td className={scss.personalData}>{props.ip_address}</td> 
        <td className={scss.personalData}>{props.clicks}</td> 
        <td className={scss.personalData}>{props.page_views}</td>
    </>
}

export default UserStatistic;


