import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '../assets';

/* Light Theme */
const light = createMuiTheme({
  // Buttons
  buttons: {
    primary: {
      color: colors.DARKS[2],
      borderColor: 'transparent',
      transition: 'all 0.3s ease',
      backgroundColor: colors.HIGHLIGHTS[1],
      boxShadow: 'none !important',
      '&:hover': {
        backgroundColor: `${colors.HIGHLIGHTS[1]} !important`,
        color: colors.DARKS[1],
        filter: 'brightness(85%)',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.HIGHLIGHTS[1],
      border: `solid 1px ${colors.HIGHLIGHTS[1]}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: `${colors.WHITES[2]} !important`,
        color: colors.HIGHLIGHTS[1],
        border: `solid 1px ${colors.HIGHLIGHTS[1]}`,
      },
    },
    disabled: {
      color: `${colors.DISABLED[0]} !important`,
      border: `solid 1px ${colors.DISABLED[1]}`,
    },
    custom: (style, color) => (style === 'filled' ? ({
      color: colors.WHITE,
      border: 'solid 1px rgba(0, 0, 0, 0)',
      transition: 'all 0.3s ease',
      backgroundColor: colors[color],
      boxShadow: 'none !important',
      '&:hover': {
        backgroundColor: `${colors[color]} !important`,
        color: colors.WHITE,
        filter: 'brightness(85%)',
      },
    }) : ({
      backgroundColor: 'transparent',
      color: colors[color],
      border: `solid 1px ${colors[color]}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: `${colors.WHITES[2]} !important`,
        color: colors[color],
        border: `solid 1px ${colors[color]}`,
      },
    })),
  },
  chips: {
    filled: {
      green: {
        backgroundColor: colors.SUCCESS,
        color: colors.WHITE,
        paddingLeft: '8px',
      },
      purple: {
        backgroundColor: colors.PURPLE,
        color: colors.WHITE,
        paddingLeft: '8px',
      },
    },
    outlined: {
      green: {
        color: colors.SUCCESS,
        border: `solid 1px ${colors.SUCCESS}`,
        backgroundColor: 'transparent',
        paddingLeft: '8px',
      },
      purple: {
        color: colors.PURPLE,
        border: `solid 1px ${colors.PURPLE}`,
        backgroundColor: 'transparent',
        paddingLeft: '8px',
      },
    },
  },
  // Colors
  colors: {
    background: {
      primary: colors.WHITE,
      secondary: colors.WHITES[3],
      tertiary: colors.WHITES[2],
      quaternary: colors.WHITES[0],
      active: colors.WHITES[0],
    },
    divider: {
      primary: colors.WHITES[0],
      secondary: colors.WHITES[0],
      inputBorder: {
        primary: colors.WHITES[0],
        hover: colors.DARKS[4],
        focused: colors.DARKS[4],
      },
    },
    icon: {
      active: colors.HIGHLIGHTS[3],
    },
    text: {
      primary: colors.DARKS[4],
      secondary: colors.HIGHLIGHTS[3],
      disabled: colors.DISABLED[0],
      error: colors.ERROR,
      highlight: colors.HIGHLIGHTS[1],
      purple: colors.PURPLE,
      success: colors.SUCCESS,
      warning: colors.WARNING,
      white: colors.WHITE,
      yellow: colors.YELLOW,
      input: {
        primary: colors.DARKS[4],
        focused: colors.HIGHLIGHTS[1],
        label: {
          primary: colors.DARKS[4],
          focused: colors.HIGHLIGHTS[1],
        },
      },
      step: {
        active: colors.DARKS[0],
        inactive: colors.DARKS[4],
        completed: colors.DARKS[4],
        fillActive: colors.WHITE,
        fillInactive: colors.DARKS[4],
        body: colors.DARKS[2],
      },
    },
  },
  // Fonts
  fonts: {
    logo: {
      background: `-webkit-linear-gradient(45deg, ${colors.DARKS[4]}, ${colors.HIGHLIGHTS[3]} 80%)`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      textTransform: 'uppercase',
      fontSize: '1.2em',
    },
  },
  // Icons
  icons: {
    default: {
      color: 'inherit',
    },
    step: {
      active: {
        color: colors.HIGHLIGHTS[1],
      },
      completed: {
        color: colors.SUCCESS,
      },
      inactive: {
        color: colors.WHITES[0],
      },
    },
  },
  // Material-UI Overrides
  overrides: {
    MuiDataGrid: {
      footer: {
        fontWeight: 'bold',
      },
      root: {
        '& .Mui-selected': {
          backgroundColor: `${colors.LIGHT_PURPLE} !important`,
        },
        '& .Mui-checked': {
          color: colors.PURPLE,
        },
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: colors.HIGHLIGHTS[2],
      },
      barColorPrimary: {
        backgroundColor: colors.HIGHLIGHTS[3],
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'transparent',
          color: colors.HIGHLIGHTS[3],
        },
      },
    },
    MuiTablePagination: {
      root: {
        color: colors.DARKS[4],
        '& > div p.MuiTypography-body2': {
          fontWeight: 'bold',
        },
      },
    },
  },
});

