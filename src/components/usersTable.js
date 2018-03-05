import React from 'react';
import '../styles/usersTable.scss'
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

const UsersTable = ({users, isFetching, numItems, handleSortChange, handleFilterChange, handlePaginationChange, handleUserSelect}) => (
    <div className="users-table">
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
              Header: "Email",
              accessor: "email"
            },
            {
              Header: "Passport Number",
              accessor: "passportNumber"
            },
            {
              Header: "Created At",
              accessor: "createdAt",
              filterable: false
            },
          ]}
          getTrProps= {handleUserSelect}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={users}
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

export default UsersTable;