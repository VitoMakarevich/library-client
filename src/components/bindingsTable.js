import React from 'react';
import '../styles/bindingsTable.scss'
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

const BindingsTable = ({bindings, isFetching, numItems, handleSortChange, handleFilterChange, handlePaginationChange, handleBindingSelect}) => (
    <div className="bindings-table">
        <ReactTable
          columns={[
            {
              Header: "Book",
              accessor: "book",
              filterable: false,
              sortable: false
            },
            {
              Header: "User",
              accessor: "user",
              filterable: false,
              sortable: false
            },
            {
              Header: "Created At",
              accessor: "createdAt",
              filterable: false
            },
            {
              Header: "Finished At",
              accessor: "finishedAt",
              filterable: false
            }
          ]}
          getTrProps= {handleBindingSelect}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={bindings}
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

export default BindingsTable;