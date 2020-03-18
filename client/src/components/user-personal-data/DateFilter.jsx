import React from 'react';

const DateFilter = ( props ) => {
    console.log(props)
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
    return <div>
        <div>
            From
            <select onClick={(event)=> filterData.from=event.target.value}>
                {listOfDays}
            </select>
        </div>
        <div>
            To
            <select onClick={(event)=> filterData.to=event.target.value}>
                {listOfDays}
            </select>
        </div>
        <button onClick={requestData}>Confirm</button>
    </div>
}

export default DateFilter;