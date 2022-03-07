import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "rgba(66,121,154,0.84)",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontFamily: "Permanent Marker",
      textTransform: "uppercase",
      textDecorationThickness: "5px",
      textDecorationLine: "underline",
      "&:not(:first-child)": {
        paddingLeft: "1vw",
      },
    },

    h2: {
      fontFamily: "Hubballi",
      textTransform: "uppercase",
      textDecorationThickness: "5px",
      textDecorationLine: "underline",
      "&:not(:first-child)": {
        paddingLeft: "1vw",
      },
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #10A896 30%, #A9DDD6 90%)",
        border: 0,
        borderRadius: 15,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
        "&:hover": {
          background: "linear-gradient(45deg, #0B8375 30%, #8AD0C7 90%)",
        },
      },
    },
  },
});
