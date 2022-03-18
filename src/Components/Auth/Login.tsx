import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '648063214240-4lifiv1ktal20vee989gin1agn66d9fn.apps.googleusercontent.com';

const Login: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLoginSuccess = (res: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log('Login Success:', res);
    setIsLogged(true);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLoginFailure = (res: any) => {
    console.log('Login Failed:', res);
  };
  const onSignoutSuccess = () => {
    setIsLogged(false);
  };

  return (
    <Grid container style={{ background: '#fff300' }}>
      <Typography variant="h3" component="h1" color=" #001220">
        Афиша Ogetto
      </Typography>

      {!isLogged ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}
      {isLogged ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        />
      ) : null}
    </Grid>
  );
};

export default Login;
