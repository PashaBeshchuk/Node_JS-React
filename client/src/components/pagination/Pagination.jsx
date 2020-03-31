import React from 'react';
import scss from './Pagination.module.scss'
import { NavLink } from 'react-router-dom';
const Pagination = (props) => {

    const { linkForpagonation, endPage, lastPage, updateActualUsers, countPage } = { ...props.pageData };
    return <div className={scss.pagination__buttons}>
        {countPage >= 2 ? <div className={scss.buttonPrev} onClick={updateActualUsers}>
            <NavLink exact onClick={updateActualUsers}  to={`/Main/User-Statistics/${Number(countPage) - 1}`}>
                <div className={scss.textForButton}>Previous</div>
            </NavLink>
        </div> : '' }
            {linkForpagonation  } 
        { lastPage === endPage ? '' : <div className={scss.buttonNext} onClick={updateActualUsers}>
            <NavLink exact onClick={updateActualUsers}  to={`/Main/User-Statistics/${Number(countPage)  + 1}`}>
                <div className={scss.textForButton}>Next</div>
            </NavLink>  
        </div> }
    </div>
   
}

export default Pagination;