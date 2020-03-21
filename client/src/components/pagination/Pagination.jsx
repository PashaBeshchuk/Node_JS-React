import React from 'react';
import scss from './Pagination.module.scss'

const Pagination = (props) => {
    const { countActualPage, linkForpagonation, firstPage, setCountActualPage, endPage, lastPage } = { ...props.pageData }
    const setPage = (number) => {
        setCountActualPage(number);
    }

    return <div>
        {countActualPage > 1 || firstPage !== 0 ? <button className={scss.buttonPrev} onClick={()=>setPage(countActualPage-1)}>Previous</button> : '' }
            {linkForpagonation  } 
        { lastPage === endPage ? '' : <button className={scss.buttonNext} onClick={()=>setPage(countActualPage+1)}>Next</button> }
    </div>
}

export default Pagination;