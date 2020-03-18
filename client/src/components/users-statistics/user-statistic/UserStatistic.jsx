import React from 'react' 

const UserStatistic = (props) => {
    return <>
        <td>{props.id}</td>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.email}</td>
        <td>{props.gender}</td> 
        <td>{props.ip_address}</td> 
        <td>{props.clicks}</td> 
        <td>{props.page_views}</td> 
    </>
}

export default UserStatistic