import React, { useState, useEffect } from 'react';
import AppBar  from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar  from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button  from '@mui/material/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { classes }  = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/login');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
      <Typography variant='h2' >Wits</Typography>
      </Link>
     <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.username} src={user?.result.imageUrl}>{user?.result.username.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.username}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/login" variant="contained" color="primary">Login or sign in </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;