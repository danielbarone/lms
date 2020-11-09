import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 4px 8px 0',
  },
  customChip: (props) => ({
    ...theme.chips[props.style][props.color],
  }),
}));

export default useStyles;
