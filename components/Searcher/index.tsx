import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter, Column } from 'react-table';
import { Table } from 'react-bootstrap';
import GlobalFilter from '../GlobalFilter';

const Searcher: FC<{ cols: Column[], allData: object[]}> = ({ cols, allData }) => {
  const columns = useMemo(() => cols, []);
  const data = useMemo(() => allData, [allData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    state: {
      globalFilter,
    },
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Searcher;
