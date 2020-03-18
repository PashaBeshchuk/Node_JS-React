import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserStatistic from './user-statistic/UserStatistic';
import css from './UsersStatistics.module.css'
import PaginationContainer from '../pagination/PaginationContainer';


const UsersStatistics = (props) => {
    const { users, updatePersonalDataAC, usersStatistics } = { ...props }
    const [ redirectToPersonalPage, setRedirect ] = useState( false );
    const [ fullName, setFullName ] = useState({name: '', surname: ''} );

    const goToNewPage = (usersStatistics, users) => {
        setFullName({ name: users.first_name, surname: users.last_name })
        updatePersonalDataAC(usersStatistics)
        setRedirect(true);
    }
    const listUsers =  users.map((element,id)=>{
        return <tr onClick={goToNewPage.bind(null, usersStatistics[id], users[id])} key={id}><UserStatistic {...element} /></tr>;
    })
    if( redirectToPersonalPage ) return<Redirect to={`/Main/User-Statistic/${fullName.name}-${fullName.surname}`} />;
    return <div className={css.body_for_table}>
        Stats Page
        <div className={css.blockTable}>
            <span>Users Statistics</span>
            <table>
                <tbody>
                    <TableHeader/>
                    {listUsers}
                </tbody>
            </table>
            <PaginationContainer />
        </div>  
    </div>
};

const TableHeader = (props) => {
    return <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>IP address</th>
        <th>Total clicks</th>
        <th>Total page views</th>
    </tr>
}

export default UsersStatistics;