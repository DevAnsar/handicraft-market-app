import React, { useEffect } from "react";
// import Products from '../components/products/Products';
import { useProductsActions, useProducts } from "./../hooks/useProducts";
import ProductCard from "../components/products/ProductCard";
import IndexDescription from "../components/index/IndexDescription";
import { useQueryParam, StringParam } from "use-query-params";
import { Select, Icon, Preloader } from "react-materialize";
import { useData } from "./../providers/IndexProvider";

function ProductsPage() {
  const { categories } = useData();

  const [category, setCategory] = useQueryParam("category", StringParam);
  const [order, setOrder] = useQueryParam("order", StringParam);

  const { getProducts, loading } = useProductsActions();
  const products = useProducts();
  //   console.log("products", products);

  useEffect(() => {
    getProductsWithQuery();
  }, [category]);

  const getProductsWithQuery = () => {
    let query = ``;
    query += category !== undefined ? `?category=${category}` : "";
    getProducts(query);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <section>
      <div className="container">
        <section className="slider-box box pt-1">
          <div className="row header mb-0">
            <div className="col-5 s12 center-header mb-0 row-center start px-3">
              <span className=" text-color  active">
                {/* {title} */}
                تست
              </span>
            </div>
            <div className="col-3 product-search-category"></div>

            <div className="col-3 product-search-category">
              <Select
                icon={
                  <Icon small={true} className="text-color">
                    cloud
                  </Icon>
                }
                id="Select-15"
                multiple={false}
                options={{
                  classes: "",
                  dropdownOptions: {
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250,
                  },
                }}
                value={category}
                onChange={handleChangeCategory}
                className="text-color"
              >
                <option disabled>دسته ی خود را انتخاب کنید</option>
                {typeof categories !== undefined
                  ? categories?.map((category, index) => (
                      <option key={index} value={category.slug}>
                        {category.title}
                      </option>
                    ))
                  : ""}
              </Select>
            </div>
            <div className="col-1 ltr  ">
              {loading && (
                <Preloader active color="blue" flashing={false} size="small" />
              )}
            </div>
          </div>
          <div className="divider" />
          <div className="row slider-items">
            {products &&
              products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>

        <IndexDescription text={""} />
      </div>
    </section>
  );
}
export default ProductsPage;
