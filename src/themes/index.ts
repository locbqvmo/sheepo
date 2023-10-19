import { createTheme, ThemeOptions } from '@mui/material';
import { colors } from './colors';
import { IColorType } from './types';

export const theme = createTheme({
  colors: colors,
  typography: {
    fontFamily: 'Satoshi, Integral CF, sans-serif',
    h1: {
      fontSize: 40,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    h5: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    subtitle1: {
      fontSize: 64,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
    },
    subtitle2: {
      fontSize: 48,
      fontWeight: 700,
      fontFamily: 'Integral CF',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
    },
    button: {
      fontSize: 16,
      fontFamily: 'Satoshi',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: colors.black,
      light: colors.black,
      dark: colors.black,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.black60,
      light: colors.black60,
      dark: colors.black60,
      contrastText: colors.white,
    },
    error: {
      main: colors.error,
      light: colors.error,
      dark: colors.error,
      contrastText: colors.white,
    },
    warning: {
      main: colors.warning,
      light: colors.warning,
      dark: colors.warning,
      contrastText: colors.white,
    },
    info: {
      main: colors.vibrantBlue,
      light: colors.vibrantBlue,
      dark: colors.vibrantBlue,
      contrastText: colors.white,
    },
    success: {
      main: colors.success,
      light: colors.success,
      dark: colors.success,
      contrastText: colors.white,
    },
  },
  components: {},
} as ThemeOptions & { colors: IColorType });
