import { Box, ThemeProvider } from "@material-ui/core";
import { theme } from "./MUIThemes";
import React from "react";
import { MainWindow } from "./views/containers/main-window/MainWindow";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainWindow />
      </ThemeProvider>
    </div>
  );
}

export default App;
