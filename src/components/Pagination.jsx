import React from "react";
import ReactPaginate from 'react-paginate';

function Pagination({onChangePage}) {
    return(
        <ReactPaginate
                className="root"
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={3}
                
                renderOnZeroPageCount={null}
            />
    )
};

export default Pagination;