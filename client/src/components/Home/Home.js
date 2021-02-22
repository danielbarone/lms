/* React */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Grid,
  Typography,
} from '@material-ui/core';

import { clearSession } from '../../services/Session/actions';
import { deleteSession } from '../../utils/mutations';
import { Icon } from '..';
import useStyles from './Home.styles';
import libImg from '../../assets/img/libraryImg.svg';

const Home = (props) => {
  const classes = useStyles(props);
  const { toggle } = props;

  const [deleteUserSession] = useMutation(deleteSession);
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

  return (
    <div className={classes.root}>
      <Grid
        container
      >
        <Grid
          container
          direction='column'
          item
          justify='center'
          xs={12}
          sm={12}
          md={6}
        >
          <Grid item>
            <Typography className={classes.title}>
              {session ? `Welcome back, ${session.user.firstName}!` : 'Library Management System'}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.subtitle}>
              {session ? (
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...'
              ) : (
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
              )}
            </Typography>
          </Grid>
          {session ? (
            <Grid
            container
            direction='row'
            item
            spacing={1}
          >
            <Grid item>
              <Button
                className={classes.btn1}
                variant='contained'
                type='submit'
                startIcon={
                  <Icon
                    color='white'
                    name='logout'
                  />
                }
                onClick={() => {
                  dispatch(clearSession());
                  deleteUserSession({ variables: { sessionId: session.id } });
                }}
              >
                Sign me out
              </Button>
            </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction='row'
              item
              spacing={1}
            >
              <Grid item>
                <Button
                  className={classes.btn1}
                  variant='contained'
                  type='submit'
                  endIcon={
                    <Icon
                      color='white'
                      name='forward'
                    />
                  }
                  onClick={() => toggle('register')}
                >
                  Start for free
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.btn2}
                  variant='contained'
                  type='submit'
                  onClick={() => toggle('login')}
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid
          alignItems='center'
          container
          direction='column'
          item
          justify='center'
          xs={12}
          md
        >
          <Grid item>
            <img className={classes.libImg} src={libImg} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  session: PropTypes.object,
  toggle: PropTypes.func,
};

export default Home;
