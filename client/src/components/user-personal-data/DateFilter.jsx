import React from 'react';
import scss from './UserPersonalData.module.scss'

const DateFilter = ( props ) => {
    const filterData = {};
    const { personalData, getStatisticsByDateThunk } = { ...props }
    filterData.userId = personalData[0].user_id;
    const listOfDays = personalData.map( (userData, id) => {
        return <option key={id}>{userData.date}</option>
    } )
    const requestData = () =>{
        if ( !filterData.from || !filterData.to ) {
            alert('Specify a date range from and to');
        } else {
            getStatisticsByDateThunk(filterData)
        }
    }
    return <div className={scss.dateFilter}>
        <div className={scss.dateFilter__from}>
            <b>From</b>
            <select onClick={(event)=> filterData.from=event.target.value}>
                {listOfDays}
            </select>
        </div>
        <div className={scss.dateFilter__to}>
            <b>To</b>
            <select onClick={(event)=> filterData.to=event.target.value}>
                {listOfDays}
            </select>
        </div>
        <button className={scss.dateFilter__button} onClick={requestData}>Confirm</button>
    </div>
}

export default DateFilter;