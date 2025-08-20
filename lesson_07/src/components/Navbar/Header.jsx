import { NavLink } from "react-router-dom";
import { frontRoutes } from "../../routes/frontRoutes";
// import { menu } from "../../utils/menu";

function Header() {
   return (
      <header className="header">
         <div className="header__container">
            <h1 className="header__title">Chanel</h1>

            <nav className="nav">
               <div className="nav__body">
                  <ul className="nav__items">
                     <li className="nav__link">
                        <NavLink
                           to={frontRoutes.navigate.home}
                           className={({ isActive }) => `nav__a ${isActive ? "active" : ""}`}
                        >
                           Home
                        </NavLink>
                     </li>
                     <li className="nav__link">
                        <NavLink
                           to={frontRoutes.navigate.about}
                           className={({ isActive }) => `nav__a ${isActive ? "active" : ""}`}
                        >
                           About
                        </NavLink>
                     </li>
                     <li className="nav__link">
                        <NavLink
                           to={frontRoutes.navigate.products.index}
                           className={({ isActive }) => `nav__a ${isActive ? "active" : ""}`}
                        >
                           Products
                        </NavLink>
                     </li>
                     <li className="nav__link">
                        <NavLink
                           to={frontRoutes.navigate.contacts}
                           className={({ isActive }) => `nav__a ${isActive ? "active" : ""}`}
                        >
                           Contact
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </nav>
            <button className="header__menu-icon icon-menu" type="button" aria-label="open menu"><span></span></button>
         </div>
      </header>
   );
}

export default Header;