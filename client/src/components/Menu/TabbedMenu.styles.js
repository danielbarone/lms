import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  dashboardH1: {
    color: `${theme.colors.text.primary}`,
  },
  divider: {
    backgroundColor: theme.colors.divider.primary,
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'start',
  },
  viewBtn: {
    ...theme.buttons.outlined,
    height: 36,
    margin: '12px 4px',
  },
  viewContainer: {
    marginTop: '16px',
  },
  viewBtnActive: {
    ...theme.buttons.disabled,
    height: 36,
    margin: '12px 4px',
  },
  viewRoot: {
  },
}));

export default useStyles;