/* Dark Theme */
const dark = createMuiTheme({
  // Buttons
  buttons: {
    primary: {
      color: colors.DARKS[2],
      borderColor: 'transparent',
      transition: 'all 0.3s ease',
      backgroundColor: colors.HIGHLIGHTS[1],
      boxShadow: 'none !important',
      '&:hover': {
        backgroundColor: `${colors.HIGHLIGHTS[1]} !important`,
        color: colors.DARKS[1],
        filter: 'brightness(85%)',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.WHITES[0],
      border: `solid 1px ${colors.DARKS[4]}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        color: colors.HIGHLIGHTS[3],
        border: `solid 1px ${colors.HIGHLIGHTS[3]}`,
      },
    },
    disabled: {
      color: `${colors.DISABLED[0]} !important`,
      border: `solid 1px ${colors.DISABLED[0]} !important`,
    },
    custom: (style, color) => (style === 'filled' ? ({
      color: colors.DARKS[2],
      border: 'solid 1px rgba(0, 0, 0, 0)',
      transition: 'all 0.3s ease',
      backgroundColor: colors[color],
      boxShadow: 'none !important',
      '&:hover': {
        backgroundColor: `${colors[color]} !important`,
        color: colors.DARKS[1],
        filter: 'brightness(85%)',
      },
    }) : ({
      backgroundColor: 'transparent',
      color: colors[color],
      border: `solid 1px ${colors[color]}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        color: colors[color],
        border: `solid 1px ${colors[color]}`,
      },
    })),
  },
  chips: {
    filled: {
      green: {
        backgroundColor: colors.SUCCESS,
        color: colors.WHITE,
        paddingLeft: '8px',
      },
      purple: {
        backgroundColor: colors.PURPLE,
        color: colors.WHITE,
        paddingLeft: '8px',
      },
    },
    outlined: {
      green: {
        color: colors.SUCCESS,
        border: `solid 1px ${colors.SUCCESS}`,
        backgroundColor: 'transparent',
        paddingLeft: '8px',
      },
      purple: {
        color: colors.PURPLE,
        border: `solid 1px ${colors.PURPLE}`,
        backgroundColor: 'transparent',
        paddingLeft: '8px',
      },
    },
  },
  // Colors
  colors: {
    background: {
      primary: colors.DARKS[1],
      secondary: colors.DARKS[0],
      tertiary: colors.DARKS[1],
      quaternary: colors.DARKS[2],
      active: colors.DARKS[2],
    },
    divider: {
      primary: colors.DARKS[2],
      secondary: colors.DARKS[3],
      inputBorder: {
        primary: colors.DARKS[2],
        hover: colors.HIGHLIGHTS[3],
        focused: colors.HIGHLIGHTS[3],
      },
    },
    icon: {
      active: colors.HIGHLIGHTS[1],
    },
    text: {
      primary: colors.WHITES[2],
      secondary: colors.HIGHLIGHTS[1],
      disabled: colors.DISABLED[0],
      error: colors.ERROR,
      highlight: colors.HIGHLIGHTS[1],
      purple: colors.PURPLE,
      success: colors.SUCCESS,
      warning: colors.WARNING,
      white: colors.WHITE,
      yellow: colors.YELLOW,
      input: {
        primary: colors.WHITES[0],
        focused: colors.HIGHLIGHTS[1],
        label: {
          primary: colors.WHITES[0],
          focused: colors.HIGHLIGHTS[3],
        },
      },
      step: {
        active: colors.WHITE,
        inactive: colors.WHITES[0],
        completed: colors.WHITES[0],
        fillActive: colors.DARKS[0],
        fillInactive: colors.WHITES[0],
        body: colors.WHITES[2],
      },
    },
  },
  // Fonts
  fonts: {
    logo: {
      background: `-webkit-linear-gradient(45deg, ${colors.WHITES[2]}, ${colors.HIGHLIGHTS[1]} 80%)`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      textTransform: 'uppercase',
      fontSize: '1.2em',
    },
  },
  // Icons
  icons: {
    default: {
      color: 'inherit',
    },
    step: {
      active: {
        color: colors.HIGHLIGHTS[1],
      },
      completed: {
        color: colors.SUCCESS,
      },
      inactive: {
        backgroundColor: 'transparent',
        color: colors.DARKS[2],
      },
    },
  },
  // Material-UI Overrides
  overrides: {
    MuiDataGrid: {
      footer: {
        fontWeight: 'bold',
      },
      root: {
        '& .Mui-selected': {
          backgroundColor: `${colors.DARKS[2]} !important`,
        },
        '& .Mui-checked': {
          color: colors.HIGHLIGHTS[1],
        },
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: colors.HIGHLIGHTS[0],
      },
      barColorPrimary: {
        backgroundColor: colors.SUCCESS,
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          // backgroundColor: colors.DARKS[2],
          backgroundColor: 'transparent',
          color: colors.HIGHLIGHTS[1],
        },
      },
    },
    MuiTablePagination: {
      root: {
        color: colors.WHITES[2],
        '& > div p.MuiTypography-body2': {
          fontWeight: 'bold',
        },
      },
    },
  },
});

const theme = (mode) => (mode === 'dark' ? dark : light);

export default theme;
