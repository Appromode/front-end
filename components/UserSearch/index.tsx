import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { useFormikContext } from 'formik';
import { Alert } from 'react-bootstrap';
import GlobalFilter from '../GlobalFilter';
import { getUsers } from '../../api/users';
import Group from '../../types/group';
import removeArrayItem from '../../utils/removeArrayItem';
import getById from '../../utils/getById';
import TablePagination from '../TablePagination';

const UserSearch:FC = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<Group>();

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

  const { users } = getUsers();

  const data = useMemo(() => users || [], [users]);

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
      {(touched.groupMembers && errors.groupMembers) ? <Alert>{errors.groupMembers}</Alert> : ''}
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        label="Find Group Members"
        forControl="findGroupMembers"
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
                          {
                            getById(values.groupMembers, row.original.id, 'id') !== undefined ? (
                              <div>Added</div>
                            ) : (
                              <button
                                type="button"
                                className="text-green-800"
                                onClick={() => setFieldValue('groupMembers', [...values.groupMembers, row.original])}
                              >
                                Add Member
                              </button>
                            )
                          }
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
        ) : <div>No results</div>
      }
      {
        values.groupMembers.length > 0 ? (
          <>
            <h1 className="mt-3">Added Group Members</h1>
            <div className="border-1 border-gray-300 rounded-sm my-3">
              <ul className="divide-y divide-gray-300">
                {
                  values.groupMembers.map((groupMember, index) => (
                    <li className="flex flex-col p-4" key={groupMember.email}>
                      <span className="flex flex-row justify-between">
                        <p>{groupMember.email}</p>
                        <button
                          type="button"
                          onClick={() => setFieldValue('groupMembers', removeArrayItem(values.groupMembers, index))}
                        >
                          Remove
                        </button>
                      </span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </>
        ) : <div className="my-3">No group members added</div>
      }
    </>
  );
};

export default UserSearch;
