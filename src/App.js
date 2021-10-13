import './App.css';
import { useState } from 'react';
import Header from "./components/header";
import Main from './components/main';
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    // marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));


function App() {

  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root} >
      <CssBaseline />
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
    <div className="App">
        <Main/>
    </div>
    </div>
  </ThemeProvider>
  );
}

export default App;
