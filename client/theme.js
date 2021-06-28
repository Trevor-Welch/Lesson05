import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#8e8e8e',
      main: '#3949AB',
      dark: '#373737',
      contrastText: '#0288D1',
    },
    secondary: {
      light: '#81D4FA',
      main: '#03A9F4',
      dark: '#bb4d00',
      contrastText: '#0288D1',
    },
      openTitle: '#455a64',
      protectedTitle: '#03A9F4',
      type: 'light'
    }
  })

  export default theme