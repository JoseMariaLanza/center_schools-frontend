/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { register } from '../../../data/redux/slices/auth/thunks';
import InputForm from '../input/InputForm';

export default function Auth() {
  const { onInputChange, formState } = useForm({
    email: '',
    password: '',
    username: '',
    passwordConfirmation: '',
  });

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (formState.passwordConfirmation === formState.password) {
      dispatch(register(formState));
      setOpen(false);
    } else {
      console.log('Password not equals.');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button id="register" sx={{ color: '#4D4D4E' }} onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={onSubmit}>
          <DialogTitle>Register</DialogTitle>
          <DialogContent>
            <DialogContentText>Create an account.</DialogContentText>

            <InputForm messageError="Please type a user name.">
              <TextField
                margin="dense"
                id="username"
                name="username"
                validate={{
                  type: 'username',
                  value: formState.username,
                }}
                label="User name"
                placeholder="JoseMariaLanza"
                fullWidth
                variant="standard"
                required
                value={formState.username}
                onChange={onInputChange}
              />
            </InputForm>

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

            <InputForm messageError="Please repeat your password">
              <TextField
                margin="dense"
                id="passwordConfirmation"
                name="passwordConfirmation"
                validate={{
                  type: 'passwordConfirmation',
                  value: formState.passwordConfirmation,
                  compareWith: formState.password,
                }}
                label="Password confirmation"
                type="password"
                placeholder="Repeat your password"
                fullWidth
                variant="standard"
                value={formState.passwordConfirmation}
                onChange={onInputChange}
                required
              />
            </InputForm>
          </DialogContent>
          <DialogActions>
            <Button id="login-button" type="submit">
              Register
            </Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
