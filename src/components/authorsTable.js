import React from 'react';
import '../styles/authorsTable.scss'
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

const AuthorsTable = ({authors, isFetching, numItems, handleSortChange, handleFilterChange, handlePaginationChange, handleAuthorSelect}) => (
    <div className="authors-table">
        <ReactTable
          columns={[
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              accessor: "lastName"
            },
            {
              Header: "Created At",
              accessor: "createdAt",
              filterable: false
            },
          ]}
          getTrProps= {handleAuthorSelect}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={authors}
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

export default AuthorsTable;