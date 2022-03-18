import { Grid } from '@mui/material';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import AddNewPoster from '../Components/AddNewPoster/AddNewPoster';
import Login from '../Components/Auth/Login';
import Evenets from '../Components/MyEvents/Events';
import Navbar from '../Components/Navbar/Navbar';
import Posters from '../Components/Poster/Posters';
import { addresses } from '../config';

const AppRouter = () => {
  const isAuth = true;
  return (
    <Grid>
      {isAuth ? (
        <Grid container>
          <Navbar />
          <Grid xs>
            <Routes>
              <Route element={<Posters />} path={addresses.posters} />
              <Route element={<Evenets />} path={addresses.events} />
              <Route element={<AddNewPoster />} path={addresses.add} />
              <Route element={<Navigate to="/posters" />} path="*" />
            </Routes>
          </Grid>
        </Grid>
      ) : (
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Navigate to="/login" />} path="*" />
        </Routes>
      )}
    </Grid>
  );
};

export default AppRouter;
