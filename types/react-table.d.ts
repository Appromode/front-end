import {
  Row,
  IdType,
  TableOptions,
  UseTableInstanceProps,
} from 'react-table';

declare module 'react-table' {
  type Rows = Row[];

  interface GlobalFilter {
    globalFilter: string
  }

  interface PreGlobalFilteredRows {
    preGlobalFilteredRows: Rows;
  }

  interface SetGlobalFilter {
    setGlobalFilter: (filterValue) => void;
  }

  interface Filter extends GlobalFilter, PreGlobalFilteredRows, SetGlobalFilter { }

  interface TableInstance<D extends object = {}>
    extends Omit<TableOptions<D>,
    'columns' | 'pageCount'>,
    UseTableInstanceProps<D>,
    PreGlobalFilteredRows,
    SetGlobalFilter { }

  interface TableState<D extends object = {}> extends GlobalFilter {
    hiddenColumns?: Array<IdType<D>> | undefined;
  }
}
