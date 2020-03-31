import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { updateCountPageAC } from '../../redux/statistic-reducer';
import { NavLink } from 'react-router-dom';
import scss from './Pagination.module.scss'

const PaginationContainer = (props) => {
    const { countAllUsers, countUsers, countPage, paginationSize, load, updateCountPageAC } = { ...props };
    const [ countActualPage, setCountActualPage ] = useState(1);
    const checkStateComponent = () => {
        if(load){
            return <div></div>;
        } else {
            const startPage = countPage / paginationSize;
            if ( startPage > 0 ) {
                setCountActualPage(Math.ceil(startPage));
            } else {
                setCountActualPage(Math.floor(startPage));
            }
        }
    }
    
    useEffect( () => {
        checkStateComponent();
    }, [load] )
    const firstPage = ( Number(countActualPage) - 1 ) * paginationSize;
    const lastPage = countActualPage * paginationSize;
    const endPage = countAllUsers/countUsers;
    const pages = [];
    for ( let i = 0; i <= lastPage; i++ ) {
        pages.push(i);
    };
    
    const updateActualUsers = (event) => {
        let number;
        if( event.target.innerHTML === 'Next' ) {
            number = countPage + 1;
        } else if ( event.target.innerHTML === 'Previous' ) {
            number = countPage - 1;
        } else {
            number = Number(event.target.innerHTML);
        }
        updateCountPageAC( number );
        setCountActualPage(Math.ceil(number / 5));
    }
    const actualPages = pages.filter( (page) => {
        if ( page >= firstPage && page <= lastPage ) { 
            return page;
        } 
    })
    const linkForpagonation = actualPages.map((page,key)=>{
        return <div className={ countPage == page ? `${scss.selectedPage} ${scss.linkButton}` : `${scss.linkButton}`} key={key}>
                <NavLink exact onClick={updateActualUsers}  to={`/Main/User-Statistics/${page}`}>
                    <div className={scss.linkButton__buttons}>{ page }</div>
                </NavLink>
        </div>
    })
    return <div className={scss.pagination}>
        <Pagination pageData={ { countActualPage, linkForpagonation, firstPage, endPage, lastPage, setCountActualPage, updateActualUsers, countPage } }/>
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


export default connect(mapStateToProps,{ updateCountPageAC })(PaginationContainer);