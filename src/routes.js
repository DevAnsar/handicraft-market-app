import Index from './pages/index/Index';
import Products from './pages/Products';
import Product from './pages/Product';
import CategoryProducts from './pages/CategoryProducts';
import About from './pages/About'
import NotFound from './pages/NotFound'

const routes=[
    {
      path : "/",
      element: <Index />
    },
    {
      path : "/categories/:slug",
      element: <CategoryProducts />
    },
    {
      path : "/products/:category-slug",
      element: <Products />
    }
    ,
    {
      path : "/product/:product-slug",
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