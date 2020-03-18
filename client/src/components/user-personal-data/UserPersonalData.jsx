import React from 'react';
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Area,
    Tooltip,
    ResponsiveContainer,
    LabelList
  } from 'recharts';

const userPersonalData = (props) => {  
    return <div>
        <div style={{ maxWidth:'800px', margin:'0px auto', height: '250px'}}>
            { props.statisticsPeriod }
            <p>Clicks</p>
            <ResponsiveContainer>
                <AreaChart data={props.personalData} >
                    <XAxis dataKey='x' />
                    <YAxis domain={[0, 1000]} />
                    <Area dataKey='clicks'/> 
                </AreaChart>
            </ResponsiveContainer>
        </div>
        <div style={{ maxWidth:'800px', margin:'50px auto', height: '250px'}}>
            Views
            <ResponsiveContainer>
                <AreaChart data={props.personalData} >
                    <XAxis dataKey='x' />
                    <YAxis domain={[0, 1000]} />
                    <Area dataKey='page_views'/> 
                </AreaChart>
            </ResponsiveContainer>
        </div>

    </div>
};

export default userPersonalData;
