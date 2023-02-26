import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useDispatch, useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next';
import { useJwt } from 'react-jwt';
import useForm from '../../hooks/useForm';
import { getUserData, login } from '../../../data/redux/slices/auth/thunks';
import InputForm from '../input/InputForm';

export default function Auth() {
  const { auth } = useSelector((state) => state);
  // const { t, i18n } = useTranslation();
  const { decodedToken } = useJwt(auth.data);

  const { onInputChange, formState } = useForm({
    email: '',
    password: '',
  });

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await dispatch(login(formState));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUserData(decodedToken));
  }, [decodedToken]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Login to view your school information.
            </DialogContentText>

            <InputForm messageError="Please type a valid email.">
              <TextField
                margin="dense"
                id="email"
                name="email"
                validate={{
                  type: 'email',
                  value: formState.email,
                }}
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

            <InputForm messageError="Please type your password.">
              <TextField
                margin="dense"
                id="password"
                name="password"
                validate={{
                  type: 'length',
                  value: formState.password,
                }}
                label="Password"
                type="password"
                placeholder="Write your password"
                fullWidth
                variant="standard"
                value={formState.password}
                onChange={onInputChange}
                required
              />
            </InputForm>
          </DialogContent>
          <DialogActions>
            <Button id="login-button" type="submit">
              Login
            </Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
