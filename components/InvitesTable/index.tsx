import React, { FC, useContext, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { acceptInvite, getInvites, rejectInvite } from '../../api/users';
import TablePagination from '../TablePagination';
import AuthContext from '../../stores/AuthContext';
import useMatchMutate from '../../utils/useMatchMutate';

const InvitesTable:FC = () => {
  const matchMutate = useMatchMutate();
  const { user } = useContext(AuthContext);

  const columns = useMemo(() => [
    {
      Header: 'Created At',
      accessor: 'createdAt',
    },
    {
      Header: 'Sender',
      accessor: 'sender.email',
    },
    {
      Header: 'Status',
      accessor: (data) => {
        if (data.status !== null) {
          return data.status ? 'Accepted' : 'Rejected';
        }
        return 'Pending';
      },
    },
  ], []);

  const { invites } = getInvites(user.nameid);

  const data = useMemo(() => invites || [], [invites]);

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
    state: {
      pageIndex,
      pageSize,
    },
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  return (
    <>
      <h2 className="text-3xl mb-5">Group Invites</h2>
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
                          <div className="flex flex-row justify-evenly">
                            {row.original.status === null && (
                              <>
                                <button
                                  type="button"
                                  className="bg-bottle text-white mr-5 px-3 py-2 border-1 border-brunswick rounded-md"
                                  onClick={() => {
                                    acceptInvite(row.original.inviteId)
                                      .finally(() => matchMutate());
                                  }}
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="bg-red-600 text-white mr-5 px-3 py-2 border-1 border-red-700 rounded-md"
                                  onClick={() => {
                                    rejectInvite(row.original.inviteId)
                                      .finally(() => matchMutate());
                                  }}
                                >
                                  Reject
                                </button>
                              </>
                            )}

                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {
              invites.length > 1 && (
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
              )
            }
          </>
        ) : <div>No Invites</div>
      }
    </>
  );
};

export default InvitesTable;
