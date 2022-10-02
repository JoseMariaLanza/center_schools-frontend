import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login, profile } from '../../../data/redux/slices/auth/thunks';
import dashboard from '../../../data/redux/slices/dashboard/thunks';
import { logout } from '../../../data/redux/slices/auth/authSlice';
import InputForm from '../input/InputForm';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function FormDialog() {
  const { onInputChange, formState } = useForm({
    email: '',
    password: '',
  });

  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector((state) => state.auth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formState));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  // const theme = createTheme({
  //     palette: {
  //         primary: {
  //             light: '#fff',
  //             main: 'white',
  //             dark: '#002884',
  //             contrastText: '#4D4D4E',
  //         }
  //     },
  // });

  return (
    <div>
      {!isLoggedIn
        ? (
          <>
            <Button
              id="login"
              sx={{
                borderRadius: '100%',
                color: '#4D4D4E',
              }}
              onClick={handleClickOpen}
            >
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: '3rem',
                  borderRadius: '100%',
                  color: 'inherit',
                }}
              />
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <form onSubmit={onSubmit}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Login to view your school information.
                  </DialogContentText>

                  <InputForm
                    messageError="Please type a valid email."
                  >
                    <TextField
                      margin="dense"
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="example@email.com"
                      fullWidth
                      variant="standard"
                      required
                      value={formState.email}
                      onChange={onInputChange}
                    />
                  </InputForm>

                  <InputForm>
                    <TextField
                      margin="dense"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder="Write your password"
                      fullWidth
                      variant="standard"
                      value={formState.password}
                      required
                      onChange={onInputChange}
                    />
                  </InputForm>

                </DialogContent>
                <DialogActions>
                  <Button id="login-button" type="submit">Login</Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
              </form>
            </Dialog>
          </>
        )
        : (
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
        )}
    </div>
  );
}
