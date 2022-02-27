import { Grid, ThemeProvider } from "@material-ui/core";
import { theme } from "./MUIThemes";
import React from "react";
import { MainWindow } from "./views/containers/main-window/MainWindow";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <MainWindow />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
