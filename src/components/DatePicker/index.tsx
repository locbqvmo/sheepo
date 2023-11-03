import * as React from 'react';
import { ReactNode, useState } from 'react';
import { SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface IDate {
  label: string;
  sx?: SxProps;
}
export const DatePickerComponent = ({ label, sx }: IDate) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker sx={sx} label={label} />
      </DemoContainer>
    </LocalizationProvider>
  );
};
