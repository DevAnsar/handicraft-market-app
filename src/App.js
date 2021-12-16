import React,{useContext} from 'react';
import {Routes , Route} from 'react-router-dom';
import {Helmet} from 'react-helmet'

//Styles
import Styles from "./data/Styles";
import './App.css';

//Components
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

//Pages
import IndexPage from './pages/IndexPage';
import About from './pages/About'
import NotFound from './pages/NotFound'
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

//Providers
import ThemeProvider ,{ThemeContext} from './providers/ThemeProvider';
import ProductsProvider  from './providers/ProductsProvider';

//Library
import {Toaster} from 'react-hot-toast';
import IndexProvider from './providers/IndexProvider';

const StyleTag = () => {
  const themeMode = useContext(ThemeContext);
  {console.log(themeMode)}
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};



function App() {
  return (
    <ThemeProvider>
      <IndexProvider>
        <ProductsProvider>
          <StyleTag />
          <div className="App" id="App">
            <NavBar />

              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                {/* {routes.map(({path,element})=><Route key={path} path={path} element={element} />)} */}
              </Routes>
        
            <Footer />

            <Toaster   position="bottom-right"
                reverseOrder={false} />

          </div>
        </ProductsProvider>
      </IndexProvider>
    </ThemeProvider>
  );
}

export default App;
