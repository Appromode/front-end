import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useField } from 'formik';

const Input:
FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
  const { name } = props;
  const [field, meta] = useField<string>(name);

  return (
    <>
      {meta.error && meta.touched && <div className="text-red-600 mb-2">{meta.error}</div>}
      <input
        {...props}
        {...field}
        className={`
        rounded-md
        w-full
        px-2
        py-2
        !border
        ${meta.error && meta.touched ? (
          'border-red-600 focus:border-red-600 focus:ring-red-600'
        ) : 'border-gray-300'}
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
