import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  chip: {
    '& > .MuiChip-icon': {
      marginRight: '-6px !important',
      marginLeft: '5px !important',
    },
  },
}));

export default useStyles;
