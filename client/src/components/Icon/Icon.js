/* React */
import React from 'react';
import PropTypes from 'prop-types';
/* Styles */
/* MUI - Icons */
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ChatIcon from '@material-ui/icons/Chat';
import DevicesIcon from '@material-ui/icons/Devices';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import WcIcon from '@material-ui/icons/Wc';

import useStyles from './Icon.styles';

const icons = {
  avatar: AccountCircleIcon,
  calendar: EventIcon,
  chat: ChatIcon,
  creditCard: PaymentIcon,
  default: SentimentVeryDissatisfiedIcon,
  email: MailOutlineIcon,
  help: LiveHelpIcon,
  info: DevicesIcon,
  lightsOff: Brightness4Icon,
  lightsOn: Brightness7Icon,
  list: ListAltIcon,
  login: AccountCircleOutlinedIcon,
  logout: ExitToAppIcon,
  menu: MenuIcon,
  register: PersonAddOutlinedIcon,
  restroom: WcIcon,
};

const Icon = (props) => {
  const classes = useStyles(props);
  const { name } = props;

  const DynamicIcon = icons[name || 'default'];

  return <DynamicIcon className={classes.dynamicIcon} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Icon;
