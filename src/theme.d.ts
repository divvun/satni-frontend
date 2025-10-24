// Augment the @mui/styles DefaultTheme to use MUI's Theme
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends MuiTheme {}
}
