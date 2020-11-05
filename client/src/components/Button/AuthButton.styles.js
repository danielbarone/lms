import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItemText: {
    '& span': {
      fontWeight: '500',
    },
  },
  authBtnUl: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItem: {
    color: theme.colors.text.secondary,
    '&:hover': {
      backgroundColor: theme.colors.background.quaternary,
    },
  },
}));

export default useStyles;
