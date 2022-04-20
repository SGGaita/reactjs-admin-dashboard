import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../data/datatableSource'
import { Link } from "react-router-dom";
import { useState } from "react";


const Datatable = () => {

    const actionColumn =[{field:"action", headerName:"Action", sortable:false, width:200, renderCell:()=>{
        return (
            <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            >
              Delete
            </div>
          </div>
        )
    }}]
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export { Datatable }