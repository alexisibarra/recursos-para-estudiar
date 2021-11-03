import React, { FC, KeyboardEvent, MouseEvent } from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface ICustomDrawerProps {
  drawerIsOpened: boolean;
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
  changetab: (tab: number) => () => void;
  activeTab: number;
}

const CustomDrawer: FC<ICustomDrawerProps> = (props) => {
  const { activeTab, drawerIsOpened, toggleDrawer, changetab } = props;

  return (
    <Drawer anchor="left" open={drawerIsOpened} onClose={toggleDrawer(false)}>
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem>
            <ListItemButton selected={activeTab === 0} onClick={changetab(0)}>
              <ListItemText primary="Estudios Sociales - Historia de Chile" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={activeTab === 1} onClick={changetab(1)}>
              <ListItemText primary="Estudios Sociales - Historia Universal" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={activeTab === 2} onClick={changetab(2)}>
              <ListItemText primary="Ciencias Naturales" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
