import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalInput: {
    marginBottom: '1em',
    '& > label': {
      color: theme.colors.text.input.label.primary,
    },
    '& label.Mui-focused': {
      color: `${theme.colors.text.input.label.focused} !important`,
    },
    '& > div': {
      borderRadius: '5px',
      borderBottomLeftRadius: '0px !important',
      borderBottomRightRadius: '0px !important',
      color: theme.colors.text.primary,
      '& > fieldset': {
        borderColor: theme.colors.divider.inputBorder.primary,
      },
      '&:hover': {
        '& > fieldset': {
          borderColor: `${theme.colors.divider.inputBorder.hover} !important`,
        },
      },
    },
    '& input:focus + fieldset': {
      borderColor: `${theme.colors.divider.inputBorder.focused} !important`,
    },
  },
}));

export default useStyles;
