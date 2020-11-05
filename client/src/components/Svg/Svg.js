/* React */
import React from 'react';
import PropTypes from 'prop-types';

import { constants } from '../../assets';
import useStyles from './Svg.styles';

/*
<SvgLogo app='tinder' width='160' />
<SvgLogo app='hinge' width='104' height='40' />
<SvgLogo app='bumble' width='210' />
*/

const SvgLogo = (props) => {
  const classes = useStyles(props);
  const {
    app,
    height,
    width,
  } = props;
  const {
    color,
    fillrule,
    pathd,
    viewbox,
  } = constants.appLogos[app];

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewbox}
      className={classes.svg}
    >
      {typeof pathd === 'string' ? (
        <path
          fill={color}
          fillRule={fillrule}
          d={pathd}
        />
      ) : (
        <g fill={color} fillRule={fillrule}>
          <path
            fill={color}
            d={pathd[0]}
          />
          <path
            fill={color}
            d={pathd[1]}
          />
        </g>
      )}
    </svg>
  );
};

SvgLogo.propTypes = {
  app: PropTypes.string,
  color: PropTypes.string,
  fillrule: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default SvgLogo;
