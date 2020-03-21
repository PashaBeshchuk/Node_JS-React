import React from 'react';
import { connect } from 'react-redux';
import UserPersonalData from './UserPersonalData';
import DateFilter from './DateFilter';
import { getStatisticsByDateThunk } from '../../redux/statistic-reducer'
import { Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';



const userPersonalDataContainer = (props) => {
    const { personalData, statisticsByDate, months, fullName } = { ...props };
    if(!personalData) return <Redirect to={'/Main/User-Statistics'} />;
    const day = personalData[0].date.split('-');
    const statisticsPeriod = `Statistics period: ${day[0]}, ${months[day[1]]} ` 
    const dayInTheWeek = 7;
    const getActualUsers = ( statisticsByDate, personalData ) => {
        if( statisticsByDate ) {
            return statisticsByDate;
        } else {
            return personalData.slice( 0, 7 );
        }
    }
    const userDataFormatting = ( listUsers ) => {
        const arrUsers = [];
        for ( let i = 0; i < listUsers.length; i++ ){
            const day = listUsers[i].date.split('-');
            arrUsers.push({ x: day[2], page_views: listUsers[i].page_views, clicks: listUsers[i].clicks });
        }
        return arrUsers;
    };

    const listUsers = getActualUsers( statisticsByDate, personalData );
    const dataForSchedule = userDataFormatting( listUsers );
    return <div>
        <Header/>
        <DateFilter {...props} />
        <UserPersonalData personalData={dataForSchedule}  statisticsPeriod={statisticsPeriod} fullName={fullName}/>
        <Footer/>
    </div>
};

const mapStateToProps = ( state ) => {
    return {
        personalData: state.statisticReducer.personalData,
        statisticsByDate: state.statisticReducer.statisticsByDate,
        months: state.statisticReducer.months,
        fullName: state.statisticReducer.fullName,
    };
};

export default connect(mapStateToProps, { getStatisticsByDateThunk })(userPersonalDataContainer);
