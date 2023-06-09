import * as React from 'react';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';


const HeaderBar=({open,handleDrawerOpen})=> {
  return (
    <AppBar position="fixed" open={open}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
export default HeaderBar;
