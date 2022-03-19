import React, { FC, DetailedHTMLProps, LabelHTMLAttributes } from 'react';

const Label:
FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = ({ children, ...props }) => {
  const { htmlFor, ...rest } = props;

  return (
    <label
      htmlFor={htmlFor || ''}
      {...rest}
      className="mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
