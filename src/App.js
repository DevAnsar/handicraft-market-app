import './App.css';
import {Routes , Route} from 'react-router-dom';
import routes from './routes';
import ProductsProvider from './providers/ProductsProvider';


function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Routes>
          {routes.map(route=><Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
      </ProductsProvider>
    </div>
  );
}

export default App;
