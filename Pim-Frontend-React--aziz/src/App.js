import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Layout from './utils/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import { createContext, useState } from 'react';


export const UserContext = createContext()


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8d00',
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  const [user, setUser] = useState("Aziz");


  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>

        <ThemeProvider theme={theme}>
          <Routes >
            <Route element={<Layout />}>
              <Route path={"/"} element={<HomePage />} />

            </Route>
          </Routes>
        </ThemeProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
