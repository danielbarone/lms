import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dynamicSvg: (props) => ({
    ...(props.type ? theme.icons[props.type] : 'default'),
    color: theme.colors.text[props.color || 'primary'],
    height: props.height || 'default',
    width: props.width || 'default',
  }),
}));

export default useStyles;
