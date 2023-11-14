import * as React from 'react';
import { ChangeHandler } from 'react-hook-form';
import { RadioGroup } from '@mui/material';
import Radio, { RadioProps } from '@mui/material/Radio';

export interface IValueRadio {
  id: number;
  name: string;
}
export interface RadioProp extends RadioProps {
  values: IValueRadio[];
  className?: string;
  handleChange?: ChangeHandler;
  defaultLabel?: string;
}

export const RadioButtons = ({
  values,
  handleChange,
  defaultLabel,
  sx,
  ...props
}: RadioProp) => {
  const [selectedRadio, setSelectedRadio] = React.useState(values);
  return (
    <RadioGroup sx={{ display: 'flex', gap: 2 }}>
      <Radio
        onChange={() => setSelectedRadio(values)}
        checked={selectedRadio === values}
        value={values}
        name="radio-buttons"
        sx={sx}
        {...props}
      />
    </RadioGroup>
  );
};
