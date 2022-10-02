import React from 'react';
import { useSelector } from 'react-redux';
import LoginDialog from './LoginDialog';
import AuthMenu from './AuthMenu';

export default function Auth() {
  const { isLoggedIn } = useSelector((state) => state.auth);

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
          <LoginDialog />
        )
        : (
          <AuthMenu />
        )}
    </div>
  );
}
