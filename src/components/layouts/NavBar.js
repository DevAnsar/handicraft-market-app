import { Link } from "react-router-dom";

function NabBar(){
    return (
        <nav>
            <div class="nav-wrapper">
            <Link to="/" class="brand-logo right">
             <i class="large material-icons">drag_handle</i>
            </Link>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about us</Link></li>
                <li><a href="http://ansarmirzayi.ir">creator</a></li>
            </ul>
            </div>
        </nav>

    )
}
export default NabBar;