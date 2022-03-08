import { ThemeProvider } from "@material-ui/core";
import { theme } from "./MUIThemes";
import React from "react";
import { MainWindow } from "./views/containers/main-window/MainWindow";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={1}>
          <MainWindow />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
