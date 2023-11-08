'use client';

import { Input } from '@nextui-org/react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type IControlledInput = {
  name: string;
  label: string;
  placeholder: string;
  control: Control<FieldValues>;
};

export const ControlledInput = ({
  name,
  control,
  label,
  placeholder,
}: IControlledInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <Input
            placeholder={placeholder}
            label={label}
            value={value}
            onChange={onChange}
          />
        );
      }}
    />
  );
};
