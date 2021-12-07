import React,{useContext} from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import routes from './routes';
import {Helmet} from 'react-helmet'
import ProductsProvider from './providers/ProductsProvider';
import ThemeProvider ,{ThemeContext} from './providers/ThemeProvider';
import Styles from "./data/Styles";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

const StyleTag = () => {
  const themeMode = useContext(ThemeContext);
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};

function App() {
  return (
    <ThemeProvider>
      <StyleTag />
      <div className="App" id="App">
        <NavBar />
        <ProductsProvider>
          <Routes>
            {routes.map(({path,element})=><Route key={path} path={path} element={element} />)}
          </Routes>
        </ProductsProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
