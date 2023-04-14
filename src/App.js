import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Layout from './utils/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, purple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: '#d97f1f',
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes >
          <Route element={<Layout />}>
            <Route path={"/"} element={<HomePage />} />

          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
