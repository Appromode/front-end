import React, { ReactElement } from 'react';

import {
  Row,
  UsePaginationInstanceProps,
  UsePaginationState,
} from 'react-table';

interface TablePaginationProps<T extends object>
  extends UsePaginationState<Row<T>>,
  Omit<UsePaginationInstanceProps<Row<T>>, 'page'> { }

function TablePagination<T extends object>({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}: TablePaginationProps<T>): ReactElement {
  return (
    <div className="float-right mb-3">
      <select
        style={{ padding: '7px', borderRadius: '3px', border: '1px solid #007bff' }}
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5].map((pSize) => (
          <option key={pSize} value={pSize}>
            Show
            {pSize}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ marginTop: '-4px' }}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {'<<'}
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ marginTop: '-4px' }}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {'<'}
      </button>
      <span>
        Page
        <strong>
          {pageIndex + 1}
          of
          {pageOptions.length}
        </strong>
      </span>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ marginTop: '-4px' }}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {'>'}
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ marginTop: '-4px' }}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {'>>'}
      </button>
    </div>
  );
}

export default TablePagination;
