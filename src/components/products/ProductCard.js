import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
function ProductCard({product}){

    return(
        
      <div className="slider-item-parent col-6 col-md-4 col-lg-3">
      <div key={product.title + Math.random()} className="carousel-card top-box z-depth-2 slider-item">
          <Link to={`/product/${product.id}`} className="card-content text-color carousel-card-content">
              <div className="carousel-image z-depth-2">
                  <Image draggable={false}
                   src={product.src} />
              </div>
              <div className="carousel-text-content text-color">
                  <div className="title top-box-text-color">
                   {product.title}
                  </div>
                  
                  <div className="cost top-box-text-color-less">
                      <span>
                      {
                          `
                          یک 
                          میلیون و
                           200
                          هزار تومان
                          `
                      }
                      </span>
                 
                  </div>
              </div>
          
          </Link>
      </div>
  </div>
      
    )
}
export default ProductCard;