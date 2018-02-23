import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/usersTable.scss'
import ReactTable from "react-table";
import "react-table/react-table.css";

const UsersTable = () => (
    <div className="users-table">
        <ReactTable
          columns={[
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            },
            {
              Header: "Age",
              accessor: "age"
            }
          ]}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={[{firstName:'jos', lastName: 'los', age: 1}]}
          pages={1} // Display the total number of pages
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
        />
    </div>
)

export default UsersTable;