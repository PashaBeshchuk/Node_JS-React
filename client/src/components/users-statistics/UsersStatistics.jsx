import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserStatistic from './user-statistic/UserStatistic';
import scss from './UsersStatistics.module.scss'
import PaginationContainer from '../pagination/PaginationContainer';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const UsersStatistics = (props) => {
    const { users, updatePersonalDataAC, usersStatistics, fullName, updateFullNameAC, actualUrl } = { ...props };
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
    return <div className={scss.bodyForPageStatistics}>
        <Header/>
        <div className={scss.blockTable}>
            <div className={scss.h1}>
                <SetTheNumberOfUsers {...props}/>
                Users Statistics
            </div>
            
            <table>
                <tbody>
                    <TableHeader/>
                    {listUsers}
                </tbody>
            </table>
            <PaginationContainer actualUrl={actualUrl} />
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

const SetTheNumberOfUsers = (props) => {
    const {updateCountUsers, getPortionUsersThunk, countPage } = { ...props };
    const sendValue = (event) => {
        updateCountUsers(event.target.value);
        getPortionUsersThunk(event.target.value, countPage);
    }

    return <div className={scss.setCountUsers}>    
        <div>Enter the number of users</div>
        <select onChange={sendValue}>
            <option>10</option>
            <option>15</option>
            <option>25</option>
            <option>50</option>
        </select>
    </div>
} 

export default UsersStatistics;