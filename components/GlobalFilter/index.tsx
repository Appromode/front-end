import React, { FC, ChangeEvent } from 'react';
import { Filter } from 'react-table';
import Image from 'next/image';

const GlobalFilter: FC<Filter & { label: string }> = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  label,
}) => {
  const rowCount = preGlobalFilteredRows.length;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setGlobalFilter(event.target.value);

  return (
    <label htmlFor="globalFilter" className="relative block mb-3">
      <div className="mb-2">{label}</div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image
            src="/search.svg"
            layout="fixed"
            alt="Search icon"
            width={20}
            height={20}
            className="block"
          />
        </span>
        <input
          autoComplete="off"
          id="globalFilter"
          className="py-2 pl-10 pr-3 w-full border-1 border-gray-300 rounded-md"
          type="text"
          value={globalFilter || ''}
          onChange={onChange}
          placeholder={`Search ${rowCount} ${rowCount === 1 ? 'row' : 'rows'}`}
        />
      </div>
    </label>
  );
};

export default GlobalFilter;
