import { Link } from "react-router-dom";
function ProductCard({id,title,body}){

    return(
        
        <div className="col s12 m4 l4">
          <div className="card box">
            <div className="card-content " style={{height:'200px',overflow:'hidden'}}>
            <span className="card-title text-color">{title}</span>
              <p className='text-color'>{body}</p>
            </div>
            <div className="card-action ">
              <Link to={`/products/${id}`}>
                Go To Product
              </Link>
            </div>
          </div>
        </div>
      
    )
}
export default ProductCard;