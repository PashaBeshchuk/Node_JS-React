import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserStatistic from './user-statistic/UserStatistic';
import scss from './UsersStatistics.module.scss'
import PaginationContainer from '../pagination/PaginationContainer';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const UsersStatistics = (props) => {
    const { users, updatePersonalDataAC, usersStatistics, fullName, updateFullNameAC } = { ...props };
    const [ redirectToPersonalPage, setRedirect ] = useState( false );
    let trActive = false;
    const goToNewPage = (usersStatistics, users) => {
        updateFullNameAC({ name: users.first_name, surname: users.last_name })
        updatePersonalDataAC(usersStatistics);
        setRedirect(true);
    }
    const listUsers =  users.map((element,id)=>{
        if(trActive) {
            trActive = false;
            return <tr className={scss.blockTable__trActive} onClick={goToNewPage.bind(null, usersStatistics[id], users[id])} key={id}><UserStatistic {...element} /></tr>;
        } else {
            trActive = true;
            return <tr className={scss.blockTable__trInactive} onClick={goToNewPage.bind(null, usersStatistics[id], users[id])} key={id}><UserStatistic {...element} /></tr>;
        }
      
        
    })
    if( redirectToPersonalPage ) return<Redirect to={`/Main/User-Statistic/${fullName.name}-${fullName.surname}`} />;
    return <div>
        <Header/>
        <div className={scss.blockTable}>
            <div className={scss.h1}>Users Statistics</div>
            <table>
                <tbody>
                    <TableHeader/>
                    {listUsers}
                </tbody>
            </table>
            <PaginationContainer />
        </div>
        <Footer/>  
    </div> 
    
};

const TableHeader = (props) => {
    return <tr className={scss.blockTable__headTable}>
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