import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Home } from './pages/Home'
import { GameList } from "./pages/GameList";
import { GameDetails } from "./pages/GameDetails";

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
          <Route path="/game" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'))