import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Toaster } from 'react-hot-toast';
import Mint from './components/Mint';
import Cards from './components/Cards';
import '@fontsource/inter';
import './global.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="main_section container">
          <BrowserRouter>
            <Routes>
              <Route
                path=':token'
                element={<Mint />}
              />
            </Routes>
          </BrowserRouter>
          <Cards />
          <Footer />
        </div>
      </ChakraProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 6000,
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
