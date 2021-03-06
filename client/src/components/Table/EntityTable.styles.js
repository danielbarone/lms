import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    height: 400,
    width: props.tblWidth || '100%',
    '& *': {
      outline: '0 !important',
    },
  }),
  chipContainer: {
    marginTop: '70px',
  },
  noRowsOverlay: {
    flexDirection: 'column',
    '& .ant-empty-img-1': {
      fill: theme.palette.type === 'light' ? '#aeb8c2' : '#262626',
    },
    '& .ant-empty-img-2': {
      fill: theme.palette.type === 'light' ? '#f5f5f7' : '#595959',
    },
    '& .ant-empty-img-3': {
      fill: theme.palette.type === 'light' ? '#dce0e6' : '#434343',
    },
    '& .ant-empty-img-4': {
      fill: theme.palette.type === 'light' ? '#fff' : '#1c1c1c',
    },
    '& .ant-empty-img-5': {
      fillOpacity: theme.palette.type === 'light' ? '0.8' : '0.08',
      fill: theme.palette.type === 'light' ? '#f5f5f5' : '#fff',
    },
  },
  label: {
    marginTop: theme.spacing(1),
  },
  dataGrid: {
    color: theme.colors.text.primary,
  },
  gridOverlay: {
    backgroundColor: 'transparent !important',
  },
  linearProgress: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  selectedActions: {
    display: 'flex',
    alignItems: 'center',
  },
  selectedContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spinner: {
    color: theme.colors.text.highlight,
  },
  spinnerContainer: {
    width: '100%',
    height: '100ch',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40ch',
  },
  highlight: {
    // color: `${theme.colors.text.primary}`,
    color: `${theme.colors.text.secondary}`,
    // fontSize: "16px",
    fontWeight: "bold",
 },
 button1:{
  ...theme.buttons.primary,
  borderRadius: 0,
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
  marginRight: '20px',
  },
}));

export default useStyles;
