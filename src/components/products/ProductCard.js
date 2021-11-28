import { Link } from "react-router-dom";
function ProductCard({id,title,body}){

    return(
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
            <span className="card-title">{title}</span>
              <p>{body}</p>
            </div>
            <div className="card-action">
              <Link to={`/products/${id}`}>
                Go To Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    )
}
export default ProductCard;