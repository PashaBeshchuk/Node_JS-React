import React, { useEffect } from 'react';
import UsersStatistics from './UsersStatistics';
import { connect } from 'react-redux';
import { getPortionUsersThunk, updatePersonalDataAC, updateFullNameAC, updateCountUsers } from '../../redux/statistic-reducer';

const UsersStatisticContainer = (props) => {
    const { users, countUsers, countPage, getPortionUsersThunk } = { ...props };
    useEffect(() => {
        if(props.match.params.userId){
            getPortionUsersThunk(countUsers, props.match.params.userId);
        }else {
            getPortionUsersThunk(countUsers, countPage);
        }
        
    }, [countPage])
    if (users) {
        return <div>
            <UsersStatistics {...props} actualUrl={props.match.params}/>
        </div>
    }
    return <></>
}

const mapStateToProps = (state) => {
    return {
        users: state.statisticReducer.users,
        countUsers: state.statisticReducer.countUsers,
        countPage: state.statisticReducer.countPage,
        usersStatistics: state.statisticReducer.usersStatistics,
        fullName: state.statisticReducer.fullName,
    }
}

export default connect(mapStateToProps, { getPortionUsersThunk, updatePersonalDataAC, updateFullNameAC, updateCountUsers })(UsersStatisticContainer)