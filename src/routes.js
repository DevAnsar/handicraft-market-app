import Home from './pages/Home';
import About from './pages/About'
import SingleProduct from './components/products/SingleProduct';
import NotFound from './pages/NotFound'

const routes=[
    {
      path : "/",
      element: <Home />
    },
    {
      path : "/products/:id",
      element: <SingleProduct />
    },
    {
      path :"/about",
      element: <About />
    },
    {
      path :"*",
      element: <NotFound />
    }
  ];
export default routes;