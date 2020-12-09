import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '24px',
    backgroundColor: 'rgba(191, 97, 106, 0.3)',
    display: 'inline-block',
    padding: '0px 25px',
    borderRadius: '3px',
  },
  noAccess: {
    color: theme.colors.text.error,
  }
}));