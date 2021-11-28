import Home from './pages/Home';
import About from './pages/About'
import Product from './pages/Product';
import NotFound from './pages/NotFound'

const routes=[
    {
      path : "/",
      element: <Home />
    },
    {
      path : "/products/:id",
      element: <Product />
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