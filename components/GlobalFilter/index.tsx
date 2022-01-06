import React, { FC, ChangeEvent } from 'react';
import { Filter } from 'react-table';

const GlobalFilter: FC<Filter> = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const rowCount = preGlobalFilteredRows.length;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setGlobalFilter(event.target.value);

  return (
    <input
      className="p-2 w-full border-1 mb-4 rounded-md"
      type="text"
      value={globalFilter || ''}
      onChange={onChange}
      placeholder={`Search ${rowCount} rows`}
    />
  );
};

export default GlobalFilter;
