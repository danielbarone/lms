/* React */
import React from 'react';
import PropTypes from 'prop-types';
/* Styles */
/* MUI - Icons */
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ChatIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
import DevicesIcon from '@material-ui/icons/Devices';
import EditIcon from '@material-ui/icons/Edit';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuIcon from '@material-ui/icons/Menu';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WcIcon from '@material-ui/icons/Wc';

import useStyles from './Icon.styles';

const icons = {
  add: PlaylistAddIcon,
  admin: SupervisorAccountIcon,
  avatar: AccountCircleIcon,
  book: MenuBookIcon,
  books: LibraryBooksIcon,
  calendar: EventIcon,
  chat: ChatIcon,
  creditCard: PaymentIcon,
  delete: DeleteIcon,
  default: SentimentVeryDissatisfiedIcon,
  edit: EditIcon,
  email: MailOutlineIcon,
  face: FaceIcon,
  forward: ArrowForwardIosIcon,
  help: LiveHelpIcon,
  info: DevicesIcon,
  library: AccountBalanceIcon,
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
