import { Link } from "react-router-dom";
function ProductCard({id,title,body}){

    return(
        
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-content" style={{height:'200px'}}>
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
      
    )
}
export default ProductCard;