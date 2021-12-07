import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function NabBar(){
    return (
        <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="left hide-on-med-and-down">
              <li className="row-center text-color">
                  <ThemeSwitcher />
                  حالت تاریک
              </li>
              <li><a href="badges.html">Components</a></li>
            </ul>
          </div>
        </nav>
      </div>

    )
}
export default NabBar;