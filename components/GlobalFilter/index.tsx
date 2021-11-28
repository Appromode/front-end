import React, { FC, ChangeEvent } from 'react';
import { Filter } from 'react-table';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const GlobalFilter: FC<Filter> = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const rowCount = preGlobalFilteredRows.length;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setGlobalFilter(event.target.value);

  return (
    <FormGroup>
      <FormLabel>Search</FormLabel>
      <FormControl
        type="text"
        value={globalFilter}
        onChange={onChange}
        placeholder={`Search ${rowCount} rows`}
      />
    </FormGroup>
  );
};

export default GlobalFilter;
