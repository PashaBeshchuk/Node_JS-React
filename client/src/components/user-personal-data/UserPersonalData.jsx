import React from 'react';
import scss from './UserPersonalData.module.scss'
import {
    AreaChart,
    XAxis,
    YAxis,
    Area,
    ResponsiveContainer,
  } from 'recharts';

const userPersonalData = (props) => {
    return <div>
        <div style={{ maxWidth:'800px', margin:'0px auto', height: '250px'}}>
            <div className={scss.fullName}> { props.statisticsPeriod } {` ${props.fullName.name} ${props.fullName.surname}`}</div>
            <p className={scss.chartTitle}>Clicks</p>
            <ResponsiveContainer>
                <AreaChart data={props.personalData} >
                    <XAxis dataKey='x' />
                    <YAxis domain={[0, 1000]} />
                    <Area dataKey='clicks'/> 
                </AreaChart>
            </ResponsiveContainer>
        </div>
        <div className={scss.chartViews}>
            <div style={{ maxWidth:'800px', margin:'50px auto', height: '250px'}}>
                <p className={scss.chartTitle}>Views</p>
                <ResponsiveContainer>
                    <AreaChart data={props.personalData} >
                        <XAxis dataKey='x' />
                        <YAxis domain={[0, 1000]} />
                        <Area dataKey='page_views'/> 
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
};

export default userPersonalData;
