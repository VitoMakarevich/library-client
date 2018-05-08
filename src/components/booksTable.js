import React from 'react';
import '../styles/booksTable.scss'
import ReactTable from "react-table";
import "react-table/react-table.css";

const calculatePagesCount = (items, pageSize) => {
  if(items % pageSize === 0){
    return items / pageSize;
  }
  else {
    return parseInt(items / pageSize, 10) + 1;
  }
}

const BooksTable = ({books, isFetching, numItems, handleSortChange, handleFilterChange, handlePaginationChange, handleBookSelect}) => (
    <div className="books-table">
        <ReactTable
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Description",
              accessor: "description"
            },
            {
              Header: "Uses count",
              accessor: "usesCount",
              filterable: false
            },
            {
              Header: "Created At",
              accessor: "createdAt",
              filterable: false
            },
          ]}
          getTrProps= {handleBookSelect}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={books}
          loading={isFetching}
          pages = {calculatePagesCount(numItems, 10)} // Display the total number of pages
          filterable
          showPageSizeOptions = {false}
          onFilteredChange = {(newFiltered) => handleFilterChange(newFiltered)}
          onPageChange= {newPaginated => handlePaginationChange(newPaginated)}
          defaultPageSize={10}
          className="-striped -highlight"
          onSortedChange={(newSorted, column, shiftKey)=> handleSortChange(newSorted[0].id, newSorted[0].desc)}
        />
    </div>
)

export default BooksTable;