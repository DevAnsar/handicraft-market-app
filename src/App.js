import React,{useContext} from 'react';
import {Routes , Route, useNavigate, useLocation} from 'react-router-dom';
import {Helmet} from 'react-helmet'
import { QueryParamProvider } from "use-query-params";
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
import ScrollToTop from './components/layouts/ScroolToTop';

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
      <QueryParamProvider ReactRouterRoute={RouteAdapter}>
      <IndexProvider>
        <ProductsProvider>
          <StyleTag />
          <div className="App" id="App">
            <ScrollToTop />
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
      </QueryParamProvider>
    </ThemeProvider>
  );
}

/**
 * This is the main thing you need to use to adapt the react-router v6
 * API to what use-query-params expects.
 *
 * Pass this as the `ReactRouterRoute` prop to QueryParamProvider.
 */
 const RouteAdapter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
};

export default App;
