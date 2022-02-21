import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { useFormikContext } from 'formik';
import { Alert } from 'react-bootstrap';
import GlobalFilter from '../GlobalFilter';
import { getUsers } from '../../api/users';
import Group from '../../types/group';
import removeArrayItem from '../../utils/removeArrayItem';
import getById from '../../utils/getById';

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
      {(touched.groupMembers && errors.groupMembers) ? <Alert>{errors.groupMembers}</Alert> : ''}
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        label="Find Group Members"
      />
      {
        rows.length > 0 ? (
          <div className="border-1 overflow-x-scroll lg:overflow-x-visible border-gray-300">
            <table {...getTableProps()} className="divide-y divide-gray-200 w-full table-auto">
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
                      <td className="flex flex-row px-6 py-4 justify-end whitespace-nowrap">
                        {
                          getById(values.groupMembers, row.original.id) !== undefined ? (
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
        ) : <div>No results</div>
      }
      {
        values.groupMembers.length > 0 ? (
          <>
            <h1 className="mt-3">Added Group Members</h1>
            <div className="border border-gray-600 rounded-sm my-3">
              <ul className="divide-y">
                {
                  values.groupMembers.map((groupMember, index) => (
                    <li className="flex flex-col p-4">
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
