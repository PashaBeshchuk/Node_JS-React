import React, { useState } from 'react';
import scss from './UserPersonalData.module.scss'

const DateFilter = ( props ) => {
    const filterData = {};
    const { personalData, getStatisticsByDateThunk, listUsersDate } = { ...props };
    const [dataFilterFrom, setDataFilterFrom] = useState(null);
    const [dataFilterTo, setDataFilterTo] = useState(null);
    const dateSeparationForFrom = (listUsersDate, personalData) => {
        const lastDay = listUsersDate[listUsersDate.length-1]
        const arrDate = []
        for ( let i = 0; i < personalData.length; i++ ) {
           if(lastDay.date > personalData[i].date) {
                arrDate.push(personalData[i])
           }
        }
        return arrDate
    }
    const dateSeparationForTo = (listUsersDate, personalData) => {
        const firstDay = listUsersDate[0]
        const arrDate = []
        for ( let i = 0; i < personalData.length; i++ ) {
           if( firstDay.date < personalData[i].date ) {
                arrDate.push(personalData[i])
           }
        }
        return arrDate
    }

    const listDateForFrom = dateSeparationForFrom(listUsersDate, personalData)
    const listDateForTo = dateSeparationForTo(listUsersDate, personalData)
    const listOfDaysForFrom = listDateForFrom.map(( userData, id ) => {
        if(!dataFilterFrom) {
            if(userData.date == listUsersDate[0].date) {
                setDataFilterFrom(userData.date)
            }
        }
        return <option key={id} value={userData.date}>{userData.date}</option>
    })
    const listOfDaysForTo = listDateForTo.map(( userData, id ) => {
        if(!dataFilterTo) {
            if(userData.date == listUsersDate[listUsersDate.length-1].date) {
                setDataFilterTo(userData.date)
            }
        }
        
        return <option key={id} value={userData.date}>{userData.date}</option>
    })

    filterData.userId = personalData[0].user_id;
    const requestData = () => {
        if(!!dataFilterFrom && !!dataFilterTo) {
            filterData.from = dataFilterFrom
            filterData.to = dataFilterTo    
            getStatisticsByDateThunk(filterData)
        }
       
    }
    return <div className={scss.dateFilter}>
        <div className={scss.dateFilter__from}>
            <b>From </b>
            <select value={ dataFilterFrom } 
                onChange={(event)=> setDataFilterFrom(event.target.value)}
                onClick={requestData}>

                {listOfDaysForFrom}
            </select>
        </div>
        <div className={scss.dateFilter__to}>
            <b>To </b>
            <select value={ dataFilterTo } 
                onChange={(event)=> setDataFilterTo(event.target.value)}
                onClick={requestData}>

                {listOfDaysForTo}
            </select>
        </div>
    </div>
}


export default DateFilter;
