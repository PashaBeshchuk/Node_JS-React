import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import {  getPortionUsersThunk } from '../../redux/statistic-reducer';
import { NavLink } from 'react-router-dom';

const PaginationContainer = (props) => {
    const { countAllUsers, countUsers, countPage, getPortionUsersThunk, paginationSize, load } = { ...props };
    const [ countActualPage, setCountActualPage ] = useState(1)
    const checkStateComponent = () => {
        if(load){
            return <div></div>
        } else {
            const startPage = countPage / paginationSize
            if ( startPage > 0 ) {
                setCountActualPage(Math.ceil(startPage))
            } else {
                setCountActualPage(Math.floor(startPage))
            }
        }
    }
    
    useEffect( () => {
        checkStateComponent()
    }, [load] )
    const firstPage = ( Number(countActualPage) - 1 ) * paginationSize;
    const lastPage = countActualPage * paginationSize;
    const endPage = countAllUsers/countUsers;
    const pages = [];
    for ( let i = 0; i <= lastPage; i++ ) {
        pages.push(i);
    };
    
    const updateActualUsers = (event) => {
        getPortionUsersThunk(countUsers, event.target.innerHTML)
    }
    const actualPages = pages.filter( (page) => {
        if ( page >= firstPage && page <= lastPage ) { 
            return page
        } 
    })
    const linkForpagonation = actualPages.map((page,key)=>{
        return <span key={key}><NavLink exact onClick={updateActualUsers} to={`/Main/User-Statistics/${page}`}>{page}</NavLink></span>
    })
    return <div>
        <Pagination pageData={ { countActualPage, linkForpagonation, firstPage, endPage, lastPage, setCountActualPage } }/>
    </div>    
};

const mapStateToProps = (state) => {
    return {
        countAllUsers: state.statisticReducer.countAllUsers,
        countUsers: state.statisticReducer.countUsers,
        paginationSize: state.statisticReducer.paginationSize,
        load: state.statisticReducer.load,
        countPage: state.statisticReducer.countPage,
    }
};  


export default connect(mapStateToProps,{ getPortionUsersThunk })(PaginationContainer);