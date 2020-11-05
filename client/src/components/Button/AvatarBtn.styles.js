import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: '1.75em',
    width: '1.75em',
  },
  popover: {
    '& div.MuiPopover-paper': {
      backgroundColor: 'transparent',
      borderRadius: '4px',
    },
  },
  popoverContent: {
    backgroundColor: `${theme.colors.background.tertiary}`,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',

  },
  divider: {
    backgroundColor: theme.colors.divider.primary,
  },
}));

export default useStyles;
