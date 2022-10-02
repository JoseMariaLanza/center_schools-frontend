import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

import { useDispatch, useSelector } from 'react-redux';
import { profile } from '../../../data/redux/slices/auth/thunks';
import dashboard from '../../../data/redux/slices/dashboard/thunks';
import { logout } from '../../../data/redux/slices/auth/authSlice';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AuthMenu() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickMenuItem = (setting) => {
    switch (setting) {
      case 'Profile':
        dispatch(profile(token));
        break;
      case 'Account':
        // Account
        break;
      case 'Logout':
        dispatch(logout(token));
        break;
      default:
        dispatch(dashboard(token));
        break;
    }
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            component={NavLink}
            to={setting.toLowerCase()}
            onClick={() => handleClickMenuItem(setting)}
          >
            <Typography textAlign="center">
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default AuthMenu;
