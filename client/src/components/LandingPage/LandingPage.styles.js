import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerContainer: {
    backgroundColor: theme.colors.background.tertiary,
    height: '100%',
    color: theme.colors.text.primary,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '1em',
  },
  navList: {
    flexGrow: 1,
  },
  drawerIcon: {
    color: theme.colors.text.primary,
  },
  activeListItemIcon: {
    '& svg': {
      color: theme.colors.icon.active,
    },
  },
  inactiveListItemIcon: {
    '& svg': {
      color: theme.colors.text.primary,
    },
  },
  listItemText: {
    '& span': {
      fontWeight: '500',
    },
  },
  listItemHover: {
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: `${theme.colors.background.quaternary} !important`,
    },
  },
  listItemActiveHover: {
    '&:hover': {
      backgroundColor: `${theme.colors.background.active} !important`,
    },
  },
  divider: {
    backgroundColor: theme.colors.divider.primary,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: `${theme.colors.background.primary} !important`,
  },
  appBarContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarTitleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
  },
  appBarText: {
    ...theme.fonts.logo,
  },
  appBarRightItems: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lightSwitchContainer: {
    marginRight: '12px',
  },
  lightSwitchIcon: {
    color: theme.colors.text.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: theme.colors.text.primary,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderColor: `${theme.colors.divider.primary}`,
  },
  content: (props) => ({
    flexGrow: 1,
    backgroundColor: theme.colors.background.secondary,
    minHeight: '100vh',
    height: '100%',
    color: theme.colors.text.primary,
    padding: props.noPadding.includes(props.currentPage) ? '0px' : theme.spacing(3),
  }),
  authBtnContainer: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
}));

export default useStyles;
