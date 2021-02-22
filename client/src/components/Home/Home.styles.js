import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 5em',
    marginTop: '50px',
    marginBottom: '175px',
  },
  libImg: {
    marginTop: '50px',
    height: '135px',
  },
  subtitle: {
    color: theme.colors.text.labelValue,
    fontSize: '1.6em',
    marginBottom: '1em',
  },
  title: {
    fontWeight: 700,
    fontSize: '3em',
    letterSpacing: '-2px',
    color: theme.colors.text.primary,
    marginBottom: '0.2em',
    marginTop: '1em',
  },
  btn1: {
    ...theme.buttons.jumbotron.filled,
  },
  btn2: {
    ...theme.buttons.jumbotron.outlined,
  },
}));

export default useStyles;
