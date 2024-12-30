import { extendTheme } from 'native-base';
import globalTheme from './global';

const theme = extendTheme({
  ...globalTheme,
  colors: {
    primary: {
      800: '#0a753d',
      900: '#0fa958',
    },
    background: {
      600: '#c7c7c7',
      800: '#f8f8f8',
      900: '#fcfcfc',
    },
    text: {
      900: '#515151',
      800: '#a8a8a8',
    },
  },
});

export default { theme }