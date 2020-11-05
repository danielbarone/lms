import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    width: '100%',
    height: '100ch',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30ch',
  },
  spinner: {
    color: theme.colors.text.highlight,
  },
}));

export default useStyles;
