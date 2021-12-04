import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function NabBar(){
    return (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo right">
             <i className="large material-icons">drag_handle</i>
            </Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><ThemeSwitcher /></li>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about us</Link></li>
                {/* <li><a href="http://ansarmirzayi.ir">creator</a></li> */}
                
            </ul>
            </div>
        </nav>

    )
}
export default NabBar;