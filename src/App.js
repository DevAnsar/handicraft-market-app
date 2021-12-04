import React,{useContext} from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import routes from './routes';
import {Helmet} from 'react-helmet'
import ProductsProvider from './providers/ProductsProvider';
import ThemeProvider ,{ThemeContext} from './providers/ThemeProvider';
import Styles from "./data/Styles";


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
      <div className="App">
        <ProductsProvider>
          <Routes>
            {routes.map(route=><Route key={route.path} path={route.path} element={route.element} />)}
          </Routes>
        </ProductsProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
