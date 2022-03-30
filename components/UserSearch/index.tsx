import React, { FC, useContext, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import { useFormikContext } from 'formik';
import { Alert } from 'react-bootstrap';
import GlobalFilter from '../GlobalFilter';
import { getUsers } from '../../api/users';
import Group from '../../types/group';
import removeArrayItem from '../../utils/removeArrayItem';
import getById from '../../utils/getById';
import TablePagination from '../TablePagination';
import AuthContext from '../../stores/AuthContext';
