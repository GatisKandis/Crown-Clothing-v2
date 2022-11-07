import { Fragment } from "react";
import { useTable } from "react-table";

import './table.style.scss';


const TableFormat = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => {
            return (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => {
                return (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                );
              })}
            </tr>
            );  
          })}
          
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableFormat;
