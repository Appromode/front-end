import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { useFormikContext } from 'formik';
import GlobalFilter from '../GlobalFilter';
import { getUsers } from '../../api/users';

const UserSearch:FC = ({ children }) => {
  const { setFieldValue } = useFormikContext();

  const columns = useMemo(() => [
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
  ], []);

  const { users } = getUsers();

  const data = useMemo(() => users || [], [users]);

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
      {
        globalFilter ? (
          <div className="shadow overflow-hidden border-1 border-gray-200">
            <table {...getTableProps()} className="divide-y divide-gray-200 w-full">
              <thead className="bg-gray-50 w-full">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-6 py-3 font-medium text-gray-500 uppercase text-base"
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                    <th>Invite</th>
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                      <td>
                        <button
                          type="button"
                          className="m-2 px-6 py-2 whitespace-nowrap bg-indigo-500 text-white rounded-sm"
                          onClick={() => setFieldValue('groupMembers', 'Added')}
                        >
                          Invite
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : <div>Invite Users To Your Group</div>
      }
      {children}
    </>
  );
};

export default UserSearch;
