/* eslint-disable no-nested-ternary */
import React, { FC, useMemo } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import Moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import GlobalFilter from '../GlobalFilter';
import { getComments } from '../../api/comments';
import styles from '../ProjectForum/styles.module.scss';

interface Props {
  value: string,
}

const ProjectSearch:FC = () => {
  const columns = useMemo(() => [
    {
      Header: 'Title',
      accessor: 'project.projectName',
      Cell: ({ value }: Props) => (
        <div>
          {value}
        </div>
      ),
    },
    {
      Header: 'Status',
      accessor: 'project.isClosed',
      Cell: ({ value }: Props) => {
        if (!value) {
          return (
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Open Thread
                </Tooltip>
              )}
            >
              <div className={styles.status}>
                <Image
                  src="/unlocked.svg"
                  width={45}
                  height={45}
                  alt="Open Thread"
                />
              </div>
            </OverlayTrigger>
          );
        }
        return (
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => (
              <Tooltip id="button-tooltip" {...props}>
                Closed Thread
              </Tooltip>
            )}
          >
            <div className={styles.status}>
              <Image
                src="/locked.svg"
                width={45}
                height={45}
                alt="Closed Thread"
              />
            </div>
          </OverlayTrigger>
        );
      },
    },
    {
      Header: 'Started by',
      accessor: 'comment.userId',
      Cell: ({ value }: Props) => (
        <div>
          {value}
        </div>
      ),
    },
    {
      Header: 'Replies',
      accessor: 'comment.replies',
      Cell: ({ value }: Props) => (`${value}`),
    },
    {
      Header: 'Last Post',
      id: 'comment.updatedAt',
      accessor: (time: any) => Moment(time.comment.updatedAt).format('DD/MM/YYYY, HH:mm'),
    },
  ], []);

  const { comments } = getComments();

  const data = useMemo(() => comments || [], [comments]);

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
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <>
      <div className="text-[#05345C]">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          label="Find Threads"
        />
      </div>
      {
        rows.length > 0 ? (
          <div className="border-1 overflow-x-scroll lg:overflow-x-visible border-gray-300">
            <table {...getTableProps()} className="divide-y-8 divide-white w-full table-auto space-y-15">
              <thead className="bg-gray-50 w-full">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="px-6 py-3 font-medium text-[#05345C] uppercase text-base whitespace-nowrap"
                      >
                        {column.render('Header')}
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </th>
                    ))}
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase text-base whitespace-nowrap">{}</th>
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="divide-y-8 divide-white">
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <Link
                      href={{
                        pathname: `/project-forum/${row.original.comment.commentId}`,
                        query: { id: row.original.comment.commentId },
                      }}
                    >
                      <tr {...row.getRowProps()} className="odd:bg-slate-200 even:bg-slate-300 cursor-pointer hover:bg-[#C4C4C4] my-100">
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-4 whitespace-nowrap align-center"
                          >
                            {cell.render('Cell')}
                          </td>
                        ))}
                        <td className="flex flex-row px-6 py-4 justify-end whitespace-nowrap" />
                      </tr>
                    </Link>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : <div>No results</div>
      }
    </>
  );
};

export default ProjectSearch;
