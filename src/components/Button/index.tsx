import { useMemo } from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';
import clsx from 'classnames';

enum VariantButton {
  'rounded-contained' = 'rounded-contained',
  'rounded-outlined' = 'rounded-outlined',
}

type IButtonProps = {
  variant?: `${VariantButton}`;
} & Omit<ButtonProps, 'variant'>;

export const Button = ({
  variant = 'rounded-contained',
  className,
  ...other
}: IButtonProps) => {
  const defaultStyleByVariant = useMemo<{
    [k in `${VariantButton}`]: {
      className: string;
      variant: 'contained' | 'outlined';
    };
  }>(() => {
    return {
      'rounded-contained': {
        className:
          '!rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm !bg-black',
        variant: 'contained',
      },
      'rounded-outlined': {
        className:
          '!rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        variant: 'outlined',
      },
    };
  }, []);

  return (
    <MUIButton
      type="button"
      variant={defaultStyleByVariant[variant].variant}
      className={clsx(defaultStyleByVariant[variant].className, className)}
      {...other}
    />
  );
};
