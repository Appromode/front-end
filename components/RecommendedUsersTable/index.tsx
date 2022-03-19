import React, { FC, useContext, useMemo } from 'react';
import Link from 'next/link';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import GlobalFilter from '../GlobalFilter';
import { getRecommendedUsers } from '../../api/users';
import TablePagination from '../TablePagination';
import AuthContext from '../../stores/AuthContext';

const UsersTable:FC = () => {
  const { user } = useContext(AuthContext);

  const columns = useMemo(() => [
    {
      Header: 'Username',
      accessor: 'userName',
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
  ], []);

  const { recommendedUsers } = getRecommendedUsers(user.nameid);

  const data = useMemo(() => recommendedUsers || [], [recommendedUsers]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    prepareRow,
    preGlobalFilteredRows,
    state: {
      pageIndex,
      pageSize,
      globalFilter,
    },
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        label="Search Recommeded Users"
        forControl="recommededUsers"
      />
      {
        page.length > 0 ? (
          <>
            <div className="border-1 overflow-x-scroll lg:overflow-x-visible border-gray-300">
              <table {...getTableProps()} className="divide-y divide-gray-300 w-full table-auto">
                <thead className="bg-gray-50 w-full">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="px-6 py-3 font-medium text-gray-500 uppercase text-base whitespace-nowrap"
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                      <th className="px-6 py-3 font-medium text-gray-500 uppercase text-base whitespace-nowrap">{}</th>
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-300">
                  {page.map((row) => {
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
                        <td className="flex flex-row px-6 py-4 justify-end whitespace-nowrap">
                          <Link
                            href={`/users/${row.original.userId}`}
                          >
                            <button
                              type="button"
                              className="text-green-800"
                            >
                              View Profile
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <TablePagination
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              pageOptions={pageOptions}
              pageCount={pageCount}
              gotoPage={gotoPage}
              nextPage={nextPage}
              previousPage={previousPage}
              setPageSize={setPageSize}
              pageIndex={pageIndex}
              pageSize={pageSize}
            />
          </>
        ) : <div>No Users</div>
      }
    </>
  );
};

export default UsersTable;
