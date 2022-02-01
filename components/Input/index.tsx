import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useField } from 'formik';

const Input:
FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
  const { name } = props;
  const [field, meta] = useField<string>(name);

  return (
    <>
      {meta.error && meta.touched && <div>{meta.error}</div>}
      <input
        {...props}
        {...field}
        className={`
        rounded-md
        w-full
        px-3
        py-2
        !border
        ${meta.error ? 'border-red-600' : 'border-gray-300'}
      placeholder-gray-500
        text-base
        shadow-sm
        transition
        focus:outline-none
        focus:border-blue-600
        focus:!ring-1
        focus:ring-blue-600
        `}
      />
    </>
  );
};

export default Input;
