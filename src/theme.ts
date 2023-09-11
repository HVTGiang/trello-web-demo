import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// A custom theme for this app
const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {}
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px',
            transition: 'background-color linear 0.2s'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#7f8c8d'
          }
        },
        '*': {
          boxSizing: 'border-box'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'normal',
          borderWidth: '1px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: '1px',
          // borderColor: theme.palette.primary.main,
          fontSize: '0.875rem'
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.light,
          //     borderWidth: '2px'
          //   }
          // }
        }
      }
    }
  }
})

export default theme
