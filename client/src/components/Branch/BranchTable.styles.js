import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: '100%',
  },
  dataGrid: {
    color: theme.colors.text.primary,
    '& > .MuiDataGrid-footer': {
    },
  },
  gridOverlay: {
    backgroundColor: 'transparent !important',
  },
  linearProgress: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
}));

export default useStyles;
