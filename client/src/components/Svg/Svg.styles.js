import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  svg: (props) => ({
    marginBottom: props.app === 'hinge' ? '-8px' : '',
    marginRight: '.8em',
  }),
}));

export default useStyles;
