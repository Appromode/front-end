import React, { FC, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { useFormikContext } from 'formik';
import { Alert } from 'react-bootstrap';
import GlobalFilter from '../GlobalFilter';
import Group from '../../types/group';
import removeArrayItem from '../../utils/removeArrayItem';
import getById from '../../utils/getById';
import TablePagination from '../TablePagination';
import { getTags } from '../../api/tags';

const UserSearch:FC = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<Group>();

  const columns = useMemo(() => [
    {
      Header: 'Tag',
      accessor: 'tagName',
    },
  ], []);

  const { tags } = getTags();

  const data = useMemo(() => tags || [], [tags]);

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
      {(touched.groupTags && errors.groupTags) ? <Alert>{errors.groupTags}</Alert> : ''}
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        label="Find Tags"
      />
      {
        page.length > 0 ? (
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
                          getById(values.groupTags, row.original.tagId, 'tagId') !== undefined ? (
                            <div>Added</div>
                          ) : (
                            <button
                              type="button"
                              className="text-green-800"
                              onClick={() => setFieldValue('groupTags', [...values.groupTags, row.original])}
                            >
                              Add Tag
                            </button>
                          )
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
          </div>
        ) : <div>No results</div>
      }
      {
        values.groupTags.length > 0 ? (
          <>
            <h1 className="mt-3">Added Tags</h1>
            <div className="border border-gray-600 rounded-sm my-3">
              <ul className="divide-y">
                {
                  values.groupTags.map((groupTag, index) => (
                    <li className="flex flex-col p-4">
                      <span className="flex flex-row justify-between">
                        <p>{groupTag.tagName}</p>
                        <button
                          type="button"
                          onClick={() => setFieldValue('groupTags', removeArrayItem(values.groupTags, index))}
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
        ) : <div className="my-3">No tags added</div>
      }
    </>
  );
};

export default UserSearch;
