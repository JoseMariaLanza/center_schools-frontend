import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { createTheme } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';
import { Icon } from '@mui/material';
import Login from './account/Login';
import logo from '../assets/images/logos/logoITF.png';

const pages = [
  {
    text: 'Home',
    route: '/home',
    key: 'home',
  },
  {
    text: 'Schools',
    route: '/schools',
    key: 'schools',
  },
  {
    text: 'History',
    route: '/history',
    key: 'history',
  },
  {
    text: 'News',
    route: '/news',
    key: 'news',
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.target.checked);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#fff',
        main: '#fff',
        dark: '#002884',
        contrastText: '#4D4D4E',
      },
    },
  });

  return (
    <AppBar theme={theme} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Icon sx={{
            display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '3rem',
          }}
          >
            <img src={logo} alt="I.T.F." />
          </Icon>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Victor Mono',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Asociación de Escuelas Center de TaeKwon-Do
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '3rem' }}>
            <img src={logo} alt="I.T.F." />
          </Icon>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            A.E.C
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
          }}
          >
            {pages.map((page) => (
              <Button
                component={NavLink}
                key={page.key}
                to={page.route}
                onClick={handleCloseNavMenu}
                style={({ isActive }) => ({
                  margin: '0',
                  padding: '0',
                  width: '5rem',
                  height: '4rem',
                  color: isActive ? '#fff' : '#545e6f',
                  background: isActive ? '#4D4D4E' : '#fff',
                  borderRadius: 0,
                })}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Login />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
