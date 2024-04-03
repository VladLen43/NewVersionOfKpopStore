import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
    onChangePage: any,
    currentPage: number
}

export const Pagination: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
    return (
        <div className={styles.root}>
            <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
      />
      </div>
    );
}