import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { addresses } from '../../config';

interface SettingInterface {
  id: string;
  title: string;
  path: string;
}

const settings: SettingInterface[] = [
  {
    id: '1',
    title: 'Афиша',
    path: addresses.posters,
  },
  {
    id: '2',
    title: 'Мои события',
    path: addresses.events,
  },
  {
    id: '3',
    title: 'Создать',
    path: addresses.add,
  },
];

const Navbar = () => {
  return (
    <Grid item xs={4}>
      <Grid
        style={{
          position: 'sticky',
          top: 50,
          backgroundColor: '#ffed00',
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Grid container justifyContent="center">
          <Typography variant="h5">Навигация</Typography>
        </Grid>
        <Grid>
          {settings.map((setting) => {
            return (
              <NavLink to={setting.path} key={setting.id}>
                <Grid>
                  <Typography>{setting.title}</Typography>
                </Grid>
              </NavLink>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
