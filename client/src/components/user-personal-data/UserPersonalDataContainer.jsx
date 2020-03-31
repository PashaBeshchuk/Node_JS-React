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
    const statisticsPeriod = `Statistics period: ${day[0]}, ${months[(day[1])]} ` 
    
    const getActualUsers = ( statisticsByDate, personalData ) => {
        const actualUsers = [];
        if( statisticsByDate ) {
            return statisticsByDate;
        } else {
            const dayInTheWeek = 7;
            let correspondingSevenDays = 0;
            
            for (let i = 0; i < personalData.length; i++) {
                if(correspondingSevenDays < dayInTheWeek) {
                    if( personalData[i].page_views > 0 || personalData[i].clicks > 0 ) {  
                        correspondingSevenDays += 1;
                        actualUsers.push(personalData[i]);
                    }
                } else {
                    return actualUsers;
                }
            }
            return actualUsers;
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
    const listUsersDate = getActualUsers( statisticsByDate, personalData );
    const dataForSchedule = userDataFormatting( listUsersDate );
    return <div>
        <Header/>
        <DateFilter {...props} listUsersDate={listUsersDate} />
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
