import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formModalContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '350px',
    padding: '1em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingBottom: '4em',
    backgroundColor: theme.colors.background.primary,
  },
  logInInput: {
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
  passwordInput: {
    marginBottom: '1em',
    '& > label': {
      color: theme.colors.text.input.label.primary,
    },
    '& label.Mui-focused': {
      color: `${theme.colors.text.input.label.focused} !important`,
    },
    '& > div': {
      borderRadius: '0px !important',
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
  btnDivider: {
    marginTop: '2em',
    marginBottom: '2em',
    backgroundColor: theme.colors.divider.secondary,
  },
  signUpButton: theme.buttons.outlined,
  logInButton: {
    ...theme.buttons.primary,
    borderRadius: 0,
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  authError: {
    textAlign: 'center',
    color: theme.colors.text.error,
    minHeight: '1.5em',
    marginBottom: '0.5em',
  },
  welcomeMsg: {
    textAlign: 'center',
    color: theme.colors.text.primary,
    marginTop: '0.75em',
  },
}));

export default useStyles;
