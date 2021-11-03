import React, { FC, KeyboardEvent, MouseEvent, useState } from "react";

import { Container } from "@mui/material";

import HistoriaDeChile from "./Views/HistoriaDeChile/HistoriaDeChile";
import CustomDrawer from "./Components/CustomDrawer";
import CustomAppBar from "./Components/CustomAppBar";

const App: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changetab: any = (tab: number) => () => {
    setActiveTab(tab);
  };

  const [drawerIsOpened, setDrawerIsOpened] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerIsOpened(open);
    };

  return (
    <>
      <CustomAppBar toggleDrawer={toggleDrawer} />

      <CustomDrawer
        activeTab={activeTab}
        drawerIsOpened={drawerIsOpened}
        toggleDrawer={toggleDrawer}
        changetab={changetab}
      />

      <Container maxWidth="lg">
        {activeTab === 0 && <HistoriaDeChile />}

        {activeTab === 1 && <p>Historia Universal</p>}

        {activeTab === 2 && <p>Ciencias Naturales</p>}
      </Container>
    </>
  );
};

export default App;
