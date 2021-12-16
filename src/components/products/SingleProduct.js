import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "react-materialize";
import { toast } from "react-hot-toast";

function SingleProduct({ product }) {
  let navigate = useNavigate();
  const addToBasket = () => {
    toast.success("بخش ثبت سفارش در حال توسعه میباشد");
  };

  return (
    <section className="card box text-color product-box mt-3">
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-5 product-gallery-box">
          <div className="product-image top-box"></div>
        </div>

        <div className="col-12 col-md-6 col-lg-7 product-details-box">
          <p className="text-color product-title">{product?.title}</p>
          <p className="text-color-less product-description">
            {product?.description}
          </p>

          <div className=" product-detailes">
            <p className="text-color">
              دسته ی محصول :
              <Link
                to={`/products?category=${product?.category?.slug}`}
                className="text-color-less ml-2"
              >
                {product?.category?.title}
              </Link>
            </p>

            <p className="text-color">
              قیمت سفارش :
              <span className="text-color-less ml-2">
                {product?.price_txt}
                تومان
              </span>
            </p>
          </div>
          <div className=" product-order">
            <Button
              onClick={addToBasket}
              node="button"
              style={{
                marginRight: "5px",
              }}
              className="text-color btn-1"
              waves="light"
            >
              <Icon right>add_shopping_cart</Icon>
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
