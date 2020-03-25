import React, { useState } from 'react';
import scss from './UserPersonalData.module.scss'

const DateFilter = ( props ) => {
    const filterData = {};
    const originalDates = { from: '', to:'' };
    const { personalData, getStatisticsByDateThunk } = { ...props };
    
    const listOfDaysForFrom = personalData.map( (userData, id) => {
        if( id === 0 ) {
            originalDates.from = userData.date
        }
        return <option key={id} value={userData.date}>{userData.date}</option>
    } )
    const listOfDaysForTo = personalData.map( (userData, id) => {
        if( id === 6 ) {
            originalDates.to = userData.date
        }
        return <option key={id} value={userData.date}>{userData.date}</option>
    } )
    const [dataFilterFrom, setDataFilterFrom] = useState(originalDates.from);
    const [dataFilterTo, setDataFilterTo] = useState(originalDates.to);
    filterData.userId = personalData[0].user_id;
    const requestData = () =>{
        if (dataFilterFrom > dataFilterTo) {
            alert('Invalid date range! Please, check for correctness.');
            //Alternative solution
            // const filterClone = Object.assign({}, filterData);
            // filterData.to = filterClone.from
            // filterData.from = filterClone.to
            // getStatisticsByDateThunk(filterData)
        } else {
            filterData.from = dataFilterFrom
            filterData.to = dataFilterTo
            getStatisticsByDateThunk(filterData)
        }
    }
    return <div className={scss.dateFilter}>
        <div className={scss.dateFilter__from}>
            <b>From</b>
            <select defaultValue={ originalDates.from } onClick={(event)=> setDataFilterFrom(event.target.value)}>
                {listOfDaysForFrom}
            </select>
        </div>
        <div className={scss.dateFilter__to}>
            <b>To</b>
            <select defaultValue={ originalDates.to } onClick={(event)=> setDataFilterTo(event.target.value)}>
                {listOfDaysForTo}
            </select>
        </div>
        <button className={scss.dateFilter__button} onClick={requestData}>Confirm</button>
    </div>
}



export default DateFilter;