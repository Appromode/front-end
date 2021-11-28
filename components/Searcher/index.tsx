import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { Table } from 'react-bootstrap';
import GlobalFilter from '../GlobalFilter';

const memberColumns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
];

const memberData = [
  {
    id: '1',
    firstName: 'Han',
    lastName: 'Solo',
    email: 'hansolo@example.com',
  },
  {
    id: '2',
    firstName: 'Boba',
    lastName: 'Fett',
    email: 'bobafett@example.com',
  },
  {
    id: '3',
    firstName: 'Ahsoka',
    lastName: 'Tano',
    email: 'ahsokatano@example.com',
  },
];

const Searcher: FC = ({ children }) => {
  const columns = useMemo(() => memberColumns, []);
  const data = useMemo(() => memberData, []);

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
      {children}
    </>
  );
};

export default Searcher;
