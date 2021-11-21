import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Home } from './pages/Home'
import { GameList } from "./pages/GameList";
import { GameDetails } from "./pages/GameDetails";
import { GameNews } from "./pages/GameNews";


const theme = createTheme({
  palette: {
    devinhouseColor: {
      main: "#FFF",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          margin: 0;
        }
      `,
    },
  },
});

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/:game" element={<GameDetails />} />
          <Route path="/news" element={<GameNews />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'))