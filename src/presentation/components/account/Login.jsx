import React, { useState, useEffect } from 'react';
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
// import { createTheme } from '@mui/material/styles';

// import { LoginService } from '../../../domain/services/auth/LoginService';

// import { store } from '../../../data/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { login, profile } from '../../../data/redux/slices/auth/thunks';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { isLoggedIn, token } = useSelector(state => state.auth);

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        dispatch(login({ email, password }))
    }, []);

    const handleLogin = async () => {
        // await LoginService(email, password);
        dispatch(login({ email, password }));
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
                dispatch(profile(token))
                break;
            case 'Account':
                // Account
                break;
            case 'Logout':
                // Logout
                break;
            default:
                // Dashboard
                break;
        }
        handleCloseUserMenu()
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
            {!isLoggedIn ?
                <>
                    <Button
                        sx={{
                            borderRadius: '100%',
                            color: '#4D4D4E'
                        }}
                        onClick={handleClickOpen}
                    >
                        <AccountCircleOutlinedIcon
                            sx={{
                                fontSize: '3rem',
                                borderRadius: '100%',
                                color: 'inherit'
                            }}
                        />
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Login</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Login to view your school information.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleLogin}>Login</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </> :
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
                            <MenuItem key={setting}
                                onClick={() => handleClickMenuItem(setting)}
                            >
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            }
        </div>
    );
}
