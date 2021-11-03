import React, { FC, KeyboardEvent, MouseEvent } from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface ICustomAppBarProps {
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}

const CustomAppBar: FC<ICustomAppBarProps> = (props) => {
  const { toggleDrawer } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recursos Para Estudiar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
