// https://material-ui.com/components/chips/
/* React */
import React from 'react';
import PropTypes from 'prop-types';
/* Styles */
// import FaceIcon from '@material-ui/icons/Face';
import Chip from '@material-ui/core/Chip';

import useStyles from './CustomChip.styles';

const CustomChip = (props) => {
  const classes = useStyles(props);
  const { handleDelete, icon, label } = props;
  return (
    <div className={classes.root}>
      <Chip
        icon={icon}
        label={label}
        onDelete={() => handleDelete()}
        className={classes.chip}
      />
    </div>
  );
};

CustomChip.propTypes = {
  handleDelete: PropTypes.func,
  icon: PropTypes.any,
  label: PropTypes.string,
};

export default CustomChip;
