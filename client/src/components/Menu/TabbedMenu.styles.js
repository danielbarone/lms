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
    ...theme.buttons.custom('outlined', 'PURPLE'),
    minHeight: 36,
    margin: '12px 4px',
  },
  viewContainer: {
    marginTop: '16px',
  },
  viewBtnInactive: {
    ...theme.buttons.disabled,
    minHeight: 36,
    margin: '12px 4px',
  },
  viewRoot: {
  },
}));

export default useStyles;
